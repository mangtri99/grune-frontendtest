const agenda = [
    {
    'date' : '2017/01/01',
    'title' : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem itaque nostrum voluptates dolores dignissimos quos consequatur at quas reprehenderit, inventore nisi error officiis ut atque. Pariatur corporis iusto quos necessitatibus.',
    },
    {
    'date' : '2017/01/02',
    'title' : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem itaque nostrum voluptates dolores dignissimos quos consequatur at quas reprehenderit, inventore nisi error officiis ut atque. Pariatur corporis iusto quos necessitatibus.',
    },
    {
    'date' : '2017/01/03',
    'title' : 'TLorem ipsum dolor sit amet consectetur adipisicing elit. Rem itaque nostrum voluptates dolores dignissimos quos consequatur at quas reprehenderit, inventore nisi error officiis ut atque. Pariatur corporis iusto quos necessitatibus.',
    },
    
]

$.each(agenda, function(key, value){
    $("#agenda-list").append(
        '<div class="py-1 mt-2 ps-1">'+
            '<div class="border-start border-4 px-2 mb-2 border-left" >'+
                '<div class="d-flex justify-content-between align-items-center">'+
                    '<div style="color: #9e9e9e;">'+
                        '<p>'+ agenda[key].date +'</p>'+
                        '<p>'+ agenda[key].title + '</p>'+
                    '</div>'+
                    '<a href="#">'+
                        '<img src="./assets/img/icon/arrowRight.png" width="20" alt="">'+
                    '</a>'+
                '</div>'+
            '</div>'+
            '<hr style="background-color: #406a7f; height: 2px; margin: 0px;">'+
        '</div>'
    )
})