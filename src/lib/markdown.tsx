import type { ReactNode } from "react";
import Link from "next/link";

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const pattern = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let i = 0;

  while ((match = pattern.exec(text))) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    const token = match[0];
    if (token.startsWith("**")) {
      nodes.push(
        <strong key={`${keyPrefix}-b-${i}`} className="font-bold text-foreground">
          {token.slice(2, -2)}
        </strong>,
      );
    } else {
      const linkMatch = /\[([^\]]+)\]\(([^)]+)\)/.exec(token)!;
      const [, label, href] = linkMatch;
      const isInternal = href.startsWith("/") || href.startsWith("#");
      nodes.push(
        isInternal ? (
          <Link
            key={`${keyPrefix}-l-${i}`}
            href={href}
            className="font-semibold text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
          >
            {label}
          </Link>
        ) : (
          <a
            key={`${keyPrefix}-l-${i}`}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
          >
            {label}
          </a>
        ),
      );
    }
    lastIndex = match.index + token.length;
    i++;
  }
  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return nodes;
}

/** Minimal markdown -> JSX renderer supporting the subset used in src/data/blog.ts:
 *  ## / ### headings, blank-line-separated paragraphs, **bold**, [text](href) links,
 *  "- " bullet lists and "1. " ordered lists. */
export function renderMarkdown(markdown: string): ReactNode[] {
  const blocks = markdown.trim().split(/\n\s*\n/);

  return blocks.map((block, idx) => {
    const key = `block-${idx}`;
    const lines = block
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean);
    if (lines.length === 0) return null;

    if (lines[0].startsWith("### ")) {
      return (
        <h3 key={key} className="mb-3 mt-8 text-xl font-bold text-foreground sm:text-2xl">
          {renderInline(lines[0].slice(4), key)}
        </h3>
      );
    }

    if (lines[0].startsWith("## ")) {
      return (
        <h2
          key={key}
          className="mb-4 mt-10 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl"
        >
          {renderInline(lines[0].slice(3), key)}
        </h2>
      );
    }

    if (lines.every((l) => /^-\s+/.test(l))) {
      return (
        <ul key={key} className="my-5 space-y-2.5 pl-1">
          {lines.map((l, i) => (
            <li
              key={`${key}-li-${i}`}
              className="flex items-start gap-2.5 text-base leading-relaxed text-muted-foreground"
            >
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>{renderInline(l.replace(/^-\s+/, ""), `${key}-li-${i}`)}</span>
            </li>
          ))}
        </ul>
      );
    }

    if (lines.every((l) => /^\d+\.\s+/.test(l))) {
      return (
        <ol
          key={key}
          className="my-5 list-decimal space-y-2.5 pl-5 marker:font-bold marker:text-primary"
        >
          {lines.map((l, i) => (
            <li key={`${key}-li-${i}`} className="text-base leading-relaxed text-muted-foreground">
              {renderInline(l.replace(/^\d+\.\s+/, ""), `${key}-li-${i}`)}
            </li>
          ))}
        </ol>
      );
    }

    return (
      <p key={key} className="my-5 text-base leading-relaxed text-muted-foreground">
        {renderInline(lines.join(" "), key)}
      </p>
    );
  });
}
