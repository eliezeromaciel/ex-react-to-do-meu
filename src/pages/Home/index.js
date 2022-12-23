import { Title } from "../../components/Title"
import { Container, Body, FormContainer, ToDoContainer } from "./styles"
import { Input } from "../../components/Input"
import { AddButton } from "../../components/AddButton"
import {ToDoCard} from "../../components/ToDoCard/index"
import { useEffect, useState } from "react"
import { postTask, getAllTasks} from "../../Api/task"

export function Home () {

    const [newToDo, setNewToDo] = useState('')
    const [toDos, setToDos] = useState([])

    const handleChangeNewToDo = (event) => {
        const value = event.target.value
        setNewToDo(value)
    }

    const handleAddToDo = async () => {
        const toDoToCreate = {
            "title" : newToDo,
            "status": false,
        }
        await postTask (toDoToCreate)

        setNewToDo('')
    }

    const handleGetToDos = async () => {
        const data = await getAllTasks()

        setToDos(data)
    }

    useEffect(()=> {
        handleGetToDos()
    }, [newToDo] )

    return (
        <Container>
            <Body>
                <Title text="Lista de Tarefas"/>

                <FormContainer>
                    <Input name="title" label="Título da Tarefa" onChange={handleChangeNewToDo} placeholder="entre" value={newToDo}/>

                    <AddButton onClick={handleAddToDo} >Add</AddButton>
                </FormContainer>

                <ToDoContainer>

                    {toDos.map(param => { 
                        return (
                            <ToDoCard title={param.title} id={param.id} key={param.id} />
                        )})}    

                    {/* <ToDoCard title='To do 1'/>
                    <ToDoCard title='To do 2'/>
                    <ToDoCard title='To do 3'/>
                    <ToDoCard title='To do 4'/>
                    <ToDoCard title='To do 5'/> */}
                </ToDoContainer>

            </Body>
        </Container>
    )
}