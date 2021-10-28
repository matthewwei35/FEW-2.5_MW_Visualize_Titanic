import data from './titanic-data.js'

// Get a reference to the #titanic
const titanic = document.querySelector('#titanic')

// Set some styles on the titanic
// display flex, justifyContent center, alignItems flex-end
titanic.style.display = 'grid'
titanic.style.gridTemplateColumns = 'repeat(34, 20px)'
titanic.style.gridGap = '2px'

// Map over the data and make a new element for each passenger
const passengers = data.map(p => {
  const el = document.createElement('div')
  titanic.appendChild(el)
  return el
})

// Let's loop over each passenger and set some styles 
passengers.forEach((p, i) => {
  const { survived, sex, embarked, age } = data[i].fields
  p.style.width = '20px'
  p.style.height = '20px'
  p.style.backgroundColor = '#000'

  p.style.opacity = survived === 'Yes' ? '100%' : '50%' 

  p.style.borderRadius = sex === 'female' ? '50%' : '0'

  if (embarked === 'S') {
    p.style.backgroundColor = '#6D81FA'
  } else if (embarked === 'Q') {
    p.style.backgroundColor = '#26A339'
  } else if (embarked === 'C') {
    p.style.backgroundColor = '#FA865C'
  }

  if (age < 18) {
    p.style.width = '10px'
    p.style.height = '10px'
    p.style.margin = '5px'
  }
})

// Challenges

// Make the squares a little bigger 15px by 15px. 
// You'll need to change both the gridTemplateColumn on the
// titanic and the width and height of each passenger. 

// Change the number of columns on the titanic to 34

// Display each passenger as a circle if they are female. 
// Do this by setting the borderRadius of each passenger. 
// Match the passenger in passengers to the object data 
// in the data array by the index. 

// Display each passengers who did not survive as 
// opacity 0.5. 

// Set the backgroundColor of each passenger by their 
// embarked value. There are three possible values: 
// 'S', 'C', and 'Q'
