import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center gap-6 py-20 text-center">
      <div className="space-y-2">
        <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          404 Not Found
        </h2>
        <p className="text-muted-foreground text-lg">
          お探しのページは見つかりませんでした。
        </p>
      </div>
      <Button variant="link" asChild>
        <Link href="/">ホームに戻る</Link>
      </Button>
    </div>
  );
}
