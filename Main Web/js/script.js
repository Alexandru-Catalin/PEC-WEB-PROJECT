$(function() {
  var topoffset = 62;

  //Use smooth scrolling when clicking on navigation
  $('.navbar a[href*=\\#]:not([href=\\#])').click(
    function() {
      if (
        location.pathname.replace(/^\//, '') ===
          this.pathname.replace(/^\//, '') &&
        location.hostname === this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate(
            {
              scrollTop: target.offset().top - topoffset + 2
            },
            500
          );
          return false;
        } //target.length
      } //click function
    }
  ); //smooth scrolling

  $(window).on('activate.bs.scrollspy', function() {
    var hash = $('.site-nav')
      .find('a.active')
      .attr('href');

      if (hash !== '#page-top') {
        $('header nav').addClass('inbody');
      } else {
        $('header nav').removeClass('inbody');
      }
  });

  $('#site-modal').on('show.bs.modal', function(event) {
    $(this)
      .find('.modal-content img')
      .attr('src', $(event.relatedTarget).data('highres'));
  });

  // Closes responsive menu when a scroll trigger link is clicked
    $('.navbar a').click(function() {
      $('.navbar-collapse').collapse('hide');
    });

    $('#site-modal').on('show.bs.modal', function(event) {
      $(this)
        .find('.modal-content img')
        .attr('src', $(event.relatedTarget).data('highres'));
    });

});


// function nextSection(id) {
//    var e = document.getElementById(id);
//    e.style.display = (e.style.display == 'block') ? 'none' : 'block';
// }
var isI = false;
var isH = false;
var isO = false;

var before1930 = false;
var after1930 = false;
var noIdea = false;

function nextSection(id) {
   var e = document.getElementById(id);
   e.style.display = (e.style.display == 'block') ? 'none' : 'block';

}

function selectSection(id) {

  //if (isI == true || isH == true || isO == true)
  {

  }
  //else
    {
      if (id == 'page-insulation' && isI == false)
      {
        isI = true;
        var e = document.getElementById('page-insulation');
        e.style.display = 'block';
        hideSections(1);
      }

      else if (id == 'page-heating' && isH == false)
      {
        isH = true;
        var e = document.getElementById('page-heating');
        e.style.display = 'block';
        hideSections(2);
      }

      else if (id == 'page-other' && isO == false)
      {
        isO = true;
        var e = document.getElementById('page-other');
        e.style.display = 'block';

        hideSections(3);
      }
      else {
        var e = document.getElementById(id);
        e.style.display = 'none';

        isI = false;
        isH = false;
        isO = false;
      }

      function hideSections(i)
      {
        if (i == 1){

        isH = false;
        var e = document.getElementById('page-heating');
        e.style.display = 'none';
        isO = false;
        var e = document.getElementById('page-other');
        e.style.display = 'none';
      }
      if (i == 2){
        isO = false;
        var e = document.getElementById('page-other');
        e.style.display = 'none';
        isI = false;
        var e = document.getElementById('page-insulation');
        e.style.display = 'none';
      }
        if (i == 3){
        isI = false;
        var e = document.getElementById('page-insulation');
        e.style.display = 'none';
        isH = false;
        var e = document.getElementById('page-heating');
        e.style.display = 'none';
      }
      }

    }
  }


  // When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("topBtn").style.display = "block";
  } else {
    document.getElementById("topBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


function workoutWall(i) {

  before1930 = false;
  after1930 = false;
  noIdea = false;

  if (i == 1)
  {
    before1930 = true;
  }

  if (i == 2)
  {
    after1930 = true;
  }

  if (i == 3)
  {
    noIdea = true;
  }
}
var wallPic = 0;

function selectPic(i) {

wallPic = i;

}

function calculateWall()
{
  if (wallPic == 1)
  {
    if (before1930 == true) {
      selectSection('S100');
    }
    if (after1930 == true) {
      selectSection('IA7');
    }
    if (noIdea == true) {
      selectSection('IA7');
    }
  }

  if (wallPic == 2)
  {
    if (before1930 == true) {
      selectSection('S100');
    }
    if (after1930 == true) {
      selectSection('IA7');
    }
    if (noIdea == true) {
      selectSection('S100');
    }
  }
}
