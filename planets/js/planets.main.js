//Targetbody diameters of items and orbits in KM.
var planet = {
  loaded:false,
  focalsize:1,
  focusvalue:1,
  accuracy:2,
  targetbody:'Sol',
  data:[
    {name:'Sol',            v:1392000},
    {name:'Mercury',        v:4879},
    {name:'Venus',          v:12104},
    {name:'Earth',          v:12756},
    {name:'Moon',           v:3475},
    {name:'Mars',           v:6792},
    {name:'Phobos',         v:22.2},
    {name:'Deimos',         v:12.4},
    {name:'Jupiter',        v:142984},
    {name:'Io',             v:3643.2},
    {name:'Europa',         v:3121.6},
    {name:'Ganymede',       v:5262.4},
    {name:'Callisto',       v:4820.6},
    {name:'Saturn',         v:120536},
    {name:'Titan',          v:5149.5},
    {name:'Uranus',         v:51118},
    {name:'Titania',        v:1577.8},  
    {name:'Oberon',         v:1522.8},
    {name:'Umbriel',        v:1169.4},
    {name:'Ariel',          v:1157.8},
    {name:'Neptune',        v:49528},
    {name:'Triton',         v:2706.8},
    {name:'Pluto',          v:2302},
    {name:'Charon',         v:1207.2},
    {name:'Mercury Orbit',  v:119200000},
    {name:'Venus Orbit',    v:216400000},
    {name:'Earth Orbit',    v:299200000},
    {name:'Moon Orbit',     v:768800},
    {name:'Mars Orbit',     v:455800000},
    {name:'Jupiter Orbit',  v:1557200000},
    {name:'Saturn Orbit',   v:2867000000},
    {name:'Uranus Orbit',   v:5745000000},
    {name:'Neptune Orbit',  v:9905600000},
    {name:'Pluto Orbit',    v:11812800000},
    {name:'Charon Orbit',   v:39192}
  ],
  setMeasurements:function(){
    var i = 0;
    var returndata = [];

    //Grab diameter of focus planet.
    for(i=0; this.data.length > i; i++){
      if(this.data[i].name === this.targetbody){
        this.focusvalue = this.data[i].v;
        break;
      }
    }
    
    //Create HTML for output.
    for(i=0; this.data.length > i; i++){
      var finaldia = (this.focalsize * (this.data[i].v / this.focusvalue)).toFixed(this.accuracy);
      returndata.push('<li class="planetdata" rel="'+this.data[i].name+'">'+this.data[i].name+': <span>'+finaldia+'</span> cm</li>');
    }
    $("#return_dia").html(returndata.join("\n"));
	},
	init:function(){
		//Initialize.
		var i = 0;
		var returndata = [];
		for(i=0; this.data.length > i; i++){
			returndata.push('<a href="#" class="choice" rel="'+this.data[i].name+'">'+this.data[i].name+'</a>');
		}
		$(".basechoices").html(returndata.join("\n"));               
	}
};
