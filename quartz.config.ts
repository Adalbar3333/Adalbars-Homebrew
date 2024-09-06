import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Adalbär's Homebrew Collection",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    baseUrl: "adalbaer.sstories",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#f5ebe0", // Warm beige
          lightgray: "#e5cdbb", // Light brownish gray
          gray: "#b8a48f", // Muted warm gray
          darkgray: "#4e3d32", // Warm dark gray
          dark: "#2e1f14", // Dark chocolate brown
          secondary: "#b45e49", // Brick red
          tertiary: "#84a59d", // Complementary soft blue
          highlight: "rgba(143, 159, 169, 0.15)", // Light blue for highlights
        },
        darkMode: {
          light: "#65483B", // Warm dark brown
          lightgray: "#87614F", // Darker warm gray
          gray: "#926F5F", // Slate brown
          darkgray: "#9C7C6E", // Light off-white
          dark: "#a5887b", // Softer white for text
          secondary: "#7b97aa", // Muted blue for accents
          tertiary: "#b45e49", // Brick red
          highlight: "rgba(143, 159, 169, 0.15)", // Light blue highlight
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.TableOfContents(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"], // you can add 'git' here for last modified from Git but this makes the build slower
      }),
      Plugin.SyntaxHighlighting(),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources({ fontOrigin: "googleFonts" }),
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
