import styled from 'styled-components';


export const ActiveName = styled.a`

color: ${props => props.theme.accentColor1};
    font-family: Lato;
    font-size: 24px;
    font-style: normal;
    font-weight: 800;
    line-height: 100%; /* 24px */
    display: flex;
    flex-direction: column;
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size: 16px;
    }
    @media (max-width: 576px)  {
        font-size: 16px;
    }
`

export const CommonName = styled.a`

color: ${props => props.theme.textColor};
font-family: Lato;
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: 100%; /* 24px */
&:hover {
    color: ${props => props.theme.accentColor1};
    font-size: 24px;
    font-weight: 800;
    line-height: 100%; /* 24px */
    
}
@media (max-width: 768px) and (min-width: 576px)  {
    font-size: 16px;
}
@media (max-width: 576px)  {
    font-size: 16px;
}

`

export const Line = styled.span`

    width: 100%;
    margin-top: 10px;
    height: 4px;
    background-color: ${props => props.theme.accentColor1};
    border-radius: 92px;

`