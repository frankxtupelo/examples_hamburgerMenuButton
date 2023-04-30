window.onload = function() {
	
	const navIcon1 = document.getElementById('nav-icon1');
	const navIcon2 = document.getElementById('nav-icon2');
	const navIcon3 = document.getElementById('nav-icon3');
	const navIcon4 = document.getElementById('nav-icon4');
	
	navIcon1.onclick = function(){
		this.classList.toggle('open');
	}
	navIcon2.onclick = function(){
		this.classList.toggle('open');
	}
	navIcon3.onclick = function(){
		this.classList.toggle('open');
	}
	navIcon4.onclick = function(){
		this.classList.toggle('open');
	}
}


