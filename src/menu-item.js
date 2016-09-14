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

class MenuItem extends  React.Component{

    handleClick=(event)=> {
        event.preventDefault();
        this.props.onClick(event,this.props.data,this.props.src);
    };
    render=()=> {

        return (
            <div className={"react-context-menu-item"} {...this.props} onClick={this.handleClick}>
                <a href="#" className={"react-context-menu-link"} >
                    {this.props.children}
                </a>
            </div>
        );
    }
};

export default MenuItem;
