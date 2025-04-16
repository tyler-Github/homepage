interface Directory {
  projects: Record<string, { name: string; link?: string; source: string }>;
  "side-projects": Record<
    string,
    { name: string; link?: string; source: string }
  >;
  "archived-projects": Record<
    string,
    { name: string; link?: string; source: string }
  >;
  contact: Record<string, { name: string; link: string; linkName: string }>;
}

export const directory: Directory = {
  contact: {
    email: {
      name: "Email",
      link: "mailto:contact@zerolimits.dev",
      linkName: "contact@zerolimits.dev",
    },
    github: {
      name: "GitHub",
      link: "https://github.com/noClaps",
      linkName: "noClaps",
    },
    gitlab: {
      name: "GitLab",
      link: "https://gitlab.com/noClaps",
      linkName: "noClaps",
    },
  },
  projects: {
    gallery: {
      name: "Aperturic Focus",
      link: "https://gallery.zerolimits.dev",
      source: "https://github.com/noClaps/gallery",
    },
    camphouse: {
      name: "Camphouse",
      link: "https://camphouse.org",
      source: "https://gitlab.com/camphouse",
    },
    "discuit-docs": {
      name: "Discuit API Documentation",
      link: "https://docs.discuit.net",
      source: "https://github.com/discuitnet/docs",
    },
    qcsim: {
      name: "QCSim",
      source: "https://github.com/noClaps/qcsim",
    },
    blog: {
      name: "The Blog of Random",
      link: "https://blog.zerolimits.dev",
      source: "https://github.com/noClaps/blog",
    },
    homepage: {
      name: "ZeroLimits.dev",
      link: "https://zerolimits.dev",
      source: "https://github.com/noClaps/homepage",
    },
    znak: {
      name: "Znak",
      source: "https://github.com/noClaps/znak",
    },
  },
  "side-projects": {
    catbot: {
      name: "CatBot",
      link: "https://discord.com/oauth2/authorize?client_id=1271901024910839959",
      source: "https://github.com/noClaps/catbot",
    },
    color: {
      name: "color",
      source: "https://github.com/noClaps/color",
    },
    life: {
      name: "Conway's Game of Life",
      link: "https://life.zerolimits.dev",
      source: "https://github.com/noClaps/game-of-life",
    },
    lsdeps: {
      name: "lsdeps",
      source: "https://github.com/noClaps/lsdeps",
    },
    news: {
      name: "News",
      link: "https://news.zerolimits.dev",
      source: "https://github.com/noClaps/news",
    },
  },
  "archived-projects": {
    highlight: {
      name: "Highlight",
      source: "https://github.com/noClaps/highlight",
    },
    passgen: {
      name: "passgen",
      source: "https://github.com/noClaps/passgen",
    },
    psc: {
      name: "psc",
      source: "https://github.com/noClaps/psc",
    },
    random: {
      name: "random",
      source: "https://github.com/noClaps/random",
    },
  },
};
