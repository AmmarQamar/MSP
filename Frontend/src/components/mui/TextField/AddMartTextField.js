import React from 'react'
import { TextField } from '@mui/material'
import styled from 'styled-components';

const AddMartTextField = () => {
    const AddMartField = styled(TextField, {
        name: "AddMartField",
    })({
        // ---------------Input---------------
        "& .MuiInputBase-root": {
            height: 35,
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
                borderColor: "black",
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
    return (
        <AddMartField fullWidth required  ></AddMartField >

    )
}

export default AddMartTextField