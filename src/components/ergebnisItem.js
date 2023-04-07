

const formatPrice = (price) => {
    let tmpPrice = (price + "").split(".");
    if (tmpPrice[1] === null || tmpPrice[1] === undefined) {
        tmpPrice[1] = "0";
    }

    return tmpPrice[0] + "," + tmpPrice[1] + '0';
}

const ErgebnisItem = ({ ergebnisItem, productName }) => {
    return (
        <div className="flex-row justify-space-between">
            <label className="text-overflow-ellipsis flex-grow">{productName}  {ergebnisItem.size}</label>
            <label> {ergebnisItem.anzahl}  = <label className="price-label">{formatPrice(ergebnisItem.price)}</label> €</label>
        </div>
    )
}

export default ErgebnisItem