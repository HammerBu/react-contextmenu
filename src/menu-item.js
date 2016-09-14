import React from "react";


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
        if( this.props.onClick !=null )
        this.props.onClick(event,this.props.data,this.props.src);
       // event.stopPropagation();
    };

    render=()=> {

        return (
            <div className={"react-context-menu-item"}
                 style={{visibility:this.props.disabled?"hidden":"visiable",
                 display:this.props.disabled?"none":"block"}}
                 onClick={this.handleClick} >
                <a href="#" className={"react-context-menu-link"} >
                    {this.props.children}
                </a>
            </div>
        );
    }
};

export default MenuItem;
