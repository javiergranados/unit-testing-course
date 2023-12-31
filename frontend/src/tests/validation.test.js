import { it, expect, describe } from 'vitest';

import { validateNumber, validateStringNotEmpty } from '../util/validation';

describe('validateStringNotEmpty()', () => {
  it("receives an empty string and throws an error with the message 'must not be empty'", () => {
    const arg = '';
    const validationFn = () => validateStringNotEmpty(arg);
    expect(validationFn).toThrow(/must not be empty/);
  });

  it('receives an non-string value and throws an error ', () => {
    const argNum = 1;
    const argBool = false;
    const argObj = {};

    const validationFnNum = () => validateStringNotEmpty(argNum);
    const validationFnBool = () => validateStringNotEmpty(argBool);
    const validationFnObj = () => validateStringNotEmpty(argObj);

    expect(validationFnNum).toThrow();
    expect(validationFnBool).toThrow();
    expect(validationFnObj).toThrow();
  });

  it('receives a non-empty string is provided and error is no throw', () => {
    const arg = 'valid';
    const validationFn = () => validateStringNotEmpty(arg);
    expect(validationFn).not.toThrow();
  });
});

describe('validateNumber()', () => {
  it("receives a NaN value and throws an error with the message 'Invalid number'", () => {
    const arg = NaN;
    const validationFn = () => validateNumber(arg);
    expect(validationFn).toThrow(/Invalid number/);
  });

  it('receives a non-numeric value and throws an error', () => {
    const arg = '1';
    const validationFn = () => validateNumber(arg);
    expect(validationFn).toThrow();
  });


  it('receives a non-empty string is provided and error is no throw', () => {
    const arg = 1;
    const validationFn = () => validateNumber(arg);
    expect(validationFn).not.toThrow();
  });
});
