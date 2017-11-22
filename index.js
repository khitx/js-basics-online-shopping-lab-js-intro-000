var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.round(Math.random() * (100 - 1) + 1)
  var obj = {}
  Object.assign(obj, {[item] : price})
  //Object.assign(cart, {[item] : price})
  cart.push(obj)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  var str = 'In your cart, you have'

  if (cart.length === 0) {
    str = 'Your shopping cart is empty.'
  }
  else if (cart.length === 1) {
	str = `${str} ${Object.keys(cart[0])} at $${Object.values(cart[0])}.`
  }
  else if (cart.length === 2) {
 	for (var i = 0; i < cart.length - 1; i++) {
	  str = `${str} ${Object.keys(cart[i])} at $${Object.values(cart[i])}`
	}
	str = `${str} and ${Object.keys(cart[i])} at $${Object.values(cart[i])}.`
  }
  else {
 	for (var i = 0; i < cart.length - 1; i++) {
	  str = `${str} ${Object.keys(cart[i])} at $${Object.values(cart[i])},`
	}
	str = `${str} and ${Object.keys(cart[i])} at $${Object.values(cart[i])}.`
  }
  console.log(str.slice(0,-1) + '.')
}

function total() {
  	var t = 0
	for (var i = 0; i < cart.length; i++) {
	  t = t + Number(Object.values(cart[i]))
	}
	return t
}

function removeFromCart(item) {
  //var buz = {}
	//Object.assign(buz, {fog: 'stack'})
	//Object.assign(buz, {snow : 'pile'})

	//for (var name in buz) {
  //		if (buz.hasOwnProperty(name)) {
    		//console.log('this is fog (' + name + ') for sure. Value: ' + buz[name]);
  //			console.log(`this is fog (${name}) for sure. Value: ${buz[name]}`)
	//	}
  //		else {
  //  		console.log(name); // toString or something else
  //		}
	//}
  for (var item in cart) {
  		if (cart.hasOwnProperty(item)) {
    		//console.log('this is fog (' + name + ') for sure. Value: ' + buz[name]);
  			console.log(`this is (${item}) for sure. Value: ${cart[item]}`)
		}
  		else {
    		console.log(item); // toString or something else
        console.log('That item is not in your cart.')
      }
	}
}

function placeOrder(cardNumber) {
  // write your code here
}
