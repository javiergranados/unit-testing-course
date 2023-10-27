import { test, expect, describe } from 'vitest'
import { transformToNumber } from '../util/numbers'


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
