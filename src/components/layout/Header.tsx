import Link from "next/link";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { SparklesText } from "../ui/sparkles-text";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="w-full flex items-center justify-center h-14">
        <div className="flex w-full max-w-5xl mx-auto px-4">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <SparklesText
              className="font-bold sm:inline-block text-md"
              sparklesCount={4}
              sparkleScaleMax={0.5}
              sparkleScaleMin={0.2}
            >
              NY2026
            </SparklesText>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            <Link
              href="/docs"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Docs
            </Link>
          </nav>
          <div className="flex flex-1 items-center justify-end space-x-2">
            <nav className="flex items-center gap-1">
              <AnimatedThemeToggler />
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
