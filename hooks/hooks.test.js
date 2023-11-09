import { describe, test, expect } from 'vitest';

import { User } from './hooks';

describe('Class User', () => {
  test('email is updated correctly', () => {
    const arg = 'test@email.com';
    const arg2 = 'test2@email.com';

    const user = new User(arg);
    user.updateEmail(arg2);

    expect(user.email).toBe(arg2);
  });

  test('the object has the property email', () => {
    const arg = 'test@test.com';

    const user = new User(arg);

    expect(user).toHaveProperty('email');
  });

  test('the email is stored properly', () => {
    const arg = 'test@email.com';

    const user = new User(arg);

    expect(user.email).toBe(arg);
  });

  test('the email is cleared properly', () => {
    const arg = 'test@email.com';

    const user = new User(arg);
    user.clearEmail();

    expect(user.email).toBe('');
  });

  test('the property email is still after clear its value', () => {
    const arg = 'test@email.com';

    const user = new User(arg);
    user.clearEmail();

    expect(user).toHaveProperty('email');
  });
})




