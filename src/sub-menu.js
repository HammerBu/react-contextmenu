import React from "react";
import classnames from "classnames";

import {MenuItem} from "./index";


const menuStyles = {
    position: "relative",
    zIndex: "auto"
};

let SubMenu = React.createClass({
    displayName: "SubMenu",
    propTypes: {
        title: React.PropTypes.string.isRequired,
        disabled: React.PropTypes.bool,
        hoverDelay: React.PropTypes.number
    },


    handleClickNull(e) {
        e.preventDefault();
    },
    getMenuPosition() {
        let { innerWidth, innerHeight } = window,
            rect = this.menu.getBoundingClientRect(),
            position = {};


        if (rect.bottom > innerHeight) {
            position.bottom = true;
        } else {
            position.top = true;
        }

        if (rect.right > innerWidth) {
            position.left = true;
        } else {
            position.right = true;
        }

        return { position };
    },
    getPositionStyles() {
        let style = {},
            { position } = this.state;

        if (position.top) style.top = 0;
        if (position.bottom) style.bottom = 0;
        if (position.right) style.left = "100%";
        if (position.left) style.right = "100%";

        return style;
    },
    render() {

        let menus = this.props.children.map( (o, i)=>{
              if( (o.type== SubMenu) || (o.type== MenuWrapper) ||(o.type==MenuItem )  )
                    return React.cloneElement(o, {  key: i })
        });
        let other= this.props.children.map( (o, i)=>{
            if((o.type!= SubMenu) && (o.type!= MenuWrapper) && (o.type!=MenuItem))
                return React.cloneElement(o, {   key: i })
        });

        const substyle = {
            display: visible ? "block" : "none",
            position: "absolute",
            ...this.getPositionStyles()
        };
        return (
            <div  className={ "react-context-menu-item submenu"}
                  style={menuStyles}
                  onMouseEnter={this.handleMouseEnter}
                  onMouseLeave={this.handleMouseLeave}>
                <a href="#" className={r"eact-context-menu-link"} onClick={this.handleClick}>
                    {other}{this.props.title}
                </a>
                    <nav   style={substyle} className="react-context-menu">
                        {menus}
                    </nav>
            </div>
        );
    }


});

export default SubMenu;

