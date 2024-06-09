import Header from "./components/Header/Header";
import Profile from './components/Profile/Profile';
import Updates from './components/Updates/Updates';
import './styles.css';

export default function App() {
    return (
        <div className="App">
            <Header />
            <div className="main-content">
                <Profile />
                <Updates />
            </div>
        </div>
    );
}
