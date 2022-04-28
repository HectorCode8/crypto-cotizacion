import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Formulario from './components/Formulario'
import Resultado from './components/Resultado'
import ImagenCrypto from './img/imagen-criptos.png'

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #FFF;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto 0 auto;
  }
`

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`

const Imagen = styled.img`
  max-width: 400%;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`

function App() {
  const [monedas, setMonedas ] = useState({})
  const [resultado, setResultado ] = useState({})

  useEffect(() => {
      if(Object.keys(monedas).length > 0) {

        const cotizarCrypto = async () => {
          const {moneda, cryptomoneda} = monedas
            const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptomoneda}&tsyms=${moneda}`
            
            const resultado = await fetch(url)
            const resultadoJSON = await resultado.json()

            setResultado(resultadoJSON.DISPLAY[cryptomoneda][moneda])
            
        }

        cotizarCrypto()

      }
  }, [monedas])

  return (
    <Contenedor>
      <Imagen
        src={ImagenCrypto}
        alt="Imagen de criptomonedas"
      />
      <div>
        <Heading>Cotiza Cryptomonedas al Instante</Heading>
        <Formulario
          setMonedas={setMonedas}
        />

        {resultado.PRICE && <Resultado resultado={resultado} />}
      </div>
    </Contenedor>
  )
}

export default App
