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
        console.log(e.target,data,el);
    },
    render() {
        return (
            <ContextMenu id="mainContextMenu"  >
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


const Menu2 = React.createClass({
    displayName: "Menu222",
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
                <MenuItem onClick={this.handleClick} data={{item: "item 1"}}
                    disabled={this.props.group=="group2"?false:true}>
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


const Menu3 = React.createClass({
    displayName: "Menu3",
    /**
     *
     * @param e clickEvent
     * @param data  the data
     * @param el  the element which triger ContextMenu
     */
    handleClick(e, data,el) {
        //you will get 3 argments
        console.log(e.target,data,el);
    },
    beforeClick(e) {
        console.log(e);
        e.preventDefault();
    },
    afterClick(e, data,el) {
        console.log(e);
        e.stopPropagation();
    },

    render() {
        return (
            <ContextMenu  >
                <MenuItem onClick={this.handleClick} data={{item: "item 1"}}>
                    <i className="material-icons" onClick={this.beforeClick} >account_circle</i>
                    <i className="material-icons" onClick={this.beforeClick} >account_circle</i>

                    <i className="material-icons" onClick={this.afterClick} >all_out</i>
                </MenuItem>
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

const MenuTTT = React.createClass({
    displayName: "MenuTTT",
    /**
     *
     * @param e clickEvent
     * @param data  the data
     * @param el  the element which triger ContextMenu
     */
    handleClick(e, data,el) {
        //you will get 3 argments
        console.log(e.target,data,el);
    },
    beforeClick(e) {
        console.log(e);
    },
    afterClick(e, data,el) {
        console.log(e);
        e.stopPropagation();
    },

    render() {
        return (
        <div>
            {
                // this will bind too much menus
                //
                ["menu1","menu2","menu3","menu4","menu5","menu6","menu7","menu8"].map((item,i)=>{
                    return <div key={i}>click here {item} this menu can not reuse; this will bind too much menus
                        <ContextMenu >
                            <MenuItem onClick={this.handleClick} data={{item: "item 1"}}>{item}
                            <i className="material-icons" onClick={this.beforeClick.bind(this,i)} >account_circle</i>
                            <i className="material-icons" onClick={this.beforeClick.bind(this,i)} >account_circle</i>
                            <i className="material-icons" onClick={this.afterClick} >all_out</i>
                            </MenuItem>
                        </ContextMenu>
                        </div>
                 })
            }
            </div>


        );
    }
});

ReactDOM.render(<MenuTTT/> , document.getElementById("tt"));
ReactDOM.render(<Menu3/>, document.getElementById("m3"));
ReactDOM.render(<Menu2/>, document.getElementById("hack-div"));
ReactDOM.render(<Menu2 group="group2"/>, document.getElementById("group2"));
ReactDOM.render(<Menu/>, document.getElementById("main"));
