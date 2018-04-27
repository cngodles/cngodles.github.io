$(document).ready(function(){
  solar.init();
});

var convertme = {
  centersun: function(target){
    var tw = target.width();
    var th = target.height();
    target.css({
      'position':'absolute',
      'top':'50%',
      'left':'50%',
      'margin-left':(-1)*tw/2,
      'margin-top':(-1)*th/2,
      'border-radius':tw/2
    });
  },
  centerorbit: function(target){
    var tw = target.width();
    var th = target.height();
    target.css({
      'position':'absolute',
      'top':'50%',
      'left':'50%',
      'margin-left':(-1)*tw/2,
      'margin-top':(-1)*th/2
    });
  },
  kmtopixels: function(km, pixels){
    
  }
};

var solar = {
  init:function(){
    this.universe.target = $("#universe");
    this.universe.target
      .width(this.universe.width)
      .height(this.universe.height)
      .html('<div id="sun"></div>');
    var sun = $("#sun");
    var sunwidth = parseInt((this.universe.sun*2)/this.kmperpixelsun);
    sun
      .css({
        width:sunwidth,
        height:sunwidth,
        'border-radius':sunwidth,
        'background-color':this.universe.suncolor
      });
    convertme.centersun($("#sun"));
    this.create();
  },
  create:function(){
    for(var i=this.planets.length-1;i>=0; i--){
    
      var orbitdiameter = this.planets[i].orbitdia * 100000;
      var orbitwidth = parseInt((orbitdiameter*2)/this.kmperpixelorbit);
      
      console.log(this.planets[i].id, parseInt(orbitdiameter*2));
      
      var neworbit = $('<div></div>')
        .attr("id", this.planets[i].id)
        .addClass("orbit")
        .css({
          width:orbitwidth,
          height:orbitwidth,
          'border-radius':orbitwidth,
          'animation-name': 'example',
          'animation-duration' : (this.planets[i].time*this.speed)+'ms'
         })
        .html("<a></a>")
        .appendTo(this.universe.target);
      convertme.centerorbit(neworbit);
      if(this.paths){
        neworbit.addClass("showpaths");
      }
      var newplanet = neworbit.find("a");
      var planetdiameter = parseInt((this.planets[i].radius*2)/this.kmperpixelplanet);
      
      newplanet
        .addClass("planet")
        .attr("title", this.planets[i].id)
        .attr("href", "#")
        .css({
          width:planetdiameter,
          height:planetdiameter,
          'margin-left':((-1)*planetdiameter/2)-1,
          'margin-top':parseInt(-1*(planetdiameter/2)),
          'border-radius':planetdiameter,
          'background-color':this.planets[i].color
        });
    }
  },
  sun:null,
  speed:20,
  kmperpixelsun:80000,
  kmperpixelplanet:1000,
  kmperpixelorbit:300000,
  paths:true,
  universe:{
    target:null,
    width:4000,
    height:1600,
    sun:696000,
    suncolor:'orange'
  },
  planets:
    [
      {
        id:'mercury',
        orbit:120,
        orbitdia:57.9,
        time:240,
        width:2,
        radius:2439,
        color:'gray'
      },
      {
        id:'venus',
        orbit:200,
        orbitdia:108.2,
        time:615,
        width:6,
        radius:6051,
        color:'orange'
      },
      {
        id:'earth',
        orbit:300,
        orbitdia:149.6,
        time:1000,
        width:6,
        radius:6371,
        color:'blue'
      },
      {
        id:'mars',
        orbit:400,
        orbitdia:227.9,
        time:1880,
        width:5,
        radius:3389,
        color:'red'
      },
      {
        id:'jupiter',
        orbit:600,
        orbitdia:778.6,
        time:11186,
        width:14,
        radius:69911,
        color:'yellow'
      },
      {
        id:'saturn',
        orbit:700,
        orbitdia:1433.5,
        time:29447,
        width:12,
        radius:58232,
        color:'yellow'
      },
      {
        id:'uranus',
        orbit:800,
        orbitdia:2872.5,
        time:84016,
        width:9,
        radius:25362,
        color:'green'
      },
      {
        id:'neptune',
        orbit:900,
        orbitdia:4495.1,
        time:164791,
        width:9,
        radius:24622,
        color:'blue'
      },
      {
        id:'pluto',
        orbit:950,
        orbitdia:5906.4,
        time:247920,
        width:2,
        radius:1188,
        color:'gray'
      }
    ]
};