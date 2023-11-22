import { beforeEach, describe, expect, it } from 'vitest';
import { extractPostData } from '../posts/posts';

const TITLE = 'Test title';
const CONTENT = 'Test content';
let formData;

describe('extractPostData()', () => {
  beforeEach(() => {
    formData = {
      title: TITLE,
      content: CONTENT,
      get(identifier) {
        return this[identifier];
      },
    };
  });

  it('should extract title and content from the provided form data', () => {
    const data = extractPostData(formData);

    expect(data.title).toBe(TITLE);
    expect(data.content).toBe(CONTENT);
  });
});
