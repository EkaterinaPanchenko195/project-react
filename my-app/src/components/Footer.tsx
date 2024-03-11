import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Description>©2022 Blogfolio</Description>
      <Description>All rights reserved</Description>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  border-top: 1px solid rgba(218, 218, 218, 1);
  display: flex;
  justify-content: space-between;
  padding: 34px 0;
  width: 100%;
`;
const Description = styled.p`
  color: rgba(141, 142, 151, 1);
`;
