import { DebuggingAppPage } from './app.po';

describe('debugging-app App', () => {
  let page: DebuggingAppPage;

  beforeEach(() => {
    page = new DebuggingAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
