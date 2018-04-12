# Snapshot report for `test.js`

The actual snapshot is saved in `test.js.snap`.

Generated by [AVA](https://ava.li).

## Functions: Enable comment

> Snapshot 1

    `// @ export-test */␊
    export function id() {}`

## Functions: Non-matching comments

> Snapshot 1

    `// whatever␊
    function id() {}`

## Functions: no comments

> Snapshot 1

    'function id() {}'

## Variables: Enable comment

> Snapshot 1

    `/* @ export-test */␊
    export const id = 'value';`

## Variables: Enable comment, multiple declarations

> Snapshot 1

    `/* @ export-test */␊
    export const id = 'value',␊
          another = 5;`

## Variables: No comments

> Snapshot 1

    'const id = \'value\';'

## Variables: Non-matching comments

> Snapshot 1

    `/* just a comment */␊
    const id = 'value';`