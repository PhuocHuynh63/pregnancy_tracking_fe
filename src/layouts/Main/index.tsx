import styles from './index.module.scss';

interface LayoutMainProps {
    Component: React.ComponentType;
}

const LayoutMain: React.FC<LayoutMainProps> = ({ Component }) => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Header</h1>
            </header>
            <main className={styles.main}>
                <Component />
            </main>
            <footer className={styles.footer}>
                <h1>Footer</h1>
            </footer>
        </div>
    )
}

export default LayoutMain