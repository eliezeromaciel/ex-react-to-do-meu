import { hover } from "@testing-library/user-event/dist/hover";
import styled from "styled-components";
import {blue} from "../../constants/colors"

export const StyledButton = styled.button`
    outline: none;
    border-radius: 8px;
    height:36px;
    width: 36px;
    background-color: ${blue};
    border: none;
    transition: filter .4s;

    :hover {
        filter: brightness(80%)
    }
`
