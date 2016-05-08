class Projects {
	constructor(){

		this.bindUI();
		this.bindEvents();

	}

	bindUI() {

		this.projectsLinks = document.querySelectorAll('.js-projects-link');
		this.projectsTags = document.querySelectorAll('.js-projects-tags');

	}

	bindEvents() {

		for (let i = this.projectsLinks.length - 1; i >= 0; i--) {
			this.projectsLinks[i].addEventListener('mouseenter', this.showDetails.bind(this));
		}

	}

	showDetails(e) {

		const currentIndex = e.target.getAttribute('data-index');

		for (let i = this.projectsTags.length - 1; i >= 0; i--) {
			let el = this.projectsTags[i];
			if (el.getAttribute('data-index') == currentIndex) {
				console.log(el);
				TweenMax.fromTo(el,0.3,{
					y: 20,
					opacity: 0
				},{
					y: 0,
					opacity: 1,
					display: 'block'
				});
			}
		}

	}

}

export default Projects