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
    var title_idx=[];
    $('body').append("<div class='toc'><ul id='toc'></ul></div>");

    var cur_node=$('#toc'),parr_node=$('#toc');

    $('h1,h2,h3,h4,h5,h6').each(function(){
        console.log(this);


        if(title_idx.length%2==0){
            $(this).addClass('cn')
            // $('#toc').append('<li id="tt_'+title_idx.length+'">'+this.innerText+'</li>');
            //parr_node=$('#tt_'+title_idx.length);

            var lv = this.localName[1];

            if(title_idx[title_idx.length-1].localName[1] == lv){
                $(title_idx[title_idx.length-1]).parent().append('<li id="tt_'+title_idx.length+'">'+this.innerText+this.localName+'</li>');
            }else if(title_idx[title_idx.length-1].localName[1] == lv-1){
                $('#tt_'+title_idx.length-1).append('<li id="tt_'+title_idx.length+'">'+this.innerText+this.localName+'</li>');

            }
        }else {
            $(this).addClass('en')
        }



        title_idx.push(this);
    })


});
