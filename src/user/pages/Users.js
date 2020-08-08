import React from 'react';
import UsersList from '../components/UsersList';


const Users = () => {
    const USERS = [
        {id: 'k1', name: 'Kevin Stradtman', image: 'https://scx2.b-cdn.net/gfx/news/2019/selfiesthepe.jpg', places: 3},
        {id: 'd1', name: 'Debra Kellington', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQj0v88WjrzONxFFde2jCWvbHk7RiXeYtz6Lw&usqp=CAU', places: 3},
        {id: 'p1', name: 'Patrick Stradtman', image: 'https://www.lifesavvy.com/thumbcache/0/0/31c7385df31261da25272193d5226120/p/uploads/2019/05/daf3eeae-3.jpg', places: 3}
    ];
    return (
        <UsersList items={USERS}/>
    );
};

export default Users;