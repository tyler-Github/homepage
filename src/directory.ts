type Project = {
  name: string;
  link?: string;
  source: string;
};

interface Directory {
  projects: Record<string, Project>;
  "side-projects": Record<string, Project>;
  "archived-projects": Record<string, Project>;
  contact: Record<string, { name: string; link: string; linkName: string }>;
}

export const directory: Directory = {
  contact: {
    email: {
      name: "Email",
      link: "mailto:noreply@xnoid.studio",
      linkName: "noreply@xnoid.studio",
    },
    github: {
      name: "GitHub",
      link: "https://github.com/tyler-Github",
      linkName: "Tyler-GitHub",
    },
  },
  projects: {
    screenshot: {
      name: "Web Screenshots",
      link: "https://screenshot.xnoid.studio/",
    },
    portal: {
      name: "Xnoid Portal",
      link: "https://portal.xnoid.studio/",
    },
  },
  "side-projects": {
    archive: {
      name: "Discuit Archive",
      link: "https://archive.xnoid.studio/",
    },
  },
  "archived-projects": {
    "yasifys-tools": {
      name: "Yasifys Youtube Downloader",
      source: "https://github.com/tyler-Github/YasifysTools",
    },
  },
};
