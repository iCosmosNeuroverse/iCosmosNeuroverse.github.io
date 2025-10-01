//Author {Jason Davies, 'Random Arboretum'}
//Heavily modified/adapted via {Cosmos Bennett, Folioverse}






/////////////////////////////////////////////////
//GLOBAL REQUIREMENTS [CosmosBennett.Comment]
/////////////////////////////////////////////////

var BASE_URL = "https://icosmosneuroverse.github.io/";
var GENERA_QUERY_SYMBOLS = [ "GENERA_MODE", "ALLOW_AUDIO" ];
var GENERA_QUERY_PREFIX = "?"+GENERA_QUERY_SYMBOLS[0]+"=";
var GENERA_SPACE = getUrlParameter(GENERA_QUERY_SYMBOLS[0], document.URL) != null ? parseInt ( getUrlParameter(GENERA_QUERY_SYMBOLS[0], document.URL) ) : 2;


///////////////////////////////////
//WELCOME MESSAGE [CosmosBennett.Comment]
///////////////////////////////////
var DONT_ALLOW_STARTUP_AUDIOS_CORE = getUrlParameter(GENERA_QUERY_SYMBOLS[1], document.URL);


	
//////////////////////////////////////////
//CORE FUNCTIONALITIES [CosmosBennett.Comment]
//////////////////////////////////////////

//god--universeGenera structure, utilizing javascript literal object notation.
//Here I quantify/accumulate all node specific information amidst this customized dictionary.
var universeGenera = 
{ 
     0:["green", 120, [ "http://www.youtube.com/watch?v=NBroRlmMog4", "http://www.youtube.com/watch?v=ZiM_rD6EbcM", "https://www.gtagaming.com/ivpm-gta-iv-performance-manager-get-more-fps-f14136.html", "https://www.gtagaming.com/ivgarage-easiest-handling-editing-f14454.html" ] ], 
     1:["#CCCC00", 120, [ "https://github.com/JordanMicahBennett/AUTOMATANISM", "https://github.com/JordanMicahBennett/UNI_CODE-DEEP-UI-ENGINE/", "https://github.com/JordanMicahBennett/SOULIFY", "https://github.com/JordanMicahBennett/NIKI...NETWORK-ISSUE-KINESTHETIC_LEARNING-INFORMATION-TOOL", "https://github.com/JordanMicahBennett/UNIVERSARIUM", "https://www.youtube.com/watch?v=p2Apn-gTzqU" ] ], //dark yellow yields enhanced visibility
     2:["brown", 120, [ "https://github.com/JordanMicahBennett/Machine-Learning-Jamaica-Institute_Curriculum_MainPage/blob/master/README.md", "https://github.com/icosmosneuroverse/Cryptosynth", "https://github.com/icosmosneuroverse/xSynth", "https://github.com/icosmosneuroverse/Live-Agile-Artificial-Neural-Network-Programming-Sessions", "https://youtu.be/5eCcOtLV0uE", "https://www.youtube.com/watch?v=pxgLJSd3_-s&feature=youtu.be", "https://github.com/JordanMicahBennett/SMART-CT-SCAN_BASED-COVID19_VIRUS_DETECTOR/blob/master/README.md", "https://github.com/JordanMicahBennett/CONSCIENCIA/", "https://github.com/JordanMicahBennett/Smart-Ai-Pothole-Detector------Powered-by-Tensorflow-TensorRT-on-Google-Colab-and-or-Jetson-Nano", "https://drive.google.com/file/d/1xzyTFaVKNuZmD8_zNSinu2tCCQy8L-Ic/view", "https://github.com/JordanMicahBennett/MORPHING-SOMATIC-QUASICRYSTAL-PATH-ALGORITHM", "https://github.com/JordanMicahBennett/SIMPLE-NEURAL-NETWORK","https://www.researchgate.net/publication/316586028_Thought_Curvature_An_underivative_hypothesis", "https://www.researchgate.net/publication/318722013_Trigonometric_Rule_Collapser_Set_qua_Calculus", "https://github.com/JordanMicahBennett/Supermathematics-and-Artificial-General-Intelligence", "https://github.com/JordanMicahBennett/God", "https://github.com/JordanMicahBennett/EJECTION-FRACTION-IRREGULARITY-DETECTION-MODEL",	BASE_URL ] ], 
};




function getRandomGeneraUrlItemByGeneraIndex ( key )
{
	//[god.note]use bitwise operation '>> 0' to collapse decimal.
	return universeGenera [ key ] [ 2 ] [ ( Math.random ( ) * Object.size ( universeGenera [ key ] [ 2 ] ) ) >> 0 ];
}

var w = 640,
    h = w,
    p = 4,
    max = 40,
    nodes = [{x: w / 2, y: h / 2, size: 2, url:''}],
    links = [];

var force = d3.layout.force()
    .charge(-80)
    .linkDistance(16)
    .nodes(nodes)
    .links(links)
    .size([w, h])
    .on("tick", updatePositions);

var vis = d3.select("#folioverse").append("svg")
    .attr("width", w + 2 * p)
    .attr("height", h + 2 * p)
  .append("g")
    .attr("transform", "translate(" + [p, p] + ")");



var link = vis.selectAll("line.link"),
    node = vis.selectAll("circle.node");
	


d3.timer ( _spectraGeneration ); //[CosmosBennett.Comment]




function _spectraGeneration ( ) //[CosmosBennett.Comment]
{
	var source = nodes[~~(Math.random() * nodes.length)],
		bud = {x: source.x + Math.random() - .5, y: source.y + Math.random() - .5, parent: source, size: 1, url:''};
	
	inflate(bud);


	links.push({source: source, target: bud});
	nodes.push(bud);
	
	node = node.data(nodes);
	console.log(node);
	node.enter().append("circle")
				.attr("class", "node")
				.attr("r", 5)
				.style("stroke", universeGenera [ GENERA_SPACE ] [ 0 ] )
				.style("fill", 'white')
				.attr("cx", function(d) { return d.x; })
				.attr("cy", function(d) { return d.y; })
				.call(force.drag)
				.on
					(
						"click", function(atom) 
						{ 
							if ( atom.size > 10 ) //only huger atoms are toggleable
								window.open ( getRandomGeneraUrlItemByGeneraIndex ( GENERA_SPACE ),'popup','width=640,height=480' );
							
							playSound ( 'data/audio/toggle.ogg' );
							
							d3.event.stopPropagation( );
						}
					);
								
								
	link = link.data(links);
	link.enter().insert("line", "circle")
				.attr("class", "link");
	
	
	force.start();
	
	return nodes.length >= universeGenera [ GENERA_SPACE ] [ 1 ]; 
}


function inflate(d) {
  while (d = d.parent) d.size++;
}



function updatePositions() {
  nodes.forEach(function(o, i) {
    o.x = Math.min(w, Math.max(0, o.x));
    o.y = Math.min(h, Math.max(0, o.y));
  });
  link.style("stroke-width", function(d) { return Math.sqrt(d.target.size); })
      .attr("x1", function(d) { return d.source.x; })
      .attr("y1", function(d) { return d.source.y; })
      .attr("x2", function(d) { return d.target.x; })
      .attr("y2", function(d) { return d.target.y; });

  node.attr("r", function(d) { return 5 + Math.sqrt(d.size) / 2; })
      .attr("cx", function(d) { return d.x; })
      .attr("cy", function(d) { return d.y; });
}

   
	//generate controller ux [god]
	var t0 = Date.now();
	//[god.note - planetOrbitMaxSpan
	var planetOrbitMaxSpan = 60;
	//[god.note - planets
	var planets = 
	[
		{ R: 20, r:  4, speed: getGreenVelocity ( ), phi0: 100, stroke: 'green'},
		{ R: 40, r:  6, speed: getYellowVelocity ( ), phi0: 60, stroke: '#CCCC00'},
		{ R: 60, r:  8, speed: getBrownVelocity ( ), phi0: 20, stroke: 'brown'},	
	];
	
	function getGreenVelocity ( )
	{
		//[god.note _ essentially sets speed per page reload per ux control toggle]
		return getUrlParameter(GENERA_QUERY_SYMBOLS[0], document.URL) != null ? getUrlParameter(GENERA_QUERY_SYMBOLS[0], document.URL) === "0" ? 40 : 2 : 2;
	}
	function getYellowVelocity ( )
	{
		//[god.note _ essentially sets speed per page reload per ux control toggle]
		return getUrlParameter(GENERA_QUERY_SYMBOLS[0], document.URL) != null ? getUrlParameter(GENERA_QUERY_SYMBOLS[0], document.URL) === "1" ? 40 : 2 : 2;
	}
	function getBrownVelocity ( )
	{
		//[god.note _ essentially sets speed per page reload per ux control toggle]
		return getUrlParameter(GENERA_QUERY_SYMBOLS[0], document.URL) != null ? getUrlParameter(GENERA_QUERY_SYMBOLS[0], document.URL) === "2" ? 40 : 2 : 2;
	}
	
	var svg = d3.select("#folioverse").insert("svg")
	.attr("width", w).attr("height", (planetOrbitMaxSpan *2)+planetOrbitMaxSpan/2);


	var container = svg.append("g").attr("transform", "translate("+(w-planetOrbitMaxSpan*1.2)+","+(planetOrbitMaxSpan*1.3)+")");

	container.selectAll("g.planet").data(planets).enter().append("g")
	.attr("class", "planet").each
	(
		function(d, i) 
		{
		  d3.select(this)	.append("circle")
							.attr("class","orbit")
							.style("stroke-dasharray", ("3, 3"))
							.attr("r", d.R);
							
							
		  d3.select(this)	.append("circle")
							.attr("r", d.r)	
							.style("stroke", d.stroke)
							.style("fill", 'white')
							.attr("cx",d.R)
							.attr("cy", 0)
							.attr("class", "planet")
							.on
								(
									"click", function(d) 
									{ 
										if ( d.stroke === 'green' )
										{
												//micah - ?GENERA_QUERY_SYMBOLS[0]=0 tells arboretum to load display with green enabled. (green planet is untouchable)
											location.href = BASE_URL + "?" + GENERA_QUERY_SYMBOLS[0]+"=0&"+GENERA_QUERY_SYMBOLS[1]+"=NOAUDIO"; //don't play start up audio when toggling 
											
										}
										if ( d.stroke === '#CCCC00' )
										{
											location.href = BASE_URL + "?" + GENERA_QUERY_SYMBOLS[0]+"=1&"+GENERA_QUERY_SYMBOLS[1]+"=NOAUDIO";
										}
										if ( d.stroke === 'brown' )
										{
											location.href = BASE_URL + "?" + GENERA_QUERY_SYMBOLS[0]+"=2&"+GENERA_QUERY_SYMBOLS[1]+"=NOAUDIO";
										}	
										
										
										d3.event.stopPropagation( );
									}
								);
		}
	);

	var d = d3.timer
	(
	  function() 
	  {
	  
		var delta = (Date.now() - t0);
		svg.selectAll(".planet").attr
		
		("transform", function(d) 
			{
			  return "rotate(" + d.phi0 + delta * d.speed/200 + ")";
			}
		);
	  }
	);
	
	

	
