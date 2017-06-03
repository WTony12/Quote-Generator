//At load
$(document).ready(function(){
	var url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
	var currQ = " ";

	//Buttons clicked
	$("#quoteButt").on("click", function(){
    	 $.ajax({
      	 dataType: "jsonp",
			 url: url,
       	 data: {
        	 	method: "getQuote",
          	lang: "en",
          	format: "jsonp"
       	 }
   	 })
		 .done(update);
		  currQ = response.quoteText + "-" + response.quoteAuthor;
   });
	$("#twitter").on("click", function(){
		currQ = $("#quote").text();
		$('#tweet').attr('href', 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(currQ));
	});
	//Function to update quote
	function update(response) {
		$('#quote').html("<br>" + JSON.stringify(response.quoteText) + " - " + JSON.stringify(response.quoteAuthor));
	}
});
