$('h1').text('');
$('#leftcolumn a:nth-child(3)').each(function () {
	$('h1').append('<br>'+$(this).text())
})
