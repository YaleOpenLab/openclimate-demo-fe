import React, { Component } from "react";
import SideContentMenu from "../../../../components/Global/SideContentMenu/SideContentMenu";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchExploreReview} from "../../store/actions";

class Review extends Component {
	componentDidMount() {
		// this.props.fetchExploreReview()
	}

	render() {
    return (
      <div className="explore-review">
        <div className="row">
          <div className="col-lg-4">
            <SideContentMenu />
          </div>
          <div className="col-md-8 col-lg-6"></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
	error: state.explore.review.error,
	loading: state.explore.review.isLoading,
});

const mapDispatchToProps = dispatch =>
	bindActionCreators({ fetchExploreReview }, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Review);
