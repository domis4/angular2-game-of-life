import { Angular2GameOfLifePage } from './app.po';

describe('angular2-game-of-life App', function() {
  let page: Angular2GameOfLifePage;

  beforeEach(() => {
    page = new Angular2GameOfLifePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
