app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name: 'Bruschetta',
      description: "Grilled bread, garlic, tomatoes, olive oil.",
      price: 4.95
    }
  ];
  
  $scope.mains = [
    {
      name: 'Mushroom Trio',
      description: "Cremini mushrooms, Enoki mushrooms, Shiitake mushrooms, spinach, marinara sauce, mozzarella.",
      price: 8.95
    },
    {
      name: 'Burrata',
      description: "Burrata, tomato, caramelized onion, arugula, hazelnuts, pesto.",
      price: 7.95
    },
    {
      name: 'Pepperoni',
      description: "Pepperoni, marinara sauce, mozzarella, fresh oregano.",
      price: 6.95
    }
  ];
  
  $scope.sides = [
    {
      name: 'Breadsticks',
      description: "Served with marinara sauce.",
      price: 4.95
    },
    {
      name: 'Soup of the Day',
      description: "Take a chance.",
      price: 4.95
    },
    {
      name: 'Salad',
      description: "Field greens, balsmaic vinaigrette, asiago.",
      price: 4.95
    }
  ];

}]);