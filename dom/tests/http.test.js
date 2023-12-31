import { vi, describe, it, expect } from 'vitest';
import { sendDataRequest } from '../util/http';
import { HttpError } from '../util/errors';

const PARAMS = { key: 'Test' }
const MOCKED_RESPONSE = { key: 'Response Data' };

const mockedErrorFetchImplementation = () => {
  return new Promise((resolve) => {
    resolve({
      ok: false,
      json() {
        return new Promise((resolve, reject) => {
          resolve(MOCKED_RESPONSE);
        });
      },
    });
  });
}

const mockedFetch = vi.fn((_url, options) => {
  return new Promise((resolve, reject) => {
    if (typeof options.body !== 'string') {
      return reject('Not a string.');
    }
    resolve({
      ok: true,
      json() {
        return new Promise((resolve) => {
          resolve(MOCKED_RESPONSE);
        });
      },
    });
  });
});

vi.stubGlobal('fetch', mockedFetch)

describe('sendDataRequest()', () => {
  it('should returns any available response data', async () => {
    const resultFn = () => sendDataRequest(PARAMS)

    const result = await resultFn()

    expect(result).toEqual(MOCKED_RESPONSE);
  })

  it('should convert the provided data to JSON before sending the request', async () => {
    let errorMessage;

    try {
      await sendDataRequest(PARAMS);
    } catch (error) {
      errorMessage = error;
    }

    expect(errorMessage).not.toBe('Not a string.');
  });

  it('should throw an HttpError in case of non-ok responses', () => {
    mockedFetch.mockImplementationOnce(mockedErrorFetchImplementation);

    const resultFn = () => sendDataRequest(PARAMS)

    return expect(resultFn()).rejects.toBeInstanceOf(HttpError);
  });
});
