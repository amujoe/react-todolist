import React, { useState }  from "react";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import "./list.scss";

const ListPage = () => {

    // 重要紧急的事（必须优先处理）：
    const importantUrgent = [
        "提交项目报告给客户",
        "修复生产环境中的严重 bug",
        "准备明天的会议演讲材料",
        "紧急电话会议",
        "公司财务报表的最后修改",
        "突发事件的应急处理"
    ];

    // 重要不紧急的事（需要计划，稍后处理）：
    const importantNotUrgent = [
        "制定年度工作计划",
        "学习提升新的技术栈",
        "深入研究行业趋势",
        "更新和完善产品文档",
        "优化代码结构",
        "制定职业生涯规划"
    ];
    // 不重要紧急的事（可以考虑委托他人）：
    const notImportantUrgent = [
        "处理客户的日常咨询邮件",
        "回复公司内部非紧急消息",
        "整理电子邮件收件箱",
        "确认外卖订单",
        "安排会议室预定",
        "处理办公室内的小物件采购"
    ];
    // 不重要不紧急的事（可以拖延或不做）：
    const notImportantNotUrgent = [
        "整理桌面上的文件",
        "整理社交媒体账户",
        "阅读不相关的新闻",
        "看电视休闲娱乐",
        "尝试不常用的App",
        "整理书架"
    ];

    const sortList = [
        { id: '11', content: '整理桌面上的文件' },
        { id: '12', content: '整理社交媒体账户' },
        { id: '13', content: '阅读不相关的新闻' },
        { id: '14', content: '看电视休闲娱乐' },
        { id: '15', content: '尝试不常用的App' },
        { id: '16', content: '整理书架' }
    ];

    // 初始数据
    const initialItems = [
        { id: '1', content: 'Item 1' },
        { id: '2', content: 'Item 2' },
        { id: '3', content: 'Item 3' }
    ];
    
    const [items, setItems] = useState(initialItems);

    // 当拖拽结束时调用的函数
    const onDragEnd = (result) => {
        const { destination, source } = result;

        if (!destination) {
            return;
        }

        // 如果拖拽源和目标位置相同
        if (destination.index === source.index) {
            return;
        }

        const reorderedItems = Array.from(items);
        const [movedItem] = reorderedItems.splice(source.index, 1);  // 移除拖动的元素
        reorderedItems.splice(destination.index, 0, movedItem); // 插入拖动的元素

        setItems(reorderedItems); // 更新状态
    }

    return (
        <div className="todo-page">
            <div className="main-box">
                <div className="main-box-item">
                    {/* 重要 不紧急 */}
                    {
                        importantNotUrgent.map((item, index) => {
                            return <div className="lt-item" style={{ background: 'rgba(172, 216, 141,' + (1 - index * 0.15) + ')' }} key={item}>{index + 1}. {item}</div>
                        })
                    }
                </div>
                <div className="main-box-item">
                    {/* 重要 且紧急 */}
                    {
                        importantUrgent.map((item, index) => {
                            return <div className="lt-item" 
                                style={{ background: 'rgba(255, 166, 30,' + (1 - index * 0.15) + ')'}} 
                                key={item}>
                                    {index + 1}. {item}
                                </div>
                        })
                    }
                </div>
                <div className="main-box-item">
                    {/* 不重要 不紧急 */}
                    {
                        notImportantNotUrgent.map((item, index) => {
                            return <div className="lt-item" 
                                style={{ background: '122, 202, 131,' + (1 - index * 0.15) + ')'}} 
                                key={item}>
                                    {index + 1}. {item}
                                </div>
                        })
                    }
                </div>
                <div className="main-box-item">
                    {/* 不重要 不紧急 */}
                    {
                        notImportantUrgent.map((item, index) => {
                            return <div className="lt-item" 
                                style={{ background: '247, 229, 93,' + (1 - index * 0.15) + ')'}} 
                                key={item}>
                                    {index + 1}. {item}
                                </div>
                        })
                    }
                </div>

                {/* 排序 */}
                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId="droppable" key="droppable">
                        {(provided) => (
                        <div ref={provided.innerRef} {...provided.droppableProps}>
                            {items.map((item, index) => (
                            <Draggable key={item.id} draggableId={item.id} index={index}>
                                {(provided) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                    ...provided.draggableProps.style,
                                    marginBottom: '8px',
                                    padding: '16px',
                                    backgroundColor: '#fff',
                                    border: '1px solid #ddd',
                                    borderRadius: '4px',
                                    }}
                                >
                                    {item.content}
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
        </div>
    );
};

export default ListPage;
