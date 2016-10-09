
function watson_input(input_text) {

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
           str = JSON.stringify(data);
           alert(str);
       })
       .fail(function() {
           alert("error");
       });
   });
    
}


