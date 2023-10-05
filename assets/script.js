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
// slides.forEach(slide => {
// 	document.querySelector('.dots').innerHTML += `<div class="dot"></div>`
// 	img.src = `../assets/images/slideshow/${slide.image}`
// 	if (slide === slides[i]) {
// 		document.querySelector('.dot').classList.add('dot_selected')
// 	}
// })

slides.forEach((slide, index) => {
	let current_slide = 1
	document.querySelector('.dots').innerHTML += `<div class="dot"></div>`
	document.querySelector('p').innerHTML = slide.tagLine
	arrow_right.addEventListener('click', () => {
		console.log(selected_slide)
	})
	arrow_left.addEventListener('click', () => {
		console.log('left')
	})
	if (index + 1 === current_slide) {
		img.src = `../assets/images/slideshow/${slide.image}`
		document.querySelector('.dot').classList.add('dot_selected')
	}
})

