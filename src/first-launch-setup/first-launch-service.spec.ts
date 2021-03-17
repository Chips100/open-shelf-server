import { FirstLaunchService } from './first-launch-service';

describe('FirstLaunchService', () => {
  it('should indicate that the first launch has not been completed', () => {
    const sut = new FirstLaunchService();
    expect(sut.firstLaunchCompleted()).toBeFalsy();;
  });
});