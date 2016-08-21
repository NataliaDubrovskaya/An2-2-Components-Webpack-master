import { An22ComponentsWebpackPage } from './app.po';

describe('an2-2-components-webpack App', function() {
  let page: An22ComponentsWebpackPage;

  beforeEach(() => {
    page = new An22ComponentsWebpackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
