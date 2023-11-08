import { test, expect, describe } from 'vitest'
import { cleanNumbers, transformToNumber } from '../util/numbers'


describe('transformToNumber()', () => {
  test('transforms correctly from string to number', () => {
    const arg = '1'

    const result = transformToNumber(arg)

    expect(result).toBeTypeOf('number')
  })

  test('receives a numeric string and returns a number', () => {
    const arg = '3'
    const expectedResult = 3

    const result = transformToNumber(arg)

    expect(result).toBe(expectedResult)
  })

  test('receives a number  and returns the same number', () => {
    const number = 3

    const result = transformToNumber(number)

    expect(result).toBe(number)
  })
})

describe('cleanNumbers()', () => {
  test('numeric strings are transformed to numbers', () => {
    const arg = ['1', '2', '3']

    const result = cleanNumbers(arg)

    expect(result[0]).toBeTypeOf('number')
  })

  test('receives a numeric strings array and returns an array of numbers', () => {
    const arg = ['1', '2', '3']
    const expectedResult = [1, 2, 3]

    const result = cleanNumbers(arg)

    expect(result).toEqual(expectedResult)
  })

  test('throws an error if the array provided has at least one empty string', () => {
    const arg = ['', '2', '3']

    const resultFn = () => cleanNumbers(arg)

    expect(resultFn).toThrow()
  })
})
