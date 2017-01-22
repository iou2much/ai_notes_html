$(document).ready(function() {
    $('p').each(function(){
        var txt = $(this).innerText;
        var patt = /[\u4e00-\u9fa5]+/;

        if(txt.test(patt)){
            $(this).addClass('cn');
        }else{
            $(this).addClass('en');
        }
    })

});
