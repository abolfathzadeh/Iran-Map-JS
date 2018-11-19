/*
 * Iran Map - SVG and Responsive.
 * Free and open source.
 * Version 1.1.0
 * By: MohammadReza Pourmohammad.
 * Email: mohammadrpm@gmail.com
 * Web: http://mrpm.ir
 */

$(function () {

    $(window).resize(function () {
        resposive();
    });

    function resposive() {
        var height = $('#IranMap .list').height();
        var width = $('#IranMap .list').width();
        if (height > width) {
            $('#IranMap svg').height(width).width(width);
        } else {
            $('#IranMap svg').height(height).width(height);
        }
    }
    resposive();

    $('#IranMap div svg g path').hover(function () {
         var className = $(this).attr('class');
        var className1 = $(this).attr('class').toString();
        className1 = className1.split(' ');
        var parrentClassName = $(this).parent('g').attr('class');
        var itemName = $('#IranMap .list .' + parrentClassName + ' .' + className1 + ' a').html();
        if (itemName) {
            var sth = itemName.split("<input").pop();
            itemName = itemName.replace(sth, '').replace('<input', '');           
            $('#IranMap .list .' + parrentClassName + ' .' + className1 ).find('a').addClass('hover');
            $('#IranMap .show-title').html(itemName).css({ 'display': 'block' });            
        }
    }, function () {
        $('#IranMap .list a').removeClass('hover');
        $('#IranMap .show-title').html('').css({ 'display': 'none' });

        var className1 = $(this).attr('class').toString();
        className1 = className1.split(' ');
        var parrentClassName = $(this).parent('g').attr('class');
    });
    $('#IranMap div svg g text').hover(function () {
        var className = $(this).attr('class');
        var className1 = $(this).attr('class').toString();
        className1 = className1.split(' ');
        var parrentClassName = $(this).parent('g').attr('class');
        var itemName = $('#IranMap .list .' + parrentClassName + ' .' + className1 + ' a').html();
        if (itemName) {
            var sth = itemName.split("<input").pop();
            itemName = itemName.replace(sth, '').replace('<input', '');
            $('#IranMap .list .' + parrentClassName + ' .' + className1).find('a').addClass('hover');
            $('#IranMap .show-title').html(itemName).css({ 'display': 'block' });

            var object = '#IranMap svg g.' + parrentClassName + ' path.' + className1;
            var currentClass = $(object).attr('class');
            $(object).attr('class', currentClass + ' hover');

            //var object2 = '#IranMap .list .' + parrentClassName + ' .' + className1 + ' a';
            //var currentClass = $(object2).attr('class');
            //$(object2).attr('class', currentClass + ' hover');
        }
    }, function () {
       

        var className1 = $(this).attr('class').toString();
        className1 = className1.split(' ');
        var parrentClassName = $(this).parent('g').attr('class');
        var itemName = $('#IranMap .list .' + parrentClassName + ' .' + className1 + ' a').html();
       
            var sth = itemName.split("<input").pop();
            itemName = itemName.replace(sth, '').replace('<input', '');
            $('#IranMap .list .' + parrentClassName + ' .' + className1 + ' a').addClass('hover');
            $('#IranMap .show-title').html(itemName).css({ 'display': 'block' });

            var object = '#IranMap svg g.' + parrentClassName + ' path.' + className1;
            var currentClass = $(object).attr('class');
            $(object).attr('class', currentClass.replace(' hover', '').replace(' hover', ''));

            $('#IranMap .list a').removeClass('hover');
            $('#IranMap .show-title').html('').css({ 'display': 'none' });
    });
    $('#IranMap .list ul li ul li a').hover(function () {
        var className = $(this).parent('li').attr('class');
        var className1 =  $(this).parent('li').attr('class').toString();
        className1 = className1.split(' ');
        var parrentClassName = $(this).parent('li').parent('ul').parent('li').attr('class');
        var object = '#IranMap svg g.' + parrentClassName + ' path.' + className1;
        var currentClass = $(object).attr('class');
        $(object).attr('class', currentClass + ' hover');


    }, function () {
        var className = $(this).parent('li').attr('class');
        var className1 = $(this).parent('li').attr('class').toString();
        className1 = className1.split(' ');
        var parrentClassName = $(this).parent('li').parent('ul').parent('li').attr('class');
        var object = '#IranMap svg g.' + parrentClassName + ' path.' + className1;
        var currentClass = $(object).attr('class');
        $(object).attr('class', currentClass.replace(' hover', ''));
    });
    $('#IranMap .list ul li .IranAll').hover(function () {
        //var className = $(this).parent('li').attr('class');
        //var className1 = $(this).parent('li').attr('class').toString();
        //className1 = className1.split(' ');
        //var parrentClassName = 'province';
        //var object = '#IranMap svg g.' + parrentClassName + ' path.' + className1;
        //var currentClass = $(object).attr('class');
        //$(object).attr('class', currentClass + ' hover');

        var className = $(this).attr('class');
        //var className = $(this).parent('li').attr('class');
        var parrentClassName = $(this).parent('span').parent('div').parent('li').parent('ul').parent('li').children('div').children('span').children('a').attr('class');
        //var parrentClassName = $(this).parent('li').parent('ul').parent('li').attr('class');
        //.parent('ul').parent('li').attr('class');



        var object = '#IranMap svg g.province' + ' path.' + className;
        var t = $(object).get();
        var list = [];
        $(object).each(function (i, selected) {
            list[i] = $(selected).attr("class");
        });

        for (var i = 0; i < list.length; i++) {
            var currentClass = list[i].toString();
            //object = '#IranMap svg g.province' + ' path.'
            //    + currentClass.replace('IranAll ', 'IranAll hover ');
            ////var currentClass = $(object).index(i).attr('class');
            //$(object).attr('class', currentClass + ' hover');

            var object3 = '#IranMap svg g.province path.' + currentClass.replace('IranAll ', '').replace('path-city ', '')  
                .replace('path-city-g15', '').replace('path-city-g14', '').replace('path-city-g13', '').replace('path-city-g12', '').replace('path-city-g11', '')
            .replace('path-city-g10', '').replace('path-city-g9', '').replace('path-city-g8', '').replace('path-city-g7', '').replace('path-city-g6', '')
            .replace('path-city-g5', '').replace('path-city-g4', '').replace('path-city-g3', '').replace('path-city-g2', '').replace('path-city-g1', '');
          
            $(object3).attr('class', currentClass+' hover');
        }
       
        var className1 = $(this).attr('class').toString();
        className1 = className1.replace('badge ', '');
        className1 = className1.split(' ');
        var parrentClassName = $(this).parent('g').attr('class');
        var itemName = $('#IranMap .list .province .' + className1 + ' a').html();
        if (itemName) {
            $('#IranMap .list .province .' + className1 + ' a').addClass('hover');
            //$('#IranMap .show-title').html(itemName).css({ 'display': 'block' });
        }
    }, function () {
        

        var className = $(this).attr('class');
        if (className.indexOf("hover") >= 0)
            className = className.replace(' hover', '');
        //var className = $(this).parent('li').attr('class');
        var parrentClassName = $(this).parent('span').parent('div').parent('li').parent('ul').parent('li').children('div').children('span').children('a').attr('class');

        var object = '#IranMap div svg .province' + ' path.' + className;
        var list = [];
        $(object).each(function (i, selected) {
            list[i] = $(selected).attr("class");
        });

        for (var i = 0; i < list.length; i++) {
            //var currentClass = $(object).attr('class');

            var currentClass = list[i].toString();
            //var object3 = '#IranMap svg g.province path.' + currentClass.replace('IranAll ', '').replace('path-city ', '')
            //    .replace('path-city-g1', '').replace('path-city-g2', '').replace('path-city-g3', '').replace('path-city-g4', '').replace('path-city-g5', '')
            //.replace('path-city-g6', '').replace('path-city-g7', '').replace('path-city-g8', '').replace('path-city-g9', '').replace('path-city-g10', '')
            //.replace('path-city-g11', '').replace('path-city-g12', '').replace('path-city-g13', '').replace('path-city-g14', '').replace('path-city-g15', '');

            //$(object).attr('class', currentClass.replace(' hover', '').replace(' hover', '').replace(' hover', '').replace('hover', ''));

            object = '#IranMap svg g.province' + ' path.' + currentClass.replace(' hover', '')
               .replace('IranAll ', '').replace('path-city ', '')
                 .replace('path-city-g15', '').replace('path-city-g14', '').replace('path-city-g13', '').replace('path-city-g12', '').replace('path-city-g11', '')
            .replace('path-city-g10', '').replace('path-city-g9', '').replace('path-city-g8', '').replace('path-city-g7', '').replace('path-city-g6', '')
            .replace('path-city-g5', '').replace('path-city-g4', '').replace('path-city-g3', '').replace('path-city-g2', '').replace('path-city-g1', '');
            $(object).attr('class', currentClass.replace(' hover', ''));
        }
        $('#IranMap .list a').removeClass('hover');

    });
    $('#IranMap').mousemove(function (e) {
        var posx = 0;
        var posy = 0;
        if (!e)
            var e = window.event;
        if (e.pageX || e.pageY) {
            posx = e.pageX;
            posy = e.pageY;
        } else if (e.clientX || e.clientY) {
            posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }
        if ($('#IranMap .show-title').html()) {
            var offset = $(this).offset();
            var x = (posx - offset.left + 25) + 'px';
            var y = (posy - offset.top - 5) + 'px';
            $('#IranMap .show-title').css({ 'left': x, 'top': y });
        }
    });


    $('#IranMap .list ul li .badge').hover(function () {
       
        var className = $(this).attr('class');
        className = className.replace('badge ', '');
        var parrentClassName = $(this).parent('span').parent('div').parent('li').parent('ul').parent('li').children('div').children('span').children('a').attr('class');

        var object = '#IranMap svg g.province' + ' path.' + className;
        var t = $(object).get();
        var list = [];
        $(object).each(function (i, selected) {
            list[i] = $(selected).attr("class");
        });

        for (var i = 0; i < list.length; i++) {
            var currentClass = list[i].toString();
            var object3 = '#IranMap svg g.province path.' + currentClass.replace('IranAll ', '').replace('path-city ', '')
                .replace('path-city-g15', '').replace('path-city-g14', '').replace('path-city-g13', '').replace('path-city-g12', '').replace('path-city-g11', '')
            .replace('path-city-g10', '').replace('path-city-g9', '').replace('path-city-g8', '').replace('path-city-g7', '').replace('path-city-g6', '')
            .replace('path-city-g5', '').replace('path-city-g4', '').replace('path-city-g3', '').replace('path-city-g2', '').replace('path-city-g1', '');

            $(object3).attr('class', currentClass + ' hover');
        }

      
        var className1 = $(this).attr('class').toString();
        className1 = className1.replace('badge ', '');
        className1 = className1.split(' ');
        var parrentClassName = $(this).parent('g').attr('class');
        var itemName = $('#IranMap .list .province .' + className1 + ' a').html();
        if (itemName) {
            $('#IranMap .list .province .' + className1 + ' a').addClass('hover');
            //$('#IranMap .show-title').html(itemName).css({ 'display': 'block' });
        }
    }, function () {


        var className = $(this).attr('class');
        className = className.replace('badge ', '');
        if (className.indexOf("hover") >= 0)
            className = className.replace(' hover', '');
        //var className = $(this).parent('li').attr('class');
        var parrentClassName = $(this).parent('span').parent('div').parent('li').parent('ul').parent('li').children('div').children('span').children('a').attr('class');

        var object = '#IranMap div svg .province' + ' path.' + className;
        var list = [];
        $(object).each(function (i, selected) {
            list[i] = $(selected).attr("class");
        });

        for (var i = 0; i < list.length; i++) {
            //var currentClass = $(object).attr('class');

            var currentClass = list[i].toString();
            
            object = '#IranMap svg g.province' + ' path.' + currentClass.replace(' hover', '')
               .replace('IranAll ', '').replace('path-city ', '')
                 .replace('path-city-g15', '').replace('path-city-g14', '').replace('path-city-g13', '').replace('path-city-g12', '').replace('path-city-g11', '')
            .replace('path-city-g10', '').replace('path-city-g9', '').replace('path-city-g8', '').replace('path-city-g7', '').replace('path-city-g6', '')
            .replace('path-city-g5', '').replace('path-city-g4', '').replace('path-city-g3', '').replace('path-city-g2', '').replace('path-city-g1', '');
            $(object).attr('class', currentClass.replace(' hover', ''));
        }

        $('#IranMap .list a').removeClass('hover');
       
    });
});