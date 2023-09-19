
import InputText from '../InputText';
import './Form.css'

const Form = () => {

    return (
        <section className='form'>
            <form action="">
                <h2>Preencha os dados para criar um novo card</h2>
                <InputText label='nome' placeholder='Digite seu nome' />
                <InputText label='Cargo' placeholder='Digite seu cargo' />
                <InputText label='Imagem' placeholder='Envie sua imagem' />
            </form>
        </section>
    )

}

export default Form;