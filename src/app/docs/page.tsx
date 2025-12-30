import { CodeDisplay } from "@/components/ui/code-display";

export default function DocsPage() {
  return (
    <div>
      Docs Page
      <CodeDisplay
        language="mermaid"
        filename="hoge.mermaid"
        code={`graph TD;
  A-->B;
  A-->C;
  B-->D;
  C-->D;`}
      />
      <CodeDisplay
        language="python"
        filename="hoge.mermaid"
        code={`graph TD;
  A-->B;
  A-->C;
  B-->D;
  C-->D;`}
      />
    </div>
  );
}
