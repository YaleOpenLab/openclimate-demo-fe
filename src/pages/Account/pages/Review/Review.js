import React, {Component} from "react";
import Container from "../../../../hoc/Container/Container";
import "./Review.scss";
import CarbonBalance from "./CarbonBalance/CarbonBalance";
import ClimateReports from "./ClimateReports/ClimateReports";
import ReviewNavigation from "./ReviewNavigation/ReviewNavigations";
import ROUTES from "../../../../routes/routes";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons";

const MENU = [
	{title: 'All', url: ROUTES.ACCOUNT_PAGES.REVIEW_PAGES.ALL},
	{title: 'Data', url: ROUTES.ACCOUNT_PAGES.REVIEW_PAGES.DATA},
	{title: 'Merges', url: ROUTES.ACCOUNT_PAGES.REVIEW_PAGES.MERGES},
	{title: 'API', url: ROUTES.ACCOUNT_PAGES.REVIEW_PAGES.API},
	{title: 'Oracle', url: ROUTES.ACCOUNT_PAGES.REVIEW_PAGES.ORACLE},
	{title: 'Consensus', url: ROUTES.ACCOUNT_PAGES.REVIEW_PAGES.CONSENSUS},
	{title: 'Disputes', url: ROUTES.ACCOUNT_PAGES.REVIEW_PAGES.DISPUTES},
];

class Review extends Component {
	render() {
		return (
			<div className='account-review'>
				<Container>
					<CarbonBalance/>
					<ClimateReports/>
				</Container>
				<Container fluid style={{padding: 0}}>
					<ReviewNavigation list={MENU}/>
				</Container>
				<Container className='content'>
					<div className='filter'>
						<label htmlFor="business">Filter</label>
						<select className="form-control">
							<option value="issue">is:issue is:open</option>
						</select>
					</div>
					<div className="table-container">
						<table className="table">
							<thead>
							<tr>
								<th scope="col" className='--icon'>
									<FontAwesomeIcon
										icon={faInfoCircle}
										style={{ height: 15, width: 15, cursor: "pointer" }}
									/>
								</th>
								<th scope="col" className='--bold'>20 Open / 4 Closed</th>
								<th scope="col">Author</th>
								<th scope="col">Labels</th>
								<th scope="col">Assets</th>
								<th scope="col">Started</th>
								<th scope="col">Assignee</th>
							</tr>
							</thead>
							<tbody>
							<tr>
								<th scope="row">
									<FontAwesomeIcon
										icon={faInfoCircle}
										style={{ height: 15, width: 15, cursor: "pointer", color: 'green' }}
									/>
								</th>
								<td>Dispute: NAZCA data is outdated (Dec 2016) and incomplete.. <p>#2 opened 5 days ago by CERES</p></td>
								<td></td>
								<td></td>
								<td></td>
								<td>No</td>
								<td></td>
							</tr>
							<tr>
								<th scope="row">
									<FontAwesomeIcon
										icon={faInfoCircle}
										style={{ height: 15, width: 15, cursor: "pointer", color: 'green' }}
									/>
								</th>
								<td>Dispute: NAZCA data is outdated (Dec 2016) and incomplete.. <p>#2 opened 5 days ago by CERES</p></td>
								<td></td>
								<td></td>
								<td></td>
								<td>No</td>
								<td></td>
							</tr>
							<tr>
								<th scope="row">
									<FontAwesomeIcon
										icon={faInfoCircle}
										style={{ height: 15, width: 15, cursor: "pointer", color: 'green' }}
									/>
								</th>
								<td>Dispute: NAZCA data is outdated (Dec 2016) and incomplete.. <p>#2 opened 5 days ago by CERES</p></td>
								<td></td>
								<td></td>
								<td></td>
								<td>No</td>
								<td></td>
							</tr>
							</tbody>
						</table>

					</div>
				</Container>
			</div>
		);
	}
}

export default Review;
