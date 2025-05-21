//Author: {Jordan Micah Bennett, Folioverse}

if ( DONT_ALLOW_STARTUP_AUDIOS_CORE == null ) //I don't want to pest the user with this alert box each time he/she/it toggles the folioverse spectrum switcher.
	swal
	(
		{
				title: "",text: "Check out my latest personal project, a designed/built from scratch hypercar ev/hybrid self driving education ecosystem.:<a href='https://www.youtube.com/watch?v=GGnfyyCyAI4'> Youtube video Showing full scale prototype thus far.</a> </br></br> ~Cosmos Bennett!", imageUrl: 'data/images/logo.png', html: true, showCancelButton: false,
				confirmButtonColor: "#fff",
				confirmButtonText: 'Go!',
				cancelButtonText: "",
				closeOnConfirm: true,
				closeOnCancel: false
		},
		function(isConfirm)
		{
			if (isConfirm)
			{
				if ( DONT_ALLOW_STARTUP_AUDIOS === null )
					welcomeVoiceElement.play ();
				if ( DONT_ALLOW_STARTUP_AUDIOS === null )
					emAmbienceElement.play ();
			} 
		}
	);


/////////////////////////////////////////////////////
//PAGE CONTENT OVERALL SCALING [micah.comment]
/////////////////////////////////////////////////////
window.onload = function ( )
{
	document.body.style.zoom = "76%";
	
	textillate ( 'folioverseLabel', 2000, 190, 50 );
	textillate ( 'urls', 2000, 190, 50 );
	textillate ( 'helpme', 2000, 190, 50 );
	
	switch ( GENERA_SPACE )
	{
		case 0 : sparselySynchronizeUxColoursViaGeneraSpace ( 'green' ); break;
		case 1 : sparselySynchronizeUxColoursViaGeneraSpace ( '#CCCC00' ); break;
		case 2 : sparselySynchronizeUxColoursViaGeneraSpace ( 'brown' ); break;
	}
}
function sparselySynchronizeUxColoursViaGeneraSpace ( newColour )
{
	//change my name's colour to reflect genera mode by colour
	document.getElementById ( 'folioverseAuthorNameLabel' ).innerHTML = "<strong style = 'color:"+ newColour +";'> curious software engineer  </strong>";

	//change my status's colour to reflect genera mode by colour
	document.getElementById ( 'folioverseAuthorStatusLabel' ).innerHTML = "<span style = 'color:"+ newColour +";'> I am intrigued by streams of expressions of strings of bits of 1's and 0's.  </span>";
	
	//change folioverse label colour to reflect genera mode by colour
	//[NOTE]It is quite sad that texillate cannot texillate items with an id attached. Hereafter, folioverseLabel must become idless, after which this iteration performs adequate colouring.
	var folioverseLabelElements = document.getElementsByClassName ( 'folioverseLabel' );
		for ( var i = 0; i < folioverseLabelElements.length; ++i ) 
		{
			var item = folioverseLabelElements [  i ];  
			item.style.color = newColour;
		}
	//change 'me' label colour to reflect genera mode by colour
	document.getElementById ( 'me' ).innerHTML = "<strong id = 'me' style = 'color:"+ newColour +";'> ¿me?  </strong>";
	
	
	//change 'me' label colour to reflect genera mode by colour
	document.getElementById ( 'forefront' ).innerHTML = "<strong id = 'forefront' style = 'color:"+ newColour +";'> ¿forefront?  </strong>";
	
	
	//set help label to be a separate colour from folioverse scheme, for emphasis
	document.getElementById ( 'folioverseHelpLabel' ).innerHTML = "<strong style = 'color:blue;'> ¿Help?  </strong>";
}


function textillate ( className, minDisplayTimeTotal, delayBetweenEachCharacterIn, delayBetweenEachCharacterOut )
{
	$('.'+className).textillate
	(
		{
			// enable looping
			loop: false,
			// sets the minimum display time for each text before it is replaced
			minDisplayTime: minDisplayTimeTotal,
			// sets the initial delay before starting the animation
			// (note that depending on the in effect you may need to manually apply 
			// visibility: hidden to the element before running this plugin)
			initialDelay: 0,
			// set whether or not to automatically start animating
			autoStart: true,
			// custom set of 'in' effects. This effects whether or not the 
			// character is shown/hidden before or after an animation  
			inEffects: [],
			// custom set of 'out' effects
			outEffects: [ 'fadeOut' ],
			// in animation settings
			in: 
			{
				// set the effect name
				effect: 'fadeIn',
				// set the delay factor applied to each consecutive character
				delayScale: 1.5,
				// set the delay between each character
				delay: delayBetweenEachCharacterIn,
				// set to true to animate all the characters at the same time
				sync: false,
				// randomize the character sequence 
				// (note that shuffle doesn't make sense with sync = true)
				shuffle: true,
				// reverse the character sequence 
				// (note that reverse doesn't make sense with sync = true)
				reverse: false,
				// callback that executes once the animation has finished
				callback: function () { }
			},
			// out animation settings.
			out: 
			{
				effect: 'fadeOut',
				delayScale: 1.5,
				delay: delayBetweenEachCharacterOut,
				sync: false,
				shuffle: false,
				reverse: false,
				callback: function () {}
			},

			// callback that executes once textillate has finished 
			callback: function () {},

			// set the type of token to animate (available types: 'char' and 'word')
			type: 'char'
		}
	);
}
