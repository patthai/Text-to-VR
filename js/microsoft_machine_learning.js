
function microsoft_input(input_text) {

	 $(function() {
        var params = {
            // Request parameters
        };
      
        $.ajax({
            url: "https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/keyPhrases?" + $.param(params),
            beforeSend: function(xhrObj){
                // Request headers
                xhrObj.setRequestHeader("Content-Type","application/json");
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","7db5b4a55fdc43808e3f10b26bfa477f");
            },
            type: "POST",
            // Request body
            data: "{\"documents\": [{\"language\": \"en\", \"id\": \"string\", \"text\": \""+input_text+"\"}]}",
        })
        .done(function(data) {
        	//alert("success");
        	
        	var output_microsoft = data["documents"][0]["keyPhrases"];
        	results.innerHTML = output_microsoft;
        	
        	
        })
        .fail(function() {
            alert("error");
        });
    });
    
}


