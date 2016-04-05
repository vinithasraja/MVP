angular.module('lunchbot.shorten', [])

.controller('ShortenController', function ($scope, $window, $location, Profile) {
  
  // Your code here

  $scope.profile = {
    //username :$scope.user.inputName,
    name: '',
    email: '',
    phone: '',
    location: '',
    cusine: ''

  };


  $scope.addCustomer = function () {
  console.log($scope.profile);
    Profile.addOne($scope.profile)
      .then(function () {   
        //$window.localStorage.setItem('com.customer', customer);
        $location.path('/');

      })
      .catch(function (error) {
        console.log(error);
      });
  };


 $scope.CUISINE_OPTIONS = {
    african: 'African',
    american: 'American',
    barbecue: 'Barbecue',
    cafe: 'Cafe',
    chinese: 'Chinese',
    'czech/slovak': 'Czech / Slovak',
    german: 'German',
    indian: 'Indian',
    japanese: 'Japanese',
    mexican: 'Mexican',
    pizza: 'Pizza',
    thai: 'Thai',
    vegetarian: 'Vegetarian'
  };
  });

 // .controller('ShortenController', function ($scope, $http, $timeout) {
 //    $scope.saving = false;
 //    $scope.saved = false;
 //    $scope.error = null;
 //    $scope.formModel = {
 //      givenName: $scope.user.givenName,
 //      surname: $scope.user.surname,
 //      favoriteColor: $scope.user.customData.favoriteColor
 //    };

 //    $scope.submit = function() {
 //      $scope.error = null;
 //      $scope.saving = true;
 //      $http.post('/profile',$scope.formModel)
 //        .then(function(){
 //          $scope.saved = true;
 //          $timeout(function(){
 //            $scope.saved = false;
 //          },2000);
 //        })
 //        .catch(function(httpResponse){
 //          $scope.error = httpResponse &&
 //            httpResponse.data ? (
 //              httpResponse.data.userMessage ||
 //              httpResponse.data.message ||
 //              'An error has occured'
 //            ) : 'Server error';
 //        })
 //        .finally(function(){
 //          $scope.saving = false;
 //        });
 //    };
