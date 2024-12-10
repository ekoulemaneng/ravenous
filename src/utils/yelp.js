import { fetch } from 'whatwg-fetch';
import { apiKey } from '../../config';

export const fetchBusinesses = async (searchTerm, location, sortingOption) => {
    const url = `https://api.yelp.com/v3/businesses/search?term=${searchTerm}&location=${location}&sort_by=${sortingOption}`;
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'accept': 'application/json'
            }
        });
        const data = await response.json();
        return data.businesses;
    } catch (error) {
        console.error(error);
        return [];
    }
};