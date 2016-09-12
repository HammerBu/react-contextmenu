import React from "react";

import ContextWrapper from "./wrapper";

let { PropTypes } = React;

const ContextMenu = React.createClass({
    displayName: "ContextMenu",
    propTypes: {
        identifier: PropTypes.string.isRequired
    },
    getInitialState() {

    },
    componentDidMount() {

    },
    componentWillUnmount() {
        if (this.unsubscribe) this.unsubscribe();
    },
    handleUpdate() {

    },
    render() {
        return (
            <ContextWrapper {...this.props} {...this.state}/>
        );
    }
});

export default ContextMenu;
