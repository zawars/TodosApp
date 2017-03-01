import { TodosAppPage } from './app.po';

describe('todos-app App', function() {
  let page: TodosAppPage;

  beforeEach(() => {
    page = new TodosAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
