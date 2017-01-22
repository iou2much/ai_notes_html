$(document).ready(function() {
    $('p').each(function(){
        var txt = this.innerText;
        var patt = /[\u4e00-\u9fa5]+/;

        if($(this.children).length==1 && $(this.children)[0].localName == 'mathjax'){
            return;
        }
        if(patt.test(txt)){
            $(this).addClass('cn');
        }else{
            $(this).addClass('en');
        }
    })

});
