$.gootalk = function(words) { 
  $('body').append('<video height="0" width="0" src="http://translate.google.com/translate_tts?q='+escape(words)+'&tl=en" autoplay="autoplay"></video>')
}