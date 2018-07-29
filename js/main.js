//product constructor 
function Jersey(team, size, player, price, image) {
	this.team = team
	this.size = size
	this.player = player
	this.price = price
	this.image = image
}

// create new prodcuts from the product constructor
var hawks = new Jersey('Hawks', 'Medium', 'Trae Young', 120, 'img/young.png')
var warriors = new Jersey('Warriors', 'Large', 'Steph Curry', 160, 'img/curry.png')
var lakers = new Jersey('Lakers', 'Small', 'Lebron James', 140, 'img/bron.png')
var celtics = new Jersey('Celtics', 'Large', 'Jason Tatum', 100, 'img/tatum.png')
var rockets = new Jersey('Rockets', 'Large', 'James Harden', 120, 'img/harden.png')
var raptors = new Jersey('Raptors', 'Medium', 'Kyle Lowry', 100, 'img/lowry.png')

// create an array to add products to
var jerseyArray = new Array

// add products to array of products
jerseyArray.push(hawks, warriors, lakers, celtics, rockets, raptors)

//loop through products array
for(var i = 0; i < jerseyArray.length; i++) {
	//create new elements for each prodcut
	var newItem = document.createElement('div')
	var newDiv = document.createElement('div')
	var teamH1 = document.createElement('h1')
	var sizeH4 = document.createElement('h4')
	var playerH4 = document.createElement('h4')
	var priceH4 = document.createElement('h4')
	var btn = document.createElement('button')
	var image = document.createElement('img')

	//create text for new elements 
	var tTeam = document.createTextNode(jerseyArray[i].team)
	var tSize = document.createTextNode('Available size: ' + jerseyArray[i].size)
	var tPlayer = document.createTextNode('Player: ' + jerseyArray[i].player)
	var tPrice = document.createTextNode('Price: ' + jerseyArray[i].price)
	var tButton = document.createTextNode('Buy Now!')

	//update source attribute 
	image.src = jerseyArray[i].image

	//update class attributes 
	image.className = 'img-responsive'
	btn.className = 'btn btn-primary btn-lg'
	newItem.className = 'col-sm-4'
	newDiv.className = 'Jersey jerseyName' + [i] + ' thumbnail'

	//add text to elements
	teamH1.appendChild(tTeam)
	sizeH4.appendChild(tSize)
	playerH4.appendChild(tPlayer)
	priceH4.appendChild(tPrice)
	btn.appendChild(tButton)

	//add elements to new div
	newDiv.appendChild(teamH1)
	newDiv.appendChild(image)
	newDiv.appendChild(sizeH4)
	newDiv.appendChild(playerH4)
	newDiv.appendChild(priceH4)
	newDiv.appendChild(btn)

	//add new div to new item div
	newItem.appendChild(newDiv)

	//add new item to the element with id='jerseys'
	document.getElementById('products').appendChild(newItem)


}