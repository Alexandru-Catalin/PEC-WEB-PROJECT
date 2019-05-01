
var isI = false;
var isH = false;
var isO = false;
var currentSection = '';
var nexSection = '';

var solutionsNeeded = [];



function nextSection(id) {
  if (nexSection != '')
    currentSection = nexSection;
   var e = document.getElementById(id);
   e.style.display = (e.style.display == 'block') ? 'none' : 'block';
   nexSection = id;

}

function hideSection(id)
{
  var e = document.getElementById(id);
  e.style.display = 'none';
}

function selectSection(id) {


      if (id == 'page-insulation' && isI == false)
      {
        isI = true;
        currentSection = 'IA2';
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
  else if (i == 0)
  {
    isI = false;
    var e = document.getElementById('page-insulation');
    e.style.display = 'none';
    isH = false;
    var e = document.getElementById('page-heating');
    e.style.display = 'none';
    isO = false;
    var e = document.getElementById('page-other');
    e.style.display = 'none';
  }
  }

  // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};
//
// function scrollFunction() {
//   if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
//     document.getElementById("topBtn").style.display = "block";
//   } else {
//     document.getElementById("topBtn").style.display = "none";
//   }
// }
//
// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }

var before1930 = false;
var after1930 = false;
var noIdea = false;

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
      nextSection('S99');
    }
    if (after1930 == true) {
        nextSection('IA7');
    }
    if (noIdea == true) {
        nextSection('IA7');
    }
  }

  if (wallPic == 2)
  {
    if (before1930 == true) {
      nextSection('S3');
    }
    if (after1930 == true) {
      nextSection('IA7');
    }
    if (noIdea == true) {
      nextSection('S3');
    }
  }

    if (wallPic == 3)
    {
      if (before1930 == true) {
        nextSection('S3');
      }
      if (after1930 == true) {
        nextSection('IA7');
      }
      if (noIdea == true) {
        nextSection('S99');
      }

  }

  if (wallPic == 3)
  {
    if (before1930 == true) {
      nextSection('S99');
    }
    if (after1930 == true) {
      nextSection('S99');
    }
    if (noIdea == true) {
      nextSection('S99');
    }

}

if (wallPic == 4)
{
  if (before1930 == true) {
    nextSection('S3');
  }
  if (after1930 == true) {
    nextSection('S99');
  }
  if (noIdea == true) {
    nextSection('S99');
  }

}

if (wallPic == 5)
{
  if (before1930 == true) {
    nextSection('S3');
  }
  if (after1930 == true) {
    nextSection('S99');
  }
  if (noIdea == true) {
    nextSection('S99');
  }

}

if (wallPic == 6)
{
  if (before1930 == true) {
    nextSection('S3');
  }
  if (after1930 == true) {
    nextSection('S99');
  }
  if (noIdea == true) {
    nextSection('S99');
  }

}
}

var index = 0;

function finishSolution(id1,id2){
  hideSections(0);
  nextSection(id1);
  addSolutionHeating(id2);
  displaySummary2();
}

function addSolution(id)
{
  console.log(id);
  solutionsNeeded.push(id);
  console.log(solutionsNeeded[index]);
  index++;
}

var solutionHeating = [];

function addSolutionHeating(id)
{
  console.log(id);
  solutionHeating.push(id);
  console.log(solutionHeating[index]);
  index++;
}


function displaySummary()
{
  for (var i = 0; i < solutionsNeeded.length; ++i)
  {
    var solution = searchSolution(solutionsNeeded[i]);
    document.getElementById('summary').innerHTML += solution.title + "<br>";
      document.getElementById('summary').innerHTML += solution.text + "<br><br><br>";
  }

  localStorage.setItem("solutions", solutionsNeeded);



}

function displaySummary2()
{
  for (var i = 0; i < solutionHeating.length; ++i)
  {
    var solution = searchSolution(solutionHeating[i]);
    document.getElementById('summary2').innerHTML += solution.title + "<br>";
      document.getElementById('summary2').innerHTML += solution.text + "<br><br><br>";
  }

  localStorage.setItem("solutions", solutionHeating);



}

function searchSolution(id)
{
  var temp;
  for (var i = 0; i < solutions.length; ++i)
  {
        if (id == solutions[i].id)
        {
          return solutions[i];
        }
  }
}

function OnLoadPrint()
{
  var solutions = localStorage.getItem("solutions");
  for (var i = 0; i < solutions.length; ++i)
  {
    var solution = searchSolution(solutions[i]);
    document.getElementById('printSummary').innerHTML += solution.title + "<br>";
      document.getElementById('printSummary').innerHTML += solution.text + "<br><br><br>";
  }
}



$(document).ready(function(){
  // $(".fadeout").click(function(){
  //   console.log(currentSection);
  //   $('#' + currentSection).fadeOut()
  // });
  // $(".fadein").click(function(){
  //   console.log(currentSection);
  //   $('#' + currentSection + 'A').fadeIn();
  // });
  // $(".shrink").click(function(){
  //   console.log(currentSection);
  //   $('#' + currentSection + 'A').fadeIn();
  // });

  $('a').click(function(){
  console.log(currentSection);
if (currentSection != 'IA2'){
   $('#' + currentSection).find('a').removeAttr("onclick");}
  });


  //On card hover, do animation on icon
  $('#card1 a').hover(function(){
    $('#card1').find('i').addClass('w3-spin text-success');
  },
  function(){
    $('#card1').find('i').removeClass('w3-spin text-success');
});

//On card hover, do animation on icon
$('#card2 a').hover(function(){
$('#card2').find('i').addClass('pulse');
},
function(){
  $('#card2').find('i').removeClass('pulse');
});

//On card hover, do animation on icon
$('#card3 a').hover(function(){
  $('#card3').find('i').addClass('lightbulb');
},
function(){
  $('#card3').find('i').removeClass('lightbulb');
});
});



$(function() {
  var topoffset = 62;

  //Use smooth scrolling when clicking on navigation
  // $('.navbar a[href*=\\#]:not([href=\\#])').click(
  //   function() {
  //     if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
  //
  //       var target = $(this.hash);
  //       target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
  //
  //       if (target.length) {
  //         $('html,body').animate(
  //           {
  //             scrollTop: target.offset().top - topoffset + 2
  //           },
  //           500
  //         );
  //         return false;
  //       } //target.length
  //     } //click function
  //   }
  // ); //smooth scrolling


  $("a").on('click', function(event) {

    //Ignore these hashes
    if (this.hash != "#demo") {


    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End
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
var isNavOpen = false;

/* Open */
function openNav() {
  if (isNavOpen == false)
  {
    document.getElementById("myNav").style.height = "100%";
    document.getElementById("navBtn").classList.add("hamburgerOpen");

    isNavOpen = true;
  }

  else if (isNavOpen == true)
  {
    document.getElementById("myNav").style.height = "0%";
    document.getElementById("navBtn").classList.remove("hamburgerOpen");
    isNavOpen = false;
  }

}

/* Close */
function closeNav() {
  document.getElementById("myNav").style.height = "0%";
    document.getElementById("navBtn").classList.remove("hamburgerOpen");
  isNavOpen = false;

}
