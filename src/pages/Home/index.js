import { Title } from "../../components/Title"
import { Container, Body, FormContainer, ToDoContainer } from "./styles"
import { Input } from "../../components/Input"
import { AddButton } from "../../components/AddButton"
import {ToDoCard} from "../../components/ToDoCard/index"

export function Home () {
    return (
        <Container>
            <Body>
                <Title text="Lista de Tarefas"/>
                <FormContainer>
                    <Input name="title" label="Título da Tarefa" placeholder="entre"/>
                    <AddButton>Add</AddButton>
                </FormContainer>

                <ToDoContainer>
                    <ToDoCard title='To do 1'/>
                    <ToDoCard title='To do 2'/>
                    <ToDoCard title='To do 3'/>
                    <ToDoCard title='To do 4'/>
                    <ToDoCard title='To do 5'/>
                </ToDoContainer>

            </Body>
        </Container>
    )
}