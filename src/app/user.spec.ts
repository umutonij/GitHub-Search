import { User } from './user';

describe('User', () => {
  it('should create an instance', () => {
    expect(new User('',0,0,0)).toBeTruthy();
  });
});
