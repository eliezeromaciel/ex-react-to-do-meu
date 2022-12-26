import {Container, Text} from "./styles"
import {deleteTask, updateTask} from "../../Api/task"

export const ToDoCard = ({title, id, onAfterDelete, status}) => {  // INSIRO AQUI TAMBÉM O STATUS 

    const handleClickDelete = async () => {
        await deleteTask (id)
        onAfterDelete()
    }

    const handleClickDone = async () => {    // posso enviar DADOS COMO PARÂMETRO. ENVIAREI UM NOVO DADO PARA STATUS, QUE POR PADRAO DA API É FALSE.
        await updateTask(id, {status: true}) // SIGNIFICA QUE AO CHAMAR A FUNÇÃO, QUERO ENVIAR ESSE DADO, DIZENDO QUE STATUS AGORA DEVE SER TRUE - SEI PELA DOCUMENTAÇÃO QUE O STATUS PADRÁO É FALSE.
        onAfterDelete()                      // É SÓ ESSE DADO QUE EU QUERO ATUALIZAR, SÓ O STATUS. NAO QUERO ALTERAR TITLE, ID, NADA. 
    }

    return (
        <Container>
                <button onClick={handleClickDone}>Tarefa Concluída?</button>
            <Text status={status}> {title} </Text>      {/* INSIRO AQUI TAMBÉM STATUS COM OPARAMETRO, PARA ALTERAR A COR DA FONTE NO STYLESCOMPONET */}
                <button onClick={handleClickDelete}>Delete</button>
        </Container>
    )
}