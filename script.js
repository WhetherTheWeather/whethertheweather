//Hide Default Output when button is clicked
$('#getWeather').click(function(){
  $('.basic').hide();
});

//2. Use the function to let it be called when the search button is clicked
document.getElementById("getWeather").onclick = callCurrentAPI;
//var userInput = 'durban';
//var userInput = document.getElementById("getInput").value;
var userInput = document.getElementById("getInput");

//function hideDefault() {
  //$('.basic').hide();
//}

//1. GET data for current forecast and put that into a function so that it is called when the search button is clicked.
function callCurrentAPI() {
  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q='+userInput.value+'&units=metric&appid=6d117ec01ab81cf24163423b881d76bd', function(data){
    //console.log(data);
  
    var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    //console.log(icon);
    
    var name = data.name;
    var description = data.weather[0].description;
    var tempMax = data.main.temp_max;
    var tempMin = data.main.temp_min;
  
    $('.name').text(name);
    $('.icon').attr('src', icon);
    $('.description').text(description);
    $('.temp_max').text(tempMax);
    $('.temp_min').text(tempMin);
    
    })


};
//callCurrentAPI();

//Default Current Output Start
$.getJSON('https://api.openweathermap.org/data/2.5/weather?q=cape%20town&appid=7d0232e627c8ac12398a819b7dc4c2df', function(basic){

    //console.log(basic);
      
      var basicName = basic.name;
      var basicIcon = "https://openweathermap.org/img/w/" + basic.weather[0].icon + ".png";
      var basicDescription = basic.weather[0].description;
      var basicTempMax = basic.main.temp_max;
      var basicTempMin = basic.main.temp_min;

      $('.basicName').text(basicName);
      $('.basicIcon').attr('src', basicIcon);
      $('.basicDescription').text(basicDescription);
      $('.basicTempMax').text(basicTempMax);
      $('.basicTempMin').text(basicTempMin);
    })

//Default Current Output End

//Hide Default Weekly Output When Search Button Is Clicked
$('#getWeekly').click(function(){
  $('.rudiment').hide();
});

  document.getElementById("getWeekly").onclick = callWeeklyAPI;
  var lat = document.getElementById("lat");
  var lon = document.getElementById("lon");

  //var lat = 33.9249;
  //var long = 18.4241

    //GET data for weekly forecast and put that into a function so that you can call it when the search button is clicked
    function callWeeklyAPI() {
      $.getJSON('https://api.openweathermap.org/data/2.5/onecall?lat='+lat.value+'&lon='+lon.value+'&exclude=current,minutely,hourly,alerts&units=metric&appid=7d0232e627c8ac12398a819b7dc4c2df', function(week){
      //console.log(week);

      var monIcon = "https://openweathermap.org/img/w/" + week.daily[0].weather[0].icon + ".png";
      $('.monIcon').attr('src', monIcon);
      var monHumidity = week.daily[0].humidity;
      $('.monHumidity').text(monHumidity);
      var monTempMin = week.daily[0].temp.min;
      $('.monTempMin').text(monTempMin);
      var monTempMax = week.daily[0].temp.max;
      $('.monTempMax').text(monTempMax);
  
  
      var tuesIcon = "https://openweathermap.org/img/w/" + week.daily[1].weather[0].icon + ".png";
      $('.tuesIcon').attr('src', tuesIcon);
      var tuesHumidity = week.daily[1].humidity;
      $('.tuesHumidity').text(tuesHumidity);
      var tuesTempMin = week.daily[1].temp.min;
      $('.tuesTempMin').text(tuesTempMin);
      var tuesTempMax = week.daily[1].temp.max;
      $('.tuesTempMax').text(tuesTempMax);
  
      var wedIcon = "https://openweathermap.org/img/w/" + week.daily[2].weather[0].icon + ".png";
      $('.wedIcon').attr('src', wedIcon);
      var wedHumidity = week.daily[2].humidity;
      $('.wedHumidity').text(wedHumidity);
      var wedTempMin = week.daily[2].temp.min;
      $('.wedTempMin').text(wedTempMin);
      var wedTempMax = week.daily[2].temp.max;
      $('.wedTempMax').text(wedTempMax);
  
      var thursIcon = "https://openweathermap.org/img/w/" + week.daily[3].weather[0].icon + ".png";
      $('.thursIcon').attr('src', thursIcon);
      var thursHumidity = week.daily[3].humidity;
      $('.thursHumidity').text(thursHumidity);
      var thursTempMin = week.daily[3].temp.min;
      $('.thursTempMin').text(thursTempMin);
      var thursTempMax = week.daily[3].temp.max;
      $('.thursTempMax').text(thursTempMax);
  
      var friIcon = "https://openweathermap.org/img/w/" + week.daily[4].weather[0].icon + ".png";
      $('.friIcon').attr('src', friIcon);
      var friHumidity = week.daily[4].humidity;
      $('.friHumidity').text(friHumidity);
      var friTempMin = week.daily[4].temp.min;
      $('.friTempMin').text(friTempMin);
      var friTempMax = week.daily[4].temp.max;
      $('.friTempMax').text(friTempMax);
  
      var satIcon = "https://openweathermap.org/img/w/" + week.daily[5].weather[0].icon + ".png";
      $('.satIcon').attr('src', satIcon);
      var satHumidity = week.daily[5].humidity;
      $('.satHumidity').text(satHumidity);
      var satTempMin = week.daily[5].temp.min;
      $('.satTempMin').text(satTempMin);
      var satTempMax = week.daily[5].temp.max;
      $('.satTempMax').text(satTempMax);
  
      var sunIcon = "https://openweathermap.org/img/w/" + week.daily[6].weather[0].icon + ".png";
      $('.sunIcon').attr('src', sunIcon);
      var sunHumidity = week.daily[6].humidity;
      $('.sunHumidity').text(sunHumidity);
      var sunTempMin = week.daily[6].temp.min;
      $('.sunTempMin').text(sunTempMin);
      var sunTempMax = week.daily[6].temp.max;
      $('.sunTempMax').text(sunTempMax);
  
    })
    };

    //callWeeklyAPI();

    //Default Weekly Output Start
    $.getJSON('https://api.openweathermap.org/data/2.5/onecall?lat=33.9249&lon=8.4241&exclude=current,minutely,hourly,alerts&units=metric&appid=7d0232e627c8ac12398a819b7dc4c2df', function(rudiment){

      var oneIcon = "https://openweathermap.org/img/w/" + rudiment.daily[0].weather[0].icon + ".png";
      $('.oneIcon').attr('src', oneIcon);
      var oneHumidity = rudiment.daily[0].humidity;
      $('.oneHumidity').text(oneHumidity);
      var oneTempMin = rudiment.daily[0].temp.min;
      $('.oneTempMin').text(oneTempMin);
      var oneTempMax = rudiment.daily[0].temp.max;
      $('.oneTempMax').text(oneTempMax);
  
  
      var twoIcon = "https://openweathermap.org/img/w/" + rudiment.daily[1].weather[0].icon + ".png";
      $('.twoIcon').attr('src', twoIcon);
      var twoHumidity = rudiment.daily[1].humidity;
      $('.twoHumidity').text(twoHumidity);
      var twoTempMin = rudiment.daily[1].temp.min;
      $('.twoTempMin').text(twoTempMin);
      var twoTempMax = rudiment.daily[1].temp.max;
      $('.twoTempMax').text(twoTempMax);
  
      var threeIcon = "https://openweathermap.org/img/w/" + rudiment.daily[2].weather[0].icon + ".png";
      $('.threeIcon').attr('src', threeIcon);
      var threeHumidity = rudiment.daily[2].humidity;
      $('.threeHumidity').text(threeHumidity);
      var threeTempMin = rudiment.daily[2].temp.min;
      $('.threeTempMin').text(threeTempMin);
      var threeTempMax = rudiment.daily[2].temp.max;
      $('.threeTempMax').text(threeTempMax);
  
      var fourIcon = "https://openweathermap.org/img/w/" + rudiment.daily[3].weather[0].icon + ".png";
      $('.fourIcon').attr('src', fourIcon);
      var fourHumidity = rudiment.daily[3].humidity;
      $('.fourHumidity').text(fourHumidity);
      var fourTempMin = rudiment.daily[3].temp.min;
      $('.fourTempMin').text(fourTempMin);
      var fourTempMax = rudiment.daily[3].temp.max;
      $('.fourTempMax').text(fourTempMax);
  
      var fiveIcon = "https://openweathermap.org/img/w/" + rudiment.daily[4].weather[0].icon + ".png";
      $('.fiveIcon').attr('src', fiveIcon);
      var fiveHumidity = rudiment.daily[4].humidity;
      $('.fiveHumidity').text(fiveHumidity);
      var fiveTempMin = rudiment.daily[4].temp.min;
      $('.fiveTempMin').text(fiveTempMin);
      var fiveTempMax = rudiment.daily[4].temp.max;
      $('.fiveTempMax').text(fiveTempMax);
  
      var sixIcon = "https://openweathermap.org/img/w/" + rudiment.daily[5].weather[0].icon + ".png";
      $('.sixIcon').attr('src', sixIcon);
      var sixHumidity = rudiment.daily[5].humidity;
      $('.sixHumidity').text(sixHumidity);
      var sixTempMin = rudiment.daily[5].temp.min;
      $('.sixTempMin').text(sixTempMin);
      var sixTempMax = rudiment.daily[5].temp.max;
      $('.sixTempMax').text(sixTempMax);
  
      var sevenIcon = "https://openweathermap.org/img/w/" + rudiment.daily[6].weather[0].icon + ".png";
      $('.sevenIcon').attr('src', sevenIcon);
      var sevenHumidity = rudiment.daily[6].humidity;
      $('.sevenHumidity').text(sevenHumidity);
      var sevenTempMin = rudiment.daily[6].temp.min;
      $('.sevenTempMin').text(sevenTempMin);
      var sevenTempMax = rudiment.daily[6].temp.max;
      $('.sunTempMax').text(sevenTempMax);
    })

    //Default Weekly Output End
    
  
    //GET data for popular cities
    //For cape town
    $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=cape%20town&appid=7d0232e627c8ac12398a819b7dc4c2df', function(capeTown){

    //console.log(capeTown);
      
      var capeTownName = capeTown.name;
      var capeTown_icon = "https://openweathermap.org/img/w/" + capeTown.weather[0].icon + ".png";
      var capeTownDescription = capeTown.weather[0].description;
      var capeTownTempMax = capeTown.main.temp_max;
      var capeTownTempMin = capeTown.main.temp_min;

      $('.capeTown_name').text(capeTownName);
      $('.capeTown_icon').attr('src', capeTown_icon);
      $('.capeTown_description').text(capeTownDescription);
      $('.capeTown_temp_max').text(capeTownTempMax);
      $('.capeTown_temp_min').text(capeTownTempMin);
    })

    //For Durban
    $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=durban&units=metric&appid=7d0232e627c8ac12398a819b7dc4c2df', function(durban){

    //console.log(durban);
      
      var durbanName = durban.name;
      var durban_icon  = "https://openweathermap.org/img/w/" + durban.weather[0].icon + ".png";
      var durbanDescription = durban.weather[0].description;
      var durbanTempMax = durban.main.temp_max;
      var durbanTempMin = durban.main.temp_min;

      $('.durban_name').text(durbanName);
      $('.durban_icon').attr('src', durban_icon);
      $('.durban_description').text(durbanDescription);
      $('.durban_temp_max').text(durbanTempMax);
      $('.durban_temp_min').text(durbanTempMin);
    })

    //For Joburg
    $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=johannesburg&appid=7d0232e627c8ac12398a819b7dc4c2df', function(joburg){

    //console.log(joburg);
      
      var joburgName = joburg.name;
      var joburg_icon = "https://openweathermap.org/img/w/" + joburg.weather[0].icon + ".png";
      var joburgDescription = joburg.weather[0].description;
      var joburgTempMax = joburg.main.temp_max;
      var joburgTempMin = joburg.main.temp_min;

      $('.joburg_name').text(joburgName);
      $('.joburg_icon').attr('src', joburg_icon);
      $('.joburg_description').text(joburgDescription);
      $('.joburg_temp_max').text(joburgTempMax);
      $('.joburg_temp_min').text(joburgTempMin);
    })

    //For Pretoria
    $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=pretoria&units=metric&appid=7d0232e627c8ac12398a819b7dc4c2df', function(pretoria){

    //console.log(pretoria);
      
      var pretoriaName = pretoria.name;
      var pretoria_icon = "https://openweathermap.org/img/w/" + pretoria.weather[0].icon + ".png";
      var pretoriaDescription = pretoria.weather[0].description;
      var pretoriaTempMax = pretoria.main.temp_max;
      var pretoriaTempMin = pretoria.main.temp_min;

      $('.pretoria_name').text(pretoriaName);
      $('.pretoria_icon').attr('src', pretoria_icon);
      $('.pretoria_description').text(pretoriaDescription);
      $('.pretoria_temp_max').text(pretoriaTempMax);
      $('.pretoria_temp_min').text(pretoriaTempMin);
    })

    //For PE
    $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=port%20elizabeth&appid=7d0232e627c8ac12398a819b7dc4c2df', function(pe){

    //console.log(pe);
      
      var peName = pe.name;
      var pe_icon = "https://openweathermap.org/img/w/" + pe.weather[0].icon + ".png";
      var peDescription = pe.weather[0].description;
      var peTempMax = pe.main.temp_max;
      var peTempMin = pe.main.temp_min;

      $('.pe_name').text(peName);
      $('.pe_icon').attr('src', pe_icon)
      $('.pe_description').text(peDescription);
      $('.pe_temp_max').text(peTempMax);
      $('.pe_temp_min').text(peTempMin);
    })
  
    //GET data for alerts
    //$.getJSON('https://api.openweathermap.org/data/2.5/onecall?lat=33.9249&lon=8.4241&exclude=current,minutely,hourly,daily&appid=7d0232e627c8ac12398a819b7dc4c2df', function(alerts){

    //})