import { test, expect, describe, vi } from 'vitest'
import { generateReportData } from '../data';

describe('generateReportData()', () => {
  test('callback function is executed if its provided', async () => {
    const argFn = vi.fn()

    generateReportData(argFn)

    expect(argFn).toHaveBeenCalledTimes(1)
  })
})
