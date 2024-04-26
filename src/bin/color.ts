import Color from "colorjs.io";

export default function color(args: string[]) {
  if (args.length !== 2) {
    return `Incorrect usage of the color command. Use "help color" to see how to use this command.`;
  }

  const initialColor = args[0];
  const outputFormat = args[1];

  try {
    return new Color(initialColor).to(outputFormat).toString();
  } catch {
    return `Invalid or unsupported input. Check your input, and if you are sure that it is correct, <a href="https://github.com/noClaps/ZeroLimits.dev/issues/new">report this issue</a>.`;
  }
}
