import React from 'react';
import PlaceList from '../components/PlaceList';

const PLACES = [
    {
        id: 'df1', 
        title: 'Empire State Building',
        imageUrl: 'https://cropper.watch.aetnd.com/public-content-aetn.video.aetnd.com/video-thumbnails/AETN-History_VMS/21/202/tdih-may01-HD.jpg?w=1440',
        address: '20 W 34th St, New York, NY 10001',
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
        location: {
            lat: 40.7484,
            lng: -73.9857
        },
        creator: 'p1'
    }
];

const UserPlaces = () => {
    return (
        <PlaceList items={PLACES} />
    );
};

export default UserPlaces;