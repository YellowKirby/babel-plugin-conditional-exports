const ENABLE_EXPORT_RE = /@\s*export-test/i;

module.exports = function({ types: t }) {
  const doTheThing = path => {
    const { node } = path;
    const { leadingComments } = node;
    if (
      Array.isArray(leadingComments) &&
      leadingComments.find(({ value }) => ENABLE_EXPORT_RE.test(value))
    ) {
      path.replaceWith(t.exportNamedDeclaration(path.node, []));
    }
  };

  return {
    visitor: {
      VariableDeclaration: doTheThing,
      FunctionDeclaration: doTheThing
    }
  };
};
