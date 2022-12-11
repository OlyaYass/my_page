const owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,
    loop: true,
    margin: 30,
    startPosition: 1,
    items: 3,
    responsive : {
        0 : {
            margin: 10,
        },
        480 : {
            margin: 15,
        },
        750 : {
            margin: 20,
        }
    }
});

$('.slider_btn--prev').click(function() {
    owl.trigger('prev.owl.carousel');
})

$('.slider_btn--next').click(function() {
    owl.trigger('next.owl.carousel');
})


var coll = document.getElementsByClassName("program_btn");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

