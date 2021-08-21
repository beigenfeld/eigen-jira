import React, {useState, useEffect} from 'react';
import { Done } from './Done';
import { ToDo } from './ToDo';

// export const Items = () .... // named export
// import {Items} from './Items'; // import of named export

// export default Items;        // default export
// import Items from './Items'; // import of default export


export const Items = () => {
    const [items,setItems] = useState([
        {
            id:1,
            title:'Ticket #1',
            status: 'ToDo'
        },
        {
            id:2,
            title:'Ticket #2',
            status: 'ToDo'
        },
        {
            id:3,
            title:'Ticket #3',
            status:'ToDo'
        },
        {
            id:4,
            title:'Ticket #4',
            status:'ToDo'
        },
        {
            id:5,
            title:'Ticket #5',
            status:'ToDo'
        },
        {
            id:6,
            title:'Ticket #6',
            status:'ToDo'
        },
        {
            id:7,
            title: 'Ticket #7',
            status: 'ToDo'
        }
    ])

    const updateStatus = (id,newStatus) => {
        console.log('1', items)
        const allItems = items.map(item => {
            if (item.id === id) {
                console.log('in here')
                const newItem = {
                    ...item,
                    status: newStatus
                }
                return newItem;
            }
            return item;
        })
        setItems(allItems)
    }

    return (
        <div className='items'>
            <ToDo items={items} updateStatus={updateStatus}/>
            <Done items={items} updateStatus={updateStatus}/>
        </div>
    )
}
