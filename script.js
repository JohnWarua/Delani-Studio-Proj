$(document).ready(function(){
  $("#des").click(function(){
    $("#full").show();
    $("#des").hide();

 $("#full").click(function(){
   $("#des").show();
   $("#full").hide();
 });

  });
});
