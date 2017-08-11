//dvdsreleasedates
$('h1').text('');
$('#leftcolumn a:nth-child(3)').each(function () {
	$('h1').append('<br>'+$(this).text())
})
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SelectorGadget
javascript:(function(){var%20s=document.createElement('div');s.innerHTML='Loading...';s.style.color='black';s.style.padding='20px';s.style.position='fixed';s.style.zIndex='9999';s.style.fontSize='3.0em';s.style.border='2px%20solid%20black';s.style.right='40px';s.style.top='40px';s.setAttribute('class','selector_gadget_loading');s.style.background='white';document.body.appendChild(s);s=document.createElement('script');s.setAttribute('type','text/javascript');s.setAttribute('src','https://dv0akt2986vzh.cloudfront.net/unstable/lib/selectorgadget.js');document.body.appendChild(s);})();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SubChange
var orignal = $('#q').val();
var Changed = orignal.replace(/\./g,' ');
$('#q').val(Changed)
// Same below
javascript:(function()%7Bfunction%20callback()%7B(function(%24)%7Bvar%20jQuery%3D%24%3Bvar%20orignal%20%3D%20%24('%23q').val()%3Bvar%20Changed%20%3D%20orignal.replace(%2F%5C.%2Fg%2C'%20')%3B%24('%23q').val(Changed)%7D)(jQuery.noConflict(true))%7Dvar%20s%3Ddocument.createElement(%22script%22)%3Bs.src%3D%22https%3A%2F%2Fajax.googleapis.com%2Fajax%2Flibs%2Fjquery%2F1.7.1%2Fjquery.min.js%22%3Bif(s.addEventListener)%7Bs.addEventListener(%22load%22%2Ccallback%2Cfalse)%7Delse%20if(s.readyState)%7Bs.onreadystatechange%3Dcallback%7Ddocument.body.appendChild(s)%3B%7D)()
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MovieFoneText
javascript:(function(){$(".movie-title").each(function(){$("#title-text").append("<br>"+$(this).text())});})();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// RottenTom-Text
javascript:(function(){$("#showing-count").text("");$("h3.movieTitle").each(function(){$("#showing-count").append("<br>"+$(this).text())});})();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//jQuerify
javascript:var%20s=document.createElement('script');s.setAttribute('src',%20'http://code.jquery.com/jquery.js');document.getElementsByTagName('body')[0].appendChild(s);alert('thank%20you%20for%20using%20jquery!');void(s);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// link to trailert 
// movie fone
$('.movie-title').each(function() {
$(this).attr('href',('https://www.youtube.com/results?search_query=' + $(this).text() + ' Trailer'))
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// rotten link
$('div .popoverTrigger').each(function () {
	var z = ($(this).find('.movieTitle').text());
	$(this).attr('href',('https://www.youtube.com/results?search_query=' + z + ' Trailer' ))
})


// Rotten link correct v2
javascript:(function(){$('.movieTitle').each(function(){$(this).parent('a').attr('href',('https://www.youtube.com/results?search_query='+$(this).text()+'%20Trailer'))});})();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//dvd sreleasedates >>>>> Must add JQ
$('a:nth-child(3)').each(function() {
$(this).attr('href',('https://www.youtube.com/results?search_query=' + $(this).text() + ' Trailer'))
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 9x buddy

javascript:(function(){$(document).ready(function(){$(".download-get-size").trigger("click");});})();
// ShowChannles rarbg
document.getElementById("mediainfo_container").style.display = ""
