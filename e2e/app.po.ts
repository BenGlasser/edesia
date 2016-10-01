import { browser, element, by } from 'protractor';

export class EdesiaNgPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ed-root h1')).getText();
  }
}
