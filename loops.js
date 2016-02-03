$(document).ready(function (){
	var loopKit = [
		{
			num: 49,
			sound: "guitarloops/HerMajesty_128_Am_Riff02.wav",
		},
		{
			num: 50,
			sound: "guitarloops/WhiteSands_84_E_Chords.wav",
		},
		{
			num: 51,
			sound: "drumloops/beatbumploop.wav",
		},
		{
			num: 52,
			sound: "drumloops/Masked_78_Drums02.wav",
		},
		{
			num: 53,
			sound: "synthloops/drumLoopCool",
		},
		{
			num: 54,
			sound: "synthloops/awesomeSynthLoop",
		},
		{
			num: 55,
			sound: "synthloops/250749__joshuaempyre__groovy-guitar-loop.wav",
		},
		{
			num: 56,
			sound: "synthloops/91033__m-red__autumn-loop.wav",
		}
		]
		
		var counter1 = 0;
		$(this).keydown(function (event){
			counter1++
			if(event.keyCode === 49) {
				if(counter1 % 2 !== 0) {
					$('#musicPlay').html('<audio controls loop src="' + loopKit[0].sound + '" autoplay></audio>');
					$('#guitar1').css('background-color', 'lightgreen');
				} else {
					$('#musicPlay').html('');
					$('#guitar1').css('background-color', 'grey');
				}
		}
		});

		var counter2 = 0;
		$(this).keydown(function (event){
			counter2++
			if(event.keyCode === 50) {
				if(counter2 % 2 !== 0) {
					$('#musicPlay').html('<audio controls loop src="' + loopKit[1].sound + '" autoplay></audio>');
					$('#guitar2').css('background-color', 'lightgreen');
				} else {
					$('#musicPlay').html('');
					$('#guitar2').css('background-color', 'grey');
				}
		}
		});

		var counter3 = 0;
		$(this).keydown(function (event){
			counter3++
			if(event.keyCode === 51) {
				if(counter3 % 2 !== 0) {
					$('#musicPlay').html('<audio controls loop src="' + loopKit[2].sound + '" autoplay></audio>');
					$('#drumLoop1').css('background-color', 'lightgreen');
				} else {
					$('#musicPlay').html('');
					$('#drumLoop1').css('background-color', 'grey');
				}
		}
		});

		var counter4 = 0;
		$(this).keydown(function (event){
			counter4++
			if(event.keyCode === 52) {
				if(counter4 % 2 !== 0) {
					$('#musicPlay').html('<audio controls loop src="' + loopKit[3].sound + '" autoplay></audio>');
					$('#drumLoop2').css('background-color', 'lightgreen');
				} else {
					$('#musicPlay').html('');
					$('#drumLoop2').css('background-color', 'grey');
				}
		}
		});

		var counter5 = 0;
		$(this).keydown(function (event){
			counter5++
			if(event.keyCode === 53) {
				if(counter5 % 2 !== 0) {
					$('#musicPlay').html('<audio controls loop src="' + loopKit[4].sound + '" autoplay></audio>');
					$('#drumLoop3').css('background-color', 'lightgreen');
				} else {
					$('#musicPlay').html('');
					$('#drumLoop3').css('background-color', 'grey');
				}
		}
		});

		var counter6 = 0;
		$(this).keydown(function (event){
			counter6++
			if(event.keyCode === 54) {
				if(counter6 % 2 !== 0) {
					$('#musicPlay').html('<audio controls loop src="' + loopKit[5].sound + '" autoplay></audio>');
					$('#synthLoop1').css('background-color', 'lightgreen');
				} else {
					$('#musicPlay').html('');
					$('#synthLoop1').css('background-color', 'grey');
				}
		}
		});

		var counter7 = 0;
		$(this).keydown(function (event){
			counter7++
			if(event.keyCode === 55) {
				if(counter7 % 2 !== 0) {
					$('#musicPlay').html('<audio controls loop src="' + loopKit[6].sound + '" autoplay></audio>');
					$('#synthLoop2').css('background-color', 'lightgreen');
				} else {
					$('#musicPlay').html('');
					$('#synthLoop2').css('background-color', 'grey');
				}
		}
		});

		var counter8 = 0;
		$(this).keydown(function (event){
			counter8++
			if(event.keyCode === 56) {
				if(counter8 % 2 !== 0) {
					$('#musicPlay').html('<audio controls loop src="' + loopKit[7].sound + '" autoplay></audio>');
					$('#synthLoop3').css('background-color', 'lightgreen');
				} else {
					$('#musicPlay').html('');
					$('#synthLoop3').css('background-color', 'grey');
				}
		}
		});




			
























});