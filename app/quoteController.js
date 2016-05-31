angular.module('quoteBook').controller('quoteController', function($scope, quoteService) {

    $scope.test = "Your mom";

    $scope.getQuotes = function() {
      $scope.quotes = quoteService.getQuotes();
    }

    $scope.getQuotes();

    $scope.deleteQuote = function(idx) {
      $scope.quotes.splice(idx, 1);
    }

    $scope.addQuote = function() {
      quoteService.addQuote($scope.newQuote);
      console.log($scope.newQuote);
      $scope.newQuote = "";
      $scope.getQuotes();
    }

    $scope.saveData = function() {
      localStorage.quotes = JSON.stringify($scope.quotes);
      console.log(localStorage.quotes);
    }

});
