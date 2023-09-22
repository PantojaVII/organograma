import { useState } from 'react'
import Button from '../Button';
import InputText from '../InputText';
import Select from '../Select';


import './Form.css'

const Form = (props) => {
    
 
    const [name, setName] = useState('')

    const [cargo, setCargo] = useState('')

    const [imagem, setImagem] = useState('')

    const [team, setTeam] = useState('')




    const save = (event) => {
        event.preventDefault()//para não recarregar a página
        props.enviandoComoProps({
            name,
            cargo,
            imagem,
            team
            //as chaves significam que vocês está enviando um objeto. para o props enviandoComoProps
        })// props enviada pelo inclusão do form
        setName('')
        setCargo('')
        setImagem('')
        setTeam('')
 
    }

    return (
        <section className='form'>
            <form onSubmit={save}>
                <h2>Preencha os dados para criar um novo card</h2>
                <InputText
                    required={true}
                    label='nome'
                    placeholder='Digite seu nome'
                    valor={name}
                    aoAlterado={valor => setName(valor)}
                />
                <InputText
                    required={true}
                    label='Cargo'
                    placeholder='Digite seu cargo'
                    valor={cargo}
                    aoAlterado={cargo => setCargo(cargo)}
                />
                <InputText
                    required={true}
                    label='Imagem'
                    placeholder='Envie sua imagem'
                    valor={imagem}
                    aoAlterado={imagem => setImagem(imagem)}
                />
                <Select
                    required={true}
                    label='Qual o seu time'
                    Teams={props.Teams}
                    valor={team}
                    aoAlterado={team => setTeam(team)}
                >
                </Select>
                <Button> Criar card </Button>
            </form>
        </section>
    )
}

export default Form;