#!/usr/bin/env node
const stdio = require('stdio');
const { insertYamlValue } = require('./helpers');

const ops = stdio.getopt({
  'file-path': {
    key: 'b',
    args: 1,
    description: 'The path to the base file',
    mandatory: true,
  },
  key: {
    key: 'k',
    args: 1,
    description: 'The key you want to change value for',
    mandatory: true,
  },
  value: {
    key: 'v',
    args: 1,
    description: 'The value you want to change the key to',
    mandatory: true,
  },
}, 'yaml-replacer -b path/to/base.yaml -k Foo -v Bar');

try {
  insertYamlValue(ops['file-path'], ops.key, ops.value);
} catch (err) {
  console.error(err.message);
  process.exit(1);
}
