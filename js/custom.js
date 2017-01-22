$(document).ready(function() {
    $('p,body>ul>li,body>ol>li').each(function(){
        var txt = this.innerText;
        var patt = /[\u4e00-\u9fa5]+/;

        if(this.childNodes.length==1 && this.childNodes[0] != 'undefined' && this.childNodes[0].localName == 'mathjax'){
            return;
        }
        if(patt.test(txt)){
            $(this).addClass('cn');
        }else{
            $(this).addClass('en');
        }
    });
    $('h1,h2,h3,h4,h5,h6').each(function(){
        console.log(this)
    })


});
