import React from 'react'
import Card from '../ui/Card'
import css from './NewMeetup.module.css'

import { useRef } from 'react'

const NewMeetup = () => {
    const titleRef = useRef();
    const addressRef = useRef();
    const descRef = useRef();
    const imageRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredTitle = titleRef.current.value;
        const entredImage = imageRef.current.value;
        const entredDescription = descRef.current.value;
        const enteredAddress = addressRef.current.value;

        const meetupData = {
            title: enteredTitle,
            image: entredImage,
            address: enteredAddress,
            description: entredDescription
        };
        console.log(meetupData);


    }

    return (
        <Card>
            <form className={css.form} onSubmit={submitHandler}>
                <div className={css.control}>
                    <label htmlFor="title">Meetup Title</label>
                    <input type="text" name="" required id="title" ref={titleRef} />
                </div>
                <div className={css.control}>
                    <label htmlFor="image">Meetup Image</label>
                    <input type="url" name="" required id="image" ref={imageRef} />
                </div>
                <div className={css.control}>
                    <label htmlFor="address">Address</label>
                    <input type="text" name="" required id="address" ref={addressRef} />
                </div>
                <div className={css.control}>
                    <label htmlFor="description"> Description</label>
                    <textarea name="" id="description" cols="30" rows="10" ref={descRef}></textarea>

                </div>
                <div className={css.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    )
}

export default NewMeetup