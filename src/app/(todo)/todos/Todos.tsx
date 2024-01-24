import React, { SetStateAction, Dispatch } from 'react';
import TodoList from '../todoList/TodoList';

import styles from './todos.module.scss';

interface Props {
    list: Array<ITodo>;
    setTodo: Dispatch<SetStateAction<Array<ITodo>>>;
}

const Todos = ({ list, setTodo }: Props) => {
    return (
        <div className={styles.wrapper}>
            {list.map((el, idx) => (
                <TodoList key={idx} data={el} list={list} setTodo={setTodo} />
            ))}
        </div>
    );
};

export default Todos;
