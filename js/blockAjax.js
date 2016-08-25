function doAjax() {
  $.ajax({
    url: 'http://localhost:1337/localhost:9055/tmp.json?nonce=' + Math.random(),
    dataType: 'json',
    success: function (json) {
    }
  });
}