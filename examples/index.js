/**
 * Created by yu on 16/9/13.
 */



import React from "react";
import { ContextMenu, MenuItem, SubMenu } from "../src";
import ReactDOM from "react-dom";

const Menu = React.createClass({
    displayName: "Menu",
    /**
     *
     * @param e clickEvent
     * @param data  the data
     * @param el  the element which triger ContextMenu
     */
    handleClick(e, data,el) {
        //you will get 3 argments
        console.log(e,data,el);
    },
    render() {
        return (
            <ContextMenu  >
                <MenuItem onClick={this.handleClick} data={{item: "item 1"}}>
                    <i className="material-icons">account_circle</i>
                    Menu Item 1
                    <i className="material-icons">all_out</i></MenuItem>
                <MenuItem onClick={this.handleClick} data={{item: "item 2"}}>Menu Item 2</MenuItem>
                <SubMenu title="A SubMenu">
                    <span>ASubMenu</span>
                    <i className="material-icons">alarm_add</i>
                    <MenuItem onClick={this.handleClick} data={{item: "subitem 1"}}>SubItem 1</MenuItem>
                    <SubMenu title="Another SubMenu">
                        <i className="material-icons">all_out</i>
                        <MenuItem onClick={this.handleClick} data={{item: "subsubitem 1"}}>SubSubItem 1</MenuItem>
                        <MenuItem onClick={this.handleClick} data={{item: "subsubitem 2"}}>SubSubItem 2</MenuItem>
                    </SubMenu>
                    <SubMenu title="Yet Another SubMenu">
                        <MenuItem onClick={this.handleClick} data={{item: "subsubitem 3"}}>SubSubItem 3</MenuItem>
                        <MenuItem onClick={this.handleClick} data={{item: "subsubitem 4"}}>SubSubItem 4</MenuItem>
                    </SubMenu>
                    <i className="material-icons">alarm_add</i>
                    <MenuItem onClick={this.handleClick} data={{item: "subitem 2"}}>SubItem 2</MenuItem>
                </SubMenu>
            </ContextMenu>
        );
    }
});



ReactDOM.render(<Menu/>, document.getElementById("main"));