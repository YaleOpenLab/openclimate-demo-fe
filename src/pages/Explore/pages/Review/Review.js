import React from "react";
import SideContentMenu from "../../../../components/Global/SideContentMenu/SideContentMenu";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchExploreReview } from "../../store/actions";
import ReviewContent from "./Content/Content";
import "./Review.scss";

const queryString = require("query-string");

class Review extends React.PureComponent {
  state = {
    nation_states: [],
    multinationals: [],
    current: {
      category: this.props.match.params.category,
      id: this.props.match.params.id
    },
    error: "",
    loading: false
  };

  componentDidMount() {
    this.props.fetchExploreReview();
    let params = this.props.match.params;
    if (params.category && params.id) {
      this.setState({
        current: {
          category: params.category,
          id: params.id,
        }
      });
    }
  }

  componentDidUpdate = prevProps => {
    //TODO: fix comparison;
    if (this.props.nation_states !== prevProps.nation_states) {
      this.setState({
        nation_states: this.props.nation_states
      });
    }
    if (this.props.multinationals !== prevProps.multinationals) {
      this.setState({
        multinationals: this.props.multinationals
      });
    }
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.setState({
        current: {
          category: this.props.match.params.category,
          id: this.props.match.params.id
        }
      });
    }
  };

  render() {
    const { nation_states, current } = this.state;
    const sorted = [
      ...nation_states.filter(x => x.Index === 63),
      ...nation_states.sort((a, b) => a.name < b.name ? -1 : 1).filter(x => x.Index !== 63)
    ];

    const data = [
      {
        index: "nation-states",
        title: "Nation State",
        list: sorted,
      },
      {
        index: "multinationals",
        title: "Multinationals",
        subCards: [
          { name: "Carbon majors", list: [{ name: "No Data", Index: 0 }] },
          { name: "Other Mnc", list: [{ name: "No Data", Index: 0 }] },
        ]
      }
    ];

    return (
      <div className="Review explore-review container-fluid">
        <div className="-menu">
          <SideContentMenu menu={data} current={current}/>
        </div>
        <div className="-content">
          {current.id && <ReviewContent data={current}/>}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.explore.review.error,
  loading: state.explore.review.isLoading,
  nation_states: state.explore.review.nation_states,
  multinationals: state.explore.review.multinationals
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchExploreReview }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Review);
