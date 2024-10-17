import Color from "colorjs.io";

export default function color(args: string[]) {
  if (args.length < 2)
    return `Incorrect usage of the color command. Use "help color" to see how to use this command.`;

  const initialColor = args.slice(0, -1).join(" ");
  const outputFormat = args[args.length - 1];

  try {
    switch (outputFormat) {
      case "hex":
        return new Color(initialColor).to("srgb").toString({ format: "hex" });

      case "rgb":
        return new Color(initialColor).to("srgb").toString();

      default:
        return new Color(initialColor).to(outputFormat).toString();
    }
  } catch {
    return `Invalid or unsupported input. Check your input, and if you are sure that it is correct, <a href="https://gitlab.com/noClaps/homepage/issues/new">report this issue</a>.`;
  }
}
