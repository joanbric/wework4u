<script>
	import teamImg from '$lib/imgs/team.jpg';
</script>

<div class="container">
	<h1>
		About
		<div class="company-name"><span>We</span><span>Work</span><span>4u</span></div>
	</h1>
	<img src={teamImg} alt="A team" />

	<p>
		Our company is a leading construction and renovation firm in the UK, with a team of skilled
		professionals who have the expertise to handle a variety of projects. We strive for excellence
		in every aspect of our work, from small-scale renovations to large-scale custom builds, using
		only high-quality materials. Our attention to detail and project management ensures timely
		completion and adherence to budgets.
	</p>
	<h2>Our mission</h2>
	<p>
		At our company, is to deliver exceptional construction and remodeling services to our clients.
		We strive to exceed expectations by providing top-quality craftsmanship, using only the highest
		quality materials and incorporating the latest design trends. We are committed to completing
		each project on time and within budget, while maintaining open communication and ensuring
		complete customer satisfaction. Our goal is to build long-lasting relationships with our clients
		and become their go-to partner for all their construction and remodeling needs.
	</p>
	<h2>Our mission</h2>
	<p>
		Is to be the leading construction and remodeling company in the industry, known for our
		exceptional quality of work, outstanding customer service, and commitment to sustainability. We
		aim to continue expanding our services and expertise, while maintaining our core values of
		integrity, professionalism, and innovation.
	</p>
</div>


<style lang="sass">
    .container
        padding: 3rem 10%
        text-align: center

    h1, h2
        color: var(--fnt-color-strong)

    h1
        display: inline-block
        text-align: left

    h2
        padding: 2rem 0
    
    .company-name
        font-family: var(--fnt-general)
        font-size: 7rem
        line-height: 5rem
        margin-top: 3rem
        span
            display: block
        
        span:nth-child(odd)
            color: var(--fnt-color-green-dark)
    img
        width: 70%
        max-width: 700px
        vertical-align: middle
        margin: 30px 0

    p
        font-size: 1.1rem
        max-width: 800px
        margin: 0 auto
</style>