
jQuery.fn.centerTextarea = function(first) {
  $t = $(this);
  if(typeof first != undefined && first) {
    if(!!$dummy && !!$dummy.closest("body").length) {}
    else {
      $dummy = $('<div class="dummy"></div>').appendTo($("body"));
    }
    $dummy.css({
      width:$(this).innerWidth(),
      'font-size':getStyle($t[0], 'font-size'),
      'line-height':getStyle($t[0], 'line-height'),
      'font-weight':getStyle($t[0], 'font-weight'),
      'letter-spacing':getStyle($t[0], 'letter-spacing'),
      'font-family':getStyle($t[0], 'font-family'),
      padding:getStyle($t[0], 'padding'),
    });
  }
  $dummy.html(formatDummyText($t.val()));
  setTimeout(function() { 
    var top=calculateTop($t);
    if (top<100){ 
      $t.addClass("scroll");
      top = 100;
    } else {
      $t.removeClass("scroll");
    }
    $t.css("padding-top",top);

  },0);
  return $t;
}
formatDummyText = function(text) {
  if ( !text ) return $("textarea").slice(0,1).attr("placeholder");
  else return text.replace( /\n$/, '<br>&nbsp;' ).replace( /\n/g, '<br>' );
}
calculateTop = function($ele) {
  if(typeof $ele == "undefined") $ele = $(window);
  var top=100;
  if (!$dummy) return 0;

    if ($dummy.length && $dummy.height()>0) {
      var h = $ele.height();
      top = (h - $dummy.height()) * .5;
    }
  return top;
}
getStyle = function(el,styleProp) {
  var camelize = function (str) {
    return str.replace(/\-(\w)/g, function(str, letter){
      return letter.toUpperCase();
    });
  };

  if (el.currentStyle) {
    return el.currentStyle[camelize(styleProp)];
  } else if (document.defaultView && document.defaultView.getComputedStyle) {
    return document.defaultView.getComputedStyle(el,null)
                               .getPropertyValue(styleProp);
  } else {
    return el.style[camelize(styleProp)]; 
  }
}