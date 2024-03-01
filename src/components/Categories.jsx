import { FaPizzaSlice,FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";

function Categories() {
  return (
    <div>
      <div>
        <FaHamburger />
        <h4>American</h4>
      </div>
      <div>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </div>
      <div>
        <GiNoodles />
        <h4>Thai</h4>
      </div>
      <div>
        <GiChopsticks />
        <h4>Japanese</h4>
      </div>
    </div>
  );
}

export default Categories;
