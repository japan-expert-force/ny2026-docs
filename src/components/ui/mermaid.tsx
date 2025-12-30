"use client";

import mermaid from "mermaid";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface MermaidProps {
  chart: string;
  className?: string;
  id?: string;
}

// Mermaid の初期化を一度だけ実行
let mermaidInitialized = false;

export function Mermaid({ chart, className, id }: MermaidProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Mermaid の初期化
    if (!mermaidInitialized) {
      mermaid.initialize({
        startOnLoad: false,
        theme: "default",
        securityLevel: "loose",
        fontFamily: "inherit",
      });
      mermaidInitialized = true;
    }

    const renderChart = async () => {
      if (!chart) {
        setError("チャートデータが指定されていません");
        return;
      }

      try {
        // ユニークな ID を生成
        const uniqueId =
          id || `mermaid-${Math.random().toString(36).substr(2, 9)}`;

        // チャートをレンダリング
        const { svg: renderedSvg } = await mermaid.render(uniqueId, chart);
        setSvg(renderedSvg);
        setError(null);
      } catch (err) {
        console.error("Mermaid rendering error:", err);
        setError(
          err instanceof Error
            ? err.message
            : "チャートのレンダリングに失敗しました",
        );
      }
    };

    renderChart();
  }, [chart, id]);

  if (error) {
    return (
      <div
        className={cn(
          "rounded-lg border border-destructive bg-destructive/10 p-4",
          className,
        )}
      >
        <p className="text-sm text-destructive">エラー: {error}</p>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={cn("mermaid-container overflow-auto", className)}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
