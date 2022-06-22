rootNode = document.getElementById('root')

displayText = document.createElement('div')
displayText.id = 'display'
displayText.textContent = 'The story goes here.'
displayText.style.backgroundColor = 'Black'

rootNode.appendChild(displayText)

btn = document.getElementById('content-btn')
inputField = document.getElementById('ta')

btn.addEventListener('click', () => {
  displayText.textContent = `choice1 = input('${inputField.value}\\n')`
})