import {Container, Text} from "./styles"
import {deleteTask} from "../../Api/task"

export const ToDoCard = ({title, id, onAfterDelete}) => {

    const handleClickDelete = async () => {
        await deleteTask (id)

        onAfterDelete()
    }

    return (
        <Container>
            <Text>
                {title}
                <button onClick={handleClickDelete}>Delete</button>
            </Text>
        </Container>
    )
}