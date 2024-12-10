import React from 'react';
import styles from './Business.module.css';

export const Business = (props) => {

  const handleClickOnImage = url => {
    window.open(url, '_blank');
  }

  const handleClickOnAddress  = (address) => {
    window.open(`https://www.google.com/maps/search/${address}`, '_blank');
  };

  return (
    <div className={styles.Item}>
      <div className={styles.ImageContainer} onClick={() => handleClickOnImage(props.url)}>
        <img src={props.image} alt={props.name} className={styles.Image} />
      </div>
      <h1 className={styles.Name}>{props.name}</h1>
      <div className={styles.Infos}>
        <div className={styles.InfosItemLeft}>
          <p className={styles.ClickableInfosDetail} onClick={() => handleClickOnAddress(props.displayAddress)}>{props.address}</p>
          <p className={styles.InfosDetail}>{props.city}</p>
          <p className={styles.InfosDetail}>{props.state} {props.zipcode}</p>
        </div>
        <div className={styles.InfosItemRight}>
          <p className={styles.ImportantInfosDetail}>{props.category}</p>
          <p className={styles.ImportantInfosDetail}>{props.rating < 2 ? props.rating + ' star' : props.rating + ' stars'}</p>
          <p className={styles.InfosDetail}>{props.reviewCount < 2 ? props.reviewCount + ' review' : props.reviewCount + ' reviews'}</p>
        </div>
      </div>
    </div>
  );
};