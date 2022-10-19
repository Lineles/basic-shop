import "./Cart.css"

function Cart (props) {

    const calculateTotal = () => {
        const total = props.CartProducts.reduce((acc, product) => {
            
            return acc + (product.price * product.quantity).toFixed(2)
        }, 0);
        return total
    }

    
    return(

        <div className="Cart-Container">

            <h1> Cart </h1>
            {props.CartProducts.map(item => (
                <div className="CartItem">
                    <div className="CartItem-img-box">
                        <img src={item.image} alt={item.title} className="CartItem-img"></img>
                    </div>
                    <h1 className="CartItem-title">{item.title}</h1>
                    <p className="CartItem-quantity">{item.quantity}</p>
                    <p onClick={() => props.AddProductToCart(item)}>+</p>
                    {item.quantity >= 2 && <p onClick={() => props.handleProductQuantity(item, false)}>-</p>}
                    <p className="CartItem-price">{item.price}€</p>
                    <button className="ProductDetail-RemoveItem-button" onClick={() => props.RemoveProductfromCart(item)}>Remove Product</button>
                </div>
            )
            )}
                    
          <h1>Total: {calculateTotal()} </h1>
        </div>
    )
}; 


export default Cart ; 