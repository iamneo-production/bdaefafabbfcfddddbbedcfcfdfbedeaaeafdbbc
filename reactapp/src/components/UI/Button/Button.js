const Button = (props) => {
    const { btnName = props.children, onClick, marked } = props;
    return ( 
        <button onClick={onClick} disabled={marked}>{ btnName }</button>
    )
}

export default Button;