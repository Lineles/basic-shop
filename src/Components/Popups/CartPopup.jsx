
import "./CartPopup.css"

function CartPopup (props) {

    return(

    <div className="CartPopup-container">
        
        <div className="CartPopup"> 
            <h1 > Your Order is Rady</h1>
            <h1 >Total: {props.total} </h1>
            <button onClick={props.ConfifmOrder} className="CartPopup-message">Confirm your Order</button>
        </div>
    </div>    
        

)


}

export default CartPopup; 