import {StyledButton} from "./styles";

export const AddButton = ({children, ...rest})=> {
    return <StyledButton {...rest}>{children}</StyledButton>
}