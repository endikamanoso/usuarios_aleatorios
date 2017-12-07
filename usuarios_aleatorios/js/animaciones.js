$(function () {
    jqxhr=$.ajax({
        url: 'https://randomuser.me/api/?results=50',
        dataType:'json'
    });

    $("button").on("click", function () {
        $(this).css({
            "display": "none",
        })
        console.log(jqxhr.responseJSON)

        $(jqxhr.responseJSON.results).each(function (indice,valor) {
            $("body").append("<p><img src='"+valor.picture.thumbnail+"'></img>"+valor.name.first+" "+valor.name.last+"</p>")
        })
        
    })

})