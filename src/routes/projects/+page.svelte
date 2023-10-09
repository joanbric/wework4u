<script>
	export let data;
    const svx = "1.svx"
    
</script>

<h1>Projects</h1>
<section>
	<ul class="projects-container">
		{#each data.posts as post}
			{@const cover = post.cover}
			<a href={post.path}>
				<li class="project">
					<img class="project-cover" src={cover} alt="Project cover" />
					<h2>
						{post.meta.title}
					</h2>
					<span class="project-time">{post.meta.time}</span>
				</li>
			</a>
		{/each}
	</ul>
</section>

<style>
	h1 {
		text-align: center;
		padding: 2.5rem 0;
	}
	h2 {
		color: var(--fnt-color-strong);
		padding: 10px 0;
	}
	section {
		max-width: 1200px;
		margin: 0 auto;
		padding-bottom: 5rem;
	}
	.projects-container {
		display: flex;
		gap: 25px;
		flex-wrap: wrap;
		justify-content: center;
	}
	.project-cover {
		object-fit: cover;
		width: 100%;
		max-height: 250px;
		border-radius: 6px;
	}
	a {
		text-decoration: none;
		color: var(--fnt-color-dark);
	}

	a:hover li {
		background-color: #f1f1f1;
		transform: scale(102%);
	}

	li {
		padding: 1rem;
		padding-bottom: 2rem;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
		max-width: 500px;
		width: auto;
		border-radius: 6px;
	}
</style>
