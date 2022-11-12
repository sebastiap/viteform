import React from "react";
import { useForm } from "react-hook-form";
import {Heading } from '@chakra-ui/react'

import { Sform,Sinput } from '../common/Sform.styled';

export default function HookForm() {
    // a brief explanation of useForm of react-hook-form
    // register is a method that allows us to "introduce" the inputs on the hook radar
    // handleSubmit catch the submit event and allows us to redirect it to a method of our choice
    // watch A method that follows the value of certain registered input
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  
    console.log(watch("username")); // watch input value by passing the name of it
  
    return (
      /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
      <Sform onSubmit={handleSubmit(onSubmit)}>
        <Heading mb={6}  mr={15} ml={15}> Login with React Hook Form</Heading>
        {/* register your input into the hook by invoking the "register" function */}
        <Sinput defaultValue="User" {...register("username", { required: "Username is required."})} />
        
        {/* include validation with required or other standard HTML validation rules */}
        <Sinput {...register("exampleRequired", { required: "Password is required." ,
        minLength:{value:8,message:"password must be at least 8 characters long."}})} />

        {/* errors will return when field validation fails  */}
        {errors.username && <span>{errors.username.message}</span>}
        {errors.exampleRequired && <span>{errors.exampleRequired.message}</span>}
        <Sinput button type="submit"/>
        {/* <Sbutton >Send</Sbutton> */}
      </Sform>
    );
  }