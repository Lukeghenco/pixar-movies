describe("component: appAbout", function() {

  beforeEach(module('pixarMovies'));

  var appAbout;

  beforeEach(inject(function($componentController) {
    appAbout = $componentController("appAbout", {
      $scope: {}
    });
  }));

  it("can be created", function() {
    expect(appAbout).toBeDefined();
    expect(appAbout.$onInit).toBeDefined();
  });

});
