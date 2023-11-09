import { test, expect, describe } from 'vitest'
import { generateToken, generateTokenPromise } from './async'

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

describe('generateTokenPromise()', () => {
  test('token is generated correctly', () => {
    const arg = 'test@email.com'
    const result = generateTokenPromise(arg)

    return expect(result).resolves.toBeDefined()
  })

  test('token generated is a string value', async () => {
    const arg = 'test@email.com'
    const result = await generateTokenPromise(arg)

    expect(result).toBeTypeOf('string')
  })
})
