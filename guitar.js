//*****electro groove js*****//
$(document).ready(function() {

    var counter = 0;

$('#guitar').on('click', function () {
   $('#keyboard').html('');

   var guitarSounds = [
   	{
   	num: 81,
   	sound: "synthPluck/guitar1.wav",
   	pressed: false
   	},
   	{
   	num: 87,
   	sound: "synthPluck/guitar2.wav",
   	pressed: false
   	},
   	{
   	num: 69,
   	sound: "synthPluck/guitar3.wav",
   	pressed: false
   	},
   	{
   	num: 82,
   	sound: "synthPluck/guitar4.wav",
   	pressed: false
   	},
   	{
   	num: 85,
   	sound: "synthPluck/guitar5.wav",
   	pressed: false
   	},
   	{
   	num: 73,
   	sound: "synthPluck/guitar6.wav",
   	pressed: false
   	},
   	{
   	num: 79,
   	sound: "synthPluck/guitar7.wav",
   	pressed: false
   	},
   	{
   	num: 80,
   	sound: "synthPluck/guitar8.wav",
   	pressed: false
   	},
   	{
   	num: 65,
   	sound: "synthPluck/guitar9.wav",
   	pressed: false
   	},
   	{
   	num: 83,
   	sound: "synthPluck/guitar10.wav",
   	pressed: false
   	},
   	{
   	num: 68,
   	sound: "synthPluck/guitar11.wav",
   	pressed: false
   	},
   	{
   	num: 70,
   	sound: "synthPluck/guitar12.wav",
   	pressed: false
   	},
   	{
   	num: 74,
   	sound: "synthPluck/guitar13.wav",
   	pressed: false
   	},
   	{
   	num: 75,
   	sound: "synthPluck/guitar14.wav",
   	pressed: false
   	},
   	{
   	num: 76,
   	sound: "synthPluck/guitar15.wav",
   	pressed: false
   	},
   	// ;
   	{
   	num: 186,
   	sound: "synthPluck/guitar16.wav",
   	pressed: false
   	},
   	{
   	num: 90,
   	sound: "synthPluck/guitar17.wav",
   	pressed: false
   	},
   	{
   	num: 88,
   	sound: "synthPluck/guitar18.wav",
   	pressed: false
   	},
   	{
   	num: 67,
   	sound: "synthPluck/guitar19.wav",
   	pressed: false
   	},
   	{
   	num: 86,
   	sound: "synthPluck/guitar20.wav",
   	pressed: false
   	},
   	{
   	num: 77,
   	sound: "synthPluck/guitar21.wav",
   	pressed: false
   	},
   	// ,
   	{
   	num: 188,
   	sound: "synthPluck/guitar22.wav",
   	pressed: false
   	},
   	// .
   	{
   	num: 190,
   	sound: "synthPluck/guitar23.wav",
   	pressed: false
   	},
   	// /
   	{
   	num: 191,
   	sound: "synthPluck/guitar24.wav",
   	pressed: false
	}
   ];

  
      counter++

      if (counter % 2 !== 0) {
         $('#guitar').css('background-color', 'pink');
         var count = 0;
         for (var i = 0; i < guitarSounds.length; i++) {
               var idClass;
               if (count === 0) {
                  idClass = 'id="'+(guitarSounds[i].num)+'" class="indKey first"';
               }
               else if (count === 23){
                  idClass = 'id="'+(guitarSounds[i].num)+'" class="indKey last"';
               }
               else if (count > 0 && count < 23 && (count % 4 === 0)) {
                  idClass = 'id="'+(guitarSounds[i].num)+'" class="indKey black'+[i]+'"';
               } else {
                  idClass = 'id="'+(guitarSounds[i].num)+'" class="indKey white"';
               }
               appendKey(idClass);
               keyPress(guitarSounds[i].num.toString());
            count++;
         }

      	function appendKey (idClass){
      		var key = '<div ' + idClass + '></div>';
      		$('#keyboard').append(key);
      	}


         function keyPress (key){
            $(this).keydown(function(event) {
               for (var i = 0; i < guitarSounds.length; i++){
                    if(event.keyCode === parseInt(key)) {
                     if(guitarSounds[i].pressed === false) {
                        $('#' + key).css("background-color", "lightblue");
                        if (guitarSounds[i].num.toString() === key){
                        $('#' + key).html('<audio id="sound' + guitarSounds[i].num + '" src="' + guitarSounds[i].sound + '" autoplay></audio>');
                        guitarSounds[i].pressed = true;
                        }
                     }
                  }
               }
            });

            $(this).keyup(function(event) {
               if(event.keyCode === parseInt(key)) {
                  for (var n = 0; n < guitarSounds.length; n++) {
                     if(guitarSounds[n].num.toString() === key) {
                        $('#sound' + key).animate({volume: 0.0}, 100);
                        setTimeout( function(){
                           $('#' + key).html('');
                        }, 101);
                        guitarSounds[n].pressed = false;
                     }
                     if ($('#' + key).hasClass('black4')) {
                        $('#' + key).css("background-color", "black");
                     } else if ($('#' + key).hasClass('black8')) {
                        $('#' + key).css("background-color", "black");
                     } else if ($('#' + key).hasClass('black12')) {
                        $('#' + key).css("background-color", "black");
                     } else if ($('#' + key).hasClass('black16')) {
                        $('#' + key).css("background-color", "black");
                     } else if ($('#' + key).hasClass('black20')) {
                        $('#' + key).css("background-color", "black");
                     } else {
                        $('#' + key).css("background-color", "white");
                     }
                 }
                 }
            });
         }
      } else {
         $('#keyboard').html('');
         $('#guitar').css('background-color', 'grey');
      }
});

});