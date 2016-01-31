$(document).ready(function() {
   var counter = 0;

$('#electric').on('click', function () {

   var electricKit = [
      {
      num: 81,
      sound: 'effect-drop/Blinker_Fall.wav',
      pressed: false
      },
      {
      num: 87,
      sound: 'effect-drop/BrokenBridge_Rev.wav',
      pressed: false
      },
      {
      num: 69,
      sound: 'effect-drop/Brutalism_Rise.wav',
      pressed: false
      },
      {
      num: 82,
      sound: 'effect-drop/CircuitMelted_Fall.wav',
      pressed: false
      },
      {
      num: 85,
      sound: 'effect-drop/NeptuneColony_Rise.wav',
      pressed: false
      },
      {
      num: 73,
      sound: 'effect-drop/Rotor_Rise.wav',
      pressed: false
      },
      {
      num: 79,
      sound: 'drum-and-base/Gunge_Kick.wav',
      pressed: false
      },
      {
      num: 80,
      sound: 'drum-and-base/Gasoline_Drop.wav',
      pressed: false
      },
      {
      num: 65,
      sound: 'buzzSynth/buzz1.wav',
      pressed: false
      },
      {
      num: 83,
      sound: 'buzzSynth/buzz2.wav',
      pressed: false
      },
      {
      num: 68,
      sound: 'buzzSynth/buzz3.wav',
      pressed: false
      },
      {
      num: 70,
      sound: 'buzzSynth/buzz4.wav',
      pressed: false
      },
      {
      num: 74,
      sound: 'buzzSynth/buzz5.wav',
      pressed: false
      },
      {
      num: 75,
      sound: 'buzzSynth/buzz6.wav',
      pressed: false
      },
      {
      num: 76,
      sound: 'buzzSynth/buzz7.wav',
      pressed: false
      },
      // ;
      {
      num: 186,
      sound: 'buzzSynth/buzz8.wav',
      pressed: false
      },
      {
      num: 90,
      sound: 'buzzSynth/buzz9.wav',
      pressed: false
      },
      {
      num: 88,
      sound: 'buzzSynth/buzz10.wav',
      pressed: false
      },
      {
      num: 67,
      sound: 'buzzSynth/buzz11.wav',
      pressed: false
      },
      {
      num: 86,
      sound: 'buzzSynth/buzz12.wav',
      pressed: false
      },
      {
      num: 77,
      sound: 'buzzSynth/buzz13.wav',
      pressed: false
      },
      // ,
      {
      num: 188,
      sound: 'buzzSynth/buzz14.wav',
      pressed: false
      },
      // .
      {
      num: 190,
      sound: 'buzzSynth/buzz15.wav',
      pressed: false
      },
      // /
      {
      num: 191,
      sound: 'buzzSynth/buzz16.wav',
      pressed: false
   }
   ];

      counter++

      if (counter % 2 !== 0) {
         $('#electric').css('background-color', 'pink');
         var count = 0;
         for (var i = 0; i < electricKit.length; i++) {
               var idClass;
               if(count % 2 === 0) {
                  idClass = 'id="'+(electricKit[i].num)+'" class="indKey grey"';
               } else {
                  idClass = 'id="'+(electricKit[i].num)+'" class="indKey"';
               }
               appendKey(idClass);
               keyPress(electricKit[i].num.toString());
            count++;
         }

         function appendKey (idClass){
            var key = '<div ' + idClass + '></div>';
            $('#keyboard').append(key);
         }


         function keyPress (key){
          $(this).keydown(function(event) {
            for (var i = 0; i < electricKit.length; i++){
                 if(event.keyCode === parseInt(key)) {
                  if(electricKit[i].pressed === false) {
                     $('#' + key).css("background-color", "lightblue");
                     if (electricKit[i].num.toString() === key){
                     $('#' + key).html('<audio src="' + electricKit[i].sound + '" autoplay></audio>');
                     electricKit[i].pressed = true;
                     }
                  }
               }
            }
          });

          
          $(this).keyup(function(event) {
              if(event.keyCode === parseInt(key)) {
              $('#' + key).html('');
              for (var n = 0; n < electricKit.length; n++) {
               if(electricKit[n].num.toString() === key) {
                  electricKit[n].pressed = false;
               }
               if ($('#' + key).hasClass('grey')) {
                  $('#' + key).css("background-color", "grey");
               } else {
                  $('#' + key).css("background-color", "white");
               }
              }
              }
          });
        }
      } else {
         $('#keyboard').html('');
         $('#electric').css('background-color', 'grey');
      }
});

});