export default function commit() {
  const html = `
This commit specification is based on the <a href="https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#type">Angular convention</a>.
COMMIT TYPES:
  build       Changes the build system or external dependencies
  chore       Changes outside the code, docs, or tests
  ci          Changes to the CI/CD system
  docs        Changes only the documentation
  feat        Adds a new feature
  fix         Fixes a bug
  perf        Improves performance
  refactor    Changes the code without changing behavior
  revert      Reverts prior changes
  style       Changes the style but not the meaning of the code (such as formatting)
  test        Adds or corrects tests
`;

  return html.trim();
}
