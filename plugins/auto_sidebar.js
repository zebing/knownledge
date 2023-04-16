import { glob } from 'glob';

const paths = glob.sync('src/**/*');
const mdPaths = paths.filter((path) => /(?<!README)\.md$/.test(path));
const slideConfig = mdPaths.reduce((obj, path) => {
  path = path.replace('.md', '')
  const pathArr = path.replace('src/', '').split('/');
  pathArr[0] = `/${pathArr[0]}`;

  if (pathArr[pathArr.length - 1] === 'index') {
    pathArr[pathArr.length - 1] = ''
  }

  if (!obj[pathArr[0]]) {
    obj[pathArr[0]] = [];
  }

  let item = obj[pathArr[0]].filter((item) => item.key === pathArr[1])[0];

  if (!item) {
    item = {
      text: pathArr[1].replace(/^[0-9]+_/gi, ''),
      collapsable: true,
      key: pathArr[1],
      children: []
    }
    obj[pathArr[0]].push(item);
  }

  item.children.push(pathArr.join('/'));
  return obj;
}, {})

export default slideConfig;

