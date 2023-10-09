import Validator from '../index';

test.each([
  ['123', false],
  ['', false],
  [' ', false],
  ['_', false],
  ['-', false],
  ['a-', false],
  ['-a', false],
  ['1a', false],
  ['a1', false],
  ['_a', false],
  ['a_', false],
  ['a', true],
  ['abcde', true],
  ['a1b-c_d1e', true],
  ['a1b@c_d1e', false],
  ['ehds---_fih87487yihy349839ur43u4090fj094', false],
  ['ifbe8r74fiehf93w40hgoer-249sda', true],
])(
  ('Test for user name "%s"'
  ),
  (name, expected) => {
    const result = new Validator(name).validateUsername();
    expect(result).toBe(expected);
  },
);
