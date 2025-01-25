interface Directory {
  projects: Record<string, { name: string; link?: string; source: string }>;
  contact: Record<string, { name: string; link: string; linkName: string }>;
}

export const directory: Directory = {
  projects: {
    gallery: {
      name: "Aperturic Focus",
      link: "https://gallery.zerolimits.dev",
      source: "https://gitlab.com/noClaps/gallery",
    },
    camphouse: {
      name: "Camphouse",
      link: "https://camphouse.org",
      source: "https://git.vmgware.dev/vmgware/camphouse",
    },
    catbot: {
      name: "CatBot",
      link: "https://discord.com/oauth2/authorize?client_id=1271901024910839959",
      source: "https://gitlab.com/noClaps/catbot",
    },
    color: {
      name: "color",
      source: "https://gitlab.com/noClaps/color",
    },
    life: {
      name: "Conway's Game of Life",
      link: "https://life.zerolimits.dev",
      source: "https://gitlab.com/noClaps/game-of-life",
    },
    "discuit-docs": {
      name: "Discuit API Documentation",
      link: "https://docs.discuit.net",
      source: "https://github.com/discuitnet/docs",
    },
    highlight: {
      name: "Highlight",
      source: "https://gitlab.com/noClaps/highlight",
    },
    lsdeps: {
      name: "lsdeps",
      source: "https://gitlab.com/noClaps/lsdeps",
    },
    news: {
      name: "News",
      link: "https://news.zerolimits.dev",
      source: "https://gitlab.com/noClaps/news",
    },
    passgen: {
      name: "passgen",
      source: "https://gitlab.com/noClaps/passgen",
    },
    psc: {
      name: "psc",
      source: "https://gitlab.com/noClaps/psc",
    },
    random: {
      name: "random",
      source: "https://gitlab.com/noClaps/random",
    },
    blog: {
      name: "The Blog of Random",
      link: "https://blog.zerolimits.dev",
      source: "https://gitlab.com/noClaps/blog",
    },
    docs: {
      name: "ZeroLimits Docs",
      link: "https://docs.zerolimits.dev",
      source: "https://gitlab.com/noClaps/docs",
    },
    homepage: {
      name: "ZeroLimits.dev",
      link: "https://zerolimits.dev",
      source: "https://gitlab.com/noClaps/homepage",
    },
    znak: {
      name: "Znak",
      link: "https://znak.zerolimits.dev",
      source: "https://gitlab.com/noClaps/znak-lang",
    },
  },
  contact: {
    bluesky: {
      name: "Bluesky",
      link: "https://bsky.app/profile/zerolimits.dev",
      linkName: "@zerolimits.dev",
    },
    email: {
      name: "Email",
      link: "mailto:contact@zerolimits.dev",
      linkName: "contact@zerolimits.dev",
    },
    gitlab: {
      name: "GitLab",
      link: "https://gitlab.com/noClaps",
      linkName: "noClaps",
    },
  },
};
