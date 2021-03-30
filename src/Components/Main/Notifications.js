import React, {useEffect} from "react";
import { Table } from "react-bootstrap";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
// import {faTrash} from "@fortawesome/free-solid-svg-icons";
// import {Fade} from "react-awesome-reveal";

import {connect} from "react-redux";
import {fetchNotifications} from "../../redux/actions";

const Notifications = (props) => {
    useEffect((props) => {
        props.fetchNotifications();
    }, []);

    return (
        <>
            <Table striped style={{textAlign: "center"}}>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Message</th>
                    <th>Posted By</th>
                </tr>
                </thead>
                {props.notifications.length > 0 ? props.notifications.map((data) => {
                    return (
                        <tbody>
                        <tr>
                            <td>{data.id}</td>
                            <td><img src={data.notificationImage} alt="img" width="75px" height="75px"/></td>
                            <td>{data.title}</td>
                            <td>{data.description}</td>
                            <td>{data.posted_by.username}</td>
                        </tr>
                        </tbody>
                    )

                }) : null}


            </Table>
        </>
    )
}

const mapStateToProps = (state) => {
    return {notifications: state.notifications.notificationList};
}

export default connect(mapStateToProps, {fetchNotifications})(Notifications);
