"use strict";

function MovieDetailsController() {
  var ctrl = this

  ctrl.$routerOnActivate = function(next) {
    ctrl.id = next.params.id;
  };
}

app.component("movieDetails", {
  templateUrl: '/src/js/components/movie-details/movie-details.component.html',
  // Setting up delay before component starts
  // $canActivate: function($timeout) {
  //   return $timeout(function() {
  //     return true;
  //   }, 2000);
  // },
  $routeConfig: [
    { path: "/overview", component: "movieOverview", name: "Overview" },
    { path: "/cast", component: "movieCast", name: "Cast" },
    { path: "/director", component: "movieDirector", name: "Director" }
  ],
  controller: MovieDetailsController
});


app.component("movieOverview", {
  template: "This is the overview"
});

app.component("movieCast", {
  template: "This is info about the cast"
});

app.component("movieDirector", {
  template: "This contains info about the director"
});
