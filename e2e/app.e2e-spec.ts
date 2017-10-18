import { ChartsSpikePage } from './app.po';

describe('charts-spike App', () => {
  let page: ChartsSpikePage;

  beforeEach(() => {
    page = new ChartsSpikePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
