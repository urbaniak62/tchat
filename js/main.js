var reponse=["comment ca va..?",
"je mets de la biere au frais ",
"ouai un kebab et une bouteille de boulaouane",
"ok à tout à l'heure"];
var x= -1;
$(document).ready(function(){
  $(".button").click(function(){

      var contenu =$(".message").val();

       $(".user").append("<p>" + contenu + "</p>" );
       $(".message").val(" ");
       setTimeout (function(){
       $(".computer" ).append("<p>" + reponse[x] + "</p>" );},2000);
       x++;
       console.log(x);

    });
});
