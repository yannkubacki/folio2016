//import test from 'hoverintent'

class Projects {
	constructor(){

		this.bindUI();
		this.bindEvents();

		this.timeline = new TimelineLite();
		this.currentVisual = this.projectsVisuals[0];

	}

	bindUI() {

		this.projectsLinks = document.querySelectorAll('.js-projects-link');
		this.projectsVisuals = document.querySelectorAll('.js-projects-visual');
		this.projectsTags = document.querySelectorAll('.js-projects-tags');
		this.projectsDescriptions = document.querySelectorAll('.js-projects-description');

		console.log(this.projectsDescriptions)

	}

	bindEvents() {
		for (let i = this.projectsLinks.length - 1; i >= 0; i--) {
			this.projectsLinks[i].addEventListener('mouseenter', this.showDetails.bind(this));
			this.projectsLinks[i].addEventListener('mouseleave', this.hideDetails.bind(this));
			//hoverintent(this.projectsLinks[i],this.showDetails.bind(this),this.hideDetails.bind(this));
		}

	}

	showDetails(e) {

		this.timeline.pause(0, true); 
		this.timeline.clear()

		const currentIndex = e.target.getAttribute('data-index');

		// for (let i = this.projectsTags.length - 1; i >= 0; i--) {
		// 	let el = this.projectsTags[i];
		// 	if (el.getAttribute('data-index') == currentIndex) {
		// 		console.log(el);
		// 		this.timeline.add(TweenMax.fromTo(el, 0.35, {
		// 			x: -30,
		// 			opacity: 0
		// 		},{
		// 			x: 0,
		// 			opacity: 1,
		// 			display: 'block',
		// 			ease: Quart.easeOut
		// 		}));
		// 	}
		// }

		for (let i = this.projectsDescriptions.length - 1; i >= 0; i--) {
			let el = this.projectsDescriptions[i];
			if (el.getAttribute('data-index') == currentIndex) {
				console.log(el,'text');
				this.timeline.add(TweenMax.fromTo(el, 0.25, {
					x: -10,
					opacity: 0
				},{
					x: 0,
					opacity: 1,
					display: 'block',
					ease: Power1.easeOut
				}));
			}
		}

		for (let i = this.projectsVisuals.length - 1; i >= 0; i--) {
			let el = this.projectsVisuals[i];
			if (el.getAttribute('data-index') == currentIndex) {
				this.timeline.add(TweenMax.to(this.projectsVisuals, 0.5, {
					opacity: 0
				}),'-=0.35');
				this.timeline.add(TweenMax.to(el, 0.6, {
					opacity: 1,
					scale: 0.98,
					ease: Quart.easeOut
				}),'-=0.25');
			}
		}

		for (let i = this.projectsLinks.length - 1; i >= 0; i--) {
			let el = this.projectsLinks[i];
			if (el.getAttribute('data-index') !== currentIndex) {
				console.log(el);
				this.timeline.add(TweenMax.to(el, 0.35, {
					opacity: 0.25,
					ease: Power1.easeOut
				}),'-=0.75');
			}
		}

		this.timeline.play();

	}

	hideDetails(e) {
		const currentIndex = e.target.getAttribute('data-index');

		this.timeline.reverse();
	}

}

export default Projects