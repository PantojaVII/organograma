
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
    return (
        <section className='form'>
            <form action="">
                <h2>Preencha os dados para criar um novo card</h2>
                <InputText label='nome' placeholder='Digite seu nome' />
                <InputText label='Cargo' placeholder='Digite seu cargo' />
                <InputText label='Imagem' placeholder='Envie sua imagem' />
                <Select label='Qual o seu time' list={teams}></Select>
                <Button text='Criar Card'></Button>
            </form>
        </section>
    )
}

export default Form;