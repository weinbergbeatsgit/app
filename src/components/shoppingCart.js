import CartItem from "./cartItem"

const SchoppingCart = ({schoppingCart}) => {
    return (
        <div className="warenkorb-content">
           <h4>Bestellung</h4>
           <div className="flex-column gap-10 margin-left-10">
            {schoppingCart.map((thisCart, index) => {
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
            </div>
      </div>
    )
}

export default SchoppingCart