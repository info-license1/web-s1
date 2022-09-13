import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';


const containerStyle = {
    margin: 'auto',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '75rem'
}


// Make the header more visible on scroll
window.onscroll = () => {
    const header = document.querySelector('header');
    const appIcon = document.querySelector('header > div > div > svg');
    const appTitle = document.querySelector('header > div > div > h1');

    if (window.scrollY > 75) {
        header.style.boxShadow = '3px 3px 7px rgb(0 0 0 / .15)';
        header.style.height = '65px';
        appIcon.style.height = '60px';
        appTitle.style.opacity = '0';

    } else {
        header.style.boxShadow = 'none';
        header.style.height = '80px';
        appIcon.style.height = '80px';
        appTitle.style.opacity = '1';
    }
}


export default function App() {
    return (
        <>
            <header
                style={{
                    width: '100%',
                    height: '80px',
                    position: 'fixed',
                    backdropFilter: 'blur(15px)'
                }}
            >
                <div style={containerStyle}>
                    <Header />
                </div>
            </header>

            <main
                style={{
                    height: '1800px'
                }}
            >
                <div style={containerStyle}>
                    <Main />
                </div>
            </main>
            
            <footer
                style={{
                    height: '200px',
                    borderTop: '1px solid rgb(0 0 0 / .15)'
                }}
            >
                <div style={containerStyle}>
                    <Footer />
                </div>
            </footer>
        </>
    );
}