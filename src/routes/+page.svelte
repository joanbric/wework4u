<script>
	import serviceIcon from '$lib/imgs/house.svg';
	import serviceBathroom from '$lib/imgs/bathroom.svg';
	import servicePainting from '$lib/imgs/painting.svg';
	import serviceDecoration from '$lib/imgs/sia-chandelier.svg';
	import servicePlasterting from '$lib/imgs/plastering.svg';
	import serviceKitchen from '$lib/imgs/kitchen.svg';
	import kitchen from '$lib/imgs/kitchen.jpg';
	import manHoldingDrill from '$lib/imgs/man-holding-drill.jpg';
	import bathroom from '$lib/imgs/bathroom.jpg';
	import houseExtension from '$lib/imgs/house-extension.jpg';
	import materials from '$lib/imgs/materials.jpg';
	import efficiency from '$lib/imgs/efficiency.jpg';

	export let data;
</script>

<section class="hero">
	<div class="text-container">
		<h1><span>We</span><span>Work</span><span>4u</span></h1>

		<p class="slogan">
			<span>Making your</span><br /><span>Dream Home</span><br /><span>come true</span>
		</p>

		<p class="message">
			<strong>WeWork4U</strong> offers construction and remodeling services to transform your home into
			your dream living space.
		</p>

		<a href="/contact">Schedule a Consultation <i class="bx bx-right-arrow-alt" /></a>
	</div>
</section>

<section class="services">
	<h2 class="services-title">Our Services</h2>
	<div class="services-parent">
		<ul class="services-container">
			<li class="service">
				<h3 class="service__title">Bathroom</h3>
				<img class="service__img" src={serviceBathroom} alt="Service icon" />
				<p class="service__description">
					Transform your bathroom into a sanctuary of elegance and comfort with our expert
					remodelation service. Our team crafts personalized designs, merges functionality with
					aesthetics, and elevates your daily routines to a whole new level of sophistication.
				</p>
			</li>
			<li class="service">
				<h3 class="service__title">Extension</h3>
				<img class="service__img" src={serviceIcon} alt="Service icon" />
				<p class="service__description">
					Our construction company offers high-quality house extension services, including kitchen
					and bathroom extensions, room additions, and outdoor living spaces.
				</p>
			</li>
			<li class="service">
				<h3 class="service__title">Plastering</h3>
				<img class="service__img" src={servicePlasterting} alt="Service icon" />
				<p class="service__description">
					Experience flawless walls and ceilings with our exceptional plastering service. Our
					skilled artisans bring expertise and precision to every surface, creating a seamless and
					refined finish that transforms your space into a masterpiece of craftsmanship.
				</p>
			</li>
			<li class="service">
				<h3 class="service__title">Painting</h3>
				<img class="service__img" src={servicePainting} alt="Service icon" />
				<p class="service__description">
					"Unveil the true beauty of your space with our professional painting service. Our expert
					painters blend creativity and technique to breathe life into your walls, infusing vibrant
					colours and refined finishes that elevate your surroundings to a whole new level of
					elegance."
				</p>
			</li>
			<li class="service">
				<h3 class="service__title">Decoration</h3>
				<img class="service__img" src={serviceDecoration} alt="Service icon" />
				<p class="service__description">
					Transform your living spaces into stunning works of art with our exquisite decoration
					service. Our skilled team of decorators adds a touch of sophistication to every corner,
					harmonizing colours, textures, and furnishings to create an ambiance that reflects your
					unique style and personality.
				</p>
			</li>
		</ul>
	</div>

	<a href="/contact">Get a Quote <i class="bx bx-right-arrow-alt" /></a>
</section>

<section class="projects">
	<h2 class="projects-title">Projects</h2>
	<div class="projects-container">
		{#each data.posts as posts}
			{@const { title, time, description } = posts.meta}

			<article class="project">
				<img src={posts.cover} alt="Porject cover" class="project__cover" />
				<h3 class="project__title">{title}</h3>
				<p class="project__time">{time}</p>
				<p class="description">
					<i>{description}</i>
				</p>
			</article>
		{/each}
	</div>

	<a href="/projects" class="projects-link">See all projects<i class="bx bx-right-arrow-alt" /></a>
</section>

<section class="attributes">
	<p>
		With <strong>WeWrok4U</strong>, you can trust that your construction or remodeling project is in
		the hands of experts.
	</p>
	<div class="attributes-container">
		<div class="attribute">
			<h2>Expertise</h2>
			<p>
				Our team of skilled craftsmen and designers have the expertise to handle any project, from
				small-scale renovations to large-scale custom builds.
			</p>
			<img class="background" src={manHoldingDrill} alt="" />
		</div>
		<div class="attribute">
			<h2>Quality</h2>
			<p>
				We have experience working with a variety of materials and design styles, and use only the
				highest quality materials to ensure a long-lasting and beautiful finished product.
			</p>
			<img class="background" src={materials} alt="" />
		</div>
		<div class="attribute">
			<h2>Efficiency</h2>
			<p>
				Our expertise in project management and attention to detail ensures that each project is
				completed on time and within budget.
			</p>
			<img class="background" src={efficiency} alt="" />
		</div>
	</div>
</section>

<style>
	section {
		min-height: 100vh;
		padding: 0 18px;
	}
	section:nth-child(even) {
		background-color: var(--clr-dark);
		color: var(--fnt-color-light);
	}
	.hero {
		background: radial-gradient(
				55.58% 35.58% at 75% 34.42%,
				rgba(255, 255, 255, 0) 0%,
				#ffffff 100%
			),
			url('$lib/imgs/living-room.webp');
		background-size: cover;
		background-position: right;
		background-repeat: no-repeat;
		padding-top: 2rem;
	}
	.hero .text-container {
		max-width: 780px;
		margin-top: 10vw;
	}
	h1 {
		font-family: var(--fnt-general);
		font-size: 7rem;
		line-height: 5rem;
		color: var(--fnt-color-green-dark);
		margin-bottom: 4rem;
		text-shadow: 5px 5px 6px rgba(0, 0, 0, 0.2);
	}
	h1 span {
		display: block;
	}
	h1 span:nth-child(2) {
		color: var(--fnt-color-strong);
	}

	.slogan {
		text-align: center;
		font-size: 2.5rem;
		text-shadow: 5px 5px 6px rgba(0, 0, 0, 0.2);
	}
    .slogan span{
        line-height: 2rem;
    }
	.slogan span:nth-child(3) {
		color: var(--fnt-color-strong);
		font-weight: 600;
	}

	.hero .message {
		text-align: center;
		margin: 2rem 0;
	}

	.hero a {
		margin-top: 40px;
		font-size: 1.2rem;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}

	/* Services */
	.services {
		overflow: hidden;
	}
	.services-title {
		font-size: 2rem;
		text-align: center;
		padding: 4rem 0;
	}

	.services-parent {
		width: 100%;
	}

	.services-container {
		display: grid;
		grid-auto-flow: column;
		width: auto;
		gap: 10px;
		overscroll-behavior-x: contain;
		scroll-snap-type: x mandatory;

		overflow-x: auto;
	}

	.service {
		background-color: rgba(255, 255, 255, 0.9);
		color: var(--fnt-color-dark);
		border-radius: var(--brd-radius-l);
		text-align: center;
		scroll-snap-align: center;
		min-width: 300px;
		max-width: 350px;
	}

	.service__title {
		font-size: 1.5rem;
		padding: 35px 0;
	}

	.service__img {
		width: 50%;
	}

	.service__description {
		padding: 2rem 15px;
	}

	.services > a {
		display: inline-flex;
		justify-content: flex-end;
		align-items: center;
		font-size: 1.3rem;
		color: var(--fnt-color-light);
		background-color: var(--clr-light);
		float: right;
		margin-top: 100px;
		padding: 10px 15px;
		border-radius: var(--brd-radius-m);
	}

	/* Projects */

	.projects-title {
		font-size: 2rem;
		text-align: center;
		padding: 4rem 0;
	}
	.projects-container {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 35px;
	}

	.project {
		border: 2px solid rgba(0, 0, 0, 0.1);
		border-radius: var(--brd-radius-s);
		padding: 5px;
		text-align: center;
		width: 100%;
		max-width: 550px;
	}

	.project__cover {
		width: 100%;
		border-radius: var(--brd-radius-l);

		object-fit: cover;
		max-height: 250px;
	}

	.project__title {
		margin: 10px 0;
	}

	.project .description {
		padding: 15px;
	}

	.projects > a {
		display: flex;
		justify-content: flex-end;
		align-items: center;

		margin: 50px 0;
	}

	/* Attributes */
	.attributes > p {
		font-size: 1.3rem;
		text-align: center;
		padding: 50px 0;
	}

	.attributes-container {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 40px;
		padding: 0 50px;
	}
	.attribute {
		border-radius: var(--brd-radius-l);
		overflow: hidden;
		position: relative;
		z-index: 0;
		width: 0;
		flex-grow: 1;
		min-width: 350px;
		max-width: 550px;
	}

	.attribute .background {
		width: 100%;
		position: absolute;
		top: 0;
		z-index: -1;
		opacity: 0.3;
	}
	.attribute h2 {
		padding: 15px 0;
		text-align: center;
		text-shadow: 0 0 6px rgba(0, 0, 0, 0.75);
	}

	.attribute p {
		padding: 20px 15px;
		text-align: center;
		font-weight: 500;
		line-height: 1.4rem;
		text-shadow: 0 0 6px rgba(0, 0, 0, 0.75);
	}

	@media screen and (min-width: 768px) {
		section {
			padding: 15px 10vw;
		}

		h1 {
			font-size: 10rem;
			line-height: 7rem;
		}

		/* Services */
		.services-container {
			gap: 20px;
		}
	}

	@media screen and (min-width: 1200px) {
		section {
			padding: 10vh 15vw;
			min-height: fit-content;
		}

		h1 span {
			display: inline;
		}

		.slogan {
			font-size: 3.5rem;
		}

		.hero .text-container .message {
			font-size: 1.4rem;
		}

		.hero .text-container a,
		.projects a {
			font-size: 1.4rem;
		}

		/* Services */
		.services-container {
			display: flex;
			justify-content: center;
			width: 100%;
			flex-wrap: wrap;
		}

		.service {
			padding: 10px;
		}
	}
</style>
