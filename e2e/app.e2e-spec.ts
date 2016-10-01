import { EdesiaNgPage } from './app.po';

describe('edesia-ng App', function() {
  let page: EdesiaNgPage;

  beforeEach(() => {
    page = new EdesiaNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ed works!');
  });
});
