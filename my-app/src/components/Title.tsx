import styled from "styled-components";
import { TTitleProps } from "./types";

const Title = ({ text }: TTitleProps) => <StyledTitle>{text}</StyledTitle>;

export default Title;

const StyledTitle = styled.h2`
  font-weight: 700;
  font-size: 56px;
  line-height: 80px;
  margin: 0;
  margin-bottom: 40px;
`;
