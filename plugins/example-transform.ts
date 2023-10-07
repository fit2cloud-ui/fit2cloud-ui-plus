import fs from "fs";
import {baseParse} from "@vue/compiler-core";

const ExampleTransform = {
  // 插件名称
  name: "demo",
  // 代码转译，这个函数的功能类似于 `webpack` 的 `loader`
  transform(code: any, id: string = "") {
    if (
      !/\/examples\/pages\/.*\/demo\/.*\.vue/.test(id) ||
      !/vue&type=demo/.test(id)
    ) {
      return;
    }
    if (id == null) return
    let path = `.${/\/examples\/pages\/.*\/demo\/.*\.vue/.exec(id)[0]}`;
    const file = fs.readFileSync(path).toString();

    const parsed: any = baseParse(file).children.find((n: any) => n.tag === "demo");
    const title = parsed.children[0].content;
    const main = file.split(parsed.loc.source).join("").trim();

    return `export default function (Component) {
        Component.__sourceCode = ${JSON.stringify(main)}
        Component.__sourceCodeTitle = ${JSON.stringify(title)}
      }`.trim();
  },
};

export default ExampleTransform;
