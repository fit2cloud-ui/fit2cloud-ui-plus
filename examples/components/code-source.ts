export const getIndentedSource = (source: any) => {
  let lines = source.split("\n");
  let matches;

  if (lines[0] === "") {
    lines.shift();
  }

  let indentation =
    (matches = /^[\s\t]+/.exec(lines[0])) !== null ? matches[0] : null;

  if (indentation) {
    lines = lines.map((line: any) => {
      line = line.replace(indentation, "");

      return line.replace(/\t/g, "  ");
    });

    return lines.join("\n").trim();
  }

  return source;
}

export default getIndentedSource;
