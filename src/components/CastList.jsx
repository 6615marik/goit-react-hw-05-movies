import PropTypes from 'prop-types';

// import styles from '../../HomePage/Components/HomePageList.module.css';
import imgNot from '../img/notimg.webp';

const CastList = data => {
  const cast = data;

  return (
    <ul>
      {cast.data && cast.data.length ? (
        cast.data.map(cast => (
          <li key={cast.id}>
            {cast.profile_path === null ? (
              <img src={imgNot} alt={cast.name} width="150" />
            ) : (
              <img
                src={`https://image.tmdb.org/t/p/w400${cast.profile_path}`}
                alt={cast.name}
              />
            )}
            <p>{cast.name}</p>
            <p>Character: {cast.character}</p>
          </li>
        ))
      ) : (
        <li key="noInfo">Sorry, no cast has been added yet</li>
      )}
    </ul>
  );
};

CastList.propTypes = {
  data: PropTypes.array,
};
export default CastList;
