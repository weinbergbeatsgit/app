import CartItem from "./cartItem"
import ErgenisItem from "./ergebnisItem"


const SchoppingCart = props => {
    return (
        <div className="warenkorb-content">
           <h4>Bestellung</h4>
           <div className="flex-column margin-left-10">
            {props.schoppingCart.map((thisCart, index) => {
                return (
                    thisCart.variants.map((thisItem, index) => {
                        if( !isNaN(thisItem.anzahl)){
                        return (
                            <CartItem cartItem={thisItem} productName= {thisCart.name} />
                        )
                    }
                }
                )
                )
            })}
            {props.pfand.anzahl > 0 &&
            <CartItem cartItem={props.pfand} productName= {props.pfand.name} />
            }
            <hr className="width-100"/>
            <ErgenisItem ergebnisItem={props.ergebnis} productName= {props.ergebnis.name} />
            </div>
      </div>
    )
}

export default SchoppingCart