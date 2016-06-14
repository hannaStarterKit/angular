/**
 * Created by HSIENKIE on 14.06.2016.
 */
describe('filter genre', function () {
    'use strict';

    beforeEach(module('app.component3'));

    var $filter;

    // beforeEach(inject(function (_$filter_) {
    //     $filter = _$filter_;
    // }));


    it('should return empty array', inject(function (uniqueFilter) {
        // given
       var books = [];
        // then
        expect(uniqueFilter(books, 'genre')).toEqual([]);
    }));

    it('should return genre array [it, science]', inject(function (uniqueFilter) {
        // given
        var books = [
            {
                id: 1,
                title: 'Old title',
                author: 'author',
                year: 2000,
                genre: 'it',
                version: 0
            }
        ]
        // then
        expect(uniqueFilter(books, 'genre')).toEqual(books);
    }));

    it('should return genre it, science', inject(function (uniqueFilter) {
        // given
        var books = [
            {
                id: 1,
                title: 'Old title',
                author: 'author',
                year: 2000,
                genre: 'it',
                version: 0
            },
            {
                id: 2,
                title: 'Old title',
                author: 'author',
                year: 2000,
                genre: 'science',
                version: 0
            },
            {
                id: 3,
                title: 'Old title',
                author: 'author',
                year: 2000,
                genre: 'science',
                version: 0
            }
        ],booksFiltered = [
            {
                id: 1,
                title: 'Old title',
                author: 'author',
                year: 2000,
                genre: 'it',
                version: 0
            },
            {
                id: 3,
                title: 'Old title',
                author: 'author',
                year: 2000,
                genre: 'science',
                version: 0
            }
        ];
        // when then
        expect(uniqueFilter(books, 'genre')).toEqual(booksFiltered);
    }));

});
