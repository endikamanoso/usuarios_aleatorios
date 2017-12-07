$(function () {
    jqxhr=$.ajax({
        url: 'https://randomuser.me/api/?results=50',
        dataType:'json'
    });

    //Cuando haga click, el botón desaparecera
    $("button").on("click", function () {
        $(this).css({
            "display": "none",
        })

        //el console.log lo mantengo para ver los elementos del array
        console.log(jqxhr.responseJSON)

        //comienzo a sacar datos del array
        $(jqxhr.responseJSON.results).each(function (indice,valor) {
            $("#contenido").append("<div class='row text-left'><img src='"+valor.picture.medium+"'></img>"+valor.name.first+" "+valor.name.last+"<br>"+valor.email+"<br>"+valor.location.street+", "+valor.location.postcode+", "+valor.location.city+"("+valor.location.state+")</div>")
        })
        
    })

})