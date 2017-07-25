var reponse=["comment ca va..?",
"je mets de la biere au frais ",
"ouai un kebab et une bouteille de boulaouane",
"tu rentre à quelle heure",
"elle sera pas fraiche",
"ok à tout à l'heure"];
var x= 0;

  $(".button").click(function(){

      var contenu =$(".message").val();

       $(".user").append("<p>" + contenu + "</p>" );
       $(".message").val(" ");
       setTimeout (function(){
       $(".computer" ).append("<p>" + reponse[x] + "</p>" );},2500);
       x++;
       console.log(x);

    });
