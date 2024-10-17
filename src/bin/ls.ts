import { directory } from "../directory.ts";

export default function ls(args: string[]) {
  if (args.length > 2)
    return `Incorrect usage of the ls command. Use "help ls" to see how to use this command.`;

  let showKeys = false;
  let arg = "";

  if (args.length === 2) {
    if (args[0] === "--keys") {
      showKeys = true;
      if (["projects", "contact"].includes(args[1])) arg = args[1];
    }

    if (["projects", "contact"].includes(args[0])) {
      arg = args[0];
      if (args[1] === "--keys") showKeys = true;
    }
  } else {
    if (args[0] === "--keys") showKeys = true;
    if (["projects", "contact"].includes(args[0])) arg = args[0];
  }

  let projectsList = "";
  Object.keys(directory.projects).forEach((key, i) => {
    const project = directory.projects[key];
    projectsList += `${i === Object.keys(directory.projects).length - 1 ? "└" : "├"}── ${project.name} - ${project.link ? `<a href="${project.link}">Link</a> - ` : ""}<a href="${project.source}">Source</a>${showKeys ? ` (${key})` : ""}\n`;
  });
  projectsList = projectsList.trim();

  let contactList = "";
  Object.keys(directory.contact).forEach((key, i) => {
    const contact = directory.contact[key];
    contactList += `${i === Object.keys(directory.contact).length - 1 ? "└" : "├"}── ${contact.name} - <a href="${contact.link}">${contact.linkName}</a>${showKeys ? ` (${key})` : ""}\n`;
  });
  contactList = contactList.trim();

  if (!arg) {
    return `
projects/
${projectsList}
contacts/
${contactList}`.trim();
  }

  if (arg.match(/\/?projects\/?/)) {
    return `projects/\n${projectsList}`;
  }

  if (arg.match(/\/?contact\/?/)) {
    return `contact/\n${contactList}`;
  }

  return `${arg}: Directory not found`;
}
