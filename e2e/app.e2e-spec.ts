import { Meritus.Frontend.WebPage } from './app.po';

describe('meritus.frontend.web App', () => {
  let page: Meritus.Frontend.WebPage;

  beforeEach(() => {
    page = new Meritus.Frontend.WebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
