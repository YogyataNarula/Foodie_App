var foodieApp=angular.module('foodieApp',['ngRoute']);

foodieApp.config(function ($routeProvider) {
    $routeProvider
        .when('/',{
            templateUrl: 'pages/loginTemplate.html',
            controller: 'loginController'
        })
        .when('/home',{
            templateUrl: 'pages/mainTemplate.html',
            controller: 'mainController'
        })
        .when('/restaurant/:id', {
            templateUrl: 'pages/restaurant.html',
            controller: 'restaurantController'
        })
})


foodieApp.controller("mainController",function($scope) {

    // $scope.restaurants=['Farzi Cafe','Pizza Hut','Wenger\'s Deli','Sagar Ratna'];
    $scope.restaurants = [{
        id:1,
        name: 'Farzi Cafe',
        address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
        location: 'Connaught Place',
        category: 'Casual Dining, Bar',
        vote: '4.2',
        cuisines: 'Modern Indian',
        cost: '2200',
        hours: '12 Noon to 1 AM (Mon-Sun)',
        bestDish: {
            name: 'Corn Pizza',
            image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
        },
        image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
    },
        {
            id:2,
            name: 'Khan Chacha',
            address: 'D-3, Connaught Place, New Delhi',
            location: 'Connaught Place',
            category: 'Dine out Restaurant',
            vote: '3.7',
            cuisines: 'Mughlai,North indian,Rolls',
            cost: '600',
            hours: '12 Noon to 11 PM (Mon-Sun)',
            image: 'https://previews.123rf.com/images/tul/tul1109/tul110900059/10746852-spring-roll-Stock-Photo-food-thai-spring.jpg'
        },
        {
            id:3,
            name: 'Glenz Cafe & bakers',
            address: '5/2, WEA, Saraswati Marg, Opposite Swati Hotel, Karol Bagh, New Delhi',
            location: 'Karol Bagh',
            category: 'Cafe',
            vote: '3.7',
            cuisines: 'Cafe',
            cost: '700',
            hours: '7:30AM to 11PM (Mon-Sun)',
            image: 'https://previews.123rf.com/images/subbotina/subbotina1312/subbotina131200142/24732122-Coffee-Espresso-Cup-Of-Coffee-Stock-Photo.jpg'
        },
        {
            id:4,
            name: 'Burger king',
            address: 'E-8, Inner Circle, Connaught Place, New Delhi',
            location: 'Connaught Place',
            category: 'Fast Food Corner',
            vote: '3.8',
            cuisines: 'Burger,Fast Food',
            cost: '500',
            hours: '10AM to 11PM (Mon-Sun)',
            image: 'https://previews.123rf.com/images/foodandmore/foodandmore1506/foodandmore150600023/40950943-Close-Up-of-Burger-Piled-High-with-Fresh-Toppings-on-Whole-Grain-Artisan-Bun-on-Rustic-Wooden-Surfac-Stock-Photo.jpg'
        },
        {
            id:5,
            name: 'Costa Coffee',
            address: 'Shop 49, Bengali Market, Barakhamba Road, New Delhi',
            location: 'Barakhamba Road',
            category: 'Cafe',
            vote: '3.4',
            cuisines: 'Cafe',
            cost: '600',
            hours: '9AM to 11PM (Mon-Sun)',
            bestDish: {
                name: 'Corn Pizza',
                image: 'https://noblepig.com/images/2017/05/Chocolate-Avocado-Green-Smoothie-xo-1.jpg'
            },
            image: 'https://previews.123rf.com/images/subbotina/subbotina1307/subbotina130700103/20793597-Cappuccino-Cup-of-Cappuccino-Coffee-Stock-Photo-cappuccino-hot-restaurant.jpg'
        },
        {
            id:6,
            name: 'Creme N Crisp',
            address: '97, Bangla Sahib Road, Gole Market, New Delhi',
            location: 'Gole market',
            category: 'Bakery',
            vote: '3.8',
            cuisines: 'Bakery,Desserts,Fast Food',
            cost: '250',
            hours: '9AM to 10.30PM (Mon-Sun)',
            image: 'https://previews.123rf.com/images/malinkaphoto/malinkaphoto1602/malinkaphoto160200065/53996839-Pastry-in-bakery-Stock-Photo-products.jpg'
        },
        {
            id:7,
            name: 'Jungle Jamboree',
            address: 'P-17/90, Outer Circle, Connaught Place, New Delhi',
            location: 'Connaught Place',
            category: 'Dine out Restaurants',
            vote: '3.8',
            cuisines: 'North Indian, Continental, Chinese, Italian, Thai, Mughlai',
            cost: '1200',
            hours: '11:45AM to 11.30PM (Mon-Sun)',
            bestDish: {
                name: 'Corn Pizza',
                image: 'https://noblepig.com/images/2017/06/Cucumber-Edamame-Salad-with-Ginger-Soy-Vinaigrette-cover.jpg'
            },
            image: 'https://previews.123rf.com/images/alexraths/alexraths1507/alexraths150700078/43282967-Various-herbs-and-spices-on-wooden-table-Stock-Photo-restaurant-menu-wood.jpg'
        },
        {
            id:8,
            name: 'Tourist janpath',
            address: '1, Scindia House, Janpath Road, Janpath, New Delhi',
            location: 'Janpath',
            category: 'Casual Dining',
            vote: '4.0',
            cuisines: 'North Indian, American, Asian, European',
            cost: '2000',
            hours: '12 Noon to 12PM (Mon-Sun)',
            image: 'https://previews.123rf.com/images/subbotina/subbotina1311/subbotina131100163/23536847-Christmas-And-New-Year-Holiday-Table-Setting-Celebration-Stock-Photo.jpg'
        }
    ]
})

foodieApp.controller('loginController',function($scope,$location) {
    $scope.goToHome = function() {
        // console.log('Do Something')
        // $('#div1').text("hii");
        $location.url('home');
        console.log($location.url())

    }
})

foodieApp.controller('restaurantController',function($scope,$routeParams,$http) {
    $scope.restaurantId = $routeParams.id;
    var restaurants = [{
        id:1,
        name: 'Farzi Cafe',
        address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
        location: 'Connaught Place',
        category: 'Casual Dining, Bar',
        vote: '4.2',
        cuisines: 'Modern Indian',
        cost: '2200',
        hours: '12 Noon to 1 AM (Mon-Sun)',
        bestDish: {
            name: 'Corn Pizza',
            image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
        },
        image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
    },
        {
            id:2,
            name: 'Khan Chacha',
            address: 'D-3, Connaught Place, New Delhi',
            location: 'Connaught Place',
            category: 'Dine out Restaurant',
            vote: '3.7',
            cuisines: 'Mughlai,North indian,Rolls',
            cost: '600',
            hours: '12 Noon to 11 PM (Mon-Sun)',
            image: 'https://previews.123rf.com/images/tul/tul1109/tul110900059/10746852-spring-roll-Stock-Photo-food-thai-spring.jpg'
        },
        {
            id:3,
            name: 'Glenz Cafe & bakers',
            address: '5/2, WEA, Saraswati Marg, Opposite Swati Hotel, Karol Bagh, New Delhi',
            location: 'Karol Bagh',
            category: 'Cafe',
            vote: '3.7',
            cuisines: 'Cafe',
            cost: '700',
            hours: '7:30AM to 11PM (Mon-Sun)',
            image: 'https://previews.123rf.com/images/subbotina/subbotina1312/subbotina131200142/24732122-Coffee-Espresso-Cup-Of-Coffee-Stock-Photo.jpg'
        },
        {
            id:4,
            name: 'Burger king',
            address: 'E-8, Inner Circle, Connaught Place, New Delhi',
            location: 'Connaught Place',
            category: 'Fast Food Corner',
            vote: '3.8',
            cuisines: 'Burger,Fast Food',
            cost: '500',
            hours: '10AM to 11PM (Mon-Sun)',
            image: 'https://previews.123rf.com/images/foodandmore/foodandmore1506/foodandmore150600023/40950943-Close-Up-of-Burger-Piled-High-with-Fresh-Toppings-on-Whole-Grain-Artisan-Bun-on-Rustic-Wooden-Surfac-Stock-Photo.jpg'
        },
        {
            id:5,
            name: 'Costa Coffee',
            address: 'Shop 49, Bengali Market, Barakhamba Road, New Delhi',
            location: 'Barakhamba Road',
            category: 'Cafe',
            vote: '3.4',
            cuisines: 'Cafe',
            cost: '600',
            hours: '9AM to 11PM (Mon-Sun)',
            bestDish: {
                name: 'Corn Pizza',
                image: 'https://noblepig.com/images/2017/05/Chocolate-Avocado-Green-Smoothie-xo-1.jpg'
            },
            image: 'https://previews.123rf.com/images/subbotina/subbotina1307/subbotina130700103/20793597-Cappuccino-Cup-of-Cappuccino-Coffee-Stock-Photo-cappuccino-hot-restaurant.jpg'
        },
        {
            id:6,
            name: 'Creme N Crisp',
            address: '97, Bangla Sahib Road, Gole Market, New Delhi',
            location: 'Gole market',
            category: 'Bakery',
            vote: '3.8',
            cuisines: 'Bakery,Desserts,Fast Food',
            cost: '250',
            hours: '9AM to 10.30PM (Mon-Sun)',
            image: 'https://previews.123rf.com/images/malinkaphoto/malinkaphoto1602/malinkaphoto160200065/53996839-Pastry-in-bakery-Stock-Photo-products.jpg'
        },
        {
            id:7,
            name: 'Jungle Jamboree',
            address: 'P-17/90, Outer Circle, Connaught Place, New Delhi',
            location: 'Connaught Place',
            category: 'Dine out Restaurants',
            vote: '3.8',
            cuisines: 'North Indian, Continental, Chinese, Italian, Thai, Mughlai',
            cost: '1200',
            hours: '11:45AM to 11.30PM (Mon-Sun)',
            image: 'https://previews.123rf.com/images/alexraths/alexraths1507/alexraths150700078/43282967-Various-herbs-and-spices-on-wooden-table-Stock-Photo-restaurant-menu-wood.jpg'
        },
        {
            id:8,
            name: 'Tourist janpath',
            address: '1, Scindia House, Janpath Road, Janpath, New Delhi',
            location: 'Janpath',
            category: 'Casual Dining',
            vote: '4.0',
            cuisines: 'North Indian, American, Asian, European',
            cost: '2000',
            hours: '12 Noon to 12PM (Mon-Sun)',
            bestDish: {
                name: 'Corn Pizza',
                image: 'https://noblepig.com/images/2017/05/Chocolate-Avocado-Green-Smoothie-xo-1.jpg'
            },
            image: 'https://previews.123rf.com/images/subbotina/subbotina1311/subbotina131100163/23536847-Christmas-And-New-Year-Holiday-Table-Setting-Celebration-Stock-Photo.jpg'
        }
    ]
    $scope.restaurant = restaurants[$routeParams.id - 1];

    $scope.getIngredients = function(url) {
        $scope.ingredients = [];
        var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
        $http({
            'method': 'POST',
            'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
            'headers': {
                'Authorization': 'Key d3151897e6ef4b0fa7e94c1f0c3e7445',
                'Content-Type': 'application/json'
            },
            'data': data
        }).then(function (response) {
            // var ingredients = response.data.outputs[0].data.concepts;
            // var list = '';
            // for (var i =0;i < ingredients.length;i++) {
            //     list += '<div class="ingredient">' + ingredients[i].name + '</div>'
            // }
            // // $('.ingredients').html(list);
            // console.log(list);
            // console.log("hiii");
            var ingredients = response.data.outputs[0].data.concepts;
            for (var i =0;i < ingredients.length;i++) {
                $scope.ingredients.push(ingredients[i].name);
            }
        }, function (xhr) {
            console.log(xhr);
        })
    }
})


foodieApp.filter('star',function(){

    return function(string){
        string=string + '★';
        return string;
    }
})

//Steps to add route
//Add view
//add controller(in controller pass scope and other routes
//add ngroute while initializing array and then give routes using when
//Add .config
//In html also make ilaaka of controller
//also add angular-route-js to your index file after angular min