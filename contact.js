import React from 'react'
import '../app.css'

const Contact = ()=>{
    return(
        <form className="form">
            <h1>Contact </h1>

        <label>Name</label>
        <input placeholder ="Customer Name"/>

        <label>Email</label>
        <input placeholder ="Customer Email"/>

        <label>Message</label>
        <textarea placeholder="Message"></textarea>     

        <button type="submit">Submit</button>   
        </form>
    )
}
export default Contact;