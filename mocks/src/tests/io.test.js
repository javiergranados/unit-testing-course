import { test, expect, describe, vi } from 'vitest'
import writeData from '../utils/io.js';
import { promises as fs } from 'fs';

vi.mock('fs')

describe('writeData()', () => {
  test('writeFile method is executed properly', () => {
    const arg1 = 'Test data'
    const arg2 = 'test.txt'

    writeData(arg1, arg2)

    expect(fs.writeFile).toBeCalled()
  })
})
