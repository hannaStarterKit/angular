angular.module('app.component3').controller('MySecondController', function($scope, booksFromDialogA, bookService, $filter){

    $scope.booksDialogC = bookService.getData();

}).filter('unique', function() {
    return function (arr, field) {
        var o = {}, i, l = arr.length, r = [];
        console.log(arr);
        console.log(field);
        for(i=0; i<l;i+=1) {
            console.log(arr[i][field]);
            o[arr[i][field]] = arr[i];
        }
        console.log(o);
        console.log(i);
        for(i in o) {
            console.log(i);
            r.push(o[i]);
        }
        return r;
    };
});
