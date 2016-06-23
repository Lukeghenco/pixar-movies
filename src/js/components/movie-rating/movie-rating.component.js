'use strict';

function buildEntries(value, max) {
  var entries = [];

  for (var i = 1; i <= max; i++) {
    var icon = (i <= value ? "glyphicon-star" : "glyphicon-star-empty");
    entries.push(icon)
  }

  return entries;
}

function MovieRatingController() {

  var ctrl = this;

  ctrl.$onInit = function() {
    ctrl.entries = buildEntries(ctrl.value, ctrl.max);
  };

  ctrl.$onChanges = function() {
    ctrl.entries = buildEntries(ctrl.value, ctrl.max);
  };
}

app.component('movieRating', {
  templateUrl: "/src/js/components/movie-rating/movie-rating.component.html",
  bindings: {
    value: "<", //  "<" == input
    max: "<",
    setRating: "&" // "&" == Event passes info to the parent component
  },
  controller: MovieRatingController
});
