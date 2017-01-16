jQuery(document).ready(function() {
  var QRBox = $('#QRBox');
  var MainBox = $('#MainBox');
  // 二维码路径
  var AliPayQR  = 'http://chuantu.biz/t5/46/1484532584x463111770.png';
  var WeChanQR  = 'http://chuantu.biz/t5/46/1484532547x463111770.png';


  function showQR(QR) {
    if (QR) {
      MainBox.css('background-image','url('+QR+')');
    }
    $('#DonateText,#donateBox,#github').addClass('blur');
    QRBox.fadeIn(300,function(argument) {
      MainBox.addClass('showQR');
    });
  }

  $('#donateBox>li').click(function(event) {
    var thisID  = $(this).attr('id');
    if (thisID === 'AliPay') {
      showQR(AliPayQR);
    } else if (thisID === 'WeChat') {
      showQR(WeChanQR);
    }
  });

  MainBox.click(function(event) {
    MainBox.removeClass('showQR').addClass('hideQR');
    setTimeout (function(a) {
      QRBox.fadeOut(300,function(argument) {
        MainBox.removeClass('hideQR');
      });
      $('#DonateText,#donateBox,#github').removeClass('blur');
    },600);

  });
});