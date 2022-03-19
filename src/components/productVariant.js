import React, { useState } from 'react';
import minus from '../icons/minus_black.png'

const formatPrice = (price) => {
    let tmpPrice = (price + "").split(".");
    if(tmpPrice[1] === null || tmpPrice[1] === undefined){
        tmpPrice[1] = "0";
    }

    return tmpPrice[0] + "," + tmpPrice[1] + '0';
}

const Variant = props => {
    const addVariant = () => {
        if (isNaN(props.variant.anzahl)) {
            props.variant.anzahl = 0;
        }
        props.variant.anzahl++;
        props.childToParent(props.variant, props.index)
    }

    const rmVariant = () => {
        if (isNaN(props.variant.anzahl) || props.variant.anzahl <= 1) {
            props.variant.anzahl = NaN;
        } else {
            props.variant.anzahl -= 1;
        }
        props.childToParent(props.variant, props.index)
    }


    return (
        <div key={props.variant} className="flex-column gap-5 variant" >
            <span className='flex-column gap-10'>
                <div onClick={() => addVariant()} className="flex-column gap-10 align-center">
                  
                    <img src={'/icons/'+ props.variant.image} class="variant-icon" alt={props.variant.size}/>
                    <div key={props.variant + "preis"} className='flex-row gap-5'>
                        <b>Preis</b>
                        <label>{formatPrice(props.variant.price)} €</label>
                    </div>
                </div>
                <div key={props.variant + "buttons"} className="flex-row justify-center">
                    <button className="p-button p-component minus" onClick={() => rmVariant()}>
                        <img src={minus} alt="-"/>
                    </button>
                </div>
            </span>
        </div>
    )
}

export default Variant