function bookSearch() {
  var search = document.getElementById("search").value;
  document.getElementById("results").innerHTML = "";
  console.log(search);

  $.ajax({
    url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
    dataType: "json",
    success: function(data) {
      for (i = 0; i < data.items.length; i++) {
        results.innerHTML +=
          "<div class='bookshelf'>" +
          "<div class='card text-white bg-dark mb-3'>" +
          "<img class='card-img-top img-thumbnail' src='" +
          data.items[i].volumeInfo.imageLinks.smallThumbnail +
          "'" +
          "printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api' alt='Card image cap'>" +
          "<div class='card-body'>" +
          "<h6 id='booktitle'>" +
          data.items[i].volumeInfo.title +
          "</h6>" +
          "<h6 id='bookauthor'>" +
          data.items[i].volumeInfo.authors[0] +
          "</h6>" +
          "<a target='blank' href='" +
          data.items[i].volumeInfo.previewLink +
          "' class='btn btn-outline-light'>Preview</a>" +
          "</div></div> </div>";
      }
    },
    type: "GET"
  });
}

$("#button").click(bookSearch);

$("#search").keypress(function(e) {
    if(e.which == 13) {
        bookSearch()
    }
});



// Image Slider
$('#demo1').sharrre({
  share: {
    googlePlus: true,
    facebook: true,
    twitter: true
  },
  buttons: {
    googlePlus: {size: 'tall', annotation:'bubble'},
    facebook: {layout: 'box_count'},
    twitter: {count: 'vertical', via: '_JulienH'}
  },
  hover: function(api, options){
    $(api.element).find('.buttons').show();
  },
  hide: function(api, options){
    $(api.element).find('.buttons').hide();
  },
  enableTracking: true
});
// Image Slider
