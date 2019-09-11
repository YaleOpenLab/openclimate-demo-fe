import React, {Component} from "react";
import Container from "../../../../hoc/Container/Container";
import "./Manage.scss";
import StartNew from "../../../../assets/images/add_existing.svg";
import AddExisting from "../../../../assets/images/add_existing.svg";
import BulkIntegrate from "../../../../assets/images/bulk_integrate.svg";
import SolarPanel from "../../../../assets/images/solar_panel_ic.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfoCircle, faCheckSquare, faEllipsisV} from "@fortawesome/free-solid-svg-icons";
import Rating from "../Dashboard/Rating/Rating";

class Manage extends Component {
	render() {
		return (
			<div className="account-manage">
				<Container className='manage-section'>
					<h3 className="title">Climate Actions
						<FontAwesomeIcon
							icon={faInfoCircle}
							style={{height: 15, width: 15, cursor: "pointer", color: 'gray', marginLeft: 15}}
						/>
					</h3>
					<div className='action-panel'>
						<div className='manage-action'>
							<div className="square">
								<div className="image">
									<img src={StartNew} alt=""/>
								</div>
								<h4>Start New</h4>
							</div>
							<div className="desc">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. labore et
								dolore magna aliqua.
							</div>
						</div>
						<div className='manage-action'>
							<div className="square">
								<div className="image">
									<img src={AddExisting} alt=""/>
								</div>
								<h4>Add Existing</h4>
							</div>
							<div className="desc">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. labore et
								dolore magna aliqua.
							</div>
						</div>
						<div className='manage-action'>
							<div className="square">
								<div className="image">
									<img src={BulkIntegrate} alt=""/>
								</div>
								<h4>Bulk Integrate</h4>
							</div>
							<div className="desc">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. labore et
								dolore magna aliqua.
							</div>
						</div>
					</div>
				</Container>
				<Container className='display-section' fluid>
					<Container>
						<h3 className="title">MANAGE YOUR CLIMATE ACTION ASSETS & PROJECTS</h3>
						<div className='filter'>
							<div>
								<label htmlFor="region">Region</label>
								<select className="form-control" name="region">
									<option value="issue">Connecticut</option>
								</select>
							</div>
							<div>
								<label htmlFor="stage">Stage</label>
								<select className="form-control" name="stage">
									<option value="issue">Live</option>
								</select>
							</div>
						</div>
						<div className="table-container">
							<table className="table">
								<thead>
								<tr>
									<th scope="col">Type</th>
									<th scope="col">Action</th>
									<th scope="col">Name</th>
									<th scope="col">Qty</th>
									<th scope="col">Region</th>
									<th scope="col">Note</th>
									<th scope="col">MRV</th>
									<th scope="col">Process</th>
									<th scope="col">Rating</th>
								</tr>
								</thead>
								<tbody>
								<tr>
									<td></td>
									<td>
										<img src={SolarPanel} alt="type" style={{width: 25, height: 25}}/>
									</td>
									<td>Bridgeport Solar 2.2 <p>#20 opened 20 days ago by Rjected</p></td>
									<td>2.2 MW</td>
									<td>CT, USA</td>
									<td>Regulated</td>
									<td>
										<FontAwesomeIcon
											icon={faCheckSquare}
											style={{height: 15, width: 15, cursor: "pointer"}}
										/>
									</td>
									<td>Live</td>
									<td><Rating rated={2}/></td>
									<td>
										<FontAwesomeIcon
											icon={faEllipsisV}
											style={{height: 15, width: 15, cursor: "pointer"}}
										/>
									</td>
								</tr>
								<tr>
									<td></td>
									<td>
										<img src={SolarPanel} alt="type" style={{width: 25, height: 25}}/>
									</td>
									<td>Bridgeport Solar 2.2 <p>#20 opened 20 days ago by Rjected</p></td>
									<td>2.2 MW</td>
									<td>CT, USA</td>
									<td>Regulated</td>
									<td>
										<FontAwesomeIcon
											icon={faCheckSquare}
											style={{height: 15, width: 15, cursor: "pointer"}}
										/>
									</td>
									<td>Live</td>
									<td><Rating rated={2}/></td>
									<td>
										<FontAwesomeIcon
											icon={faEllipsisV}
											style={{height: 15, width: 15, cursor: "pointer"}}
										/>
									</td>
								</tr>
								<tr>
									<td></td>
									<td>
										<img src={SolarPanel} alt="type" style={{width: 25, height: 25}}/>
									</td>
									<td>Bridgeport Solar 2.2 <p>#20 opened 20 days ago by Rjected</p></td>
									<td>2.2 MW</td>
									<td>CT, USA</td>
									<td>Regulated</td>
									<td>
										<FontAwesomeIcon
											icon={faCheckSquare}
											style={{height: 15, width: 15, cursor: "pointer"}}
										/>
									</td>
									<td>Live</td>
									<td><Rating rated={2}/></td>
									<td>
										<FontAwesomeIcon
											icon={faEllipsisV}
											style={{height: 15, width: 15, cursor: "pointer"}}
										/>
									</td>
								</tr>
								<tr>
									<td></td>
									<td>
										<img src={SolarPanel} alt="type" style={{width: 25, height: 25}}/>
									</td>
									<td>Bridgeport Solar 2.2 <p>#20 opened 20 days ago by Rjected</p></td>
									<td>2.2 MW</td>
									<td>CT, USA</td>
									<td>Regulated</td>
									<td>
										<FontAwesomeIcon
											icon={faCheckSquare}
											style={{height: 15, width: 15, cursor: "pointer"}}
										/>
									</td>
									<td>Live</td>
									<td><Rating rated={2}/></td>
									<td>
										<FontAwesomeIcon
											icon={faEllipsisV}
											style={{height: 15, width: 15, cursor: "pointer"}}
										/>
									</td>
								</tr>
								</tbody>
							</table>
						</div>
					</Container>
				</Container>
			</div>
		);
	}
}

export default Manage;
