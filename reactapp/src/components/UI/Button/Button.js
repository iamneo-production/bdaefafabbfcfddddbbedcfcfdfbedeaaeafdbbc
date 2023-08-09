
const Button = (props) => {
    const { btnName = props.children, onClick, marked } = props;

    const buttonStyle = {
        backgroundColor: "#F11A7B", 
        margin: "0.5rem", 
        padding: "0.5rem 1rem", 
        border: "none",
        borderRadius: "4px",
        color: "white",
        cursor: "pointer",
        fontSize: "1rem",
      };

    return ( 
        <button onClick={onClick} disabled={marked} style = {buttonStyle}>{ btnName }</button>
    )
}

export default Button;