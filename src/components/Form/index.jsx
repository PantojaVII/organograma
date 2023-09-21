import { useState } from 'react'
import Button from '../Button';
import InputText from '../InputText';
import Select from '../Select';


import './Form.css'

const Form = () => {
    const teams = [
        'Programação',
        'Front-end',
        'Data Science',
        'DevOps',
    ]

    const [name, setName] = useState('')

    const [cargo, setCargo] = useState('')

    const [imagem, setImagem] = useState('')

    const [time, setTime] = useState('')




    const save = (event) => {
        event.preventDefault()
        console.log(name, cargo, imagem, time);
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
                    list={teams}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                >
                </Select>
                <Button> Criar card </Button>
            </form>
        </section>
    )
}

export default Form;