function Contact () {
    return (
        <>
        <h1 className="text-center">Contact Me</h1>

        <form action="https://api.web3forms.com/submit" method="POST" className="contact-form column">

            <input type="hidden" name="access_key" value="2d58fe90-cce1-4c46-96d6-374e95265fba"/>

            <input name="fullName" type="text" placeholder="Enter your full name"/>

            <input name="email" type="email" placeholder="Enter your full email"/>

            <textarea name="message" rows="10" cols="30" placeholder="Enter your message"></textarea>

            <button>Send</button>

        </form>
        </>
    )
}

export default Contact