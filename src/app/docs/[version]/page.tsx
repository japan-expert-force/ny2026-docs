import { ArrowLeft, Tag } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CodeDisplay } from "@/components/ui/code-display";
import { ScrollArea } from "@/components/ui/scroll-area";
import { updates } from "@/lib/updates";

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

          <div className="space-y-2 mt-4">
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

        {/* Description */}
        <div className="rounded-lg border bg-card p-6">
          <p className="leading-relaxed">{update.description}</p>
        </div>

        {/* Overview */}
        {update.details?.overview && (
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">概要</h2>
            <div className="rounded-lg border bg-card p-6">
              <p className="leading-relaxed">{update.details.overview}</p>
            </div>
          </section>
        )}

        {/* Flow Chart */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">進行チャート</h2>
          <CodeDisplay
            language="mermaid"
            filename={`${update.id}.mermaid`}
            code={update.flowChart}
          />
        </section>

        {/* Features */}
        {update.details?.features && update.details.features.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">新要素の入手・レシピ</h2>
            <div className="rounded-lg border bg-card p-6">
              <ul className="space-y-3">
                {update.details.features.map((feature, index) => (
                  <li key={index} className="leading-relaxed">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: feature.replace(
                          /\*\*(.*?)\*\*/g,
                          "<strong>$1</strong>",
                        ),
                      }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Notes */}
        {update.details?.notes && update.details.notes.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">注意点・補足</h2>
            <div className="rounded-lg border bg-card p-6">
              <ul className="list-disc space-y-2 pl-6">
                {update.details.notes.map((note, index) => (
                  <li key={index} className="leading-relaxed">
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between border-t pt-8">
          {(() => {
            const currentIndex = updates.findIndex((u) => u.id === update.id);
            const prevUpdate =
              currentIndex > 0 ? updates[currentIndex - 1] : null;
            const nextUpdate =
              currentIndex < updates.length - 1
                ? updates[currentIndex + 1]
                : null;

            return (
              <>
                <div>
                  {prevUpdate && (
                    <Link href={`/docs/${prevUpdate.version}`}>
                      <Button variant="outline" className="gap-2">
                        <ArrowLeft className="h-4 w-4" />
                        <div className="text-left">
                          <div className="text-xs text-muted-foreground">
                            前のアップデート
                          </div>
                          <div className="font-semibold">
                            {prevUpdate.title}
                          </div>
                        </div>
                      </Button>
                    </Link>
                  )}
                </div>
                <div>
                  {nextUpdate && (
                    <Link href={`/docs/${nextUpdate.version}`}>
                      <Button variant="outline" className="gap-2">
                        <div className="text-right">
                          <div className="text-xs text-muted-foreground">
                            次のアップデート
                          </div>
                          <div className="font-semibold">
                            {nextUpdate.title}
                          </div>
                        </div>
                        <ArrowLeft className="h-4 w-4 rotate-180" />
                      </Button>
                    </Link>
                  )}
                </div>
              </>
            );
          })()}
        </div>
      </div>
    </ScrollArea>
  );
}
