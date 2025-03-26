//Author {God Bennett}

enableUserTogglingCapability ( )

function enableUserTogglingCapability ( )
{	
	$(document).ready
	(
		function ( ) 
		{
			enableHelpCapability ( );
		}
	);
}

function enableHelpCapability ( )
{
	var UX_COLOUR = "";
	
	switch ( GENERA_SPACE )
	{
		case 0 : UX_COLOUR = 'green'; break;
		case 1 : UX_COLOUR = '#CCCC00'; break;
		case 2 : UX_COLOUR = 'brown'; break;
	}
	
	/* override bootstrap popover to include callback */
	//BEGIN: zulfajuniadi / gist:7672430
	var showPopover = $.fn.popover.Constructor.prototype.show;
	$.fn.popover.Constructor.prototype.show = function ( ) 
	{
		showPopover.call(this);
		if (this.options.showCallback) 
		{
			this.options.showCallback.call(this);
		}
	}
	//END: zulfajuniadi / gist:7672430
	
	
	$(document).ready
	(
		function()
		{
			$("#helpme").popover
			(
				{
					title : "<p style = 'color:"+UX_COLOUR+";' text-align:'left';>¿Help?: _instructions</p>",
					content : "<p style = 'color:"+UX_COLOUR+";' > <strong class = 'helpme'> 1.{ACTIVATE ATOM?} </strong> <span class = 'helpme'> : Toggle any of the huger atoms in arboretum to reveal details via such atoms. </span> <br><strong class = 'helpme'> 2.{ACTIVATE VARYING VIEWS?} </strong> <span class = 'helpme'> : Toggle any atom in ROTATING multi-spectrum atom sigma. </span> </p><br> ",
					placement : 'top',
					trigger: 'hover focus',
					html : true,
					showCallback : function ( ) { textillate ( 'helpme', 2000, 30, 50 ); }
				}
			);
		}
	);
	

	$(document).ready
	(
		function()
		{
			$("#me").popover
			(
				{
					title : "<p style = 'color:"+UX_COLOUR+";'>¿social?</p>",
					content : "<p style = 'color:"+UX_COLOUR+";' >  <a  class = 'me' href = 'https://www.facebook.com/iCosmosNeuroverse/' > facebook.com/iCosmosNeuroverse  </a></p>",
					placement : 'bottom',
					trigger: 'hover focus',
					html : true,
					showCallback : function ( ) { textillate ( 'me', 2000, 30, 50 ); }
				}

			);
		}
	);
	

	$(document).ready
	(
		function()
		{
			$("#forefront").popover
			(
				{
					title : "<p style = 'color:"+UX_COLOUR+";'>¿forefront? : _artificial general intelligence</p>",
					content : "<p style = 'color:"+UX_COLOUR+";' > </br> </br> <span class = 'me'> A non-absolute, time-space complex optimal artificial brain (composed in matrix laboratory (matlab)  </span> </br> </br> <a  class = 'me'href = 'https://github.com/g0dEngineer?tab=repositories&q=&type=source&language=&sort=' > https://github.com/g0dEngineer </a> </br></br><strong class = 'me'>C^{∞π}(R^{kπ}) <strong> </p>",
					placement : 'bottom',
					trigger: 'hover focus',
					html : true,
					delay: {show:10, hide:1500}, //delay hiding
					showCallback : function ( ) { textillate ( 'me', 2000, 30, 50 ); }
				}
			);
		}
	);
	
	$(document).ready
	(
		function()
		{
			$(".folioverseLabel").popover
			(
				{
					title : "<p style = 'color:"+UX_COLOUR+";'>Dio Lucciola, Jamaican EV/Hypercar for Self Driving Education Ecosystem.</p>",
					content : "<p style = 'color:"+UX_COLOUR+";'> <span class = 'folioverseLabel'> Check out my latest personal project, a designed/built from scratch hypercar ev/hybrid self driving education ecosystem. </span> : <a class = 'folioverseLabel' href = 'https://youtu.be/B0bdRMAGWSg' > link </a></br> <span class = 'folioverseLabel'> </p> ",
					placement : 'bottom',
					trigger: 'hover focus',
					html : true,
					delay: {show:10, hide:1500}, //delay hiding
					showCallback : function ( ) { textillate ( 'folioverseLabel', 2000, 11, 14 ); }
				}
			);
		}
	);
	/*
	I have not any belief; consequently I lack belief in all quantities, including, but not particularly, God or gods.
	(for Science purges belief's necessitation) 

	EXEMPLIFICATION: 
	One needn't express belief such that one observes probabilities, for whether or not I select belief in gravity, such holds true. 
	This descries belief's irrelevance.

	CONCLUSIVELY, one may observe many a probability:

	a) The non-zero PROBABILITY of 'love' as a function on evolution, that thus far engenders persistence in dna.
	b) ... c) ...
*/
	
	$(document).ready
	(
		function()
		{
			$(".___authorLabel").popover
			(
				{
					title : "<p style = 'color:"+UX_COLOUR+";'>¿Non-beliefism? : The very concept of belief opposes science</p>",
					content : "<p style = 'color:"+UX_COLOUR+";'> <span class = 'authorLabel'>Beyond atheism, non-beliefism enables a state of mind that rejects not merely religious belief, but the very concept of belief..</span></br> </br> <span class = 'authorLabel'>As non-beliefism underlines science's great importance, non-beliefism rejects anything that disregards science.</span> </br></br> <span class = 'authorLabel'>Belief is one of many unavoidable candidates/concepts for that which opposes science, for belief by definition/research </span><a class = 'folioverseLabel' href = 'https://iCosmosNeuroverse.medium.com/scientific-evidence-showing-beliefs-science-opposing-design-8248c83b1a1e' > (See research/standard definition) </a>, <span class = 'folioverseLabel'> permits large ignorance of evidence.</span> </p> </br> <span class = 'folioverseLabel'> An invention of mine (an experimental paradigm) entitled </span> : <a class = 'folioverseLabel' href = 'https://non-beliefism.github.io' > 'non-beliefism' </a>", /*I choose to select two possible messages on hover*/
					placement : 'bottom',
					trigger: 'hover focus',
					html : true,
					delay: {show:10, hide:1500}, //delay hiding
					showCallback : function ( ) { textillate ( 'authorLabel', 2000, 30, 50 ); }
				}
			);
		}
	);
}



/*
Click-hold, onto any of the huger atoms, then slightly shake to reveal details via such atoms.
*/
