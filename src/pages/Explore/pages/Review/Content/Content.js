import React, {Component} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchExploreReviewData } from "../../../store/actions";
import "./Content.scss";

class ReviewContent extends Component {
  state = {
    item: {},
    loading: false,
    error: null,
  };

  componentDidMount() {
    this.fetchContent();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(this.props.data.id !== prevProps.data.id || this.props.data.category !== prevProps.data.category) {
      this.fetchContent();
    }
  }

  fetchContent = () => {
    this.props.fetchExploreReviewData(this.props.data.category, this.props.data.id);
  };


  render() {
    console.log(this.props.error, "??");
    return (
      <div className='review-content'>
        <div className="review-header">
          {this.props.content.name}
        </div>
        <div className="review-body">

        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  error: state.explore.review.selected.error,
  loading: state.explore.review.selected.isLoading,
  content: state.explore.review.selected.item,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchExploreReviewData }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewContent);
