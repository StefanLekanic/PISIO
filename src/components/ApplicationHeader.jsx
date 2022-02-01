import styled from "styled-components";
import React from "react";

const Header = styled.div`
  box-shadow: 0 2px 8px #f0f1f2;
  background-color: #fff;
  justify-content: space-between;
  display: flex;
  height: auto;
  line-height: 48px;
  padding: 0 25px;
  flex-wrap: wrap;
  align-items: center;
`;

const Title = styled.span`
  font-weight: bold;
`;

const LeftSide = styled.div`
  display: flex;
  align-items: center;
`;

/* const RightSide = styled.div`
  display: flex;
  align-items: center;
`; */

const ApplicationHeader = () => {
  return (
    <Header>
      <LeftSide>
        <Title>{"PISIO AM"}</Title>
      </LeftSide>
    </Header>
  );
};

export default ApplicationHeader;
