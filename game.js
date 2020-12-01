
//Author: Risheek Pingili

//@Source: A youtube video on browser games
//source author: WebDevSimplified's Youtube video project: JavaScript Text Adventure

const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}



function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: 'Day 1',
    options: [
      {
        text: 'continue',

        nextText: 2
      }]
  },
  // {
  //     id: 2,
  //     text: 'You venture forth in search of answers to where you are when you come across a merchant.',
  //     options: [
  //         {
  //             text: 'Trade the goo for a sword',
  //             requiredState: (currentState) => currentState.blueGoo,
  //             setState: { blueGoo: false, sword: true },
  //             nextText: 3
  //         },
  //         {
  //             text: 'Trade the goo for a shield',
  //             requiredState: (currentState) => currentState.blueGoo,
  //             setState: { blueGoo: false, shield: true },
  //             nextText: 3
  //         },
  //         {
  //             text: 'Ignore the merchant',
  //             nextText: 3
  //         }
  //     ]
  // },
  {
    id: 2,
    text: 'You Open the door to the university research laboratory\n' +
        'that you’ve been you eagerly waiting to get into. It’s your\n' +
        'first day being an undergraduate research assistant at a\n' +
        'laboratory that you’ve been waiting so long to be a part\n' +
        'of.',
    options: [
      {
        text: 'continue',
        nextText: 3
      }
    ]
  },
  {
    id: 3,
    text: 'You are greeted by a man in a long lab coat that you \n' +
        '            recognize from The laboratories front webpage. \n' +
        '            “Welcome! I take it you are the new undergraduate \n' +
        '            research enthusiast who was interested in working here.”',
    options: [
      {
        text: 'continue',
          // add image of scientist here
        nextText: 4
      }
    ]
  },
  {
    id: 4,
    text: 'You exchanged pleasantries and are shown in the lab with\n' +
        'showcases a sleuth of laboratory material and\n' +
        'experiments, only some of which you can recognize.',
    options: [
      {
        text: 'continue',
        nextText: 5
      }
    ]
  },
  {
    id: 5,
    text: '“I am, of course, The principal investigator for the slab as\n' +
        'you can probably tell from the website. We are relatively\n' +
        'new so we do not have too many papers to our name\n' +
        'however we have a few exciting projects in the works,” he\n' +
        'explains.',
    options: [
      {
        text: 'continue',
        nextText: 6
      }
    ]
  },
  {
    id: 6,
    text: '“Our biggest ongoing project right now is the bio\n' +
        'powered fuel cell which you might’ve heard a bit of buzz\n' +
        'about.”',
    options: [
      {
        text: 'continue',
        nextText: 7
      }
    ]
  },
  {
    id: 7,
    text: 'Which you have, as you let on and explained your\n' +
        'understanding of the usage of microbacteria as a thermal\n' +
        'energy source was converted into electric current\n' +
        'through thermal cells.',
    options: [
      {
        text: 'continue',
        nextText: 8
      }
    ]
  },
  {
    id: 8,
    text: '“That’s right! It’s a pretty incredulous and difficult process\n' +
        'to get working without a starting poking, which of course,\n' +
        'we can’t be entirely open about just yet, but it’s a project\n' +
        'that I am, and hopefully you’ll be, pretty lucky to work on.”',
    options: [
      {
        text: 'continue',
        nextText: 9
      }
    ]
  },
  {
    id: 9,
    text: 'Observing your surprise expression, he chuckled, “It’s not\n' +
        'a huge deal to have undergraduates working on projects\n' +
        'like this. infact it’s the only project that really needs any\n' +
        'help at the moment.”',
    options: [
      {
        text: 'continue',
        nextText: 10
      }
    ]
  },
  {
    id: 10,
    text: '“Anyway I will email you a list of safety precautions and\n' +
        'and trainings that the lab needs you to do before you\n' +
        'come back tomorrow. ” He says he clear through set of\n' +
        'checklist he was looking through on a clipboard.',
    options: [
      {
        text: 'continue',
        nextText: 11
      }
    ]
  },
  {
    id: 11,
    text: '“We’re still working on the timeline for the entire project\n' +
        'but and asked deadline is the end of the month for a\n' +
        'progress report that I’m really hoping to get to. Of course\n' +
        'we want to finish as soon as possible, Especially\n' +
        'considering how huge it should be but of course we are\n' +
        'have our limitations.” He said, maybe hinting at slight\n' +
        'disdain. of your days there.',
    options: [
      {
        text: 'End of the month?',
        nextText: 12
      },
      {
          text: 'Are you in a hurry?',
          nextText: 12
      }
    ]
  },
    {
        id: 12,
        text: '"I well, it’s a plan. There are a lot of applications from Energy to cars to —“ He cuts out briefly.',
        options: [
            {
                text: 'continue.',
                nextText: 13
            }
        ]
    },
    {
        id: 13,
        text: '“--well it has purpose I’ll run the world so I am just hoping\n' +
            'for sooner I get it out the sooner we can start seeing it in\n' +
            'action wherever it’s needed.” He picks back up.',
        options: [
            {
                text: 'continue',
                nextText: 14
            }
        ]
    },
    {
        id: 14,
        text: 'as we wrap up his exclamations of the lab he asks, ” well\n' +
            ' that about covers it. Any last questions?”',
        options: [
            {
                text: 'Why me?',
                nextText: 15
            },
            {
                text: 'Ask about him',
                nextText: 16
            },
            {
                text: 'Ask about tomorrow',
                nextText: 17
            },
            {
                text: 'Nothing else',
                nextText: 18
            }
        ]
    },
    {
        id: 15,
        text: '“Why did I choose you? I mean, you were pretty\n' +
            'enthusiastic in your email and you answered my follow\n' +
            'up sort of interview questions pretty well. And that’s all\n' +
            'I really need to know your graduate student really plus I\n' +
            'guess this isn’t that popular I have a lab on campus so\n' +
            'we haven’t had too many applicants.”',
        options: [
            {
                text: 'continue',
                nextText: 14
            }
        ]
    },
    {
        id: 16,
        text: '“Me? I’m pretty new on faculty here. I don’t teach any\n' +
            'classes or anything just yet think it might be kind of\n' +
            'fun. I’m just glad I got the position in the first place. I\n' +
            'guess I’m pretty honored and I respect.” As he finishes\n' +
            'you feel a genuine of naive optimism. You know no\n' +
            'professor enjoy teaching undergraduate students.',
        options: [
            {
                text: 'continue.',
                nextText: 14
            }
        ]
    },
    {
        id: 17,
        text: '”Tomorrow? I just need some hardware test to be run.\n' +
            'I’ll have them set up for you once you get here.”',
        options: [
            {
                text: 'continue.',
                nextText: 14
            }
        ]
    },
    {
        id: 18,
        text: '“ Great! I look forward to seeing you tomorrow.” He\n' +
            'says as he walks back to his desk.',
        options: [
            {
                text: 'continue.',
                nextText: 19
            }
        ]
    },
    {
        id: 19,
        text: 'On your way out to see a peculiar file that sticks out to\n' +
            'you. It seems like it should be hidden yet you’re able to\n' +
            'make out some of the words on it.',
        options: [
            {
                text: 'look into the file',
                nextText: 20
            }
        ]
    },
    {
        id: 20,
        text: 'GOVERNMENT ISSUED.\n' +
            'MILITARY CONTRACT.\n' +
            '...FORM FACTOR FOR MODEL WEAPONRY...\n' +
            '...EFFECTIVE RANGE...\n' +
            '...LETHAL...DOSAGE...\n' +
            'WARFARE...READY.',
        options: [
            {
                text: 'continue.',
                nextText: 21
            }
        ]
    },
    {
        id: 21,
        text: 'You hurry out of the office before you raise any eyebrows.\n' +
            'However the contents of the file for me and Burning\n' +
            'mystery on your mind.',
        options: [
            {
                text: 'End of Day 1. [more comming soon]',
                nextText: -1
            }
        ]
    },
]

startGame()
//Day2
//newfile that copies this format for each day for code division and more featueres
//Add feature to skip days/save