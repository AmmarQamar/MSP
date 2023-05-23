// export const centerBox = {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     width: "40vw",
//     height: "100%",
//     // minheight: "100%",
//     backgroundColor: "#FEFEFE",
//     boxShadox: 30,
//     borderRadius: 3,
//     opacity: 2,
//     color: "#171E39",
//     // border: 1,
//     marginTop: 5,
//     // '@media (min-height: 700px)': {
//     //     margin: 0,
//     //     height: '100%',
//     // },

// }
export const centerBox = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "40vw",
    height: "150%",
    backgroundColor: "#FEFEFE",
    boxShadox: 30,
    borderRadius: 3,
    opacity: 2,
    color: "#171E39",
    // border: 1,
    marginTop: 5,
    transition: " height 1s",

    "@media (min-height: 100vh)": {
        height: "90vh",
        backgroundColor: "#FEFEFE",

        // backgroundColor: "#171E39"
    },

}
export const fieldBox = {

    position: "relative",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "30vw",
    height: "80%",
    display: "flex",
    // '@media (min-height: 700px)': {
    //     margin: 0,
    //     height: '100%',
    //     backgroundColor: "red"
    // },
    // backgroundColor: "#F5F5F5",
}

export const field = {
    position: "relative",
    color: "#171E39",
    fontSize: 11, // backgroundColor: "yellow",
    // height: "70px",
    width: "100%",
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // fontSize: 14,
}

export const fieldLabel = {
    fontSize: 11,
}