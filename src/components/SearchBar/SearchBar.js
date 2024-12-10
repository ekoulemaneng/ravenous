import { useState } from 'react';
import styles from './SearchBar.module.css';
import { fetchBusinesses } from '../../utils/yelp';

export const SearchBar = ({ updateBusinesses }) => {

    const [sortingOption, setSortingOption] = useState('best_match');
    const [searchTerm, setSearchTerm] = useState('');
    const [location, setLocation] = useState('');

    const handleClickOnBestMatchOption = async () => {
        setSortingOption('best_match');
        updateBusinesses(await fetchData());
    };

    const handleClickOnHighestRatedOption = async () => {
        setSortingOption('rating');
        updateBusinesses(await fetchData());
    };

    const handleClickOnMostReviewedOption = async () => {
        setSortingOption('review_count');
        updateBusinesses(await fetchData());
    };

    const handleSearchTermChange = ({ target }) => {
        setSearchTerm(target.value);
    };

    const handleLocationChange = ({ target }) => {
        setLocation(target.value);
    };

    const handleButtonClick = async (event) => {
        event.preventDefault();
        updateBusinesses(await fetchData());
    };

    const handleKeyDown = async (event) => {
        if (event.key === 'Enter') {
            updateBusinesses(await fetchData());
        }
    };

    const fetchData = async () => {
        const data = await fetchBusinesses(searchTerm, location, sortingOption);
        return data.map((business) => {
            return {
                id: business.id,
                name: business.name,
                address: business.location.address1,
                city: business.location.city,
                state: business.location.state,
                zipcode: business.location.zip_code,
                category: business.categories[0].title,
                rating: business.rating,
                'review count': business.review_count,
                imageSrc: business.image_url,
                displayAddress: business.location.display_address.join('+'),
                url: business.url
            };
        });
    }

    return (
        <div className={styles.SearchBar} onKeyDown={handleKeyDown}>
            <div className={styles.Filters}>
                <div className={sortingOption === 'best_match' ? styles.FilterOption : ''} onClick={handleClickOnBestMatchOption}>
                    Best<br/>Match
                </div>
                <div className={sortingOption === 'rating' ? styles.FilterOption : ''} onClick={handleClickOnHighestRatedOption}>
                    Highest<br/>Rated
                </div>
                <div className={sortingOption === 'review_count' ? styles.FilterOption : ''} onClick={handleClickOnMostReviewedOption}>
                    Most<br/>Reviewed
                </div>
            </div>
            <div className={styles.Inputs}>
                <input 
                    className={searchTerm !== '' ? styles.HighlightedInputItem : styles.InputItem}
                    type='text' 
                    placeholder='Search Businesses' 
                    value={searchTerm}
                    onChange={handleSearchTermChange}
                    name="searchTerm"
                />
                <input 
                    className={location !== '' ? styles.HighlightedInputItem : styles.InputItem}
                    type='text' 
                    placeholder='Where?' 
                    value={location}
                    onChange={handleLocationChange}
                    name="location"
                />
            </div>
            <button className={styles.Button} onClick={handleButtonClick}>Let's Go!</button>
        </div>
    );
};