<script>
	let name = ""
    let email = "info@wework4ultd.co.uk"
    let message = ""
    let anchor;

    const handleSubmit = () => {
        anchor.href = `mailto:${email}?subject=${name}&body=${message}`;
        anchor.click()
    }
</script>
<!-- contact form -->
<a href="#contact" id="contact" bind:this={anchor} style="display: none;">x</a>
<form action="post">
    <h1>Contact us</h1>
    <label for="name">Name</label>
    <input type="text" name="name" id="name" bind:value={name} />
    <label for="message">Message</label>
    <textarea name="message" id="message" bind:value={message}></textarea>
    <button type="submit" on:click|preventDefault={handleSubmit}>Send</button>
</form>

<style>
    form{
        padding: 10px 30px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 100%;
        height: 100%;
        border-radius: 6px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .25);
        background-color: white;
        margin: 6rem auto;
        max-width: 850px;

    }
    input{
        width: 100%;
        padding: 10px;
        border-radius: 6px;
        border: none;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .25);
        background-color: white;

    }
    label{
        font-weight: bold;
        align-self: flex-start;
    }

    textarea{
        width: 100%;
        height: 100%;
        padding: 10px;
        border-radius: 6px;
        border: none;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .25);
        background-color:white;
        max-width: 100%;
        min-height: 150px;
        resize: none;
    }   

    button{
        width: 100%;
        padding: 10px;
        border-radius: 6px;
        border: none;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .25);
        background-color: #f8ee63;

    }

    input, textarea{
        outline: none;
    }

    label, button{
        margin-top: 2rem;
        
    }
</style>