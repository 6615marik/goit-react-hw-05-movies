import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { getCasts } from '../servises/api';
import MovieDetailsList from '../components/MovieDetailsList';
import CastList from '../components/CastList';
const Cast = () => {
  const { id } = useParams();
  const [castData, setCastData] = useState({});
  const [isLoading, setLoading] = useState(false);
  const castContainer = useRef();

  useEffect(() => {
    if (id) {
      setLoading(true);
      getCasts(id)
        .then(data => setCastData(data))
        .catch(function (error) {
          console.log('Error: ' + error);
        })
        .finally(() => {
          setTimeout(() => {
            setLoading(false);
            castContainer.current.scrollIntoView({ behavior: 'smooth' });
          }, 500);
        });
    }
  }, [id]);

  return (
    <div ref={castContainer}>
      {isLoading ? <MovieDetailsList /> : <CastList data={castData.cast} />}
    </div>
  );
};
export default Cast;
