import 'gsap'
import 'ScrollToPlugin'
import Expand from './expand'
import Projects from './projects'

window.onload = () => {
	if(window.innerWidth > 992){
		let introTimeline = new TimelineLite();

		introTimeline.to('.loader', 0.3, {
			opacity: 0,
			display: 'none',
			ease: Power1.easeOut,
			delay: 1
		})
		.from('.projects__visual', 1.2, {
			x: -100,
			scale: 1.5,
			ease: Quart.easeOut
		})
		.from('.projects__visuals', 1.2, {
			width: 0,
			ease: Quart.easeOut
		},'-=1')
		.staggerFrom('.projects__title', 0.8, {
			x: -50, 
			opacity: 0,
			ease: Quart.easeOut 
		}, 0.1, '-=1')
		.staggerFrom('.projects__title time', 0.8, {
			x: -50, 
			opacity: 0,
			ease: Quart.easeOut
		}, 0.1, '-=1.1')
		.from('.projects__underline--first', 0.8, {
			x: -50,
			width: 0,
			ease: Quart.easeOut
		},'-=0.8')
		.from('.projects__underline--second', 0.6, {
			x: -10,
			width: 0,
			ease: Quart.easeOut
		},'-=0.5');
	} else {
		TweenMax.to('.loader', 0,  {
			opacity: 0,
			display: 'none',
		});
	}
	

	//Expands init
	let expands = []
	let expandsNodes = document.querySelectorAll('.js-expand');

	for (let i = expandsNodes.length - 1; i >= 0; i--) {
		expands.push(new Expand(expandsNodes[i]));
	}

	//Project init
	let projects = new Projects();

}