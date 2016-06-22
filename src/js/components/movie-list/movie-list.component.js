'use strict';

var app = angular.module('pixarMovies', []);

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

  ctrl.upRating = function(movie) {
    if(movie.rating < 5) {
      movie.rating += 1;
    }
  };

  ctrl.downRating = function(movie) {
    if(movie.rating > 1) {
      movie.rating -= 1;
    }
  };

}

app.component('movieList', {
  templateUrl: "/src/js/components/movie-list/movie-list.component.html",
  controller: MovieListController
});


// $onInit after instantianting of the component

// $onDestroy for when discarding a component

// $on Changes when a componet is updated

// $postLink for updating a directive like object
