import Header from '@/layouts/header/Header';
import Todo from './(todo)/todo/Todo';

import styles from './page.module.scss';

export default function Home() {
    return (
        <>
            <main role="main">
                <Header />
                <div className={styles.container}>
                    <section className={styles.section}>
                        <Todo />
                    </section>
                </div>
            </main>
        </>
    );
}
