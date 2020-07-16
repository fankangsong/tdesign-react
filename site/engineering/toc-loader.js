// @ts-check
const path = require('path');

const BLANK_LINE = '';

const TOC_START = '<!--<ComponentTOC>-->';
const TOC_END = '<!--</ComponentTOC>-->';

/**
 * 匹配目录名 `- 通用`
 *
 * - `$1` 目录名
 */
const rCategory = /^- (.+)$/;

/**
 * 匹配组件信息 `  - [x] [Button](./src/button) - 按钮`
 *
 * - `$1` 组件是否勾选
 * - `$2` 组件英文名
 * - `$3` 组件目录名
 * - `$4` 组件中文名
 */
const rComponent = /^  - \[(x|\s)\] \[(\w+)\]\(\.\/src\/([\w\/]+)\) - (.+)$/;

/**
 * Webpack Loader，把组件 README 中的 TOC 解析出来
 *
 * @param {string} source
 *
 * https://webpack.github.io/docs/loaders.html#loader-context
 *
 * @this {import('webpack').loader.LoaderContext}
 */
function tocLoader(source) {
  // const from = this.query.replace('?', '') || 'component';

  // eslint-disable-next-line newline-per-chained-call
  const tocSource = source.split(TOC_START).pop().split(TOC_END).shift();
  const importStatements = [];
  const categories = [];
  let currentCategory = null;

  // eslint-disable-next-line no-restricted-syntax
  for (const line of tocSource.split(/\r?\n/g)) {
    if (rCategory.test(line)) {
      const { $1: category } = RegExp;
      categories.push(
        (currentCategory = {
          category,
          components: [],
        }),
      );
    }
    if (rComponent.test(line)) {
      const { $1: componentChecked, $2: componentName, $3: source, $4: chineseName } = RegExp;
      const done = componentChecked === 'x';
      // 正式环境跳过未打钩的组件
      if (process.env.NODE_ENV === 'production' && !done) {
        continue;
      }

      const documentName = `${componentName}Document`;
      currentCategory.components.push({
        done,
        deprecated: chineseName.includes('[@deprecated]'),
        source,
        sourceName: source.replace(/\//g, '-'),
        componentName,
        chineseName: chineseName.replace('[@deprecated]', ''),
        documentName,
      });
      importStatements.push(`import ${documentName} from "@tdesign/react/${source}/README.md"`);
    }
  }

  let basicInfo = JSON.stringify(categories, null, 2);
  basicInfo = basicInfo.replace(/"documentName": "(\w+)"/g, '"document": $1');
  basicInfo = `export default ${basicInfo}`;

  const outputLines = [...importStatements, BLANK_LINE, basicInfo];

  if (this.resourcePath) {
    this.resourcePath = this.resourcePath.replace(/\.md$/, '.jsx');
  }
  return outputLines.join('\n');
}

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
if (module === require.main) {
  console.log(
    tocLoader(require('fs').readFileSync(path.resolve(__dirname, '../../README.md'), 'utf8')),
  );
} else {
  module.exports = tocLoader;
}
