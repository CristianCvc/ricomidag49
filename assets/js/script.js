$(function () {
  $('[data-toggle="tooltip"]').tooltip()
  $("h4").dblclick(function(){
    $(this).css({
        "color": "red",
    });
});
  $("[id=enviarCorreo]").click(function(){
  alert("El correo fue enviado correctamente");
});
  $("#card01").on("click",function(e){
  $(".alternar01").toggle();
    e.preventDefault();
})
  $("#card02").on("click",function(e){
  $(".alternar02").toggle();
    e.preventDefault();
})
  $("#card03").on("click",function(e){
  $(".alternar03").toggle();
    e.preventDefault();
})
})
