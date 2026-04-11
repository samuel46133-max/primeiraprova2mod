import React from 'react'
import PropTypes from 'prop-types'
import Input from '../Input'
import Button from '../Button'
import api from '../../utils/api'

const NovaPage = props => {
    const [form,setform] = React.useState({nome: "", desc: "", preco: ""})

    const handleChange = e => {
        const {name, value} = e.target
        setform({...form, [name]: value})
            
        }
    const handleSubmit = e => {
        e.preventDefault();
        api.post("/produtos", form)
            .then(data => setform({nome: "", desc: "", preco:"" }))
    }


  return (
    <div>
        <h1>Novo Produto</h1>
        <Form>
            <input label="nome" id="name" name="name" onChange={""}/>
            <input label="Descrição" id="desc" name="desc" onChange={""}/>
            <input label="Preço" id="preco" name="prico" onChange={""}/>
        <hr>
            <button onClick={""}>
                Submeter 
            </button>
        </hr>
        </Form>
    </div>
  )
}

NovaPage.propTypes = {}

export default NovaPage