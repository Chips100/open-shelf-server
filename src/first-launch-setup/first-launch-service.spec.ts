import { FirstLaunchService } from './first-launch-service';

describe('FirstLaunchService', () => {
  it('should add numbers', () => {
    const sut = new FirstLaunchService();
    expect(sut.add(4, 4)).toEqual(8);
  });
});