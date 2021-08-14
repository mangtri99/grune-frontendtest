const cars = [
    {
    'name' : 'Toyota Avanza',
    'sku' : 'TVA-500',
    'image' : 'car1.png'
    },
    {
    'name' : 'Toyota Supra',
    'sku' : 'TSA-500',
    'image' : 'car2.png'
    },
    {
    'name' : 'Toyota Rush',
    'sku' : 'TRH-500',
    'image' : 'car3.png'
    },
    {
    'name' : 'Toyota Innova',
    'sku' : 'TIN-500',
    'image' : 'car4.png'
    },
    {
    'name' : 'Toyota Agya',
    'sku' : 'TAG-500',
    'image' : 'car5.png'
    },
]

$.each(cars, function(key, value){
    console.log(cars[key])
    $("#slide-card").append(
        '<li class="splide__slide">'+
            '<div class="p-2 ">'+
                '<div class="border border-light shadow-sm">' +
                    '<img src="./assets/img/catalog/slideshow/'+ cars[key].image + '" class="mx-auto w-100" style="object-fit:contain;" height="150" alt="">' +
                    '<div class="d-md-flex justify-content-between align-items-center px-1">' +
                        '<div class="d-block text-center px-2 card-text">' +
                            '<p>'+cars[key].name+'</p>' +
                            '<p>'+cars[key].sku+'</p>'+
                        '</div>'+
                        '<div class="d-flex p-1 bg-light justify-content-between align-items-center">'+
                            '<div class="card-text">lorem ipsum do</div>'+
                            '<div class="pin-check">'+
                                '<input id="'+ cars[key].name+ '" type="checkbox" name="cars"/>'+
                                '<label class="ms-md-2 ms-0" for="'+cars[key].name+'"></label>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                    '<div class="text-center my-3">'+
                        '<button class="btn border border-dark ps-md-5 ps-1 py-1" style="border-radius: 0px">'+
                            'Choose Car'+
                            '<span class="ms-md-3 ms-1">'+
                                '<img src="./assets/img/icon/arrowRightSlideButton.png" width="15" alt="">'+
                            '</span>'+
                        '</button>'+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</li>')
})

document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#card-slider', {
        
        perPage    : 4,
        breakpoints: {
            600: {
                perPage: 2,
            }
        }
    } ).mount();
} );