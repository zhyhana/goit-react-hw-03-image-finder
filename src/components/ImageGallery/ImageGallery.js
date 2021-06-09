import PropTypes from 'prop-types';
import styles from './ImageGallery.module.css';

import ImageGalleryItem from 'components/ImageGalleryItem';

export default function ImageGallery({ hits, onClick }) {
  return (
    <ul className={styles.imageGallery}>
      {hits.map(({ id, webformatURL, largeImageURL, tags }) => {
        return (
          <ImageGalleryItem
            key={id}
            src={webformatURL}
            alt={tags}
            largeImageURL={largeImageURL}
            onClick={() => onClick(largeImageURL)}
          />
        );
      })}
    </ul>
  );
}

ImageGallery.propTypes = {
  hits: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }),
  ),
  onClick: PropTypes.func.isRequired,
};
