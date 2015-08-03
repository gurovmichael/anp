angular.module("demo").controller("SimpleDemoController", function($scope) {

    $scope.sourceSum = 10000;
    $scope.currentSum = function()
    {
        return $scope.selectedCategories.map(function(it)
        {
            return it.money;

        }).reduce(function(a, b) {
                return a + b;
            });
    };

    $scope.models = {
        selected: null,
        lists: {"A": [], "B": []}
    };
	        
	$scope.categories = 
        [
			{
				id: "myID1",
				name:"myname1",
				elements:[{elid:"1", label:"elname1", money:0},{elid:"2", label:"elname2", money:0}, {elid:"3", label:"elname3",money:0}]
			},
            {
                id: "myID2",
                name:"myname2",
                elements:[{elid:"1", label:"elname1"},{elid:"2", label:"elname2"}]
            },
            {
                id: "myID3",
                name:"myname3",
                elements:[{elid:"1", label:"elname1"},{elid:"2", label:"elname2"}, {elid:"3", label:"elname3"}, {elid:"3", label:"elname3"}, {elid:"3", label:"elname3"}]
            }
		];

    $scope.selectedCategories =
        [

        ]
	

    // Generate initial model
    for (var i = 1; i <= 3; ++i) {
        $scope.models.lists.A.push({label: "Item A" + i});
        $scope.models.lists.B.push({label: "Item B" + i});
    }
	
	//// Generate initial model
    //for (var i = 1; i <= 10; ++i) {
     //   $scope.cat1.A.push({label: "Item A" + i});
	//}

    // Model to JSON for demo purpose
    $scope.$watch('models', function(model) {
        $scope.modelAsJson = angular.toJson(model, true);
    }, true);

    $scope.$watch('selectedCategories', function(model) {
        $scope.modelAsJson2 = angular.toJson(model, true);
    }, true);

});
