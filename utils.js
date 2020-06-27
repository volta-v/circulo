function direccionMovimiento(circle, modifier, moverArriba, moverAbajo, moverIzquierda, moverDerecha) {
	if (moverArriba == true  && parseInt(circle.style.top) > 1) {
		circle.style.top = `${parseInt(circle.style.top) - modifier}%`
	}
	if (moverAbajo == true && parseInt(circle.style.top) < 89) {
	circle.style.top = `${parseInt(circle.style.top) + modifier}%`
		}
	if (moverIzquierda == true && parseInt(circle.style.left) > 1) {
	circle.style.left = `${parseInt(circle.style.left) - modifier}%`
		}
	if (moverDerecha == true && parseInt(circle.style.left) < 95) {
	circle.style.left = `${parseInt(circle.style.left) + modifier}%`
		}
}


