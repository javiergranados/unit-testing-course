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
})
