import React from 'react'
import s from './Cart-block.module.scss'
import Cardblock  from '../cards/cards.block/card-block';
export default function CartbBlock({res}) {
    return (
        <div>
            <div className={s.CartBlock}>
                <div className={s.cart_block_mini}>
                    <Cardblock/>
                    <Cardblock/>
                    <Cardblock/>
                    <Cardblock/>
                    <Cardblock/>
                    <Cardblock/>
                    <Cardblock/>
                    <Cardblock/>
                </div>
            </div>
        </div>
    )
}
