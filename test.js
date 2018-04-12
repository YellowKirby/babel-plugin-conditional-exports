const test = require('ava');
const babel = require('babel-core');
const plugin = require('.');

function run(t, source) {
  t.snapshot(babel.transform(source, { plugins: [plugin] }).code.trim());
}

test(
  'Variables: No comments',
  run,
  `
const id = 'value';
`
);

test(
  'Variables: Non-matching comments',
  run,
  `
/* just a comment */
const id = 'value';
`
);

test(
  'Variables: Enable comment',
  run,
  `
/* @ export-test */
const id = 'value';
`
);

test(
  'Variables: Enable comment, multiple declarations',
  run,
  `
/* @ export-test */
const id = 'value', another = 5;
`
);

test(
  'Functions: no comments',
  run,
  `
function id() {}
`
);

test(
  'Functions: Non-matching comments',
  run,
  `
// whatever
function id() {}
`
);

test(
  'Functions: Enable comment',
  run,
  `
// @ export-test */
function id() {}
`
);
