describe("component: movieApp", function() {

  beforeEach(module('pixarMovies'));

  var movieApp;

  beforeEach(inject(function($componentController) {
    movieApp = $componentController("movieApp", {
      $scope: {}
    });
  }));

  it("can be created", function() {
    expect(movieApp).toBeDefined();
    expect(movieApp.$onInit).toBeDefined();
  });

});
