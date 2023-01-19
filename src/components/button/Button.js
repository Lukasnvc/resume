import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Btn = styled.button`
  font-family: "VT323", monospace;
  display: block;
  color: #b8e1dd;
  font-size: 1.2rem;
  padding: 7px 25px;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px,
    rgba(0, 0, 0, 0.05) 0px 5px 10px;
  margin: 30px auto;
  transition: 300ms;
  &:hover {
    cursor: pointer;
    box-shadow: rgba(175, 166, 39, 0.56) 0px 22px 70px 4px;
    color: #f9cc7b;
  }
`;

const Button = ({ color, children, id }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/portfolio/${id}`);
  };
  return (
    <Btn onClick={handleClick} style={{ backgroundColor: `${color}` }}>
      {children}
    </Btn>
  );
};

export default Button;
