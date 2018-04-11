const R = require('ramda');

const ENABLE_EXPORT_RE = /@\s*export-test/i

module.exports = function({ types: t }) {

function doTheThing(path, state) {
  if (R.any(({ value }) => ENABLE_EXPORT_RE.test(value), path.node.leadingComments  || [])) {
    const name = R.pathOr(R.path(['node', 'id'], path), ['node', 'declarations', 0, 'id'], path);
    path.replaceWith(t.exportNamedDeclaration(path.node, [t.exportSpecifier(name, name)]));
  }
}

  return {
    visitor: {
      VariableDeclaration: doTheThing,
      FunctionDeclaration: doTheThing
    }
  };
}
