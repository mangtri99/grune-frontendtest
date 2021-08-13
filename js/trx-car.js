const car = [
    {
        'name': 'Toyota 1',
        'image': 'car1.png'
    },
    {
        'name': 'Toyota 2',
        'image': 'car2.png'
    },
    {
        'name': 'Toyota 3',
        'image': 'car3.png'
    },

]

$.each(car, function(key, value){
    $("#trx-car-list").append(
        '<div class="col-4 p-2">'+
            '<img src="./assets/img/catalog/content/'+ car[key].image +' "class="w-100 mb-1" alt="">'+
            '<label class="checkbox-custom">'+
                '<p>' + car[key].name + '</p>'+
                '<input type="checkbox" checked="checked">'+
                '<span class="checkmark"></span>'+
            '</label>'+
        '</div>'
    )
})