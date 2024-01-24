import React from 'react';

import styles from './header.module.scss';

const Header = () => {
    return (
        <header className={styles.wrapper}>
            <div className={styles.title}>to do list</div>
        </header>
    );
};

export default Header;
