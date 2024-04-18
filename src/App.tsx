import reactLogo from '@/assets/react.svg';

import './App.css';
import { HeaderComponent } from './components/header/Header.component.tsx';

function App() {
    return (
        <>
            <HeaderComponent />
            <main className="home">
                <h1>
                    <img src={reactLogo} alt="React logo" />
                    Home page
                </h1>
                <p className="">test</p>
                <p>test2</p>
            </main>
        </>
    );
}

export default App;
