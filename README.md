# yaml-replacer

## Description:

#### A simple node js CLI that takes in a `path` to a yaml file, a `key` and a `value` (if value is not defined, all instances of `key` will instead be deleted instead of replaced). The CLI will loop through all keys in the yaml file and replace the key with the value and write the result to the file.

## Example:

#### yaml-replacer --file-path ./src/test.yaml --key Key --value Value