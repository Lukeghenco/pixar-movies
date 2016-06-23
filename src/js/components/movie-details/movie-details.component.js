"use strict";

function MovieDetailsController() {
  var ctrl = this

  ctrl.$routeOnActivate = function() {

  };
}

app.component("movieDetails", {
  templateUrl: '/src/js/components/movie-details/movie-details.component.html',
  controller: MovieDetailsController
});
