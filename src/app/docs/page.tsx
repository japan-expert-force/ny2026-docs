import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SparklesText } from "@/components/ui/sparkles-text";
import {
  Timeline,
  TimelineDescription,
  TimelineItem,
  TimelineTitle,
} from "@/components/ui/timeline";
import { updates } from "@/lib/updates";

export default function DocsPage() {
  return (
    <ScrollArea className="h-full">
      <div className="container mx-auto max-w-5xl space-y-12 py-12">
        <div className="space-y-4 text-center">
          <SparklesText className="text-4xl font-bold md:text-5xl">
            Minecraft 2024-2025
          </SparklesText>
          <h2 className="text-2xl font-semibold text-muted-foreground">
            新要素体験フロー集
          </h2>
          <p className="text-muted-foreground">
            2024/01/01〜2025/12/31 の間に Minecraft
            に追加された各アップデート要素を全て体験できるように時系列順でガイドをまとめました
          </p>
        </div>

        <div className="space-y-8">
          <h3 className="text-2xl font-bold">アップデート一覧</h3>
          <Timeline spacing="md">
            {updates.map((update) => (
              <TimelineItem key={update.id}>
                <TimelineTitle>
                  <Link
                    href={`/docs/${update.version}`}
                    className="hover:underline hover:text-primary transition-colors"
                  >
                    {update.version} - {update.title}
                  </Link>
                </TimelineTitle>
                <TimelineDescription>
                  <div className="space-y-1">{update.description}</div>
                </TimelineDescription>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </div>
    </ScrollArea>
  );
}
