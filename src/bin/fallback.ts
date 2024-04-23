// @ts-nocheck
import directory from "../directory.json";

export default function fallback(command: string) {
  if (directory["/"]["projects/"][command]) {
    return directory["/"]["projects/"][command];
  }

  if (directory["/"]["contact/"][command]) {
    return directory["/"]["contact/"][command];
  }

  return `Not a valid command. Type "help" to see all available commands.`;
}
