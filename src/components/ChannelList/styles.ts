import styled from 'styled-components';
import { Add } from 'styled-icons/material';

import ChannelButtonProps from '.';

export const Container = styled.div`
  grid-area: CL;
  
  display: flex;
  flex-direction: column;

  padding: 24px 9.5px 0 16px;
  background-color: var(--secondary);
`;

export const Category = styled.h1`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 6px;

  > span {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    color: var(--gray);
  }
`;

export const AddIconCategory = styled(Add)`
  width: 28px;
  height: 28px;

  color: var(--white);
  cursor: pointer;
`;
