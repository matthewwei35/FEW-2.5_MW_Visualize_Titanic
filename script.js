import data from './titanic-data.js'

const portColors = { S: '#6D81FA', C: '#FA865C', Q: '#26A339', undefined: '#000' }

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

data.sort((a, b) => {
  if (a.fields.sex === 'female') {
    return -1
  }
  return 1
})

data.sort((a, b) => {
  if (a.fields.survived === 'Yes') {
    return -1
  }
  return 1
})

data.sort((a, b) => {
  if (a.fields.embarked < b.fields.embarked) {
    return -1
  } else if (a.fields.embarked > b.fields.embarked) {
    return 1
  }
  return 0
})

data.sort((a, b) => {
  if (a.fields.age < 18) {
    return 1
  }
  return -1
})

// Let's loop over each passenger and set some styles 
passengers.forEach((p, i) => {
  const { survived, sex, age } = data[i].fields
  p.style.width = '20px'
  p.style.height = '20px'
  p.style.backgroundColor = '#000'

  p.style.opacity = survived === 'Yes' ? '100%' : '50%' 

  p.style.borderRadius = sex === 'female' ? '50%' : '0'

  p.style.backgroundColor = portColors[data[i].fields.embarked]

  if (age < 18) {
    p.style.width = '10px'
    p.style.height = '10px'
    p.style.margin = '5px'
  }
})

const titanicEmbarked = document.querySelector('#titanic-embarked')

const embarkedCounts = data.reduce((acc, p) => {
  if (acc[p.fields.embarked] === undefined) {
    acc[p.fields.embarked] = 1
  } else {
    acc[p.fields.embarked] += 1
  }
  return acc
}, {})

const embarkedKeys = Object.keys(embarkedCounts)

embarkedKeys.forEach((e) => {
  const el = document.createElement('div')
  titanicEmbarked.appendChild(el)
  el.style.width = '30px'
  const count = embarkedCounts[e]
  const percent = count / data.length * 100
  el.style.height = `${percent}%`
  el.style.backgroundColor = portColors[e]
  el.style.margin = '1px'
})
