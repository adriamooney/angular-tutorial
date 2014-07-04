
(function() {

    var app = angular.module('gemStore', []);

    app.controller('StoreController', function() {
        this.products = gems;
    });

    var gems = [
        {
            name: 'Dodecahedron',
            price: 2.95, 
            description: 'some kind of shape',
            canPurchase: false,
            //soldOut: true
        },
        {
            name: 'Pentagonal Gem',
            price: 5.95, 
            description: 'some kind of shape booface',
            canPurchase: true,
            //soldOut: true
        }

    ]

})();