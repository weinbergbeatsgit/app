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
        if(props.variant.pfand == 1) {
            addPfand();
        }
        props.childToParent(props.variant, props.index, props.pfand)
    }

    const rmVariant = () => {
        if (isNaN(props.variant.anzahl) || props.variant.anzahl <= 1) {
            props.variant.anzahl = NaN;
        } else {
            props.variant.anzahl -= 1;
        }
        if(props.variant.pfand == 1) {
            rmPfand();
        }
        props.childToParent(props.variant, props.index)
    }

    const addPfand = () => {
        if (isNaN(props.pfand.anzahl)) {
            props.pfand.anzahl = 0;
        }

        props.pfand.anzahl++;
    }

    const rmPfand = () => {
        if (isNaN(props.pfand.anzahl) || props.pfand.anzahl <= 1) {
            props.pfand.anzahl = NaN;
        } else {
            props.pfand.anzahl -= 1;
        }
    }


    return (
        <div key={props.variant} className="flex-column gap-5 variant" >
            <span className='flex-column gap-10'>
                <div onClick={() => addVariant()} className="flex-column gap-10 align-center">
                  
                    <img src={process.env.PUBLIC_URL + '/icons/'+ props.variant.image} class="variant-icon" alt={props.variant.size}/>
                    <div key={props.variant + "preis"}>
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