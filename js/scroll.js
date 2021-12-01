$('a[href^="#glass-icons-section"]').click(function(){
    var target = $(this).attr('href');
    $('html, body').animate({scrollTop: $(target).offset().top}, 800);
    return false;
});
$('a[href^="#success-form"]').click(function(){
    var target = $(this).attr('href');
    $('html, body').animate({scrollTop: $(target).offset().top}, 800);
    return false;
});

document.querySelector('.button-for-contact').addEventListener('click', function(){
    var scrolled = window.pageYOffset;
    scrollTop(scrolled,1);
    event.preventDefault()
});

function scrollTop(endPos,i){
    setTimeout(function(){
        if(parseInt(endPos) > 0) {
            var y = parseInt(endPos) - 5 * parseInt(i);
            window.scroll(0, y); //Устанавливаем новую позицию вертикального скрола
            scrollTop(y,parseInt(i)+2);//Рекурсивный вызов функции
        }
    },10);

}