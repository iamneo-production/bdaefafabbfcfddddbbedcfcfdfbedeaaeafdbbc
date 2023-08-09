
const Button = (props) => {
    const { btnName = props.children, onClick, marked } = props;
    const buttonStyle = {
        display: "inline-block",
        margin: "10px",
        padding: "10px 20px",
        fontSize: "16px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        backgroundColor: "#3498db",
        color: "#fff",
      };
    return ( 
        <button onClick={onClick} disabled={marked} style = {buttonStyle}>{ btnName }</button>
    )
}

export default Button;