'use strict';

// var app = angular.module('pixarMovies', []);

function fetchMovies($http){
  return $http.get("data/movies.json")
            .then(function(res) {
              return res.data;
            });
}

function MovieListController($http) {

  var ctrl = this

  ctrl.movies = []

  ctrl.$onInit = function() {
    fetchMovies($http).then(function(movies) {
      ctrl.movies = movies;
    });
  };

  ctrl.goTo = function(id) {
    ctrl.$router.navigate(["Details", { id: id }, "Overview"]);
  };

  ctrl.setRating = function(movie, newRatingValue) {
    movie.rating = newRatingValue;
  };

  ctrl.upRating = function(movie) {
    if (movie.rating < 5) {
      movie.rating += 1;
    }
  };

  ctrl.downRating = function(movie) {
    if (movie.rating > 1) {
      movie.rating -= 1;
    }
  };



}

app.component('movieList', {
  templateUrl: "/src/js/components/movie-list/movie-list.component.html",
  controller: MovieListController,
  bindings: {
    "$router": "<"
  }
});
