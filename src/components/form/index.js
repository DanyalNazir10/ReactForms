import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const Form = () => {

    const {register, control} = useForm();

    return(
        <>
            <form>
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" {...register("firstName")} placeholder="Enter your first name"/>

                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" {...register("lastName")} placeholder="Enter your last name"/>
                
                <label htmlFor="age">Age</label>
                <input type="number" id="age" {...register("age")} placeholder="Enter your age"/>
                
                <label htmlFor="email">Notification Emails</label>
                <input type="email" id="email" {...register("email")} placeholder="Enter your emails"/>

                <label htmlFor="contact">Contact Number</label>
                <input type="tel" id="contact" {...register("contact")} placeholder="Enter your contact number"/>

                <label htmlFor="password">Password</label>
                <input type="password" id="password" {...register("password")} placeholder="Enter your password"/>

                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" id="confirmPassword" {...register("confirmPassword")} placeholder="Confirm your password"/>

                <input type="submit" value={"Submit"}/>
            </form>
            <DevTool control={control}/> 
        </>
    )
}

export default Form;