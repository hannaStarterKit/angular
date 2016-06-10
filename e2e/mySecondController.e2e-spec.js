/**
 * Created by HSIENKIE on 10.06.2016.
 */

/*global browser*/

describe('MySecondController test', function () {
    'use strict';

    it('should add new book to books in dialog a and show them in dialog C', function () {
        // given
        browser.get('#/component-1/dialog-a');
        element(by.buttonText('Add')).click();
        element(by.model('selectedBook.title')).sendKeys('title');
        element(by.model('selectedBook.author')).sendKeys('author');
        element(by.buttonText('OK')).click();
        // when
        element(by.linkText('Dialog C')).click();
        // then
        expect(element.all(by.repeater('row2 in booksDialogC')).count()).toEqual(6);
    });

    it('should choose genre "genre"', function(){
        // given
        browser.get('#/component-1/dialog-a');
        element(by.buttonText('Add')).click();
        element(by.model('selectedBook.title')).sendKeys('title');
        element(by.model('selectedBook.author')).sendKeys('author');
        element(by.model('selectedBook.genre')).sendKeys('genre');
        element(by.buttonText('OK')).click();
        element(by.linkText('Dialog C')).click();
        // when
        element(by.id('searchGenre')).click();
        element(by.cssContainingText('option', 'genre')).click();
        // then
        expect(element.all(by.repeater('row2 in booksDialogC')).count()).toEqual(1);
    });

});
