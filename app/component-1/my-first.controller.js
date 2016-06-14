angular.module('app.component1').service('bookService', function(){
    var data = undefined;

    return {
        getData: function () {
            return data;
        },
        setData: function(value) {
            data = value;
        },

        pushData: function(book) {
            data.push(book);
        }
    };
}).controller('MyFirstController', function($scope, books, $modal, bookService){
    'use strict'
    $scope.book = [];
    if (bookService.getData() === undefined) {
        angular.copy(books.data, $scope.book);
        bookService.setData($scope.book);
    }else {
        angular.copy(bookService.getData(), $scope.book);
    }


    var id = $scope.book.length+1;
    var firstnames = ['Laurent', 'Blandine', 'Olivier', 'Max'];
    var authors = ['Renard', 'Faivre', 'Frere', 'Eponge'];
    var dates = ['1987-05-21', '1987-04-25', '1955-08-27', '1966-06-06'];

    function generateRandomItem(id) {

        var title = firstnames[Math.floor(Math.random() * 3)];
        var author = authors[Math.floor(Math.random() * 3)];
        var birthdate = dates[Math.floor(Math.random() * 3)];
        var balance = Math.floor(Math.random() * 2000);

        return {
            title: title,
            author: author,
            year: new Date(birthdate),
            genre: balance,
            version: balance
        }
    }

    //add to the real data holder
    $scope.addRandomItem = function addRandomItem() {
        $scope.book.push(generateRandomItem(id));
        id++;
    };

    //remove to the real data holder
    $scope.removeItem = function removeItem(row) {
        var index = $scope.book.indexOf(row);
        if (row === $scope.selectedBook){
            $scope.selectedBook = undefined;
        }
        if (index !== -1) {
            $scope.book.splice(index, 1);
        }
    };

    $scope.edit = function edit() {
        var bookModal = $modal.open({
            templateUrl: 'component-1/modal-dialog/modal-dialog.html',
            controller: 'MyModalController',
            resolve: {
                selectedBook: function () {
                    return $scope.selectedBook;
                }
            }
        });

        bookModal.result.then(function (newBook) {
            console.log(newBook);
            $scope.selectedBook.title = angular.copy(newBook.title);
            $scope.selectedBook.author = angular.copy(newBook.author);
            $scope.selectedBook.year = angular.copy(newBook.year);
            $scope.selectedBook.genre = angular.copy(newBook.genre);
            $scope.selectedBook.version = angular.copy(newBook.version);
        }, function () {
            console.log('Modal dismissed at: ' + new Date());
        });
    };

    var config = {
        headers : {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
        }
    }

    $scope.add = function add() {
        $scope.newBook = undefined;
        var bookModal = $modal.open({
            templateUrl: 'component-1/modal-dialog/modal-dialog.html',
            controller: 'MyModalController',
            resolve: {
                selectedBook: function () {
                    return $scope.newBook;
                }
            }
        });

        bookModal.result.then(function (newBook) {
            newBook.id = $scope.book.length+1;
            bookService.pushData(newBook);
        }, function () {
            console.log('Modal dismissed at: ' + new Date());
        });
    };

    $scope.selectedBook = undefined;
    $scope.setSelected = function(selectedBook) {
        $scope.selectedBook = selectedBook;
    }

}).controller('MyModalController', function($scope, $modalInstance, selectedBook){

    $scope.selectedBook = angular.copy(selectedBook);
    $scope.ok = function () {
        $modalInstance.close($scope.selectedBook);

    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };

    // $scope.dateOptions = {
    //     formatYear: 'yyyy',
    //     startingDay: 1,
    //     minMode: 'year',
    //     changeMonth: false,
    //     minViewMode: "year"
    // };
    //
    // $scope.formats = ['yyyy'];
    // $scope.format = $scope.formats[0];
    //
    // $scope.status = {
    //     opened: false
    // };

    $scope.today = function() {
        $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function () {
        $scope.dt = null;
    };

    // Disable weekend selection
    $scope.disabled = function(date, mode) {
        return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
    };

    $scope.toggleMin = function() {
        $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();

    $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.opened = true;
    };

    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1,
        minMode: 'year',
        minViewMode: "year"
    };

    $scope.formats = ['yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];

}).factory('StringService', function () {

    function IllegalArgumentException(message) {
        this.message = message;
    }

    // Create a new object, that prototypically inherits from the Error constructor
    function MyError(message) {
        this.name = 'IllegalArgumentException';
        this.message = message || 'Default Message';
        this.stack = (new Error()).stack;
    }
    MyError.prototype = Object.create(Error.prototype);
    MyError.prototype.constructor = MyError;

    var r =  function reverse(input) {
        if(typeof input === 'string') {
            var output = '';
            for (var i = input.length - 1; i >= 0; i--)
                output += input[i];
                return output;
        }
        else{
            throw new MyError('Argument must be string');
        }
    },

    a = function append(first, second){
        if(typeof first === 'string' && typeof second === 'string') {
            var output = '';
            output = first + second;
            return output;
        }
        else{
            throw new MyError('Arguments must be string');
        }
    },

    i =  function insert(input, where, what) {
        if(typeof input === 'string' && typeof what === 'string' && typeof where === 'number') {
            var output = '';
            for (var j = 0; j < input.length; j--)
                if(j === where){
                    output += what;
                }
                output += input[j];
                return output;
        }
        else{
            throw new MyError('Argument must be string and number');
        }
    },

    s =  function shuffle(input1, input2) {
        if(typeof input1 === 'string' && typeof input2 === 'string') {
            var output = '';
            for (var j = 0; j < input1.length; j--)
                output += input1[j];
                if(j < input2.length) {
                    output += input2[j];
                }
                return output;
        }
        else{
            throw new MyError('Argument must be string and number');
        }
    },

    f =  function find(input, what) {
        if(typeof input === 'string' && typeof what === 'string') {
            if (what.length > 1){
                throw new MyError('Argument 2 must have 1 char');
            }
            var index = -1;
            for (var j = 0; j < input.length; j--) {
                if (what === input[j]) {
                    return j;
                }
            }
            return index;
        }
        else{
            throw new MyError('Arguments must be strings');
        }
    };

    return{
        reverse: function reverse(stringToReverse) {
            return r(stringToReverse);
        },

        append: function append(first, second){
            return a(first, second);
        },

        insert: function insert(input, where, what) {
            return i(input, where, what);
        },

        shuffle: function shuffle(input1, input2) {
            return s(input1, input2);
        },

        find: function find(input, what) {
            return f(input, what)
        }
    }

});
