import React from "react";
import classnames from "classnames";

import {MenuItem} from "./index";


const menuStyles = {
    position: "relative",
    zIndex: "auto"
};

class SubMenu extends  React.Component{

    constructor(prpos){
        super(prpos);
        this.state={};
        this.state.position={};
        this.state.visible=false;
    };

    handleClickSubmenu=(e)=> {
        e.preventDefault();
        var pp =this.getMenuPosition();
        this.setState({visible:!this.state.visible, top:pp.top,left:pp.left,bottom:pp.bottom,right:pp.right});

    };
    handleMouseEnter=(e)=>{
    // set Timer to hidden,if
        clearTimeout(  this.state.timer);
        var pp =this.getMenuPosition();
        this.setState({visible:true, top:pp.top,left:pp.left,bottom:pp.bottom,right:pp.right});
    };
    handleMouseLeave=()=>{
       // this.state.visible=false;
       // set Timer to hidden,if
        this.state.timer=setTimeout(()=>{
            this.setState({visible:false});
        },500);
    };
    getMenuPosition=()=>{
        let { innerWidth, innerHeight } = window;

        if(this.menu==null) return {};
        let  rect = this.menu.getBoundingClientRect();
        let style = {};
        if (rect.bottom > innerHeight) {
            style.bottom = 0;
        } else {
            style.top = 0;
        }
        if (rect.right > innerWidth) {
            style.right = "100%";
        } else if(innerWidth<400) {
            style.left =0;
            style.top="100%";
        }else{
            style.left = "100%";
        }
        return style;
    };
    render=()=>{

        let menus = this.props.children.map( (o, i)=>{
              if( (o.type== SubMenu)  ||(o.type==MenuItem )  )
                    return React.cloneElement(o, {  key: i })
        });
        let other= this.props.children.map( (o, i)=>{
            if((o.type!= SubMenu)  && (o.type!=MenuItem))
                return React.cloneElement(o, {   key: i })
        });

        const substyle = {
        //    display: this.state.visible ? "block" : "none",
            visibility:this.state.visible?"visible":"hidden",
            position: "absolute",
            top:this.state.top,
            left:this.state.left,
            bottom:this.state.bottom,
            right:this.state.right

         };
        return (
            <div  className={ "react-context-menu-item submenu"}

                  style={menuStyles}
                  onMouseEnter={this.handleMouseEnter}
                  onMouseLeave={this.handleMouseLeave}>
                <a href="#" className={"react-context-menu-link"} onClick={this.handleClickSubmenu}>
                    {other}{this.props.title}
                </a>
                    <nav  ref={(c)=>this.menu=c}     style={substyle} className="react-context-menu">
                        {menus}
                    </nav>
            </div>
        );
    }


};

export default SubMenu;
//
//ref={(c)=>(this.menu=c)}