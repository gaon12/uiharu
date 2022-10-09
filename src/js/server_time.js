//MIT(https://codepen.io/karengh/pen/GZNVdQ)
$(function () {
    $.ajax({
      type: 'GET',
      cache: false,
      url: 'https://www.gaon.xyz',
      complete: function (req, textStatus) {
        var dateString = req.getResponseHeader('Date');
        if (dateString.indexOf('GMT') === -1) {
          dateString += ' GMT';
        }
        var date = new Date(dateString);
        $('#serverTime').text(date);
      }
    });
    var localDate = new Date();
    $('#localTime').text(localDate);
  });