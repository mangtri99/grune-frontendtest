for(i=1; i<9; i++){
    console.log(i);
    $("#slide-show").append('<li class="splide__slide">'+'<img src="./assets/img/catalog/slideshow/top/car' + i + '.jpg">'+'</li>')
    
}

document.addEventListener('DOMContentLoaded', function () {
    new Splide('#image-slider', {
        'cover': true,
        'heightRatio': 0.5
    }).mount();
});