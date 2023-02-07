import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { CgPhone } from "react-icons/cg";
import styled from "styled-components";
import { TabTitle } from "../../utils/generalFunctions";
import { amber, darkGreen, lightGreen } from "../../utils/colors";
import { breakpoints } from "../../utils/breakpoints";
import { Formik, Form, Field, ErrorMessage } from 'formik'
import axios from 'axios'

const ContactsPage = () => {
  TabTitle("Contacts");
  const handleSubmit = (values, { resetForm }) => {
    axios
    .post("https://getform.io/f/4dc0720e-0751-4e5c-a467-e101cf462672", {
      name: `${values.name}`,
      email: `${values.email}`,
      message: `${values.message}`
    }, 
    { headers: {'Accept': 'application/json'}})
      .then(() => {
        resetForm()
      })
      .catch(error => console.log(error))
    
  }
  return (
    <ContactContainer>
      <Top>
        <Title>Feel free to contact me &#9786;</Title>
      </Top>
      <Bottom>
        <Formik initialValues={{
          name: '',
          email: '',
          message: ''
        }}
          validate={(values) => {
            const errors = {}
            
            if (!values.name) {
              errors.name = 'Name required'
            }
            if (!values.email) {
              errors.email = 'Email required'
            }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
              errors.email = 'Invalid email address';
            }

            if (!values.message) {
              errors.message = 'Message required'
            } else if (values.message.length < 10) {
              errors.message = 'Must be at least 10 characters';
            }
            return errors
          }}
          onSubmit={handleSubmit}
        >
          <Form>
            <ErrorMessage name="name" component='span'/>
            <Field type='text' name='name' placeholder='Name'/>
            <ErrorMessage name="email" component='span'/>
            <Field type='email' name='email' placeholder='Email'/>
            <ErrorMessage name="message" component='span'/>
            <Field as='textarea' type='text' name="message"       placeholder='Message ...'/>
            <button type="submit" >Let's collaborate</button>
          </Form>
        </Formik>
      </Bottom>
      <ContactIcons>
        <Icon
          target="blank"
          href="https://www.linkedin.com/in/lukas-novickas-930a02a3">
          {" "}
          <FaLinkedin />
        </Icon>{" "}
        <Icon href="mailto: lukasnvc@gmail.com">
          <SiGmail />
        </Icon>{" "}
        <Icon target="blank" href="https://github.com/Lukasnvc">
          {" "}
          <FaGithubSquare />
        </Icon>{" "}
        <Icon href="tel:0037068225555">
          <CgPhone />
        </Icon>{" "}
      </ContactIcons>
    </ContactContainer>
  );
};

export default ContactsPage;

const ContactContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  font-family: "VT323", monospace;
`;

const Top = styled.div`
  flex: 1;
  background-color: ${darkGreen};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  @media screen and (max-width: ${breakpoints.tablet}) {
    font-size: 1.7rem;
  }
`;

const Bottom = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${lightGreen};
  form {
    display: flex;
    flex-direction: column;
    width: 600px;

    input,
    textarea {
      margin-bottom: 20px;
      padding: 5px;
      border: none;
      color: ${darkGreen};
      font-family: "VT323", monospace;
      font-size: 1.2rem;
      background-color: #e2f3f1;
      outline: none;
    }

    span {
    font-size: 1rem;
    }

    button {
      font-family: "VT323", monospace;
      background-color: ${darkGreen};
      color: ${lightGreen};
      font-size: 1.2rem;
      padding: 7px 25px;
      border: none;
      border-radius: 5px;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px,
        rgba(0, 0, 0, 0.05) 0px 5px 10px;
      margin: 0px auto;
      transition: 300ms;
      &:hover {
        cursor: pointer;
        box-shadow: rgba(175, 166, 39, 0.56) 0px 22px 70px 4px;
        color: ${amber};
      }
    }
    @media screen and (max-width: ${breakpoints.tablet}) {
      width: 350px;
    }
  }
`;


const ContactIcons = styled.div`
  position: absolute;
  top: 44%;
  bottom: 43%;
  left: 40%;
  right: 40%;
  margin: 0;
  display: flex;
  justify-content: center;
  @media screen and (max-width: ${breakpoints.tablet}) {
    top: 47%;
    bottom: 46%;
  }
  @media screen and (max-width: ${breakpoints.mobile}) {
    top: 46%;
    bottom: 45%;
  }
`;

const Icon = styled.a`
  display: inline-block;
  width: 100%;
  font-size: 6rem;
  margin: 0 30px;
  color: black;
  transition: 400ms;

  @media screen and (max-width: ${breakpoints.tablet}) {
    font-size: 3.5rem;
    margin: 0 20px;
  }

  &:hover {
    color: #f9cc7b;
  }
`;
