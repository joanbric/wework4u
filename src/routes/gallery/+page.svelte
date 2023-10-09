<script>
    import {onMount} from 'svelte';

	export let data;

    onMount(() => {
        console.log(data.allPictures);
    })
</script>

<h1>Gallery</h1>

<div class="gallery-container">
	{#each data.allPictures as image}
		<div class="gallery-item">
			<img src={image.default} alt={'Gallery item'} />
		</div>
	{/each}
</div>


<style>
    h1{
        text-align: center;
        color: var(--fnt-color-green-dark);
        padding: 2rem 0;
    }
    .gallery-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax( 250px, 1fr));
        grid-auto-rows: 250px;

        gap: 10px;
        
        justify-content: center;

        margin: 0 auto;
        max-width: 1200px;
        padding: 50px 25px
    }

    .gallery-item {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        overflow: hidden;
    }

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>