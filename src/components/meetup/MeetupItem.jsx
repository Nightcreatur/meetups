import React from 'react'
import css from './MeetupItem.module.css'
import Card from '../ui/Card'

const MeetupItem = (props) => {
    return (
        <li className={css.item}>
            <Card>
                <div className={css.image}>
                    <img src={props.image} alt="" />
                </div>
                <div className={css.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p></div>
                <div className={css.actions}>
                    <button>To Favourite</button></div>
            </Card>
        </li>
    )
}

export default MeetupItem