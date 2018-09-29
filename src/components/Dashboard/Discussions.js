import React from 'react';
import { Dropdown, Button } from 'semantic-ui-react';
import moment from 'moment';

const Discussions = ({data, options}) => (
    <div className="card-cool">
        <div className="card-header-cool">
            Discussions
            <div className="icon-cool icon-dashboard-cool icon-dashboard-options"></div>
        </div>
        <div className="card-content-2">
            { data.map( (item, index) =>
            <div className="discussion-cool" key={index}>
                <div className="avatar-discussion-cool">
                <img src="/images/User Avatar.png" />
                </div>
                <div className="content-discussion-cool">
                <p> {item.userName} on {item.channel}! <span>- {moment(item.date).fromNow()}</span></p>
                <p> {item.message} </p>
                <Button.Group basic>
                    <Button className="btn-group-cool"> <div className="icon-cool icon-button-cool icon-approve" />Approve</Button>
                    <Button className="btn-group-cool"> <div className="icon-cool icon-button-cool icon-reject" />Reject</Button>
                    <Button className="btn-group-cool"> <div className="icon-cool icon-button-cool icon-edit" /> Edit</Button>
                </Button.Group>
                </div>
            </div>
            )}
        </div>
        <div className="card-footer-cool">
            <Dropdown inline className="dropdown-cool" options={options}  defaultValue={options[0].value} />
            <span className="report-cool">View full report →</span>
        </div>
    </div>
);

export default Discussions;