import React from 'react';

export const Done = ({items, updateStatus}) => {
    return (
        <div className='Done'>
            <h1>DONE</h1>
            {items
                .filter(item => item.status === 'Done')
                .map(item => (<>
                    <p className='item' key={item.id}>
                        {item.title}
                        <button 
                            className='mark_todo' 
                            key= {item.id} 
                            onClick = { () => {updateStatus(item.id, 'ToDo')}}>Mark ToDo
                        </button>
                    </p></>))}
        </div>
    )
}