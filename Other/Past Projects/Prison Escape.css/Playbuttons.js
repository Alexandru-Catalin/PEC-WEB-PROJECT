var roomArray = [
{
  title:'The road to the house',
  image:"1.png",
  text:'You return home after a hard day of work. Walking on the street you hear someone shouting, you look back and see that he is your best friend.',
  choices:[
    {
      text:'Ignore him',
      index:1
    },
    {
      text:'Stop and talk with him',
      index:2
    }
  ]
},

{
  title:'It runs to you',
  image:"1.png",
  text:'You stop to see him and notice something changed to him, he seems worried.',
  choices:[
    {
      text:'Talk with him',
      index:2
    }
  ]
},

{
  title:'The briefcase',
  text:'He asks you to help him with a problem and gives you a briefcase to hide in your garage, provider you never open it.',
  image:"2.png",
  choices:[
    {
      text:'Accept',
      index:4
    },
    {
      text:'Refuse',
      index:3
    }
  ]
},

{
  title:'I will kill you!',
  text:'He threatens you with a gun and tells you he will kill your family if you do not cooperate with him.',
  image:"3.png",
  choices:[
    {
      text:'Accept',
      index:5
    }
  ]
},

{
  title:'Accept, take the briefcase and accept to hide it in your garage.',
  text:'You can get it whenever you want.',
  image:"2.png",
  choices:[
    {
      text:'Go to see your family',
      index:5
    }
  ]
},

{
  title:'Family',
  image:'4.png',
  text:'You go home worried about your family, but you see everything is fine, your wife and children are safe.',
  choices:[
    {
      text:'Go to the garage',
      index:6
    }
  ]
},

{
  title:'Briefcase',
  text:'Worried, you go to the garage to hide the suitcase.',
  image:'5.png',
  choices:[
    {
      text:'Open the briefcase',
      index:7
    },
    {
      text:'Hide the briefcase',
      index:8
    }
  ]
},

{
  title:'The weapon',
  image:'7.png',
  text:'When you opened the suitcase, you found a gun inside',
  choices:[
    {
      text:'Hide the briefcase',
      index:8
    }
  ]
},

  {
    title:'After 2 weeks',
    image:"8.png",
    text:'You are home with your dear family when you hear someone knocking at the door',
    choices:[
      {
        text:'The knocking at the door',
        index: 9
      }
    ]
  },

{
  title:'The beats in the door are getting stronger and more nervous, your family is worried.',
  image:"8.png",
  text:'',
  choices: [
    {
      text:'Ignore the beats at the door.',
      index: 10
    }
  ]
},

{
  title:'Ignore the beats at the door',
  image:'9.png',
  text:'You went to your family to calm them down, telling them everything is ok and that they do not have to worry about that beatings',
  choices: [
    {
      text:'The Police',
      index: 11
    },
  ]
},

{
  title:'Police Section',
  image:'10.png',
  text:'Seeing that no one answers the door, police broke down the door, standing ready to attack',
  choices: [
    {
      text:'Police section',
      index: 12
    }
  ]
},

{
  title:'Police section',
  image:'11.png',
  text:'Once arrived at the police station, you were immediately taken to the interrogation room',
  choices: [
    {
      text:'Interrogation Chamber',
      index: 13
    },
  ]
},

{
  title: 'Interrogation Chamber',
  image:'11.png',
  text:'"Why did you try to assasinate the president? Who paid you to do such a thing?"',
  choices: [
    {
      text:'Confused',
      index: 14
    }
  ]
},

{
  title: 'Confused',
  image:'11.png',
  text:'"I do not know what you are talking about, I am innocent!"',
  choices: [
    {
      text:'Protocol-79',
      index: 15
    },
  ]
},

{
  title:'Protocol-79',
  image:'12.png',
  text:'"This document contains all the evidence that you are guilty of trying to assasinate the president"',
  choices:[
    {
      text:'Self defense',
      index:16
    },
  ]
},

{
  title:'Self defense',
  image:'11.png',
  text:'"It is impossible, these images have to be processed, I have nothing to do with it."',
  choices:[
    {
      text:'The cell',
      index: 17
    }
  ]
},
{
  title:'The cell',
  image:'13.png',
  text:'The police could not confirm your story, chose to close you in the cell to get more information from you in the future. By not wanting to be injustly locked, you have been looking for a way out, so you started looking through the cell room.',
  choices: [
    {
      text:'The sink',
      index: 18
    },
    {
      text:'The toilet',
      index: 19
    },
    {
      text:'The bed',
      index: 20
    }
  ]
},

{
  title: 'The sink',
  image:'14.png',
  text:'You have not found anything useful',
  choices:[
    {
      text: 'Return',
      index: 17
    }
  ]
},

{
  title:'The toilet',
  image:'15.png',
  text:'You have not found anything useful',
  choices:[
    {
      text:'Return',
      index: 17
    }
  ]
},

{
  title:'The bed',
  image:'16.png',
  text:'When you looked at your bed more carefully, you saw that an arc was jumping out of it, which could help you open the gates from the ventilation system to try to escape through it.',
  choices:[
    {
      text:'Ventilation system',
      index: 21
    }
  ]
},

{
  title:'Ventilation system',
  image:'17.png',
  text:'At nightfall you managed to open the grilles from the ventilation system and sneak through it. You went through it until the road was split into two parts.',
  choices:[
    {
      text:'Go to the left',
      index: 22
    },
    {
    text:'Go to the right.',
    index: 24
    }
  ]
},

{
  title:'Left side',
  image:'17.png',
  text:'On the left side you could hear some unknown voices.',
  choices:[
    {
      text:'End',
      index: 23
    }
  ]
},

{
  title:'End',
  image:'18.png',
  text:'You have arrived in a room full of cops and they shoot you without asking questions.',
  choices:[
    {
      text:'Restart the game',
      index: 0
    }
  ]
},

{
  title:'Go to the right',
  image:'17.png',
  text:'To the right you could hear the wind',
  choices:[
    {
      text:'Prison yard',
      index: 25
    }
  ]
},

{
  title:'Prison yard',
  image:'19.png',
  text:'You have been able to get to the backyard of the prison, all that you saw in your way was just a fence.',
  choices:[
    {
      text:'The fence',
      index:26
    }
  ]
},

{
  title:'The fence',
  image:'20.png',
  text:'The fence had a barbed serpent on the top to stop prisoners to jump over it. We got you the tool to cut off the fence, you took off your shirt and threw it over the barbed wire.',
  choices:[
    {
      text:'The forest',
      index: 27
    }
  ]
},

{
  title:' The forest',
  image:'21.png',
  text: 'As soon as you jumped the fence you ran blindly through the forest. You ran away without looking back, you were happy that you managed to escape, but at the same time you were afraid to find out and catch you so you continued to run until you saw a dazzling light that was going very fast towards you.',
  choices:[
    {
      text:'THE END',
      index: 28
    }
  ]
},

{
  title:'THE END',
  image:'22.png',
  text:'You stopped to find out the origin of that strange light. Unfortunately, the lights came from a car that did not see you and cross by killing you.',
  choices:[
    {
      text:'Play again?',
      index: 0
    }
  ]
},
]

function OnLoad()
{

  document.getElementById('roomTitle').innerHTML = roomArray[0].title

  document.getElementById('roomText').innerHTML = roomArray[0].text

  SelectRoom(0);
}

function SelectRoom(roomIndex)
{
  document.getElementById("roomChoices").innerHTML = "";
  var roomChoices = document.getElementById("roomChoices").innerHTML;
  document.getElementById('roomTitle').innerHTML = roomArray[roomIndex].title

  document.getElementById("image").src = "images/" + roomArray[roomIndex].image;
  document.getElementById('roomText').innerHTML = roomArray[roomIndex].text
  for (var i = 0; i < roomArray[roomIndex].choices.length; i++)
  {
    var button = "<button onclick='SelectRoom("+roomArray[roomIndex].choices[i].index+")'>"+roomArray[roomIndex].choices[i].text+"</button>";
    document.getElementById("roomChoices").innerHTML += button;
  }
}
