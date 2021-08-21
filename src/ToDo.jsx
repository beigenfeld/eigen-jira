import React from 'react';

export const ToDo = ({items, updateStatus}) => {
    return (
        <div className="ToDo">
            <h1>TO DO</h1>
            {items
                .filter(item => item.status === 'ToDo')
                .map(item => (<>
                    <p className="item" key = {item.id}>
                        {item.title}
                        <button 
                            className='mark_done' 
                            key={item.id}
                            onClick={()=>updateStatus(item.id, 'Done')}>Mark Done
                        </button>
                    </p></>))}
        </div>
    )
}