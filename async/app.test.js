import { test, expect, describe } from 'vitest'
import { generateToken } from './app'

describe('generateToken()', () => {
  test('token is generated correctly', (doneFn) => {
    const arg = 'test@email.com'
    const callback = (err, token) => {
      try {
        expect(token).toBeDefined()
        doneFn()
      } catch (error) {
        doneFn(error)
      }
    }

    generateToken(arg, callback)
  })
})
