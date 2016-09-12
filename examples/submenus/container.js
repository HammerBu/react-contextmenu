"use strict";

import React from "react";
import { ContextMenuLayer } from "../../src";
import MenuTypes from "./constants";

const Container = React.createClass({
    displayName: "Container",
    render() {
        return (
            <div>
            <div className="well">1 click to see the menu</div>
            <div className="well">2 click to see the menu</div>
        <div className="well">3 click to see the menu</div>
        <div className="well">4 click to see the menu</div>
        <div className="well">5 click to see the menu</div>
        <div className="well">6 click to see the menu
        <a> sfawfwefw</a>
        </div>

        <div className="well">right click to see the menu</div>
                <div className="well">right click to see the menu</div>
           </div>

        );
    }
});

export default ContextMenuLayer(MenuTypes.simple, (props) => props)(Container);
