class Expand {
	constructor(expand,index){

		this.expand = expand;
		this.isOpen = false;

		this.bindUI();
		this.bindEvents();

	}

	bindUI() {

		this.expandBtn = this.expand.querySelector('.js-expand-btn');
		this.expandBtnSpan = this.expand.querySelector('.js-expand-btn span');
		this.expandContent = this.expand.querySelector('.js-expand-content');

	}

	bindEvents() {

		this.expandBtn.addEventListener('click', this.toggleExpand.bind(this));

	}

	toggleExpand(e) {
		
		e.preventDefault();

		if (this.isOpen == false) {
			this.expandBtnSpan.textContent = 'Less details'
			let expandTimeline = new TimelineLite();

			TweenMax.set(this.expandContent, {
				height: 'auto'
			});

    		expandTimeline.from(this.expandContent, 0.4, {
    			height: 0,
    			ease: Power1.easeOut
    		})
    		.to(window, 0.4, {
    			scrollTo:{y: this.expand.offsetTop - 20},
    			ease: Power1.easeOut
    		});

        	this.isOpen = true;
        } else {
        	this.expandBtnSpan.textContent = 'More details'
        	TweenMax.to(this.expandContent, 0.4, {
        		height: 0,
        		ease: Power1.easeOut
        	});
        	this.isOpen = false;
        }
        
	}
}

export default Expand