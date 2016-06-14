describe('MyFirstController tests', function() {

    'use strict';

    var $scope, $modal, booksMock = angular.noop;

    beforeEach(module('app.component1'));

    beforeEach(inject(function($controller, $rootScope, _$modal_){
        $scope = $rootScope.$new();
        $modal = _$modal_;
        $controller('MyFirstController', {$scope: $scope, books: booksMock, $modal: $modal});
    }));

    describe('$scope.book', function() {
        it('books should be defined', function() {
            // then
            expect($scope.book).toBeDefined();
            expect($scope.book.length).toBe(0);
        });
    });


    describe('$scope.book', function() {
        it('should edit book', function() {
            // given
            var editBook = {
                id: 1,
                title: 'New title',
                author: 'author',
                year: 2000,
                genre: 'it',
                version: 0
            }, fakeModal = {
                result: {
                    then: function(confirmCallback, cancelCallback) {
                        //Store the callbacks for later when the user clicks on the OK or Cancel button of the dialog
                        this.confirmCallBack = confirmCallback;
                        this.cancelCallback = cancelCallback;
                    }
                },
                close: function( editBook ) {
                    //The user clicked OK on the modal dialog, call the stored confirm callback with the selected item
                    this.result.confirmCallBack( editBook );
                },
                dismiss: function( type ) {
                    //The user clicked cancel on the modal dialog, call the stored cancel callback
                    this.result.cancelCallback( type );
                }
            };
            $scope.book = [
                {
                    id: 1,
                    title: 'Old title',
                    author: 'author',
                    year: 2000,
                    genre: 'it',
                    version: 0
                }
            ];
            $scope.selectedBook = $scope.book[0];
            //spyOn($modalInstance, 'close').and.returnValue(editBook);
            spyOn($modal, 'open').and.returnValue(fakeModal);
            // when
            $scope.edit();
            // then
            expect($scope.book).toBeDefined();
            expect($modal.open).toHaveBeenCalledWith({
                templateUrl: 'component-1/modal-dialog/modal-dialog.html',
                controller: 'MyModalController',
                resolve: {
                    selectedBook: jasmine.any(Function)
                }
            });
            //expect($scope.book[0]).toBe(editBook);
        });
    });
});
