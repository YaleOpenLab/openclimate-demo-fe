import React, { Component } from "react";
import SideContentMenu from "../../../../components/Global/SideContentMenu/SideContentMenu";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchExploreReview } from "../../store/actions";
import ReviewContent from "./Content/Content";

const queryString = require("query-string");

class Review extends React.PureComponent {
  state = {
    nation_states: [],
    multinationals: [],
    current: {
      category: "",
      id: null
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
          id: params.id
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
    const { nation_states, multinationals, current } = this.state;
    const data = [
      {
        index: 'nation-states',
        title: "Nation State",
        list: nation_states.map(item => {
          return { title: item.name, index: item.Index };
        })
      },
      {
        index: 'multinationals',
        title: "Multinationals",
        subCards: [
          {
            title: "Carbon majors",
            list: [
              { title: "No Data", index: 0 }
            ]
          },
          {
            title: "Other Mnc", list: [{ title: "No Data", index: 0 }]
          }
        ]
      }
    ];
    return (
      <div className="explore-review container-fluid">
        <div className="row">
          <div className="col-lg-4" style={{padding: 0}}>
            <SideContentMenu menu={data} current={current}/>
          </div>
          <div className="col-lg-6">
            {
              current.id && <ReviewContent data={current}/>
            }
          </div>
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
