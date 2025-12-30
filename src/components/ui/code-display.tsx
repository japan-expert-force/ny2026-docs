"use client";

import {
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from "@shikijs/transformers";
import { CheckIcon, CopyIcon, Network } from "lucide-react";
import { useEffect, useState } from "react";
import type { IconType } from "react-icons";
import {
  SiJavascript,
  SiJson,
  SiMarkdown,
  SiMdx,
  SiPython,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import { type BundledLanguage, codeToHtml } from "shiki";
import { Button } from "@/components/ui/button";
import { Mermaid } from "@/components/ui/mermaid";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

const filenameIconMap: Record<string, IconType> = {
  "*.js": SiJavascript,
  "*.json": SiJson,
  "*.jsx": SiReact,
  "*.tsx": SiReact,
  "*.ts": SiTypescript,
  "*.md": SiMarkdown,
  "*.mdx": SiMdx,
  "*.mermaid": Network,
  "*.py": SiPython,
};

const getIcon = (filename: string): IconType | undefined => {
  const entry = Object.entries(filenameIconMap).find(([pattern]) => {
    const regex = new RegExp(
      `^${pattern.replace(/\\/g, "\\\\").replace(/\./g, "\\.").replace(/\*/g, ".*")}$`,
    );
    return regex.test(filename);
  });
  return entry?.[1];
};

const highlight = async (
  code: string,
  language?: BundledLanguage,
): Promise<string> =>
  codeToHtml(code, {
    lang: language ?? "typescript",
    themes: {
      light: "github-light",
      dark: "github-dark-default",
    },
    transformers: [
      transformerNotationDiff({ matchAlgorithm: "v3" }),
      transformerNotationHighlight({ matchAlgorithm: "v3" }),
      transformerNotationWordHighlight({ matchAlgorithm: "v3" }),
    ],
  });

interface CodeDisplayProps {
  filename: string;
  code: string;
  language?: BundledLanguage | "mermaid";
}

export function CodeDisplay({ filename, code, language }: CodeDisplayProps) {
  const [html, setHtml] = useState<string>("");
  const [isCopied, setIsCopied] = useState(false);
  const isMermaid = language === "mermaid" || filename.endsWith(".mermaid");
  const Icon = getIcon(filename);

  useEffect(() => {
    if (!isMermaid) {
      highlight(code, language as BundledLanguage)
        .then(setHtml)
        .catch(console.error);
    }
  }, [code, language, isMermaid]);

  const copyToClipboard = () => {
    if (typeof window === "undefined" || !navigator.clipboard.writeText) {
      return;
    }
    navigator.clipboard.writeText(code).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    <div className="flex w-full flex-col overflow-hidden rounded-md border">
      <div className="flex items-center border-b bg-secondary p-1">
        <div className="flex items-center gap-2 bg-secondary px-4 py-1.5 text-muted-foreground text-xs">
          {Icon && <Icon className="h-4 w-4 shrink-0" />}
          <span className="flex-1 truncate">{filename}</span>
        </div>
        <Button
          className="ml-auto shrink-0"
          onClick={copyToClipboard}
          size="icon"
          variant="ghost"
        >
          {isCopied ? (
            <CheckIcon className="text-muted-foreground" size={14} />
          ) : (
            <CopyIcon className="text-muted-foreground" size={14} />
          )}
        </Button>
      </div>
      <ScrollArea className="w-full">
        <div className="max-h-96 w-full">
          {isMermaid ? (
            <Mermaid chart={code} className="p-4" />
          ) : (
            <div
              className={cn(
                "bg-background text-sm",
                "[&_pre]:py-4",
                "[&_.shiki]:!bg-transparent",
                "[&_code]:w-full",
                "[&_code]:grid",
                "[&_.line]:px-4",
                "[&_.line]:w-full",
                "dark:[&_.shiki]:!text-[var(--shiki-dark)]",
                "dark:[&_.shiki_span]:!text-[var(--shiki-dark)]",
              )}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          )}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
