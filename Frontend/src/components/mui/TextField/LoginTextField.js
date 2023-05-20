import { TextField, Box } from '@mui/material';
import React from 'react'
import styled from 'styled-components';

const CustomTextField = styled(TextField, {
    name: "CustomTextField",
})({
    // ---------------Input---------------
    "& .MuiInputBase-root": {
        height: 40,
        width: "auto",
        fontSize: 13,
        color: "white",
        letterSpacing: 1,
    },
    //----- LABEL --------
    "& .MuiInputLabel-root": {
        fontSize: 13,
        color: 'white',
        // textAlign: "center",
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




const LoginTextField = (props) => {
    const { value, ...otherprops } = props;
    return (
        <Box sx={{
            height: 40,
            display: "flex",
            flexDirection: "column",
            // justifyContent: "center",
            alignItems: "center",

        }}
        >
            <CustomTextField {...props} variant="outlined"
                required
                fullWidth
            // label={FieldLabel}
            >
                {/* {value} */}
            </CustomTextField>
        </Box >
    )
}

export default LoginTextField