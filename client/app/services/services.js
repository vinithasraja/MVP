angular.module('lunchbot.services', [])

.factory('Profile', function ($http) {
  // Your code here

  var getAll = function () {
    return $http({
      method: 'GET',
      url: '/api/shorten'
    })
    .then(function (resp) {
      console.log('get response' ,resp.data);
      return resp.data;
    });
  };

  var addOne = function (profile) {
    console.log(profile);
    return $http({
      method: 'POST',
      url: '/api/shorten',
      data: profile
    })
    .then (function(resp) {
      console.log('post request' ,resp.data);

      return resp.data;
    });
  };

  return {
    getAll: getAll,
    addOne: addOne
  };
  });



// //MVP
// .factory('Auth', function ($http, $location, $window) {
//   // Don't touch this Auth service!!!
//   // it is responsible for authenticating our user
//   // by exchanging the user's username and password
//   // for a JWT from the server
//   // that JWT is then stored in localStorage as 'com.shortly'
//   // after you signin/signup open devtools, click resources,
//   // then localStorage and you'll see your token from the server
//   var signin = function (user) {
//     return $http({
//       method: 'POST',
//       url: '/api/users/signin',
//       data: user
//     })
//     .then(function (resp) {
//       return resp.data.token;
//     });
//   };

//   var signup = function (user) {
//     return $http({
//       method: 'POST',
//       url: '/api/users/signup',
//       data: user
//     })
//     .then(function (resp) {
//       return resp.data.token;
//       //what is token here?
//     });
//   };

//   var isAuth = function () {
//     return !!$window.localStorage.getItem('com.shortly');
//   };
// //How to access $local.storage
//   var signout = function () {
//     $window.localStorage.removeItem('com.shortly');
//     $location.path('/signin');
//   };


//   return {
//     signin: signin,
//     signup: signup,
//     isAuth: isAuth,
//     signout: signout
//   };
// });
