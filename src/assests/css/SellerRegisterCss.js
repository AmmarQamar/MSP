export const boxstyle = {
    position: "relative",
    backgroundSize: "cover",
    margin: "auto",
    marginTop: 2,
    width: "50vw",
    height: "95vh",
    boxShadow: 25,
    backgroundColor: "#3b33d5",
    borderRadius: 2,
    color: "white",
    fontSize: 14,
    '@media (max-width: 768px)': {
        width: "80vw",
        height: "100vh",
        marginTop: 0,
        borderRadius: 0,
        fontSize: 12,
    },

};
export const center = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    height: "auto",
    boxShadow: 30,
    paddingTop: 'min(10%, 2vw)',
};