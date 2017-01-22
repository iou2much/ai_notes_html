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
    var title_idx=0;
    $('body').append("<div class='toc'><ul id='toc'></ul></div>");
    var cur_node=$('#toc'),parr_node=$('#toc');
    $('h1,h2,h3,h4,h5,h6').each(function(){
        console.log(this);


        if(title_idx%2==0){
            $(this).addClass('cn')
            $('#toc').append('<li>'+this.innerText+'</li>');
        }else {
            $(this).addClass('en')
        }
        title_idx++;
    })


});
