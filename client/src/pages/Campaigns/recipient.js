import React from "react";
import {
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
} from "@material-ui/core/";

const Recipient = () => {
  return (
    <>
      <FormControl>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">
          We'll never share your email.
        </FormHelperText>
      </FormControl>
    </>
  );
};

export default Recipient;
