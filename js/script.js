
var isI = false;
var isH = false;
var isO = false;
var currentSection = '';
var nexSection = '';

var solutionsInsulation = [];



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

var allSolutions = [];

function finishInsulation(id1,id2){
  hideSections(0);
  nextSection(id1);
  addSolution(id2);
  displaySummary();
}

function finishHeating(id1,id2){
  hideSections(0);
  nextSection(id1);
  addSolutionHeating(id2);
  displaySummary2();
}

function finishOther(id1,id2){
  hideSections(0);
  nextSection(id1);
  addSolutionOther(id2);
  displaySummary3();
}

function addSolution(id)
{
  console.log(id);
  solutionsInsulation.push(id);
  allSolutions.push(id);
  console.log(solutionsInsulation[index]);
  index++;
}

var solutionHeating = [];

function addSolutionHeating(id)
{
  console.log(id);
  solutionHeating.push(id);
  allSolutions.push(id);

  console.log(solutionHeating[index]);
  index++;
}

var solutionOther = [];

function addSolutionOther(id)
{
  console.log(id);
  solutionOther.push(id);
  allSolutions.push(id);

  console.log(solutionOther[index]);
  index++;
}

function displaySummary()
{
  for (var i = 0; i < solutionsInsulation.length; ++i)
  {
    var solution = searchSolution(solutionsInsulation[i]);
    document.getElementById('summary').innerHTML += solution.title + "<br>";
      document.getElementById('summary').innerHTML += solution.text + "<br><br><br>";
  }

  localStorage.setItem("solutions", solutionsInsulation);



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

function displaySummary3()
{

  document.getElementById('summary3').innerHTML += savingsText + "<br><br><br>";

  for (var i = 0; i < solutionOther.length; ++i)
  {
    var solution = searchSolution(solutionOther[i]);
    document.getElementById('summary3').innerHTML += solution.title + "<br>";
      document.getElementById('summary3').innerHTML += solution.text + "<br><br><br>";
  }

  localStorage.setItem("solutions", solutionOther);



}

function displaySummaryFull()
{
  for (var i = 0; i < solutionsInsulation.length; ++i)
  {
    var solution = searchSolution(solutionsInsulation[i]);
    document.getElementById('summary11').innerHTML += solution.title + "<br>";
      document.getElementById('summary11').innerHTML += solution.text + "<br><br><br>";
  }

  for (var i = 0; i < solutionHeating.length; ++i)
  {
    var solution = searchSolution(solutionHeating[i]);
    document.getElementById('summary22').innerHTML += solution.title + "<br>";
      document.getElementById('summary22').innerHTML += solution.text + "<br><br><br>";
  }


  document.getElementById('summary33').innerHTML += savingsText + "<br><br><br>";


  for (var i = 0; i < solutionOther.length; ++i)
  {
    var solution = searchSolution(solutionOther[i]);
    document.getElementById('summary33').innerHTML += solution.title + "<br>";
      document.getElementById('summary33').innerHTML += solution.text + "<br><br><br>";
  }
  localStorage.setItem("solutions", allSolutions);



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

//   $('a').click(function(){
//   console.log(currentSection);
// if (currentSection != 'IA2'){
//    $('#' + currentSection).find('a').removeAttr("onclick");}
//   });


  //On card hover, do animation on icon
  $('#card1 a').hover(function(){
    $('#card1').find('i').addClass('house');
  },
  function(){
    $('#card1').find('i').removeClass('house');
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


function validateForm() {
  var fName = document.forms["myForm"]["firstname"].value;
  var lName = document.forms["myForm"]["lastname"].value;
  var email = document.forms["myForm"]["email"].value;
  var ctNum = document.forms["myForm"]["contactnumber"].value;
  var message = document.forms["myForm"]["message"].value;

  var mailBody ="Hi " + fName + " " + lName + ",%0D%0A%0D%0A";
      mailBody += "Thank you for taking the PEC online form for reducing your bills. %0D%0AYou are receiving this email because you completed the form on our website.%0D%0A";
      mailBody += "This email contains information about all the solutions that are applicable to you. %0D%0A%0D%0A"

var summaryText = "";
summaryText += "%0D%0A%0D%0AInsulation Solutions - %0D%0A%0D%0A";

for (var i = 0; i < solutionsInsulation.length; i++)
{
  var solution = searchSolution(solutionsInsulation[i]);
  summaryText += solution.title + "%0D%0A";
  summaryText += solution.text + "%0D%0A%0D%0A";
}

summaryText += "%0D%0A%0D%0AHeating Solutions - %0D%0A%0D%0A";

for (var i = 0; i < solutionHeating.length; i++)
{
  var solution = searchSolution(solutionHeating[i]);
  console.log(solution.title);
  console.log(solution.text);
  summaryText += solution.title + "%0D%0A";
  summaryText += solution.text + "%0D%0A%0D%0A";
}

summaryText += "%0D%0A%0D%0AOther Solutions - %0D%0A%0D%0A";
summaryText += savingsText + "%0D%0A%0D%0A";

for (var i = 0; i < solutionOther.length; i++)
{
  var solution = searchSolution(solutionOther[i]);
  console.log(solution.title);
  console.log(solution.text);
  summaryText += solution.title + "%0D%0A";
  summaryText += solution.text + "%0D%0A%0D%0A";
}

var details = "This is the contact number that you have provided for PEC to contact you back: %0D%0A%0D%0A" + ctNum + "%0D%0A%0D%0A";
var comments = "This is the comment you have left for PEC:%0D%0A%0D%0A" + message + "%0D%0A%0D%0A";

var mailFooter = "%0D%0A%0D%0AFor questions contact us at support@plymouthenergycommunity.com or call us on 01752 477 117 %0D%0A%0D%0A";



  if (document.getElementById('sendCheck').checked == true)
{
  if (ctNum == "") {
    alert("Please Include a Number");
    return false;
  }
}

console.log(email);

if (document.getElementById('sendCheck').checked == true)
{
var z =  email + "?subject=PEC%20Form&body=THIS MESSAGE WILL AUTODESTROY IN T-10SEC" + "%0D%0A" +  mailBody + summaryText + details + comments + mailFooter + "%0D%0A";
}
else {
  var z =  email + "?subject=PEC%20Form&body=THIS MESSAGE WILL AUTODESTROY IN T-10SEC" + "%0D%0A" +  mailBody + summaryText + mailFooter + "%0D%0A";

}
var fName = document.forms["myForm"]["firstname"].value;
var lName = document.forms["myForm"]["lastname"].value;



console.log(z);

document.getElementById('form').action = "mailto:" + z;

if (document.getElementById('sendCheck').checked == true)
{
  document.getElementById('form').action = "mailto:tkcseow@gmail.com;" + z;  //CHANGE!!!!!!!!!!!!!!!!******************
}

}


function SendToPEC()
{
  if (document.getElementById('sendCheck').checked == true)
  {
    document.getElementById('sendToPEC').style.display = 'block';
  }
  else {
    {
      document.getElementById('sendToPEC').style.display = 'none';
    }
  }
}
var savingsText = "";
function validateLightSurvey() {

  var light1 = 0;
if (document.forms["lightSurvey"]["light1"].value != "")
{
    console.log(document.forms["lightSurvey"]["light1"].value);
  light1 = document.forms["lightSurvey"]["light1"].value;
}

  var light2 = 0;

  if (document.forms["lightSurvey"]["light2"].value != "")
  {
    light2 = document.forms["lightSurvey"]["light2"].value;
  }
  var light3 = 0;
  if (document.forms["lightSurvey"]["light3"].value != "")
  {
    light3 = document.forms["lightSurvey"]["light3"].value;
  }
  var light4 = 0;
  if (document.forms["lightSurvey"]["light4"].value != "")
  {
    light4 = document.forms["lightSurvey"]["light4"].value;
  }
  var light5 = 0;
  if (document.forms["lightSurvey"]["light5"].value != "")
  {
    light5 = document.forms["lightSurvey"]["light5"].value;
  }
  var light6 = 0;
  if (document.forms["lightSurvey"]["light6"].value != "")
  {
    light6 = document.forms["lightSurvey"]["light6"].value;
  }


  console.log(light1);
  console.log(light2);
  console.log(light3);
  console.log(light4);
  console.log(light5);
  console.log(light6);
    console.log(lightCost[0].HoursPerDay);

 var filamentPerYear = (((lights[0].wattsUsed * (lightCost[0].HoursPerDay * 365)) / 1000) * lightCost[0].averagekWh) * light1;
 var halogen1PerYear = (((lights[1].wattsUsed * (lightCost[0].HoursPerDay * 365)) / 1000) * lightCost[0].averagekWh) * light2;
 var halogen2PerYear = (((lights[2].wattsUsed * (lightCost[0].HoursPerDay * 365)) / 1000) * lightCost[0].averagekWh)*light3;
 var cfl1PerYear = (((lights[3].wattsUsed * (lightCost[0].HoursPerDay * 365)) / 1000) * lightCost[0].averagekWh) *light4;
 var cfl2PerYear = (((lights[4].wattsUsed * (lightCost[0].HoursPerDay * 365)) / 1000) * lightCost[0].averagekWh)*light5;
 var ledPerYear = (((lights[5].wattsUsed * (lightCost[0].HoursPerDay * 365)) / 1000) * lightCost[0].averagekWh)*light6;

var userAllLightsCost = filamentPerYear + halogen1PerYear+ halogen2PerYear + cfl1PerYear + cfl2PerYear + ledPerYear;
var numberOfBulbs = parseInt(light1) + parseInt(light2) + parseInt(light3) +parseInt(light4) +parseInt(light5) + parseInt(light6);
var allLed = numberOfBulbs * (((lights[5].wattsUsed * (lightCost[0].HoursPerDay * 365)) / 1000) * lightCost[0].averagekWh);
var savings = userAllLightsCost - allLed;


  console.log(filamentPerYear);
    console.log(halogen1PerYear);
      console.log(halogen2PerYear);
        console.log(cfl1PerYear);
          console.log(cfl2PerYear);
            console.log(ledPerYear);
            console.log(userAllLightsCost);
                        console.log(numberOfBulbs);
                        console.log(allLed);


   savingsText = "On 3 hours per day it will cost you £" + userAllLightsCost.toFixed(2) + " per year to run your lights." + "If you are using LED for all your lights it will cost you £"
 + allLed.toFixed(2) + " per year. That's a saving of £" + savings.toFixed(2) + "!";

 console.log(savingsText);

 document.getElementById('lightSavings').innerHTML = savingsText;



}
