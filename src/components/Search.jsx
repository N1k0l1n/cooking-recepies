import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

function Search() {
  const [input, setInput] = useState("");

  return (
    <FormStyle>
      <div>
        <FaSearch></FaSearch>
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </div>
    </FormStyle>
  );
}

const FormStyle = styled.form`
  margin: 0rem 20rem;
  div {
    width: 100%;
    position: relative;
  }

  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`;

export default Search;
