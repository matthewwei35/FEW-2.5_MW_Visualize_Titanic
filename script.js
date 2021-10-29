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

  const portColors = { S: '#6D81FA', C: '#FA865C', Q: '#26A339' }
  p.style.backgroundColor = portColors[data[i].fields.embarked]

  if (age < 18) {
    p.style.width = '10px'
    p.style.height = '10px'
    p.style.margin = '5px'
  }
})




