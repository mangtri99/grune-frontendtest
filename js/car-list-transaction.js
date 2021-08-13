const car_list_transaction = [
    {
        'name' : 'Toyota 1',
        'image' : 'car1.png'
    },
    {
        'name' : 'Toyota 2',
        'image' : 'car2.png'
    },
    {
        'name' : 'Toyota 3',
        'image' : 'car3.png'
    },
    {
        'name' : 'Toyota 4',
        'image' : 'car4.png'
    },
    {
        'name' : 'Toyota 5',
        'image' : 'car5.png'
    },
    {
        'name' : 'Toyota 6',
        'image' : 'car6.png'
    },
    {
        'name' : 'Toyota 7',
        'image' : 'car7.png'
    },
    {
        'name' : 'Toyota 8',
        'image' : 'car8.png'
    },
    {
        'name' : 'Toyota 9',
        'image' : 'car9.png'
    },
]


$.each(car_list_transaction, function(key, value){
    $("#car-list-transaction").append(
        '<div class="col-4 p-2">'+
            '<img src="./assets/img/catalog/content/'+car_list_transaction[key].image+'" class="w-100 mb-1" alt="">'+
            '<label class="checkbox-custom">'+
                '<p clas="card-text">'+ car_list_transaction[key].name +'</p>'+
                '<input type="checkbox" >'+
                '<span class="checkmark"></span>'+
            '</label>'+
        '</div>'
    )
})
