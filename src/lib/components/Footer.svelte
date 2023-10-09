<script>
	import logo from '$lib/imgs/logo.svg';
</script>

<footer>
	<div>
		<a href="/">
			<img src={logo} alt="Company logo" class="logo" />
		</a>
		<p class="slogan">Making your dream house come true</p>
	</div>
	<div>
		<h2>Quick Links</h2>
		<ul>
			<li>
				<a href="/about">About us</a>
			</li>

			<li>
				<a href="/projects">Projects</a>
			</li>

			<li>
				<a href="/contact">Contact Form</a>
			</li>
            <li>
                <a href="/credits">Credits and Thanks</a>
            </li>
		</ul>
	</div>
	<div>
		<h2>Contact info</h2>
		<p class="contact-info">+44 773 7036 222</p>
		<p class="contact-info">info@wework4ultd.co.uk</p>
		<p class="contact-info"><i class="bx bxl-instagram-alt" />/wework4you.sl</p>
		<p class="direction">225 Clapham Road, London, UK <br />SW9 9BE</p>
		<p class="rights">All rights reserved © wework4u</p>
	</div>
</footer>

<style>
	footer {
		width: 100%;
		text-align: center;
		box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.25);
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        padding: 40px 0 20px 0;
	}

	.logo {
		width: 70%;
		max-width: 350px;
	}

	.slogan {
		font-size: 1.3rem;
		padding: 20px 0 15px 0;
		margin-bottom: 20px;
	}

	h2 {
		color: var(--fnt-color-strong);
		padding: 15px 0;
		margin-top: 20px;
	}

	.contact-info,
	li {
		font-size: 1.2rem;
		padding: 5px 0;
	}

	.direction {
		font-size: 1.25rem;
		padding: 25px 0;
	}

	.rights {
		opacity: 0.5;
		padding-bottom: 10px;
	}

	

	@media screen and (min-width: 1200px) {
        footer{
            flex-direction: row;
            align-items: flex-start;
			padding-left: 15vw;
            padding-right: 15vw;
            
        }
	}
</style>
