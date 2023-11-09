import { test, expect, describe } from 'vitest'
import writeData from '../utils/io.js';

describe('writeData()', () => {
  test('writeFile method is executed properly', async () => {
    const arg1 = 'Test data'
    const arg2 = 'test.txt'

    const result = await writeData(arg1, arg2)

    expect(result).toBeUndefined()
  })
})
