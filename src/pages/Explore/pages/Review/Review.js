import React, {Component} from "react";
import SideContentMenu from "../../../../components/Global/SideContentMenu/SideContentMenu";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchExploreReview} from "../../store/actions";

class Review extends React.PureComponent {
	state = {
		nation_states: [],
		multinationals: [],
		error: "",
		loading: false,
	};

	componentDidMount() {
		this.props.fetchExploreReview();
	}

	componentDidUpdate = (prevProps) => {
		//TODO: fix comparison;
		if (this.props.nation_states !== prevProps.nation_states) {
			this.setState({
				nation_states: this.props.nation_states
			})
		}
		if (this.props.multinationals !== prevProps.multinationals) {
			this.setState({
				multinationals: this.props.multinationals
			})
		}
	};

	render() {
		const {nation_states, multinationals} = this.state;
		const data = [
			{
				index: 0,
				title: "Nation State",
				list: nation_states.map(item => item.name)
			},
			{
				index: 1,
				title: "Multinationals",
				subCards: [
					{
						title: "Carbon majors",
						list: ["No Data"]
					},
					{ title: "Other Mnc", list: ["No Data"] }
				]
			}
		];
		return (
			<div className="explore-review">
				<div className="row">
					<div className="col-lg-4">
						<SideContentMenu menu={data}/>
					</div>
					<div className="col-md-8 col-lg-6">
						Content
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
	multinationals: state.explore.review.multinationals,
});

const mapDispatchToProps = dispatch =>
	bindActionCreators({fetchExploreReview}, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Review);
