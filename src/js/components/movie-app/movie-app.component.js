'use strict';

app.component("movieApp", {
  templateUrl: "/src/js/components/movie-app/movie-app.component.html",
  $routeConfig: [
    { path: "/list", component: "movieList", name: "List" },
    { path: "/about", component: "appAbout", name: "About"},
    { path: "/detail/:id/...", component: "movieDetails", name: "Details" },
    { path: "/**", redirectTo: ["List"] }
  ]
});
