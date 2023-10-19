import { test, expect, describe } from 'vitest'
import { add } from '../math'


describe('Func add', () => {
  test('summarize all number values in an array', () => {
    // Arrange
    const numbers = [1, 2, 3]
    const expectedResult = 6

    // Act
    const sum = add(numbers)

    // Assert
    expect(sum).toBe(expectedResult)
  })

  test('returns NaN if one of the values is not a number', () => {
    const numbers = [1, 2, "string"]

    const sum = add(numbers)

    expect(sum).toBeNaN()
  })

  test('summarize all numeric string values in an array', () => {
    const numbers = ["1", "2", "3"]
    const expectedResult = 6

    const sum = add(numbers)

    expect(sum).toBe(expectedResult)
  })

  test('returns zero if the array is empty', () => {
    const emptyArray = []
    const expectedResult = 0

    const sum = add(emptyArray)

    expect(sum).toBe(expectedResult)
  })

  test('throws an error if no array is provided', () => {
    const resultFn = () => {
      add()
    }

    expect(resultFn).toThrow(/is not iterable/)
  })

  test('throws an error if more than one array as an argument is provided', () => {
    const arg1 = 1
    const arg2 = 2

    const resultFn = () => {
      add(1, 2)
    }

    expect(resultFn).toThrow(/is not iterable/)
  })
})
