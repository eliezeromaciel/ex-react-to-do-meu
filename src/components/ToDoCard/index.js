import {Container, Text} from "./styles"

export const ToDoCard = ({title}) => {
    return (
        <Container>
            <Text>
                {title}
            </Text>
        </Container>
    )
}