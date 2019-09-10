import React, { Component } from "react";
import Container from "../../../../hoc/Container/Container";
import "./Review.scss";
import CarbonBalance from "./CarbonBalance/CarbonBalance";
import ClimateReports from "./ClimateReports/ClimateReports";
import ReviewNavigation from "./ReviewNavigation/ReviewNavigations";
import ROUTES from "../../../../routes/routes";

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
            <CarbonBalance />
            <ClimateReports />
          </Container>
          <Container fluid style={{padding: 0}}>
            <ReviewNavigation list={MENU} />
          </Container>
            <Container placeholder>

            </Container>
        </div>
    );
  }
}

export default Review;
