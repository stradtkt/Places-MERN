import React from 'react';
import { useParams } from 'react-router-dom';
import Input from './../../shared/components/FormElements/Input';
import Button from './../../shared/components/FormElements/Button';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators';
import './PlaceForm.css';
import { useForm } from './../../shared/hooks/form-hook';

const PLACES = [
    {
        id: 'df1', 
        title: 'Empire State Building',
        imageUrl: 'https://cropper.watch.aetnd.com/public-content-aetn.video.aetnd.com/video-thumbnails/AETN-History_VMS/21/202/tdih-may01-HD.jpg?w=1440',
        address: '20 W 34th St, New York, NY 10001',
        description: 'This is the one and only Empire State Building.  It is located in New York City',
        location: {
            lat: 40.7484,
            lng: -73.9857
        },
        creator: 'k1'
    },
    {
        id: 'df2', 
        title: 'Empire State Building',
        imageUrl: 'https://cropper.watch.aetnd.com/public-content-aetn.video.aetnd.com/video-thumbnails/AETN-History_VMS/21/202/tdih-may01-HD.jpg?w=1440',
        address: '20 W 34th St, New York, NY 10001',
        description: 'This is the one and only Empire State Building.  It is located in New York City',
        location: {
            lat: 40.7484,
            lng: -73.9857
        },
        creator: 'd1'
    },
    {
        id: 'df3', 
        title: 'Empire State Building',
        imageUrl: 'https://cropper.watch.aetnd.com/public-content-aetn.video.aetnd.com/video-thumbnails/AETN-History_VMS/21/202/tdih-may01-HD.jpg?w=1440',
        address: '20 W 34th St, New York, NY 10001',
        description: 'This is the one and only Empire State Building.  It is located in New York City',
        location: {
            lat: 40.7484,
            lng: -73.9857
        },
        creator: 'p1'
    }
];

const UpdatePlace = () => {
    const placeId = useParams().placeId;
    const identifiedPlace = PLACES.find(p => p.id === placeId);

    const [formState, inputHandler] = useForm({
       title: {
           value: identifiedPlace.title,
           isValid: true
       },
       description: {
           value: identifiedPlace.description,
           isValid: true
       }
    });

    const placeUpdateSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs);
    };

    if(!identifiedPlace) {
        return (
            <div>
                <h2>Could not find a place.</h2>
            </div>
        );
    }
    return (
        <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
            <Input
                id="Title"
                element="input"
                type="text"
                label="Title"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid title."
                onInput={inputHandler}
                initialValue={formState.inputs.title.value}
                initialValid={formState.inputs.title.isValid}
            />
            <Input
                id="description"
                element="textarea"
                label="Description"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Please enter a valid description (at least 5 characters)."
                onInput={inputHandler}
                initialValue={formState.inputs.description.value}
                initialValid={formState.inputs.description.isValid}
            />
            <Button type="submit" disabled={!formState.isValid}>UPDATE PLACE</Button>
        </form>
    );
};

export default UpdatePlace;