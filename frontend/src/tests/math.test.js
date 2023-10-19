import { test, expect, describe } from 'vitest'
import { add } from '../math'


describe('Func add', () => {
  test('summarize all number values in an array', () => {
    const sum = add([1,2,3])
    expect(sum).equals(6)
  })
})

// ver diferencias equals y tobe en vistest
