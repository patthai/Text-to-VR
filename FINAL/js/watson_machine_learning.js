function watson_input(input_text, watson_finish) {
   $(function() {
       var params = {
           // Request parameters
       };
     
       $.ajax({
           url: "https://watson-api-explorer.mybluemix.net/tone-analyzer/api/v3/tone?version=2016-05-19&text=" + $.param(params),
           beforeSend: function(xhrObj){
               // Request headers
               xhrObj.setRequestHeader("Content-Type","text/plain");
           },
           type: "POST",
           // Request body
           data: input_text,
       })
       .done(function(data) {
       
       
       		//str = JSON.stringify(data);
        	//document.write (str);  
        	
        	
       		var output_watson = data["document_tone"]["tone_categories"][0];//["tones"];
       		//document.write  (output_watson["category_name"]);
       		
       		var determineTone = output_watson["tones"];
       		
       		//document.write  (JSON.stringify(determineTone));
       		
       		var maxScore = 0;
       		var toneName = "test";
       		//document.write(determineTone.length);
       		for(var i=0; i<determineTone.length; i++){
       			
       			
       			//document.write(i);
       		
       			var score = determineTone[i]["score"];
       			//document.write  (score);
       			if ( maxScore <= score){ maxScore = score; toneName = determineTone[i]["tone_name"];}
       			
       		}
       		
       		
       		//results.innerHTML = output_microsoft;
        	if (watson_finish != null || watson_finish != undefined){
        		//alert(output_microsoft);
        		watson_finish(toneName);
        	}else {
        		//alert('no callback');
        	}
        	
        	return toneName;
       		
       		
            
       })
       .fail(function() {
           alert("error");
       });
   });
}