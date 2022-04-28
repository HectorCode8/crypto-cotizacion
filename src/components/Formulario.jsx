import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from '../data/monedas'

const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-top: 30px;

    &:hover {
        background-color: #7A7DFE;
        cursor: pointer;
    }
`

const Formulario = () => {

    const [cryptos, setCryptos] = useState([])
    const [ moneda, SelectMonedas ] = useSelectMonedas('Elige tu Moneda', monedas)
    const [ cryptomoneda, SelectCryptomoneda ] = useSelectMonedas('Elige tu Cryptomoneda', cryptos)

    useEffect(() => {
        const consultarAPI = async () => {
            const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD`
            const resultado = await fetch(url)
            const resultadoJSON = await resultado.json()
            
            const arrayCrypto = resultadoJSON.Data.map( crypto => {
                const objeto = {
                    id: crypto.CoinInfo.Name,
                    nombre: crypto.CoinInfo.FullName
                }
                return objeto
            })
            setCryptos(arrayCrypto)
        }
        consultarAPI()
    }, [moneda])

    return (
    <form>

        <SelectMonedas />
        <SelectCryptomoneda />
        

        <InputSubmit 
                type="submit" 
                value="Cotizar"/>
    </form>
  )
}

export default Formulario