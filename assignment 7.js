$(document).ready(setUp);

jQuery["postJSON"] = function(url,data,callback) {
  $.ajax({
    url:url,
    type:'POST',
    data:JSON.stringify(data),
    contentType:'application/json',
    dataType:'json',
    success: callback
  });
};

function setUp() {
  $('#button').click(buttonHandler);
  $.getJSON('http://cmsc106.net/Volunteer/api/volunteer?key=YZl4Z+ypZf6dUUVz8xQ+Fw==', showResponses);
}

function buttonHandler() {
  var toPost = {name: $('#name').val(), email: $('#email').val()}

  $.postJSON('http://cmsc106.net/Volunteer/api/volunteer?key=YZl4Z+ypZf6dUUVz8xQ+Fw==', toPost, getData);
}

function getData() {
    $.getJSON('http://cmsc106.net/Volunteer/api/volunteer?key=YZl4Z+ypZf6dUUVz8xQ+Fw==', showResponses);
}

function showResponses(data){
  var newList = $('<ul>');
  newList.addClass('list-group');
  for (n=0; n < data.length; n++) {
    var newLi = $('<li>').text(data[n].name).addClass('list-group-item');
    newList.append(newLi);
  }
  $('#signedUp').html(newList);
}
