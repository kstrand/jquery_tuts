//alert("I loaded application.js!");

$(function (){
  var back_to_top = "<a href='#top'>Back to Top</a>";
  var toc = "<h2 id='toc'><a name='toc'>Table of Contents</a></h2>";
  var ul = "<ul id='toc'></ul> ";
    // $("div.article").css('border','30px solid #fcc');
    // $("div.article").append(back_to_top);
    $('h1').after(toc);
    $("h2:first").after(ul);
    // $("h2").slice(1).css('border','10px solid #fcc');
    $("div.article h2").css('border','3px solid #fcc');

    $("div.article h2").each(function (){
      var title = $(this).text();
      var slug  = title.trim().toLowerCase().replace(" ", "_");
      // alert(slug);
      var list_item = "<li>" +"<a href='#" + slug +"'>" + title + "</a> " + "</li>";
      var target_anchor = "<a name='" + slug + "'/>";

      // var old_text = $(this).text();
      //
      // var new_text = (old_text === '(hide)') ? '(show)' : '(hide)'

      var toggle_link = $("<a href='#'>(hide)</a>");


          toggle_link.on('click', function (event){
	
            var old_text = $(this).text();
            var new_text = (old_text === '(hide)') ? '(show)' : '(hide)'
            alert(new_text);

          event.preventDefault();
        $(this).siblings('p').toggle();

      });

      $(this).after(toggle_link);
      $(this).before(target_anchor);

     $('ul').append(list_item);


    });

});



    // $("div.article h2").each(function () {
    //
    //      var = title = $(this).text();
    //      alert(title);

