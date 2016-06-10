/**
 * Created by HSIENKIE on 10.06.2016.
 */
describe('MyModalController tests', function() {

    'use strict';

    var $scope, selectedBook = angular.noop,
        //$modalInstance = jasmine.createSpyObj('$modalInstance', ['close', 'dismiss']);
        //$modalInstance = { close: function() {}, dismiss: function() {} };
        $modalInstance = {                    // Create a mock object using spies
            close: jasmine.createSpy('modalInstance.close'),
            dismiss: jasmine.createSpy('modalInstance.dismiss'),
            result: {
                then: jasmine.createSpy('modalInstance.result.then')
            }
        };

    beforeEach(module('app.component1'));

    beforeEach(inject(function ($controller, $rootScope) {
        $scope = $rootScope.$new();
        $controller('MyModalController', {$scope: $scope, selectedBook: selectedBook, $modalInstance: $modalInstance});
    }));
//baba.element.all(by.repeater()).setSelected()
    describe('', function () {
        it('modalInstance should be dismiss', function () {
            // when
            $scope.cancel();
            // then
            expect($scope.selectedBook).toBeDefined();
            expect($modalInstance.dismiss).toHaveBeenCalled();
        });
    });

    describe('', function () {
        it('modalInstance should be close', function () {
            // when
            $scope.ok();
            // then
            expect($scope.selectedBook).toBeDefined();
            expect($modalInstance.close).toHaveBeenCalled();
        });
    });
});
