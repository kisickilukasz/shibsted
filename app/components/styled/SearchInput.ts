import styled from 'styled-components';
import {Input} from "../Input";

export const SearchInput = styled(Input)`
    width: 300px;
    border: 1px solid lightgray;
    border-radius: 50px;
    padding: 15px;
    font-size: 16px;
    
    :focus {
      outline: none;
      border: 1px solid deepskyblue;
    }
    
    @media (max-width: 768px) {
      width: 100%;
      max-width: 300px;
    }
`;
