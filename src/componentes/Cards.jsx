/* Cards */

const Cards = ({img, categoria, marca, precio, stock}) => {
  return (
    <div id="Cards">
        <img src={img} alt={categoria} className="cards__foto" />
        <ul className="cards__texto">
            <li>Producto: {categoria}, {marca}.</li>
            <li>Precio: {precio}</li>
            <li>Stock: {stock}</li>
        </ul>
    </div>
  )
}; export default Cards
