import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchExploreReviewData } from "../../../store/actions";
import "./Content.scss";
import TempImage from "../../../../../assets/images/temp/tempimage.png";
import WorldMap from "../../../../../assets/images/temp/world-map.jpg";
import ClimateData from "../../../../../assets/images/temp/climate-data.png";
import TempT1 from "../../../../../assets/images/temp/tempT_1.PNG";
import TempT2 from "../../../../../assets/images/temp/tempT_2.PNG";
import { withSnackbar } from "notistack";

class ReviewContent extends Component {
  state = {
    item: {},
    loading: false,
    error: null
  };

  componentDidMount() {
    this.fetchContent();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.data.id !== prevProps.data.id || this.props.data.category !== prevProps.data.category) {
      this.fetchContent();
    }
  }

  fetchContent = () => {
    this.props.fetchExploreReviewData(this.props.data.category, this.props.data.id);
  };


  render() {
    if(this.props.error) {
      this.props.enqueueSnackbar(this.props.error, {
        variant: 'error',
        autoHideDuration: 1500,
      });
      return "";
    }

    return (
      <div className='review-content'>
        <div className="review-header">
          <div className="rh-image">
            <img src={TempImage} alt=""/>
          </div>
          <div className="rh-description">
            <h3>{this.props.content.name}</h3>
            <p>Region</p>
          </div>
        </div>
        <div className="review-body">
          <div className="body-section">
            <div className="body-child">
              <div className="title">
                2019 emission
              </div>
              <div className="sub-title">
              </div>
              <div className="value">338,000</div>
              <div className="description"><span>Total tCo2e per year</span></div>
            </div>
            <div className="body-child">
              <div className="title">
                2019 emission
              </div>
              <div className="image">
                <img src={WorldMap} alt="world map"/>
              </div>
              <div className="oc-link">See Country Scope ></div>
            </div>
            <div className="body-child">
              <div className="title">
                CLIMATE ACCOUNTABILITY
              </div>
              <div className="image">
                <img src={ClimateData} alt="climate"/>
              </div>
              <div className="description --light">The diagram represents what % of climate actions can be directly tracked
                through verifiable MRV methods and linked devices, versus those that have been reported but have no
                trackable link.
              </div>
            </div>
          </div>
          <div className="body-section">
            <div className="body-child">
              <div className="title">
                PLEDGES
              </div>
              <div className="sub-title">
                Cooperative Initiatives
              </div>
              <div className="description">Science Based Targets initiative</div>
              <div className="description"><span>Adopt a science-based GHG emissions reduction target</span></div>
              <div className="image --temp">
                <img src={TempT1} alt="temporary"/>
              </div>
            </div>
            <div className="body-child">
              <div className="sub-title">
                Individual Actions
              </div>
              <div className="description">Reduce CO2e emissions intensity of direct emissions by 100% by 2035</div>
              <div className="description"><span>Reduce emissions by 25% by 2020</span></div>
              <div className="image --temp">
                <img src={TempT2} alt="temporary"/>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.explore.review.selected.error,
  loading: state.explore.review.selected.isLoading,
  content: state.explore.review.selected.item
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchExploreReviewData }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withSnackbar(ReviewContent));
