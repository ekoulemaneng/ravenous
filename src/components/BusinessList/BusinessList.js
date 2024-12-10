import { Business } from '../Business/Business';
import styles from './BusinessList.module.css';

export const BusinessList = ({ businesses }) => {
  return (
    <div  className={styles.List}>
      {businesses.map(business => (
        <Business
          key={business.id}
          name={business.name}
          address={business.address}
          city={business.city}
          state={business.state}
          zipcode={business.zipcode}
          category={business.category}
          rating={business.rating}
          reviewCount={business['review count']}
          image={business.imageSrc}
          displayAddress={business.displayAddress}
          url={business.url}
        />
      ))}
    </div>
  );
};