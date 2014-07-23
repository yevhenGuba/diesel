var item = $('.catalog-items span');
item.click(function () {
	$('.catalog-items span').removeClass('selected');
	$(this).addClass('selected');
});


var item2 = $('.catalog-table span');
var temp = $('.catalog-table em.num');
temp.click(function () {
	$('.catalog-table span').removeClass('selected');
	$(this).parent().addClass('selected');
});