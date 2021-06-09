import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ id, src, alt, largeImageURL, onClick }) => {
  return (
    <li key={id} className={styles.imageGalleryItem}>
      <img
        onClick={onClick}
        src={src}
        alt={alt}
        className={styles.imageGalleryItemImage}
        data-source={largeImageURL}
      />
    </li>
  );
};

export default ImageGalleryItem;
