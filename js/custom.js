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
            var lv = this.localName[1];

            if(title_idx.length==0){
                $('#toc').append('<li id="tt_'+title_idx.length+'">'+this.innerText+this.localName+'</li>');
                $('#tt_'+(title_idx.length)).attr('lv',lv);
                title_idx.push(this);
                return;
            }
            //parr_node=$('#tt_'+title_idx.length);


            if(title_idx[title_idx.length-2].localName[1] == lv){
                $('#tt_'+(title_idx.length-2)).parent().append('<li id="tt_'+(title_idx.length)+'">'+this.innerText+this.localName+'</li>');
                $('#tt_'+(title_idx.length)).attr('lv',lv);
            }else if(title_idx[title_idx.length-2].localName[1] < lv){
                if($('#tt_'+(title_idx.length-2)+'>ul').length==0){
                    $('#tt_'+(title_idx.length-2)).append('<ul></ul>');

                }
                $('#tt_'+(title_idx.length-2)+'>ul').append('<li id="tt_'+(title_idx.length)+'">'+this.innerText+this.localName+'</li>');
                $('#tt_'+(title_idx.length)).attr('lv',lv);

            }else{
                var parr = $('#tt_'+(title_idx.length-2)).parent().parent();
                var parr_lv = parr.attr('lv');
                while(parr_lv != undefined ){
                    if(parr_lv==lv){
                        parr=parr.parent();
                        break;
                    }
                    parr = parr.parent();
                    parr_lv = parr.attr('lv');
                }
                parr.append('<li id="tt_'+(title_idx.length)+'">'+this.innerText+this.localName+'</li>');
                $('#tt_'+(title_idx.length)).attr('lv',lv);
            }
        }else {
            $(this).addClass('en')
        }

        title_idx.push(this);



    })


});
