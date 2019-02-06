import { Repository } from './repository';

describe('User', () => {
  it('should create an instance', () => {
    expect(new Repository('','',0,0,0, '','',new Date)).toBeTruthy();
  });
});