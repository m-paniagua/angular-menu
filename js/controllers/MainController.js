app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95,
      image: 'img/caprese.jpg'
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95,
      image: 'img/mozzarella.jpg'
    },
    {
      name: 'Bruschetta',
      description: "Grilled bread, garlic, tomatoes, olive oil.",
      price: 4.95,
      image: 'img/bruschetta.jpg'
    }
  ];
  
  $scope.mains = [
    {
      name: 'Mushroom Trio',
      description: "Cremini mushrooms, Enoki mushrooms, Shiitake mushrooms, spinach, marinara sauce, mozzarella.",
      price: 8.95,
      image: 'img/mushroom.jpg'
    },
    {
      name: 'Burrata',
      description: "Burrata, tomato, caramelized onion, arugula, hazelnuts, pesto.",
      price: 7.95,
      image: 'img/burrata.jpg'
    },
    {
      name: 'Pepperoni',
      description: "Pepperoni, marinara sauce, mozzarella, fresh oregano.",
      price: 6.95,
      image: 'img/peppizza.jpg'
    }
  ];
  
  $scope.sides = [
    {
      name: 'Breadsticks',
      description: "Served with marinara sauce.",
      price: 4.95,
      image: 'img/breadsticks.jpg'
    },
    {
      name: 'Soup of the Day',
      description: "Take a chance.",
      price: 4.95,
      image: 'img/soup.jpg'
    },
    {
      name: 'Salad',
      description: "Field greens, balsmaic vinaigrette, asiago.",
      price: 4.95,
      image: 'img/salad.jpg'
    }
  ];

}]);