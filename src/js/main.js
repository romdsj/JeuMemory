//"use strict";
var nbClic = 0;
var elem = new Array();
$('img').each(function() {
	$(this).toggle();
});

$('article').click(function() {
	if($(this).children().length != 0)
	{
		var img = $(this).children();
		console.log(img)
		var link = img.attr('src');
		img.toggle();
		nbClic++
		$('span').text(nbClic);
		if(img.css("display") == "none")
		{
			elem = new Array();
		}
		else if(elem.length == 0)
		{
			elem[0] = link;
		}
		else
		{
			_.delay(function() {}, 1000);
			if(link == elem[0])
			{
				$('[src="' + link + '"][display!="none"]').each(function() {
					$(this).parent().css("background-color","white");
					$(this).remove();
				});
			}
			else
			{
				$('[src="' + link + '"][display!="none"]').toggle();
				$('[src="' + elem[0] + '"][display!="none"]').toggle();
			}
		}
	}
});
