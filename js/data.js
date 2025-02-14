var insulation = [
  {
    id: 'IA2',
    text: 'Does your house have wall insulation?',
    choices:[
      {
        text: 'Yes',
        index: 'IB1'
      },
      {
        text: 'No',
        index: 'IA3'
      }
    ]
  },
  {
    id: 'IA3',
    text: 'How are your walls constructed?',
    choices:[
      {
        text: 'With Cavity',
        index: 'IA7'
      },
      {
        text: 'Solid',
        index: 'S3'
      },
      {
        text: 'Non Standard Construction',
        index: 'S99'
      },
      {
        text: 'I have no idea',
        index: 'IA4'
      },
    ]
  },


]

var lightCost = [
{
  averagekWh: 0.15,
  HoursPerDay: 3,
},
]

var lights = [
  {
    id: '1',
    type: 'Filament Bulbs',
    lifespan: 1200,
    wattsUsed: 60,
  },
  {
    id: '2',
    type: 'Halogen Bulbs (Normal)',
    lifespan: 1500,
    wattsUsed: 42,
  },
  {
    id: '3',
    type: 'Halogen Bulbs (Spotlight)',
    lifespan: 1500,
    wattsUsed: 42,
  },
  {
    id: '4',
    type: 'CFL',
    lifespan: 8000,
    wattsUsed: 12,
  },
  {
    id: '5',
    type: 'CFL (Spotlight)',
    lifespan: 8000,
    wattsUsed: 12,
  },
  {
    id: '6',
    type: 'LED',
    lifespan: 25000,
    wattsUsed: 10,
  },

]

var solutions = [
  {
    id: 'S1',
    title: 'Cavity Wall Solution',
    text: 'Advise here',
  },
  {
    id: 'S2',
    title: 'Damp Wall Solution',
    text: 'Advise here',
  },
  {
    id: 'S3',
    title: 'Solid Wall Solution',
    text: 'Advise here',
  },
  {
    id: 'S4',
    title: 'Loft Solution',
    text: 'Advise here',
  },
  {
    id: 'S5',
    title: 'Partial Loft Solution',
    text: 'It is not a high priority to top up your insulation but if you are planning any work in the loft, top it up to at least 300mm',
  },
  {
    id: 'S6',
    title: 'Full Loft Solution',
    text: 'Your loft is fully Insulated',
  },
  {
    id: 'S7',
    title: 'Roof Room Solution',
    text: 'Advise here',
  },
  {
    id: 'S8',
    title: 'No Roof Room Solution Needed',
    text: 'Advise here',
  },
  {
    id: 'S9',
    title: 'Floorboard Solution',
    text: 'Advise here',
  },
  {
    id: 'S10',
    title: 'Solid Floor Solution',
    text: 'Advise here',
  },
  {
    id: 'S99',
    title: 'Speak to PEC advisor',
    text: 'Call us on 01752 477 117 or email us at support@plymouthenergycommunity.com',
  },

  {
    id: 'S91',
    title: 'No Wall Insulation Needed',
    text: 'Advise here',
  },
  {
    id: 'S92',
    title: 'No Loft Insulation Needed',
    text: 'Advise here',
  },
  {
    id: 'S93',
    title: 'No Floor Insulation Needed',
    text: 'Advise here',
  },

  {
    id: 'S11',
    title: 'Solution',
    text: 'Advice on old storage heaters',
  },
  {
    id: 'S12',
    title: 'Solution',
    text: 'Advice on newer storage heaters',
  },
  {
    id: 'S13',
    title: 'Other centralised heating',
    text: 'As your heating system is relatively unique we would recomend a call or visit with one of our advisors to look at ways to improve your heating',
  },
  {
    id: 'S18',
    title: 'Speak to PEC advisor',
    text: 'Call us on 01752 477 117 or email us at support@plymouthenergycommunity.com',
  },
  {
    id: 'S15',
    title: 'Solution',
    text: 'Broken boiler advice here',
  },
  {
    id: 'S16',
    title: 'Solution',
    text: 'Old boiler advice',
  },
  {
    id: 'S14',
    title: 'Heating controls',
    text: 'Do you have heating controls (include pictures of thermostatic radiator valves, room thermostats, programmable room thermostats etc)',
  },
  {
    id: 'S17',
    title: 'Solution',
    text: 'Advice about heating controls',
  },
  {
    id: 'IRH1',
    title: 'Solution',
    text: 'Advice about first time central heating',
  },
  {
    id: 'S40',
    title: 'Which one looks like the light bulb of your home?',
    text: 'Advice about first time central heating',
  },
  {
    id: 'S19',
    title: 'Draught proofing may help to make your home warmer and cheaper to heat. PEC may be able to install some for free. Continue for tips and more advanced draught proofing',
    text: 'Call PEC',
  },
  {
    id: 'S20',
    title: 'You have all the basics covered. Continue for tips on more advanced draught proofing',
    text: 'Next',
  },
  {
    id: 'S21',
    title: 'Guidance on using filler and foam to block up gap',
    text: 'Advice here',
  },
  {
    id: 'S22',
    title: 'Guidance on secondary glazing',
    text: 'Advice here',
  },
  {
    id: 'S23',
    title: 'Guidance on reducing draughts to the loft',
    text: 'Advice here',
  },

  {
    id: 'S94',
    title: 'No Draught Prevention Needed',
    text: 'Advise here',
  },
  

]
