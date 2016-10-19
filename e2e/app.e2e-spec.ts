import { NasaAngular2Page } from './app.po';

describe('nasa-angular2 App', function() {
  let page: NasaAngular2Page;

  beforeEach(() => {
    page = new NasaAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
