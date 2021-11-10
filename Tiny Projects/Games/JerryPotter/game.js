const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

//starts the game
function startGame() {
//empty
  state = {}
  //starts the first text
  showTextNode(1)
}

//shows the options
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
//takes which option we select
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
    text: 'You woke up with hagrid, after a one night stand.',
    options: [
      {
        text: 'You stay and be late for school',
        setState: { blueGoo: true },
        nextText: 2
      },
      {
        text: 'You ditch him, like the trash he is',
        nextText: 2
      }
    ]
  },
  {
    id: 2,
    text: 'After a steamy round two, you go to class and meet Severus snape. .',
    options: [
      {
        text: 'You walk away feeling embarrassed',
        requiredState: (currentState) => currentState.blueGoo,
        setState: { blueGoo: false, sword: true },
        nextText: 3
      },
      {
        text: 'Punch him in the stomach and run',
        requiredState: (currentState) => currentState.blueGoo,
        setState: { blueGoo: false, shield: true },
        nextText: 3
      },
      {
        text: 'Walk away slowly while you cried',
        nextText: 3
      }
    ]
  },
  {
    id: 3,
    text: 'After the snape incident, you wanted to be alone. Where did you go?',
    options: [
      {
        text: 'Into snapes quarters to steal his underwear',
        nextText: 4
      },
      {
        text: 'to the bathroom, to shag moaning myrtle',
        nextText: 5
      },
      {
        text: 'to the kitchen to harrass the house-elves',
        nextText: 6
      }
    ]
  },
  {
    id: 4,
    text: 'You got caught AND expelled.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 5,
    text: 'You got ghost herpes and died.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 6,
    text: 'You snook out from the kitchen with a stomach full, and your mind clear from anger.',
    options: [
      {
        text: 'Around the corner you head a terrible noise!',
        nextText: 7
      }
    ]
  },
  {
    id: 7,
    text: 'you see blood on the floor as you get closer, and you see a shadow slamming the door ahead of you. what do you do?',
    options: [
      {
        text: 'Try to run',
        nextText: 8
      },
      {
        text: 'You scream in shock',
        requiredState: (currentState) => currentState.sword,
        nextText: 9
      },
      {
        text: 'You get your glock and sprint after it',
        requiredState: (currentState) => currentState.shield,
        nextText: 10
      },
      {
        text: 'you sneak into the open door, and ignore the mysterious man',
        requiredState: (currentState) => currentState.blueGoo,
        nextText: 11
      }
    ]
  },
  {
    id: 8,
    text: 'Your attempts to run are in vain, you trip over a house-elve and dies.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 9,
    text: 'You screamed so loud that it caused you a heart attack. You died.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 10,
    text: 'You foolishly thought bringing a gun to the school was allowed. You got expelled.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 11,
    text: 'You opened the door, and there was Proffesor Dumbledor, proud as ever. Sacrified a goat to bring you his blessing.',
    options: [
      {
        text: 'Congratulations, youre now blessed my dumbledore. Play Again.',
        nextText: -1
      }
    ]
  }
]

startGame()