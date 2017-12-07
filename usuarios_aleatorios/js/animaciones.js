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
            $("#contenido").append("<div class='row text-left'><img src='"+valor.picture.large+"'></img>"+valor.name.first.ucwords()+" "+valor.name.last.ucwords()+"<br>"+valor.email+"<br>"+valor.location.street.ucwords()+", "+valor.location.postcode+", "+valor.location.city.ucwords()+"("+valor.location.state.ucwords()+")</div>")
        })
        
    })

})