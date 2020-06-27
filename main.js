window.onload = function () {
	let circle = document.querySelector('.circulo')
	let bottonRojo = document.querySelector(".rojo")
	let bottonVerde = document.querySelector(".verde")
	let bottonAmarillo = document.querySelector(".amarillo")

	circle.style.top = "45%"
	circle.style.left = "45%"
	let modifier = 2
	let moverArriba = false
	let moverAbajo = false
	let moverIzquierda = false
	let moverDerecha = false
	let isRandom = false
	let reloj = ""
	

	document.addEventListener("keydown", mover) 
	document.addEventListener("keyup", parar)
	document.addEventListener("keypress", rand)
	bottonRojo.addEventListener("click", function(){
		circle.style.background = "red"
	})
	bottonVerde.addEventListener("click", function(){
	circle.style.background = "green"
	})
	bottonAmarillo.addEventListener("click", function(){
	circle.style.background = "yellow"
	})

	function mover(event) {
		if (event.key === "ArrowUp") {
	 	moverArriba = true
	 	direccionMovimiento(circle, modifier, moverArriba, moverAbajo, moverIzquierda, moverDerecha) 	
	  } 
	  if (event.key == "ArrowDown") {
	  	moverAbajo = true
	  	direccionMovimiento(circle, modifier, moverArriba, moverAbajo, moverIzquierda, moverDerecha) 	
	  }

	  if (event.key == "ArrowLeft") {
	 		moverIzquierda = true
	  	direccionMovimiento(circle, modifier, moverArriba, moverAbajo, moverIzquierda, moverDerecha) 
	  }

	  if (event.key == "ArrowRight") {
	  	moverDerecha = true
	  	direccionMovimiento(circle, modifier, moverArriba, moverAbajo, moverIzquierda, moverDerecha) 
	 	
	  }
	}

	function parar(event) {
		if (event.key === "ArrowUp" ) {
			moverArriba = false
			direccionMovimiento(circle, modifier, moverArriba, moverAbajo, moverIzquierda, moverDerecha)
		}
		if (event.key === "ArrowDown" ) {
			moverAbajo = false
			direccionMovimiento(circle, modifier, moverArriba, moverAbajo, moverIzquierda, moverDerecha)
		}
		if (event.key === "ArrowLeft" ) {
			moverIzquierda = false
			direccionMovimiento(circle, modifier, moverArriba, moverAbajo, moverIzquierda, moverDerecha)
		}
		if (event.key === "ArrowRight" ) {
			moverDerecha = false
			direccionMovimiento(circle, modifier, moverArriba, moverAbajo, moverIzquierda, moverDerecha)
		}
	}

	function rand(event) {
		if(event.keyCode == 114 && !isRandom){
			isRandom = !isRandom
			modifier = 8
			circle.classList.add("random")
			reloj = setInterval(activarRandom, 3000)
	} else if(event.keyCode == 114 && isRandom) {
		modifier = 2
		isRandom = !isRandom
		clearInterval(reloj)
		reloj=""
		circle.classList.remove("random")
		moverArriba = false
		moverAbajo = false
		moverIzquierda = false
		moverDerecha = false
	}

	}

	function activarRandom(){
		moverArriba = !!(Math.floor(Math.random() * 2))
		moverIzquierda = !!(Math.floor(Math.random() * 2))
		moverAbajo = !!(Math.floor(Math.random() * 2))
		moverDerecha = !!(Math.floor(Math.random() * 2))
		if ((moverArriba == moverAbajo) || (moverIzquierda == moverDerecha)) {
			activarRandom()
		}
		direccionMovimiento(circle, modifier, moverArriba, moverAbajo, moverIzquierda, moverDerecha)
	}

}

