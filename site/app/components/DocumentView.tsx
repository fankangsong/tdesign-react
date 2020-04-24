import React from "react";
import { ComponentDocument } from "!!toc-loader!@tdesign/react/../README.md";
import { MarkdownView } from "./MarkdownView";
import { MarkdownToc } from "./MarkdownToc";

export interface DocumnetViewProps {
  componentKey: string;
  document?: ComponentDocument;
  header?: React.ReactNode;
}

/**
 * 用于显示文档
 */
export function DocumentView({ componentKey, document }: DocumnetViewProps) {
  return (
    <div className="component-document">
      <nav className="component-toc">
        <MarkdownToc
          componentKey={componentKey}
          document={document}
        ></MarkdownToc>
      </nav>
      <main className="component-markdown">
        <MarkdownView
          componentKey={componentKey}
          document={document}
        ></MarkdownView>
      </main>
    </div>
  );
}
