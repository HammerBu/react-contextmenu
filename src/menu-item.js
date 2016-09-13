import React from "react";
import classnames from "classnames";
import assign from "object-assign";


let { PropTypes } = React;

/**
 *  src  Element
 *  event
 *  data
 *
 */
const MenuItem = React.createClass({

    handleClick(event) {
        event.preventDefault();
        if (typeof onClick === "function") {
            this.props.onClick(event,this.props.data,this.props.src);
        }
    },
    render() {

        return (
            <div className={"react-context-menu-item"} {...props}>
                <a href="#" className={"react-context-menu-link"} onClick={this.handleClick}>
                    {children}
                </a>
            </div>
        );
    }
});

export default MenuItem;
