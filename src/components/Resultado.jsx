import styled from "@emotion/styled"

function Resultado({resultado}) {
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado
  return (
    <div>
        <p>El Precio es de : <span>{PRICE}</span></p>
        <p>Precio más alto del día: <span>{HIGHDAY}</span></p>
        <p>Precio más bajo del día: <span>{LOWDAY}</span></p>
        <p>Variación últimas 24 hrs: <span>{CHANGEPCT24HOUR}</span></p>
        <p>Última Actualización: <span>{LASTUPDATE}</span></p>
    </div>
  )
}

export default Resultado