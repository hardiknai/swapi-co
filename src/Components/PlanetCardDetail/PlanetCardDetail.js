import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import '../PlanetCard/planet-card.scss';

const PlanetCardDetail = (props) => {
  const { planetDetails } = props;
  return (
    <Fragment>
        <div className='planet-name'> Name: {planetDetails.name}</div>
        <div className='planet-name'> Terrain: {planetDetails.terrain} </div>
        <div className='planet-name'> Diameter: {planetDetails.diameter} </div>
        <div className='planet-name'> climate: {planetDetails.climate} </div>
        <div className='planet-name'> rotation_period: {planetDetails.rotation_period} </div>
        <div className='planet-name'> orbital_period: {planetDetails.orbital_period} </div>
        <div className='planet-name'> gravity: {planetDetails.gravity} </div>
        <div className='planet-name'> surface_water: {planetDetails.surface_water} </div>
        <div className='planet-name'> population: {planetDetails.population} </div>
    </Fragment>
  );
};

PlanetCardDetail.propTypes = {
  planetDetails: PropTypes.shape({
    name: PropTypes.string.isRequired,
    diameter: PropTypes.string.isRequired,
    terrain: PropTypes.string.isRequired,
  }).isRequired,
};

export default PlanetCardDetail;
