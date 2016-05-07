import 'gsap'

window.onload = () => {

	let introTimeline = new TimelineLite();

	introTimeline.to('.loader', 0.3, {
		opacity: 0,
		display: 'none',
		ease: Power1.easeOut,
		delay: 1
	})
	.from('.projects__visuals', 0.8, {
		width: 0,
		ease: Quart.easeOut
	})
	.staggerFrom('.projects__title', 0.3, {
		x: -30, 
		opacity: 0,
		ease: Power1.easeOut 
	}, 0.15, '-=0.3')
	.staggerFrom('.projects__title time', 0.3, {
		y: 25, 
		opacity: 0,
		ease: Power1.easeOut
	}, 0.15, '-=0.15')
	.from('.projects__underline', 0.4, {
		width: 0,
		ease: Quart.easeOut
	});

}