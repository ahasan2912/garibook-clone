import { useEffect, useMemo, useState } from "react";

/**
 * Reference-faithful typewriter: accepts an array of HTML strings
 * (e.g. "Assurance of Effortless <span>Travel</span>") and types the
 * visible characters one at a time while keeping tags intact —
 * mirroring the reference site's TypeWriter component exactly.
 *   - types forward at `typeSpeed` ms per character
 *   - holds the complete phrase for `hold` ms
 *   - clears instantly and types the next phrase
 */
export function useTypewriter(phrases, { typeSpeed = 60, hold = 2000, loop = true } = {}) {
  const [wordIdx, setWordIdx] = useState(0);
  const [chars, setChars] = useState(0);

  const tokens = useMemo(() => tokenize(phrases[wordIdx] ?? ""), [phrases, wordIdx]);
  const total = visibleLength(tokens);

  useEffect(() => {
    if (!phrases || phrases.length === 0) return undefined;

    if (chars < total) {
      const timer = setTimeout(
        () => setChars((c) => Math.min(total, c + 1)),
        typeSpeed
      );
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setChars(0);
      setWordIdx((w) => (w + 1 < phrases.length ? w + 1 : loop ? 0 : w));
    }, hold);
    return () => clearTimeout(timer);
  }, [chars, total, phrases, typeSpeed, hold, loop, wordIdx]);

  return { html: buildHtml(tokens, chars) };
}

function tokenize(html) {
  const dom = new DOMParser().parseFromString(html || "", "text/html");
  const tokens = [];
  const walk = (nodes) => {
    Array.from(nodes).forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) tokens.push(node.textContent || "");
      else if (node.nodeType === Node.ELEMENT_NODE) {
        const attrs = Array.from(node.attributes)
          .map((a) => ` ${a.name}="${a.value}"`)
          .join("");
        tokens.push(`<${node.tagName.toLowerCase()}${attrs}>`);
        walk(node.childNodes);
        tokens.push(`</${node.tagName.toLowerCase()}>`);
      }
    });
  };
  walk(dom.body.childNodes);
  // ignore stray whitespace-only first text node from DOMParser
  return tokens.filter((t) => t !== "");
}

function visibleLength(tokens) {
  return tokens.filter((t) => !t.startsWith("<")).join("").length;
}

function buildHtml(tokens, count) {
  let typed = 0;
  let out = "";
  for (const token of tokens) {
    if (token.startsWith("<")) out += token;
    else if (typed + token.length < count) {
      out += token;
      typed += token.length;
    } else {
      out += token.substring(0, count - typed);
      break;
    }
  }
  return out;
}