import React from 'react';


const navEntries = [
    'Home',
    'Collection',
    'Store',
    'About'
];


export default function Header() {
    return (
        <>
            <div
                className='siteIdentity'
                style={{
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    style={{height: '60px'}}
                >
                    <path d='M5 11a7 7 0 0 1 14 0v7a1.78 1.78 0 0 1 -3.1 1.4a1.65 1.65 0 0 0 -2.6 0a1.65 1.65 0 0 1 -2.6 0a1.65 1.65 0 0 0 -2.6 0a1.78 1.78 0 0 1 -3.1 -1.4v-7'/>
                    <line x1='10' y1='10' x2='10.01' y2='10'/>
                    <line x1='14' y1='10' x2='14.01' y2='10'/>
                    <path d='M10 14a3.5 3.5 0 0 0 4 0'/>
                </svg>
                <h1
                    style={{
                        fontSize: '2.5rem',
                        fontWeight: '300',
                        userSelect: 'none'
                    }}
                >
                    Web App
                </h1>
            </div>

            <nav>
                <ul
                    style={{
                        listStyleType: 'none',
                        display: 'flex',
                    }}
                >
                    {
                        navEntries.map((entry) => (
                            <a
                                key={entry}
                                style={{
                                    padding: '.5rem 1rem',
                                    borderRadius: '4px',
                                    userSelect: 'none'
                                }}
                            >
                                <li
                                    style={{
                                        fontSize: '.85rem'
                                    }}
                                >
                                    {entry.toUpperCase()}
                                </li>
                            </a>
                        ))
                    }
                </ul>
            </nav>

            <div
                style={{
                    display: 'flex',
                    gap: '.5rem'
                }}
            >
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                    <circle cx='12' cy='12' r='9'/>
                    <path d='M10 16.5l2 -3l2 3m-2 -3v-2l3 -1m-6 0l3 1'/>
                    <circle cx='12' cy='7.5' r='.5' fill='currentColor'/>
                </svg>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                    <circle cx='12' cy='13' r='7'/>
                    <polyline points='12 10 12 13 14 13'/>
                    <line x1='7' y1='4' x2='4.25' y2='6'/>
                    <line x1='17' y1='4' x2='19.75' y2='6'/>
                </svg>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                    <circle cx='6' cy='10' r='2'/>
                    <line x1='6' y1='4' x2='6' y2='8'/>
                    <line x1='6' y1='12' x2='6' y2='20'/>
                    <circle cx='12' cy='16' r='2'/>
                    <line x1='12' y1='4' x2='12' y2='14'/>
                    <line x1='12' y1='18' x2='12' y2='20'/>
                    <circle cx='18' cy='7' r='2'/>
                    <line x1='18' y1='4' x2='18' y2='5'/>
                    <line x1='18' y1='9' x2='18' y2='20'/>
                </svg>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                    <rect x='3' y='4' width='18' height='4' rx='2'/>
                    <path d='M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10'/>
                    <line x1='10' y1='12' x2='14' y2='12'/>
                </svg>
            </div>
        </>
    );
}