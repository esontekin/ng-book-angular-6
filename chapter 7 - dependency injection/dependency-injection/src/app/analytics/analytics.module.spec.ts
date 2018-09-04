import { AnalyticsModule } from './analytics.module';

describe('AnalyticsModule', () => {
  let analyticsModule: AnalyticsModule;

  beforeEach(() => {
    analyticsModule = new AnalyticsModule();
  });

  it('should create an instance', () => {
    expect(analyticsModule).toBeTruthy();
  });
});
