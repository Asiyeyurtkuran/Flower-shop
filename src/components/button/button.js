import './button.css'
const Button = ({ text, onClick, type = "button", classes, disabled = false }) => {
    return (
        <button className="button" type={type} onClick={onClick} className={classes} disabled={disabled}>
            {text}
        </button>
    );
};

export default Button;
