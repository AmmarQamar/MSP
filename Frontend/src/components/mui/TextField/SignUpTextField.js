import { TextField, Box } from '@mui/material';
import React from 'react'
import styled from 'styled-components';

export const CustomTextField = styled(TextField, {
    name: "CustomTextField",
})({
    // ---------------Input---------------
    "& .MuiInputBase-root": {
        height: 43,
        width: "auto",
        fontSize: 13,
        color: "white",
        letterSpacing: 1,
    },
    //----- LABEL --------
    "& .MuiInputLabel-root": {
        fontSize: 11,
        color: 'white',
    },
    // "& .MuiInputLabel-root:hover": {
    //     color: 'orange',
    // },
    // Label Focus
    "& .MuiInputLabel-root.Mui-focused": {
        color: "orange",
    },

    /* Hovered Label */
    "& .MuiInputLabel-root:hover": {
        color: "orange"
    },
    // ---------------OUTLINE BORDER---------------
    // outline textfield
    "& .MuiOutlinedInput-root": {
        "& > fieldset": {
            borderColor: "white",
        },
    },
    //styles the outline hover
    "& .MuiOutlinedInput-root:hover": {
        "& > fieldset": {
            borderColor: "orange"
        }
    },
    // outline focus border
    "& .MuiOutlinedInput-root.Mui-focused": {
        "& > fieldset": {
            borderColor: "orange"
        },
        "& > label": {
            color: "orange",
        },
    },

});

const SignUpTextField = (props) => {

    return (
        <Box sx={{ height: 40, }}>
            <CustomTextField
                {...props}
                variant="outlined"
                required fullWidth
            // onChange={handleChange} 
            />
        </Box >
    )
}
export default SignUpTextField