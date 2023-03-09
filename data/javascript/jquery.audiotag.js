//written by jordan
var genericAudioElement = document.createElement('audio');

var DONT_ALLOW_STARTUP_AUDIOS = getUrlParameter(GENERA_QUERY_SYMBOLS[1], document.URL);

var welcomeVoiceElement = document.createElement('audio');
var emAmbienceElement = document.createElement('audio');
	
	
$(document).ready(function() 
{
	welcomeVoiceElement.pause();
	emAmbienceElement.pause();
	
	//establish welcome voice element
	//var welcomeVoiceElement = document.createElement('audio');
	welcomeVoiceElement.setAttribute('src', 'data/audio/welcomeVoice.ogg');
	welcomeVoiceElement.load()
	welcomeVoiceElement.addEventListener("load", function() { 
		welcomeVoiceElement.play(); 
		$(".duration span").html(welcomeVoiceElement.duration);
		$(".filename span").html(welcomeVoiceElement.src);
	}, false);

	
	
	//if ( DONT_ALLOW_STARTUP_AUDIOS === null )
		//welcomeVoiceElement.play ();

	
	//establish ambience element
	//var emAmbienceElement = document.createElement('audio');
	//Inner Worlds, Outer Worlds - Part 4 - Beyond Thinking 3min28sec
	emAmbienceElement.setAttribute('src', 'data/audio/Richard-Dawkins-AI-Might-Run-the-World-Better-Than-Humans-Do.ogg');
	emAmbienceElement.load()
	emAmbienceElement.addEventListener("load", function() { 
		emAmbienceElement.play(); 
		$(".duration span").html(emAmbienceElement.duration);
		$(".filename span").html(emAmbienceElement.src);
	}, false);
	
	//if ( DONT_ALLOW_STARTUP_AUDIOS === null )
		//emAmbienceElement.play ();
});



//establish sound player
function playSound ( soundStream )
{
	var soundElement = document.createElement('audio');
	soundElement.setAttribute('src', soundStream);
	soundElement.load()
	soundElement.addEventListener("load", function() { 
		soundElement.play(); 
		$(".duration span").html(soundElement.duration);
		$(".filename span").html(soundElement.src);
	}, false);

	soundElement.play();
}

//establish ambience player controller mechanism
	var ambienceRunningEnquiry = false;
	function toggleTrackFlag ()
	{
		ambienceRunningEnquiry = ambienceRunningEnquiry ? false : !ambienceRunningEnquiry ? true : false; //GENIUS CODING BY JORDAN MICAH BENNETT lol
	}
	function toggleAmbience ()
	{
		toggleTrackFlag ();
		if (ambienceRunningEnquiry)
			genericAudioElement.play();
		else
			genericAudioElement.pause();
	}