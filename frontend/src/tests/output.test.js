import { describe, it, expect } from 'vitest';
import { generateResultText } from '../output';

describe('generateResultText()', () => {
  it('returns a string, no matter which value is provided', () => {
    const argNumber = 1;
    const argString = 'invalid';
    const argBool = false;

    const result1 = generateResultText(argNumber);
    const result2 = generateResultText(argString);
    const result3 = generateResultText(argBool);

    expect(result1).toBeTypeOf('string');
    expect(result2).toBeTypeOf('string');
    expect(result3).toBeTypeOf('string');
  });

  it('returns a string that contains the calculation result if a number is provided as a result', () => {
    const arg = 5;
    const result = generateResultText(arg);
    expect(result).toContain(arg.toString());
  });

  it('returns an empty string if "no-calc" is provided as a result', () => {
    const arg = 'no-calc';
    const result = generateResultText(arg);
    expect(result).toBe('');
  });

  it('returns a string that contains "Invalid" if "invalid" is provided as a result', () => {
    const arg = 'invalid';
    const result = generateResultText(arg);
    expect(result).toContain('Invalid');
  });
});
