$(//*****piano sounds js*****//
   document).ready(function() {

    var counter = 0;

$('#piano').on('click', function () {
   $('#keyboard').html('');
   
   var pianoSounds = [
   	{
   	num: 81,
   	sound: 'sounds/2489__jobro__piano-ff/39156__jobro__piano-ff-009.wav',
   	pressed: false
   	},
   	{
   	num: 87,
   	sound: 'sounds/2489__jobro__piano-ff/39157__jobro__piano-ff-010.wav',
   	pressed: false
   	},
   	{
   	num: 69,
   	sound: 'sounds/2489__jobro__piano-ff/39158__jobro__piano-ff-011.wav',
   	pressed: false
   	},
   	{
   	num: 82,
   	sound: 'sounds/2489__jobro__piano-ff/39159__jobro__piano-ff-012.wav',
   	pressed: false
   	},
   	{
   	num: 85,
   	sound: 'sounds/2489__jobro__piano-ff/39160__jobro__piano-ff-013.wav',
   	pressed: false
   	},
   	{
   	num: 73,
   	sound: 'sounds/2489__jobro__piano-ff/39161__jobro__piano-ff-014.wav',
   	pressed: false
   	},
   	{
   	num: 79,
   	sound: 'sounds/2489__jobro__piano-ff/39162__jobro__piano-ff-015.wav',
   	pressed: false
   	},
   	{
   	num: 80,
   	sound: 'sounds/2489__jobro__piano-ff/39163__jobro__piano-ff-016.wav',
   	pressed: false
   	},
   	{
   	num: 65,
   	sound: 'sounds/2489__jobro__piano-ff/39164__jobro__piano-ff-017.wav',
   	pressed: false
   	},
   	{
   	num: 83,
   	sound: 'sounds/2489__jobro__piano-ff/39165__jobro__piano-ff-018.wav',
   	pressed: false
   	},
   	{
   	num: 68,
   	sound: 'sounds/2489__jobro__piano-ff/39166__jobro__piano-ff-019.wav',
   	pressed: false
   	},
   	{
   	num: 70,
   	sound: 'sounds/2489__jobro__piano-ff/39167__jobro__piano-ff-020.wav',
   	pressed: false
   	},
   	{
   	num: 74,
   	sound: 'sounds/2489__jobro__piano-ff/39168__jobro__piano-ff-021.wav',
   	pressed: false
   	},
   	{
   	num: 75,
   	sound: 'sounds/2489__jobro__piano-ff/39169__jobro__piano-ff-022.wav',
   	pressed: false
   	},
   	{
   	num: 76,
   	sound: 'sounds/2489__jobro__piano-ff/39170__jobro__piano-ff-023.wav',
   	pressed: false
   	},
   	// ;
   	{
   	num: 186,
   	sound: 'sounds/2489__jobro__piano-ff/39171__jobro__piano-ff-024.wav',
   	pressed: false
   	},
   	{
   	num: 90,
   	sound: 'sounds/2489__jobro__piano-ff/39172__jobro__piano-ff-025.wav',
   	pressed: false
   	},
   	{
   	num: 88,
   	sound: 'sounds/2489__jobro__piano-ff/39173__jobro__piano-ff-026.wav',
   	pressed: false
   	},
   	{
   	num: 67,
   	sound: 'sounds/2489__jobro__piano-ff/39174__jobro__piano-ff-027.wav',
   	pressed: false
   	},
   	{
   	num: 86,
   	sound: 'sounds/2489__jobro__piano-ff/39175__jobro__piano-ff-028.wav',
   	pressed: false
   	},
   	{
   	num: 77,
   	sound: 'sounds/2489__jobro__piano-ff/39176__jobro__piano-ff-029.wav',
   	pressed: false
   	},
   	// ,
   	{
   	num: 188,
   	sound: 'sounds/2489__jobro__piano-ff/39177__jobro__piano-ff-030.wav',
   	pressed: false
   	},
   	// .
   	{
   	num: 190,
   	sound: 'sounds/2489__jobro__piano-ff/39178__jobro__piano-ff-031.wav',
   	pressed: false
   	},
   	// /
   	{
   	num: 191,
   	sound: 'sounds/2489__jobro__piano-ff/39179__jobro__piano-ff-032.wav',
   	pressed: false
	}
   ];

  
      counter++;

      if (counter % 2 !== 0) {
         $('#piano').css('background-color', 'pink');
      	var count = 0;
      	for (var i = 0; i < pianoSounds.length; i++) {
      			var idClass;
               if (count === 0) {
                  idClass = 'id="'+(pianoSounds[i].num)+'" class="indKey first"';
               }
               else if (count === 23){
                  idClass = 'id="'+(pianoSounds[i].num)+'" class="indKey last"';
               }
               else if (count > 0 && count < 23 && (count % 4 === 0)) {
                  idClass = 'id="'+(pianoSounds[i].num)+'" class="indKey black'+[i]+'"';
               } else {
                  idClass = 'id="'+(pianoSounds[i].num)+'" class="indKey white"';
               }
      			appendKey(idClass);
      			keyPress(pianoSounds[i].num.toString());
      		count++;
      	}

      	function appendKey (idClass){
      		var key = '<div ' + idClass + '></div>';
      		$('#keyboard').append(key);
      	}


         function keyPress (key){
            $(this).keydown(function(event) {
               for (var i = 0; i < pianoSounds.length; i++){
                    if(event.keyCode === parseInt(key)) {
                     if(pianoSounds[i].pressed === false) {
                        $('#' + key).css("background-color", "lightblue");
                        if (pianoSounds[i].num.toString() === key){
                        $('#' + key).html('<audio id="sound' + pianoSounds[i].num + '" src="' + pianoSounds[i].sound + '" autoplay></audio>');
                        pianoSounds[i].pressed = true;
                        }
                     }
                  }
               }
            });

            $(this).keyup(function(event) {
               if(event.keyCode === parseInt(key)) {
                  for (var n = 0; n < pianoSounds.length; n++) {
                     if(pianoSounds[n].num.toString() === key) {
                        $('#sound' + key).animate({volume: 0.0}, 40);
                        setTimeout( function(){
                           $('#' + key).html('');
                        }, 41);
                        pianoSounds[n].pressed = false;
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
         $('#piano').css('background-color', 'grey');
      }
});

});