import { describe, test, expect, beforeEach } from 'vitest';
import { User } from './hooks';

const arg = 'test@email.com';
let user;

describe('Class User', () => {
  beforeEach(() => {
    user = new User(arg);
  })

  test('email is updated correctly', () => {
    const arg2 = 'test2@email.com';

    user.updateEmail(arg2);

    expect(user.email).toBe(arg2);
  });

  test('the object has the property email', () => {
    expect(user).toHaveProperty('email');
  });

  test('the email is stored properly', () => {
    expect(user.email).toBe(arg);
  });

  test('the email is cleared properly', () => {
    user.clearEmail();

    expect(user.email).toBe('');
  });

  test('the property email is still after clear its value', () => {
    user.clearEmail();

    expect(user).toHaveProperty('email');
  });
})




