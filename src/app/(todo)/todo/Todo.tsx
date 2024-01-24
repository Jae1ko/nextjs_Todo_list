'use client';
import { useState } from 'react';

import Todos from '../todos/Todos';

import styles from './todo.module.scss';

export default function Home() {
    const [value, setValue] = useState<string>('');
    const [todo, setTodo] = useState<Array<ITodo>>([]);

    const insertTodo = (text: string) => {
        let newData = { id: todo.length + 1, todo: text, completed: false };

        setTodo((prev) => [newData, ...prev]);
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        insertTodo(value);
        setValue('');
    };

    const inputValue = (text: string) => {
        setValue(text);
    };

    return (
        <div className={styles.container}>
            <form className={styles.formStyle} onSubmit={onSubmit}>
                <input
                    className={styles.inputForm}
                    value={value}
                    maxLength={50}
                    type="text"
                    id="todo"
                    name="todo"
                    autoComplete="off"
                    onChange={(e) => {
                        inputValue(e.target.value);
                    }}
                />
            </form>
            <div className={styles.todoContainer}>{todo.length > 0 && <Todos list={todo} setTodo={setTodo} />}</div>
        </div>
    );
}
