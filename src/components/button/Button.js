import "./button.scss";
import { useNavigate } from "react-router-dom";

const Button = ({ color, children, id }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/portfolio/${id}`);
  };
  return (
    <button
      onClick={handleClick}
      className="btn"
      style={{ backgroundColor: `${color}` }}>
      {children}
    </button>
  );
};

export default Button;
