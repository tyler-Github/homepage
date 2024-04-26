// @ts-nocheck
import directory from "../directory.json";

export default function fallback(command: string): string {
  if (directory["/"]["projects/"][command]) {
    return directory["/"]["projects/"][command];
  }

  if (directory["/"]["contact/"][command]) {
    return directory["/"]["contact/"][command];
  }

  if (command === "") return "";

  return `Not a valid command. Type "help" to see all available commands.`;
}
