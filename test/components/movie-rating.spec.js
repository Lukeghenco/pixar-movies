describe("component: movieRating", function() {

  beforeEach(module('pixarMovies'));

  var movieRating

  beforeEach(inject(function($componentController) {
    movieRating = $componentController("movieRating", {
      $scope: {}
    });
  }));

  it("can be created", function() {
    expect(movieRating).toBeDefined();
    expect(movieRating.$onInit).toBeDefined();
  });
  
});
