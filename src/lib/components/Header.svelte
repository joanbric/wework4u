<script>
	import logo from '$lib/imgs/logo.svg';
	import { afterUpdate, onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	let isMenuVisible = false;
    let header;
    const minWidth = 768;

    onMount(getWidth)
    
    function getWidth(){
        console.log(header.clientWidth)
        if (header.clientWidth >= minWidth){
            isMenuVisible =true

        }else{
            isMenuVisible =false

        }

    }
</script>

<svelte:window on:resize={getWidth} />

<header bind:this={header}>
	<div class="visible-content">
        <a href="/">
            <img src={logo} alt="WeWork4U logo" />
        </a>
		<button on:click={() => (isMenuVisible = !isMenuVisible)}
			><i class="bx bx-menu header__menu" /></button
		>
	</div>
    {#if isMenuVisible}
        
	<ul transition:slide={{delay: 50, duration: 300, axis: 'y'}} class="menu">
		<li><a href="/about">About Us</a></li>
		<li><a href="/projects">Projects</a></li>
        <li><a href="/gallery">Gallery</a></li>
		<li><a href="/contact">Contact Form</a></li>
	</ul>
    {/if}
</header>

<style>
	header {
		min-height: 50px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
        position: sticky;
	}

	.visible-content {

		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px;
	}

	.header__menu {
		font-size: 3rem;
	}

	img {
		width: 100px;
	}

	button {
		background: none;
		border: none;
	}

	ul {
		overflow: hidden;
		padding-right: 20px;
	}
	li {
		text-align: right;
		margin: 15px 0;
		font-size: 1.3rem;
	}

    @media screen and (min-width: 768px) {
        header{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        button{
            display: none;
        }

        ul{
            display: flex;
            justify-content: flex-end;
            gap: 30px;
            
        }
        
	}
</style>
