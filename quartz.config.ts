import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Adalbär's Homebrew Workshop",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "adalbaer.homebrew",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#A5887B", // Warm beige
          lightgray: "#D1B4A6", // Light brownish gray
          gray: "#B1795C", // Muted warm gray
          darkgray: "#602E15", // Warm dark gray
          dark: "#42271A", // Dark chocolate brown
          secondary: "#7b97aa", // Muted blue for accents
          tertiary: "#b45e49", // Brick red
          highlight: "rgba(78, 103, 141, 0.15)", // Light blue highlight
          textHighlight: "rgba(143, 159, 169, 0.15)",
        },
        darkMode: {
          light: "#42271A", // Warm dark brown
          lightgray: "#602E15", // Darker warm gray
          gray: "#B1795C", // Slate brown
          darkgray: "#D1B4A6", // Light off-white
          dark: "#A5887B", // Softer white for text
          secondary: "#7b97aa", // Muted blue for accents
          tertiary: "#b45e49", // Brick red
          highlight: "rgba(143, 159, 169, 0.15)", // Light blue highlight,
          textHighlight: "rgba(143, 159, 169, 0.15)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
