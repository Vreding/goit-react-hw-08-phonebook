import styled from "@emotion/styled";
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: rgb(0, 0, 0);

  &.active{
    color: rgb(255, 0, 0);
  };
`;
