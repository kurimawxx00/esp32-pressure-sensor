 "$(document).ready(function(){\r\n"
 "setInterval(getData,1000);\r\n"
             "function getData(){ \r\n"
             "$.ajax({ \r\n"
             " type:\"GET\", \r\n"
              "url:\"data\", \r\n"
              "success: function(data){\r\n" 
              "var s = data.split(\'-\'); \r\n"
              "\r\n"
              "$('#pressure-value').val(s[0]);\r\n" 
              "} \r\n"
            "}).done(function() {\r\n" 
            " console.log(\'ok\'); \r\n"
              "}) \r\n"
            "} \r\n"
            "       });\r\n"