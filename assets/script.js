const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const banner = document.querySelector('#banner')
const img = document.querySelector('.banner-img')
const arrows = document.querySelectorAll('.arrow')
const arrow_right = document.querySelector('.arrow_right')
const arrow_left = document.querySelector('.arrow_left')
let selected_slide = 1

carousel(selected_slide)

arrow_right.addEventListener('click', () => {
	next_slide()
})
arrow_left.addEventListener('click', () => {
	previous_slide()
})

function next_slide() {
	if (selected_slide === slides.length) {
		selected_slide = 1
		carousel(selected_slide)
	} else {
		selected_slide++
		carousel(selected_slide)
	}
}

function previous_slide() {
	if(selected_slide === 1) {
		selected_slide = slides.length
		carousel(selected_slide)
	} else {
		selected_slide--
		carousel(selected_slide)
	}
}
function carousel(selected_slide) {
	document.querySelector('.dots').innerHTML = ''
	slides.forEach((slide, index) => {
		let current_slide = index + 1
		if (current_slide === selected_slide) {
			img.src = `../assets/images/slideshow/${slide.image}`
			document.querySelector('p').innerHTML = slide.tagLine
		}
	})

	dots(selected_slide)
}
function dots(selected_slide) {
	slides.forEach((slide, index) => {
		let current_slide = index + 1
		document.querySelector('.dots').innerHTML += `<div class="dot"></div>`
		if (current_slide === selected_slide) {
			document.querySelectorAll('.dot')[index].classList.add('dot_selected')
		}
	})
}

