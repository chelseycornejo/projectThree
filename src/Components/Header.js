// Header.js

// COMPONENT
import hanging from '../assets/hanging.png';

// Create a Header.js component and import to App.js
const Header = () => {
    return (
        <header className="wrapper">
            <div className="title">
                <h1>happy<span>terracotta</span></h1>
                <h2>for all your plant info needs</h2>
            </div>
            <div className="headerImgs">
                <figure className="img1"><img src={hanging} alt="hanging plant illustration" /></figure>
                <figure className="img2"><img src={hanging} alt="hanging plant illustration" /></figure>
                <figure className="img3"><img src={hanging} alt="hanging plant illustration" /></figure>
            </div>
        </header>
    )
}

export default Header