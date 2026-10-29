"use client";

import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";

interface ObfuscatedEmailProps {
  className?: string;
  showCopyButton?: boolean;
  large?: boolean;
}

export function ObfuscatedEmail({
  className = "",
  showCopyButton = true,
  large = false,
}: ObfuscatedEmailProps) {
  const [email, setEmail] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    // Client-side assembly to protect from static scrapers
    const user = "afaqbhatti147";
    const host = "gmail.com";
    setEmail(`${user}@${host}`);
  }, []);

  const handleCopy = async () => {
    if (!email) return;
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback if clipboard API is blocked
      const textArea = document.createElement("textarea");
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!email) {
    return (
      <span className="font-mono text-text-muted animate-pulse">
        loading contact...
      </span>
    );
  }

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <a
        href={`mailto:${email}`}
        className={`font-mono text-text hover:text-accent underline decoration-1 underline-offset-4 transition-colors duration-150 ${
          large
            ? "text-xl sm:text-2xl md:text-3xl font-medium tracking-tight"
            : "text-sm"
        }`}
      >
        {email}
      </a>

      {showCopyButton && (
        <button
          type="button"
          onClick={handleCopy}
          aria-label={
            copied
              ? "Email copied to clipboard"
              : "Copy email address to clipboard"
          }
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border hairline-border font-mono text-xs text-text-muted hover:text-text hover:border-text transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-accent" />
              <span className="text-accent text-[11px] uppercase tracking-wider">
                Copied
              </span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span className="text-[11px] uppercase tracking-wider">Copy</span>
            </>
          )}
        </button>
      )}
    </div>
  );
}
