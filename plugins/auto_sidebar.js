const glob = require('glob');

module.exports = (options, ctx) => {
  const slideTitle = ctx.themeConfig.slideTitle || {};
  const paths = glob.sync('src/**/*');
  const mdPaths = paths.filter((path) => /(?<!README)\.md$/.test(path));
  const slideConfig = mdPaths.reduce((obj, path) => {
    const pathArr = path.replace('src/', '').split('/');
    pathArr[0] = `/${pathArr[0]}/`;
    pathArr[1] = pathArr[1].replace(/^[0-9]+_/gi, '');
    if (pathArr[pathArr.length - 1] === 'index.md') {
      pathArr[pathArr.length - 1] = ''
    }

    if (!obj[pathArr[0]]) {
      obj[pathArr[0]] = [];
    }

    let item = obj[pathArr[0]].filter((item) => item.key === pathArr[1])[0];

    if (!item) {
      item = {
        title: slideTitle[pathArr[1]] || pathArr[1],
        collapsable: true,
        key: pathArr[1],
        children: []
      }
      obj[pathArr[0]].push(item);
    }

    item.children.push(pathArr.slice(1).join('/'));
    return obj;
  }, {})
  ctx.themeConfig.sidebar = slideConfig;
}
