import React from 'react'
import css from './MeetupList.module.css'
import MeetupItem from './MeetupItem'

const MeetupList = (props) => {
    return (
        <ul className={css.list}>
            {props.meetups.map(meetup => <MeetupItem key={meetup.id}
                id={meetup.id}
                image={meetup.image}
                title={meetup.title}
                address={meetup.address}
                description={meetup.description} />)}
        </ul>
    )
}

export default MeetupList