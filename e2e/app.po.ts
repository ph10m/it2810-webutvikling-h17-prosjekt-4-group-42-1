import { $$, browser } from 'protractor';
/*
$$: CSS selector as locator
    example: $$('selector')
    is equivalent to
    element.all(by.css('.selector'));
    https://github.com/angular/protractor/blob/master/docs/locators.md

browser is a Selenium Webdriver
https://github.com/angular/protractor/blob/master/docs/browser-setup.md
*/

export class App {
  navigateTo() {
    return browser.get('/');
  }

  getNavbarElement(n) {
    // app-root a returns any <a> tags in the root and returns inline text.
    return $$('app-root a').get(n).getText();
  }

}
