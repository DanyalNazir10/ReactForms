import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const Form = () => {

    const {register,handleSubmit, control} = useForm();

    const onSubmit = (data) => {
        console.log("Form submitted with data: ", data);
    }

    return(
        <>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" {...register("firstName", {
                    required: "First name is required"
                    })} placeholder="Enter your first name"/>

                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" {...register("lastName", {
                    required: "Last name is required"
                    })} placeholder="Enter your last name"/>
                
                <label htmlFor="age">Age</label>
                <input type="number" id="age" {...register("age", {
                    required: "Age is required"
                    })} placeholder="Enter your age"/>
                
                <label htmlFor="email">Notification Emails</label>
                <input type="email" id="email" {...register("email", {
                    required: "Emails are required",
                    pattern: {
                        value: /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}(?:,[\s]*[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,})*$/,
                        message: "Invalid email"
                    }
                    })} placeholder="Enter your emails"/>

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
