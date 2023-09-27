import { useState } from 'react'
import Button from '../Button';
import Input from '../Input';
import Select from '../Select';
import { v4 as uuidv4 } from 'uuid';


import './Form.css'

const Form = (props) => {


    const [name, setName] = useState('')

    const [cargo, setCargo] = useState('')

    const [imagem, setImagem] = useState('')

    const [team, setTeam] = useState('')

    const [nameTeam, setNameTeam] = useState('')

    const [colorTeam, setColorTeam] = useState('')




    const save = (event) => {
        event.preventDefault()//para não recarregar a página
        props.enviandoComoProps({
            name,
            cargo,
            imagem,
            team,
            favorite: false,
            id: uuidv4()
            //as chaves significam que vocês está enviando um objeto. para o props enviandoComoProps
        })// props enviada pelo inclusão do form

        //abaixo está como zerar os campos depois de utilizalos
        setName('')
        setCargo('')
        setImagem('')
        setNameTeam('')
        setColorTeam('')


    }
    const saveTeam = (event) => {
        event.preventDefault()//para não recarregar a página

        props.updateTeam({
            id: uuidv4(),
            name: nameTeam,
            color: colorTeam,
        })

    }

    return (
        <section className='form'>
            <form onSubmit={save}>
                <h2>Preencha os dados para criar um novo card</h2>
                <Input
                    required={true}
                    label='nome'
                    placeholder='Digite seu nome'
                    valor={name}
                    setinput={valor => setName(valor)}
                />
                <Input
                    required={true}
                    label='Cargo'
                    placeholder='Digite seu cargo'
                    valor={cargo}
                    setinput={cargo => setCargo(cargo)}
                />
                <Input
                    required={true}
                    label='Imagem'
                    placeholder='Envie sua imagem'
                    valor={imagem}
                    setinput={imagem => setImagem(imagem)}
                />
                <Select
                    required={true}
                    label='Qual o seu time'
                    Teams={props.Teams}
                    valor={team}
                    setinput={team => setTeam(team)}
                >
                </Select>
                <Button> Criar card </Button>
            </form>
            <form onSubmit={saveTeam}>
                <h2>Crie um novo time</h2>
                <Input
                    required={true}
                    label='Nome do time'
                    placeholder='Digite o nome do time'
                    valor={nameTeam}
                    setinput={valor => setNameTeam(valor)}
                />

                <Input
                    label={'Cor do time'}
                    value={props.color}
                    type={'color'}
                    className="input-color"
                    setinput={color => setColorTeam(color)}
                />



                <Button> Criar Time </Button>
            </form>
        </section>
    )
}

export default Form;