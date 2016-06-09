angular.module('app.component2').controller('postController', function($scope, $http) {

    $scope.SendData = function () {
        // // use $.param jQuery function to serialize data from JSON
        // var data =JSON.stringify({
        //         title: "hahah",
        //         author: "hshsh",
        //         status: 'FREE'
        // });
        //
        var config = {
            headers : {
                'POST': '/webstore/book HTTP/1.1',
                'Host': 'localhost:8080',
                'Content-Type': 'application/json;charset=UTF-8',
                'Cache-Control': 'no-cache',
                'Access-Control-Allow-Origin': 'true'
            }
        }

        // $http.post('http://localhost:8080/webstore/book', data, config)
        //     .success(function (data, status, headers, config) {
        //         $scope.PostDataResponse = data;
        //     })
        //     .error(function (data, status, header, config) {
        //         $scope.ResponseDetails = "Data: " + data +
        //             "<hr />status: " + status +
        //             "<hr />headers: " + header +
        //             "<hr />config: " + config;
        //     });

        // var settings = {
        //     "async": true,
        //     "crossDomain": true,
        //     "url": "http://localhost:8080/webstore/book",
        //     "method": "POST",
        //     "headers": {
        //         "content-type": "application/json",
        //         "cache-control": "no-cache",
        //         "postman-token": "b26018a3-0ad0-c2e2-ab6f-17fbafa32356"
        //     },
        //     "processData": false,
        //     "data": "\n  {\n    \"title\": \"Sd book\",\n    \"authors\": \"Zbigniew Nowak\",\n    \"status\": \"FREE\"\n  }\n"
        // }
        //
        // $.ajax(settings).done(function (response) {
        //     console.log(response);
        // });


        var data = JSON.stringify({
            "title": "Sd book",
            "authors": "Zbigniew Nowak",
            "status": "FREE"
        });

        // var xhr = new XMLHttpRequest();
        // xhr.withCredentials = true;
        //
        // xhr.addEventListener("readystatechange", function () {
        //     if (this.readyState === 4) {
        //         console.log(this.responseText);
        //     }
        // });
        //
        // xhr.open("POST", "http://localhost:8080/webstore/book");
        // xhr.setRequestHeader("content-type", "application/json");
        // xhr.setRequestHeader("cache-control", "no-cache");
        // //xhr.setRequestHeader("postman-token", "eb44ff5f-7aa0-9bf1-140b-d0f380c84f97");
        //
        // xhr.send(data);

        // Simple GET request example:
        $http({
            method: 'POST',
            url: 'http://localhost:8080/webstore/book'
        }).then(function successCallback(response) {
            scope.PostDataResponse = response;
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });

// shortcut methods
        $http.post('http://localhost:8080/webstore/book', data, config).then(successCallback, errorCallback);

    };

});

