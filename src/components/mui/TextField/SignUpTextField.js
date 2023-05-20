import { TextField, Box } from '@mui/material';
import React, { useState } from 'react'
import styled from 'styled-components';

const CustomTextField = styled(TextField, {
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
    const [seller, setSeller] = useState({
        fullname: '',
        email: '',
        password: '',
        phoneno: '',
        address: '',
    });

    // const { value, ...otherprops } = props;
    // const { name, value, onChange } = props;

    const handleChange = (e) => {
        // const { value } = e.target;

        const { name, value } = e.target;
        setSeller({ ...seller, [name]: value })
    };
    return (
        <Box sx={{ height: 40, }}>
            <CustomTextField
                {...props}
                variant="outlined"
                required fullWidth
                onChange={handleChange} />
        </Box >
    )
}
export default SignUpTextField