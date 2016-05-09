//import test from 'hoverintent'

class Projects {
	constructor(){

		this.bindUI();
		this.bindEvents();

		this.timeline = new TimelineLite();

	}

	bindUI() {

		this.projectsLinks = document.querySelectorAll('.js-projects-link');
		this.projectsTags = document.querySelectorAll('.js-projects-tags');

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

		console.log(this.timeline,'lol');

		const currentIndex = e.target.getAttribute('data-index');

		for (let i = this.projectsTags.length - 1; i >= 0; i--) {
			let el = this.projectsTags[i];
			if (el.getAttribute('data-index') == currentIndex) {
				console.log(el);
				this.timeline.add(TweenMax.fromTo(el, 0.35, {
					x: -30,
					opacity: 0
				},{
					x: 0,
					opacity: 1,
					display: 'block',
					ease: Quart.easeOut
				}));
			}
		}

		for (let i = this.projectsLinks.length - 1; i >= 0; i--) {
			let el = this.projectsLinks[i];
			if (el.getAttribute('data-index') !== currentIndex) {
				console.log(el);
				this.timeline.add(TweenMax.to(el, 0.35, {
					opacity: 0.5,
					ease: Quart.easeOut
				}),'-=0.3');
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