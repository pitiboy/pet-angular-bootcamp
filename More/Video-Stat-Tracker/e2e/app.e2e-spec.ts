import { VideoStatTrackerPage } from './app.po';

describe('video-stat-tracker App', function() {
  let page: VideoStatTrackerPage;

  beforeEach(() => {
    page = new VideoStatTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
