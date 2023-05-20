import bg from './../../assests/images/signin.svg';

export const boxstyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: "70vh",
    width: "75%",
    // height: "70%",
    bgcolor: "background.paper",
    boxShadow: 24,
};
export const center = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
};
export const sideimg = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    marginTop: "40px",
    marginLeft: "15px",
    marginRight: "15px",
    height: "63vh",
    color: "#f5f5f5",
};
export const rightcontainer = {
    backgroundColor: "#3b33d5",
    height: "100%",
    backgroundSize: "cover",
    minHeight: "300px",
    pl: 10,
    pr: 10,
}