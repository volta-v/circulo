window.onload = function () {
	let circle = document.querySelector('.circulo')
	circle.style.top = "45%"
	circle.style.left = "45%"
	const modifier = 1

	document.addEventListener("keydown", mover) 

		function mover(event) {

			console.log(event)
			

		if (event.key == "ArrowUp" && parseInt(circle.style.top) > 1) {
			// console.log("arriba")
	 	circle.style.top = `${parseInt(circle.style.top) - modifier}%`
	  } 

	  if (event.key == "ArrowDown") {
	  	// console.log("abajo")
	 	circle.style.top = `${parseInt(circle.style.top) + modifier}%`
	  }

	  if (event.key == "ArrowLeft") {
	  	// console.log("abajo")
	 	circle.style.left = `${parseInt(circle.style.left) - modifier}%`
	  }

	  if (event.key == "ArrowRight") {
	  	// console.log("abajo")
	 	circle.style.left = `${parseInt(circle.style.left) + modifier}%`
	  }
	}

}

