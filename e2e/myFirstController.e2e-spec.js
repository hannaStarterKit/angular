/**
 * Created by HSIENKIE on 10.06.2016.
 */

/*global browser*/

describe('MyFirstController test', function () {
    'use strict';

    it('should add new book to books', function () {
        // given
        browser.get('#/component-1/dialog-a');
        element(by.buttonText('Add')).click();
        element(by.model('selectedBook.title')).sendKeys('title');
        element(by.model('selectedBook.author')).sendKeys('author');
        // when
        element(by.buttonText('OK')).click();
        // then
        expect(element.all(by.repeater('row in book')).count()).toEqual(6);

    });

    it('should edit title of first book in books', function () {
        // given
        browser.get('#/component-1/dialog-a');
        var firstBook = element(by.repeater('row in book').row(0));
        firstBook.click();
        element(by.id('edit')).click();
        element(by.model('selectedBook.title')).clear().sendKeys('title');
        // when
        element(by.buttonText('OK')).click();
        // then
        expect(element(by.repeater('row in book').row(0).column('row.title')).getText()).toEqual('title');

    });

    it('should add any book to books', function () {
        // given
        browser.get('#/component-1/dialog-a');
        element(by.buttonText('Add')).click();
        element(by.model('selectedBook.title')).sendKeys('title');
        element(by.model('selectedBook.author')).sendKeys('author');
        // when
        element(by.buttonText('Cancel')).click();
        // then
        expect(element.all(by.repeater('row in book')).count()).toEqual(5);

    });

    it('should edit nothing in first book in books', function () {
        // given
        browser.get('#/component-1/dialog-a');
        var firstBook = element(by.repeater('row in book').row(0));
        firstBook.click();
        element(by.id('edit')).click();
        element(by.model('selectedBook.title')).clear().sendKeys('title');
        // when
        element(by.buttonText('Cancel')).click();
        // then
        expect(element(by.repeater('row in book').row(0).column('row.title')).getText()).toEqual('Code Complete');

    });
    it('should display edit button when book is selected', function () {
        // given
        browser.get('#/component-1/dialog-a');
        var firstBook = element(by.repeater('row in book').row(0));
        expect(element(by.id('edit')).isDisplayed()).toBe(false);
        // when
        firstBook.click();
        // then
        expect(element(by.id('edit')).isDisplayed()).toBe(true);
    });

});
