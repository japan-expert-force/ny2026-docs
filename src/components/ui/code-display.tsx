"use client";

import {
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from "@shikijs/transformers";
import type { Element } from "hast";
import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import {
  CheckIcon,
  ChevronDown,
  ChevronUp,
  CopyIcon,
  Network,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
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
import { type BundledLanguage, codeToHast } from "shiki";
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

const languageIconMap: Record<string, IconType> = {
  javascript: SiJavascript,
  typescript: SiTypescript,
  python: SiPython,
  json: SiJson,
  markdown: SiMarkdown,
  mdx: SiMdx,
  jsx: SiReact,
  tsx: SiReact,
  mermaid: Network,
};

const getIconFromFilename = (filename: string): IconType | undefined => {
  const entry = Object.entries(filenameIconMap).find(([pattern]) => {
    const regex = new RegExp(
      `^${pattern.replace(/\\/g, "\\\\").replace(/\./g, "\\.").replace(/\*/g, ".*")}$`,
    );
    return regex.test(filename);
  });
  return entry?.[1];
};

const getIcon = (
  language: string | undefined,
  filename: string,
): IconType | undefined => {
  // language が指定されていればそれを優先、なければ filename から判断
  return language ? languageIconMap[language] : getIconFromFilename(filename);
};

const highlight = async (
  code: string,
  language?: BundledLanguage,
): Promise<React.ReactElement> => {
  const hast = await codeToHast(code, {
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

  return toJsxRuntime(hast as Element, {
    Fragment,
    jsx,
    jsxs,
  }) as React.ReactElement;
};

type DisplayMode = "scroll" | "full";

interface CodeDisplayProps {
  filename: string;
  code: string;
  language?: BundledLanguage | "mermaid";
  /**
   * 表示モード
   * - "scroll": スクロール可能な固定高さ（デフォルト）
   * - "full": 全体を表示（内側のコンテンツの縦幅分）
   */
  displayMode?: DisplayMode;
  /**
   * スクロールモード時の最大高さ（px単位、デフォルト: 384）
   */
  maxHeight?: number;
  /**
   * 展開/最小化ボタンを表示するか
   */
  showToggle?: boolean;
  /**
   * 初期状態で展開されているか（showToggleがtrueの場合のみ有効）
   */
  defaultExpanded?: boolean;
}

export function CodeDisplay({
  filename,
  code,
  language,
  displayMode = "scroll",
  maxHeight = 384,
  showToggle = false,
  defaultExpanded = true,
}: CodeDisplayProps) {
  const [highlightedCode, setHighlightedCode] =
    useState<React.ReactElement | null>(null);
  const [isCopied, setIsCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  // language が指定されていればそれを優先、なければ filename から判断
  const isMermaid = language
    ? language === "mermaid"
    : filename.endsWith(".mermaid");
  const Icon = getIcon(language, filename);

  useEffect(() => {
    if (!isMermaid) {
      highlight(code, language as BundledLanguage)
        .then(setHighlightedCode)
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
        <div className="flex items-center gap-2 bg-secondary px-2 py-1.5 text-muted-foreground text-xs">
          {Icon && <Icon className="h-4 w-4 shrink-0" />}
          <span className="flex-1 truncate">{filename}</span>
        </div>
        <div className="ml-auto flex shrink-0 gap-1">
          <Button onClick={copyToClipboard} size="icon" variant="ghost">
            {isCopied ? (
              <CheckIcon className="text-muted-foreground" size={14} />
            ) : (
              <CopyIcon className="text-muted-foreground" size={14} />
            )}
          </Button>
          {showToggle && (
            <Button
              onClick={() => setIsExpanded(!isExpanded)}
              size="icon"
              variant="ghost"
            >
              {isExpanded ? (
                <ChevronUp className="text-muted-foreground" size={14} />
              ) : (
                <ChevronDown className="text-muted-foreground" size={14} />
              )}
            </Button>
          )}
        </div>
      </div>
      {showToggle && !isExpanded ? null : displayMode === "full" ? (
        <div className="w-full">
          {isMermaid ? (
            <Mermaid chart={code} className="p-4" />
          ) : (
            <div
              className={cn(
                "bg-background text-sm",
                "[&_pre]:py-4",
                "[&_.shiki]:bg-transparent!",
                "[&_code]:w-full",
                "[&_code]:grid",
                "[&_.line]:px-4",
                "[&_.line]:w-full",
                "dark:[&_.shiki]:text-(--shiki-dark)!",
                "dark:[&_.shiki_span]:text-(--shiki-dark)!",
              )}
            >
              {highlightedCode}
            </div>
          )}
        </div>
      ) : (
        <ScrollArea className="w-full">
          <div
            className="w-full"
            style={{
              maxHeight: `${maxHeight}px`,
            }}
          >
            {isMermaid ? (
              <Mermaid chart={code} className="p-4" />
            ) : (
              <div
                className={cn(
                  "bg-background text-sm",
                  "[&_pre]:py-4",
                  "[&_.shiki]:bg-transparent!",
                  "[&_code]:w-full",
                  "[&_code]:grid",
                  "[&_.line]:px-4",
                  "[&_.line]:w-full",
                  "dark:[&_.shiki]:text-(--shiki-dark)!",
                  "dark:[&_.shiki_span]:text-(--shiki-dark)!",
                )}
              >
                {highlightedCode}
              </div>
            )}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      )}
    </div>
  );
}
