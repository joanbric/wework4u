<script>
    import "$lib/styles/svx.css";
    export let data;
    const {title, time, Content} = data;
</script>


<article>
    <button on:click={() => {history.back()}}><i class='bx bx-arrow-back'></i>Back</button>
    <Content />
</article>


<style>
    article{
        max-width: 850px;
        margin: 0 auto;
        padding: 5rem 0;
    }
    
    button{
        padding: 5px 10px;
        border: none;
        background: none;
        font-size: 1.3rem;
        font-weight: bold;
        color: var(--fnt-color-link);
        display: inline-flex;
        align-items: center;
        gap: 5px;
    }

    button:hover{
        cursor: pointer;
    }
    .bx-arrow-back{
        font-size: 1.5rem;
    }

</style>

