import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/"+ input);
  };
  return (
    <FormStyle onSubmit={submitHandler}>
      {/* <div> */}
      <FaSearch />
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        value={input}
      />
      {/* </div> */}
    </FormStyle>
  );
}
const FormStyle = styled.form`
  margin: 1rem 3rem;
  position: relative;
  width: 90%;
  div {
    position: relative;
    width: 100%;
  }

  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    padding: 1rem 3rem;
    color: white;
    border-radius: 1rem;
    outline: none;
    width: 100%;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    color: white;
    transform: translate(100%, -50%);
  }
`;
export default Search;
