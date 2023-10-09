<script>
    import Header from "../lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte"
    import { page } from "$app/stores";
	import NotFound from "../lib/components/NotFound.svelte";

    $: status = $page.status
    $: error = $page.error
</script>

{#if status === 200}
<Header />
    
<main>
    <slot/>
</main>
<Footer  />
{:else if status === 404}
    <NotFound />
{/if}


