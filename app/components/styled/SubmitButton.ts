import styled from 'styled-components';
import {Button} from "../Button";

export const SubmitButton = styled(Button)`
    width: 100px;
    border: 1px solid deepskyblue;
    border-radius: 50px;
    padding: 15px;
    font-size: 16px;
    background-color: deepskyblue;
    margin: 0 20px;
    
    :focus {
      outline: none;
    }
    
    @media (max-width: 768px) {
      margin-top: 20px;
    }
`;