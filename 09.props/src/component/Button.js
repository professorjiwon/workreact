import './Button.css';

const Button = ({text, color, a, b, c}) => {
    return (
        <button className="btn" style={{color:color, backgroundColor:a}}>{text}버튼</button>
    )
}

export default Button;