$(document)
.ready(function(){
  planet.init();
})
.on("keyup change", "#sunsize", function(){
  planet.focalsize = $(this).val();
  planet.setMeasurements();
})
.on("click", ".action_choosebase", function(e){
  e.preventDefault();
  $(".basechoices").toggleClass("open");
})
.on("click", ".basechoices a.choice", function(){
  $("#input_step2").show();
  planet.targetbody = $(this).attr("rel");
  $(".basechoices").removeClass("open");
  $("#sunsize").trigger("keyup");
  $("h2.choicename").text("Enter size for "+planet.targetbody);
})
;
