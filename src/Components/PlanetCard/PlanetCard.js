import React , {Component} from 'react';
import PropTypes from 'prop-types';
import Planet from '../Planet';
import PlanetCardDetail from '../PlanetCardDetail/PlanetCardDetail';
import './planet-card.scss';



class PlanetCard extends Component {
  constructor() {
    super();
    this.state = {
      isVisible: true,
    };
  }

  handleDetail = (planetDetails) =>{
    console.log(this.state.isVisible);
    this.setState({isVisible:false});
  }

  render() {
    const { handleDetail } = this;
    const { planetDetails} = this.props;
    return (
      <div className='planet-card'>
        <div className='planet-details'>          
        
        {this.state.isVisible ? <a onClick={() => handleDetail(this.props.planetDetails)} > <div className='planet-name'> Name: {planetDetails.name}</div> </a> : <PlanetCardDetail planetDetails={planetDetails}/>}
        </div>
        <div className='planet-diameter'>
          <Planet diameter={planetDetails.diameter / 500} />
        </div>
      </div>
  )};
}

PlanetCard.propTypes = {
  planetDetails: PropTypes.shape({
    name: PropTypes.string.isRequired,
    diameter: PropTypes.string.isRequired,
    terrain: PropTypes.string.isRequired,
  }).isRequired,
};

export default PlanetCard;
