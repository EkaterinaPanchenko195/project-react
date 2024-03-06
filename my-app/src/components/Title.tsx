import styled from "styled-components";
import { TTitleProps } from "./types";

const Title = ({ text }: TTitleProps) => <StyledTitle>{text}</StyledTitle>;

export default Title;

const StyledTitle = styled.h2`
  font-weight: 700;
  font-size: 56p;
  line-height: 80px;
`;
