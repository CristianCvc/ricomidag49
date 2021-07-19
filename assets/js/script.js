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
  $(".alternar-tarjeta").on("click",function(e){
  $(this).next().toggle();
  e.preventDefault();
})
})
