import React from "react";
import classnames from "classnames";

import MenuWrapper from "./wrapper";
import {MenuItem} from "../index";


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
    getDefaultProps() {
        return {
            hoverDelay: 200
        };
    },
    getInitialState() {
        return {
            visible: false
        };
    },
    shouldComponentUpdate(nextProps, nextState) {
        return this.state.isVisible !== nextState.visible;
    },
    componentWillUnmount() {
        if (this.opentimer) clearTimeout(this.opentimer);

        if (this.closetimer) clearTimeout(this.closetimer);
    },
    handleClick(e) {
        e.preventDefault();
    },
    handleMouseEnter() {
        if (this.closetimer) clearTimeout(this.closetimer);

        if (this.props.disabled || this.state.visible) return;

        this.opentimer = setTimeout(() => this.setState({visible: true}), this.props.hoverDelay);
    },
    handleMouseLeave() {
        if (this.opentimer) clearTimeout(this.opentimer);

        if (!this.state.visible) return;

        this.closetimer = setTimeout(() => this.setState({visible: false}), this.props.hoverDelay);
    },
    render() {
        let { disabled, children, title } = this.props,
            { visible } = this.state;

        const classes = classnames({
                "react-context-menu-link": true,
                disabled,
                active: visible
            }),
            menuClasses = "react-context-menu-item submenu";
        children = this.props.children.map( (o, i)=>{
              if( (o.type== SubMenu) || (o.type== MenuWrapper) ||(o.type==MenuItem )  )
                    return React.cloneElement(o, {  key: i })
        });
        let vo= this.props.children.map( (o, i)=>{
            if((o.type!= SubMenu) && (o.type!= MenuWrapper) && (o.type!=MenuItem))
                return React.cloneElement(o, {   key: i })
        });
        return (
            <div ref={(c) => (this.item = c)} className={menuClasses} style={menuStyles}
                onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                <a href="#" className={classes} onClick={this.handleClick}>
                    {vo}{title}
                </a>

                <MenuWrapper visible={visible}>
                {children}
                </MenuWrapper>
            </div>
        );
    }
});

export default SubMenu;
