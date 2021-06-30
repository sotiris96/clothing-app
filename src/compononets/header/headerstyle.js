import styled  from 'styled-components';
import { Link } from 'react-router-dom';



export const HeaderContainer =styled.div`
height: 70px;
width: 100%;
display: flex;
justify-content: space-between;
margin-bottom: 20px;
`;

export const LogoContainer =styled(Link)`
height: 100%;
width: 75px;
padding: 25px;
font-size: 25px;
`;

export const OptionsContainer=styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-family: Verdana, Geneva, Tahoma, sans-serif;


`;

export const OptionLink = styled(Link)`
padding: 10px 15px;
cursor: pointer;



`;