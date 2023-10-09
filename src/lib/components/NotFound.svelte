<script>
    import notFoundImg from '$lib/imgs/not-found.jpg'
</script>



<div class="container">

    <img src={notFoundImg} alt="">
    <div class="text-container">
        <h1>Page not found</h1>
        <p>The page you are looking for is not available</p>
        <a href="/">Back to home</a>
    </div>

</div>


<style lang="sass">

    .container
        padding: 0 5%
        position: relative
        display: flex
        align-items: center
        justify-content: center
        flex-wrap: wrap
        gap: 30px

    img
        width: 80%
        max-width: 700px

    .text-container
        padding: 20px

        h1
            font-size: 4rem
            color: var(--fnt-color-strong)

        p
            font-size: 1.4rem
            padding: 1.5rem 0
        
        a
            font-size: 1.2rem
            color: var(--fnt-color-light)
            background-color: var(--clr-light)
            float: right
            margin-top: 20px
            padding: 10px 15px
            border-radius: var(--brd-radius-m)
</style>




