angular.module('lunchbot.links', [])

.controller('LinksController', function ($scope, Profile) {
  // Your code here

  $scope.data = {};

  var initializeLinks = function () {
    Profile.getAll()
      .then(function (profile) {
        $scope.data.profile = profile;
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  initializeLinks();
  });
