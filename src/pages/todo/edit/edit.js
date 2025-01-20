import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './edit.scss';

// 初始数据
const initialItems = [
    { id: '1', content: 'Item 1' },
    { id: '2', content: 'Item 2' },
    { id: '3', content: 'Item 3' }
];

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const App = () => {
    const [items, setItems] = useState(initialItems);

    // 当拖拽结束时调用的函数
    const onDragEnd = (result) => {
        const { destination, source } = result;
         // dropped outside the list
        if (!result.destination) {
            return;
        }
    
        const items = reorder(
            this.state.items,
            result.source.index,
            result.destination.index
        );
    
        this.setState({
            items
        });
    };

    return (
        <div className='edit-page'>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable2" key="droppable2">
                    {(provided) => (
                        
                    <div 
                        {...provided.droppableProps}
                        ref={provided.innerRef}>
                        {items.map((item, index) => (
                            <Draggable key={item.id} draggableId={item.id} index={index}>
                                {(itemCC) => (
                                    <div
                                        ref={itemCC.innerRef}
                                        {...itemCC.draggableProps}
                                        {...itemCC.dragHandleProps}
                                        
                                    >
                                        <div 
                                            style={{
                                                ...itemCC.draggableProps.style,
                                                marginBottom: '8px',
                                                padding: '16px',
                                                backgroundColor: '#fff',
                                                border: '1px solid #ddd',
                                                borderRadius: '4px',
                                            }}
                                        >
                                            {item.id}. {item.content}
                                        </div>
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
}

export default App;
