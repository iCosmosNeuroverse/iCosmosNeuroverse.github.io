//http://stackoverflow.com/questions/5223/length-of-a-javascript-object-that-is-associative-array
Object.size = function ( obj ) 
{
    var size = 0, key;
    for ( key in obj ) 
	{
        if ( obj.hasOwnProperty ( key ) ) size++;
    }
    return size;
};

//..USAGE: var size = Object.size ( myArray )


//http://stackoverflow.com/questions/979975/how-to-get-the-value-from-the-url-parameter
function getUrlParameter ( name, url ) 
{
  if (!url) url = location.href
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var results = regex.exec( url );
  return results == null ? null : results[1];
}
//..USAGE: getUrlParameter('q', 'hxxp://example.com/?q=abc')