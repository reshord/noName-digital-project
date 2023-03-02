import Header from './components/header/Header';
import Banner from './components/Ad/ad-banner';
import Content from './components/content/Content';
import styles from './styles/App.module.css'
import Footer from './components/Footer/Footer';
import { useRef } from 'react';

function App() {

  const refApp = useRef<HTMLDivElement>(null)

  return (
    <div className={styles.App} ref={refApp}>
        <Header />
        <Banner />
        <Content />
        <Footer />
    </div>
  );
}

export default App;
