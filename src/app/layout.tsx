import type { Metadata, Viewport } from "next";
import { instrumentSerif, geistSans, geistMono } from "@/lib/fonts";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SkipLink } from "@/components/ui/skip-link";
import { identity } from "@/content/profile";
import { hasWritingPosts } from "@/lib/writing";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0A0B0D" },
    { media: "(prefers-color-scheme: light)", color: "#FAFAF7" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: `${identity.fullName} — ${identity.role}`,
    template: `%s — ${identity.displayName}`,
  },
  description: `${identity.role} in ${identity.location}. Agentic systems, GraphRAG, and production MLOps.`,
  authors: [{ name: identity.fullName }],
  metadataBase: new URL("https://afaqbhatti.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${identity.fullName} — ${identity.role}`,
    description:
      "I build LLM systems that hold up in production, and measure whether they do.",
    type: "website",
    locale: "en_US",
    siteName: identity.fullName,
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: `${identity.fullName} — ${identity.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${identity.fullName} — ${identity.role}`,
    description:
      "I build LLM systems that hold up in production, and measure whether they do.",
    images: ["/api/og"],
  },
};

const themeScript = `
(function() {
  try {
    var saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') {
      document.documentElement.classList.toggle('light', saved === 'light');
      document.documentElement.classList.toggle('dark', saved === 'dark');
    } else {
      var prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
      document.documentElement.classList.toggle('light', prefersLight);
      document.documentElement.classList.toggle('dark', !prefersLight);
    }
  } catch (e) {
    document.documentElement.classList.add('dark');
  }
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const writingEnabled = hasWritingPosts();

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: identity.fullName,
    alternateName: identity.displayName,
    jobTitle: identity.role,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Islamabad",
      addressCountry: "Pakistan",
    },
    email: `mailto:${identity.email}`,
    url: "https://afaqbhatti.dev",
    sameAs: [identity.githubUrl, identity.linkedinUrl],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${instrumentSerif.variable} ${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="bg-bg text-text min-h-screen flex flex-col selection:bg-highlight selection:text-accent-ink">
        <SkipLink />
        <Header hasWritingPosts={writingEnabled} />
        <main id="main-content" className="flex-1 focus:outline-none">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
