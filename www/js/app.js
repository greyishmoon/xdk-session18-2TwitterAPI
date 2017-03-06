

function onAppReady() {
    if( navigator.splashscreen && navigator.splashscreen.hide ) {   // Cordova API detected
        navigator.splashscreen.hide() ;
    }
    
    //need to initialise OAuth here
    alert("Loaded");
    OAuth.initialize("pQhOefrDl0w6GzopG0klJgImJRk");
	alert(OAuth.getVersion());
    
    // button listener
    $('#searchButton').on('click', search);
}
document.addEventListener("app.Ready", onAppReady, false) ;


function search() {
    
    //alert("CLICKED");
	
	//authorise
	OAuth.popup('twitter').done(function(result) {
		alert("AUTHED");
		//authorisation successful 
		
		//need to get the search terms from the text box
		var search_terms = "...";

		//create an URL for the REST API call
		//The first bit of the url  - https://api.twitter.com - will automatically be included
		//so we just need the endpoint
		var url = "/1.1/search/tweets.json?q=" + "banana";
		alert(url);
		//need to ensure that the URL is proberly encoded.
		url = encodeURI(url);
	
		
		result.get(url).done(
			
            function(data) {
		
                //its worked - do something with the resultant data
				alert(data);
		
			}
        ).fail(
            
            function(err) {
  		
			     //Oh noes! Search broken
			     alert("BROKEN");
			});
    
	
    }).fail(
			
        function (err) {
    	
            //authorisation failed
            alert("AUTH FAILED");
            alert(err);
        }
    );


}

