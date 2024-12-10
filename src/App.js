import { useState } from 'react';
import { SearchBar } from './components/SearchBar/SearchBar';
import { BusinessList } from './components/BusinessList/BusinessList';
import './App.css';

export const App = () => {

    const [businesses, setBusinesses] = useState([]);

    const updateBusinesses =  (newBusinesses) => {
        setBusinesses(newBusinesses);
    };

    return (
        <>
            <h1 id="header">Ravenous</h1>
            <SearchBar updateBusinesses={updateBusinesses} />
            <BusinessList businesses={businesses} />
        </>
    );
}

