import styled from "styled-components";
import {darkBlue, white, yellow, red} from "../../constants/colors"

export const Container = styled.div`
    background-color: ${darkBlue};
    border-radius: 8px;
    padding: .5rem 1rem;
    color: ${white};
    display: flex;
`

export const Text = styled.span`
    font-weight: 600;
    margin-right: auto;
    color: ${({ status }) => status ? white : red};
    
`
