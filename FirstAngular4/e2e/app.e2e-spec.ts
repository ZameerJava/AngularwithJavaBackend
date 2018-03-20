import { FirstAngular4Page } from './app.po';

describe('first-angular4 App', () => {
  let page: FirstAngular4Page;

  beforeEach(() => {
    page = new FirstAngular4Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
