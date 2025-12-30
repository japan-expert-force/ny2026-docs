import { ArrowLeft, ExternalLink, Tag } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CodeDisplay } from "@/components/ui/code-display";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Timeline,
  TimelineDescription,
  TimelineItem,
  TimelineTitle,
} from "@/components/ui/timeline";
import { updates } from "@/lib/updates";

const MarkdownContent = ({ children }: { children: string }) => (
  <ReactMarkdown
    remarkPlugins={[remarkGfm]}
    components={{
      p: ({ children }) => (
        <span className="leading-relaxed text-foreground">{children}</span>
      ),
      strong: ({ children }) => (
        <strong className="font-semibold">{children}</strong>
      ),
      em: ({ children }) => <em className="italic">{children}</em>,
      code: ({ children }) => (
        <code className="rounded bg-muted px-1 py-0.5 font-mono text-sm">
          {children}
        </code>
      ),
      ul: ({ children }) => (
        <ul className="ml-6 space-y-1 list-disc">{children}</ul>
      ),
      ol: ({ children }) => (
        <ol className="ml-6 space-y-1 list-decimal">{children}</ol>
      ),
      li: ({ children }) => (
        <li className="leading-relaxed text-foreground">{children}</li>
      ),
    }}
  >
    {children}
  </ReactMarkdown>
);

export function generateStaticParams() {
  return updates.map((update) => ({
    version: update.version,
  }));
}

interface PageProps {
  params: Promise<{
    version: string;
  }>;
}

export default async function UpdateDetailPage({ params }: PageProps) {
  const { version } = await params;
  const update = updates.find((u) => u.version === version);

  if (!update) {
    notFound();
  }

  return (
    <ScrollArea className="h-full">
      <div className="container mx-auto max-w-4xl space-y-8 py-8">
        {/* Header */}
        <div className="space-y-4">
          <Link href="/docs">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              アップデート一覧に戻る
            </Button>
          </Link>

          <div className="space-y-2 mt-8">
            <div className="flex items-center gap-3">
              <h1 className="text-4xl font-bold">{update.title}</h1>
            </div>
            <div className="flex space-x-2">
              <p className="text-muted-foreground">{update.date}</p>
              <Badge variant="primary" appearance="ghost" className="text-sm">
                <Tag />
                {update.version}
              </Badge>
            </div>
          </div>
        </div>

        {/* Overview */}
        {update.details?.overview && (
          <section className="space-y-3">
            <h2 className="text-2xl font-bold">概要</h2>
            <MarkdownContent>{update.details.overview}</MarkdownContent>
          </section>
        )}

        {update.details?.overview && update.details?.features && (
          <Separator className="my-8" />
        )}

        {/* Features */}
        {update.details?.features && update.details.features.length > 0 && (
          <section className="space-y-3">
            <h2 className="text-2xl font-bold">主な機能</h2>
            <ul className="ml-6 space-y-2 list-disc">
              {update.details.features.map((feature) => (
                <li key={feature} className="leading-relaxed text-foreground">
                  <MarkdownContent>{feature}</MarkdownContent>
                </li>
              ))}
            </ul>
          </section>
        )}

        {((update.details?.features && update.details.features.length > 0) ||
          update.details?.overview) &&
          update.details?.newElements &&
          update.details.newElements.length > 0 && (
            <Separator className="my-8" />
          )}

        {/* New Elements Table */}
        {update.details?.newElements &&
          update.details.newElements.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-2xl font-bold">新要素一覧</h2>
              <div className="overflow-x-auto rounded-lg border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="min-w-32 whitespace-normal">
                        名前
                      </TableHead>
                      <TableHead className="min-w-24 whitespace-normal">
                        カテゴリ
                      </TableHead>
                      <TableHead className="min-w-48 whitespace-normal">
                        説明
                      </TableHead>
                      <TableHead className="min-w-32 whitespace-normal">
                        入手方法
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {update.details.newElements.map((element) => (
                      <TableRow key={element.name}>
                        <TableCell className="font-medium whitespace-normal">
                          {element.name}
                        </TableCell>
                        <TableCell className="whitespace-normal">
                          <Badge variant="outline">{element.category}</Badge>
                        </TableCell>
                        <TableCell className="text-muted-foreground whitespace-normal">
                          {element.description}
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground whitespace-normal">
                          {element.acquisition || "-"}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </section>
          )}

        {update.details?.newElements &&
          update.details.newElements.length > 0 &&
          update.details?.detailedFlow &&
          update.details.detailedFlow.length > 0 && (
            <Separator className="my-8" />
          )}

        {/* Detailed Flow */}
        {update.details?.detailedFlow &&
          update.details.detailedFlow.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-2xl font-bold">詳細フロー</h2>
              <Timeline spacing="md">
                {update.details.detailedFlow.map((flow) => (
                  <TimelineItem key={flow.step}>
                    <TimelineTitle>{`${flow.step}. ${flow.title}`}</TimelineTitle>
                    <TimelineDescription>
                      <ul className="space-y-1 list-none">
                        {flow.details.map((detail) => (
                          <li key={detail} className="text-sm">
                            <MarkdownContent>{detail}</MarkdownContent>
                          </li>
                        ))}
                      </ul>
                    </TimelineDescription>
                  </TimelineItem>
                ))}
              </Timeline>
            </section>
          )}

        {((update.details?.detailedFlow &&
          update.details.detailedFlow.length > 0) ||
          (update.details?.newElements &&
            update.details.newElements.length > 0)) && (
          <Separator className="my-8" />
        )}

        {/* Flow Chart */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">進行チャート</h2>
          <CodeDisplay
            language="mermaid"
            filename={`${update.id}.mermaid`}
            code={update.flowChart}
            displayMode="full"
          />
        </section>

        {update.details?.notes && update.details.notes.length > 0 && (
          <Separator className="my-8" />
        )}

        {/* Notes */}
        {update.details?.notes && update.details.notes.length > 0 && (
          <section className="space-y-3">
            <h2 className="text-2xl font-bold">注意点・補足</h2>
            <ul className="ml-6 space-y-2 list-disc">
              {update.details.notes.map((note) => (
                <li
                  key={note.substring(0, 50)}
                  className="leading-relaxed text-foreground"
                >
                  <MarkdownContent>{note}</MarkdownContent>
                </li>
              ))}
            </ul>
          </section>
        )}

        {update.details?.references && update.details.references.length > 0 && (
          <Separator className="my-8" />
        )}

        {/* References */}
        {update.details?.references && update.details.references.length > 0 && (
          <section className="space-y-3">
            <h2 className="text-2xl font-bold">参考リンク</h2>
            <ul className="space-y-2 list-none">
              {update.details.references.map((ref) => (
                <li key={ref.url}>
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:underline"
                  >
                    <ExternalLink className="h-4 w-4" />
                    {ref.title}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </ScrollArea>
  );
}
