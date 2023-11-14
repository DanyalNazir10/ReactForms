import React from "react";

const form = () => {

    return(
            <form>
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" placeholder="Enter your first name"/>

                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" placeholder="Enter your last name"/>
                
                <label htmlFor="age">Age</label>
                <input type="number" id="age" name="age" placeholder="Enter your age"/>
                
                <label htmlFor="email">Notification Emails</label>
                <input type="email" id="email" name="email" placeholder="Enter your emails"/>

                <label htmlFor="contact">Contact Number</label>
                <input type="tel" id="contact" name="contact" placeholder="Enter your contact number"/>

                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Enter your password"/>

                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm your password"/>

                <input type="submit" value={"Submit"}/>
            </form>
    )
}

export default form;