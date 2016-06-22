'use strict';

var app = angular.module('pixarMovies');

function MovieRatingController() {

  var ctrl = this;

  ctrl.$onInit = function() {
    ctrl.entries = new Array(ctrl.value);
  };

  ctrl.$onChanges = function() {
    ctrl.entries = new Array(ctrl.value);
  };
}

app.component('movieRating', {
  templateUrl: "/src/js/components/movie-rating/movie-rating.component.html",
  bindings: {
    value: "<" // input
  },
  transclude: true,
  controller: MovieRatingController
});
