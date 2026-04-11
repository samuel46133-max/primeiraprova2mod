import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import api from '../utils/api'

const FrutasPage = props => {
    const [listaFrutas,setFrutas] = React.useState([])

    const loadFrutas = () => {
        api.get('/frutas')
            .then(res => setFrutas(res.data))

    }       
        
    useEffect(() => {
        loadFrutas()
    }, []) 


  return (
    <div>
        <h1>Tabela de Produtos</h1>
        <table>
        <thead>
            <tr>
            <th>Nome</th>    
            <th>Quantidade</th>    
            <th>Preço</th>    
            <th>Tipo</th>    
            </tr>
        </thead> 
        <tbody>
            <tr>
            <td>nome</td>
            <td>qtd</td>
            <td>preco</td>
            <td>tipo</td>
            <td>x</td>            
            </tr>    
        </tbody>   
        </table>
    </div>
  )
}

FrutasPage.propTypes = {}

export default FrutasPage