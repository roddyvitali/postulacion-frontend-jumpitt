import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const TopReferrals = ({data, options}) => (
    <div className="card-cool">
        <div className="card-header-cool">
        Top Referrals
        <div className="icon-cool icon-dashboard-cool icon-dashboard-options"></div>
        </div>
        <div className="card-content-2">
        <ul className="referrals-cool">
            { data.map( (item, index) =>
            <li className="li-referrals-cool" key={index}>{item.referral_name} <span>{item.quantity}</span></li>
            )}
        </ul>
        </div>
        <div className="card-footer-cool">
        <Dropdown inline className="dropdown-cool" options={options} defaultValue={options[0].value} />
        <span className="report-cool">Full report →</span>
        </div>
    </div>
);

export default TopReferrals;