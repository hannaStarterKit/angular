/**
 * Created by HSIENKIE on 14.06.2016.
 */
describe('filter genre', function () {
    beforeEach(function () {
        module('app.component3');
    });
    it('has a genre filter', inject(function ($filter) {
        expect($filter('unigue')).not.toBeNull();
    }));
    it('should return genre it', inject(function (uniqueFilter) {
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
        expect(uniqueFilter(books, genre)).toEqual('it');
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
            }
        ]
        // then
        expect(uniqueFilter(books, genre)).toEqual(['it', 'science']);
    }));

});
