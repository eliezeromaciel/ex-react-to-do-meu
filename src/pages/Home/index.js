import { Title } from "../../components/Title"
import { Container, Body, FormContainer } from "./styles"
import { Input } from "../../components/Input"
import { AddButton } from "../../components/AddButton"

export function Home () {
    return (
        <Container>
            <Body>
                <Title text="Lista de Tarefas"/>
                <FormContainer>
                    <Input name="title" label="Título da Tarefa" placeholder="entre"/>
                    <AddButton>Add</AddButton>
                </FormContainer>
            </Body>
        </Container>
    )
}