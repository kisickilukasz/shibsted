import styled from 'styled-components';

export const SearchSectionWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 100px;
    
    @media (max-width: 768px) {
      flex-direction: column;
      text-align: center;
    }
`;
