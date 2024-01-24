import React, { Dispatch, SetStateAction } from 'react';
import { FaRegCircle } from 'react-icons/fa6';
import { FaRegCheckCircle } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';

import styles from './todoList.module.scss';

interface Props {
    data: ITodo;
    list: Array<ITodo>;
    setTodo: Dispatch<SetStateAction<Array<ITodo>>>;
}

const Todo = ({ data, list, setTodo }: Props) => {
    const { id, todo, completed } = data;

    const updateHandler = () => {
        let updateTodo = {
            id: id,
            todo: todo,
            completed: !completed,
        };
        completedHandler(id, updateTodo);
    };

    const completedHandler = (id: number, updatedTodo: ITodo) => {
        let newData = list.map((el) => {
            if (el.id === id) {
                return updatedTodo;
            } else {
                return el;
            }
        });

        const sortedItems = [...newData].sort((a, b) => {
            if (a.completed && !b.completed) return 1;
            if (!a.completed && b.completed) return -1;
            return 0;
        });

        setTodo(sortedItems);
    };

    const deleteHandler = (id: number) => {
        setTodo((prev) => prev.filter((el) => el.id !== id));
    };

    return (
        <div className={styles.wrapper}>
            <div className={`${styles.buttonWrap} ${completed ? styles.complete : ''}`} onClick={() => updateHandler()}>
                {completed ? <FaRegCheckCircle style={{ fontSize: 24 }} /> : <FaRegCircle style={{ fontSize: 24 }} />}
            </div>
            <p className={`${completed ? styles.line : ''}`}>{todo}</p>
            <div
                className={styles.trashBtn}
                onClick={() => {
                    deleteHandler(id);
                }}
            >
                <FaTrash />
            </div>
        </div>
    );
};

export default Todo;
