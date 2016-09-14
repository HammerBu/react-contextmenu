import React from "react";

import MenuItem from "./menu-item"
import SubMenu from "./sub-menu"
/**
 *  it will auto mount parent DOM element on contextMenu!
 */
class ContextMenu extends  React.Component{
    constructor(props){
        super(props);
        this.state={};
        this.state.visiable=false;
    }

    componentDidMount=()=>{
        this.dom.parentNode.addEventListener("contextmenu",(e)=>{
          //  hack()
            this.showContextMenu(e);
        });
       /// this.dom.onclick=(e)=>{
        document.addEventListener("click",(e)=>{
            this.hideContextMenu(e);
           // console.log("click body");

            //e.stopPropagation();
        });
        // this.dom.parentNode.addEventListener("click",(e)=>{
        //     // document.body.addEventListener("click",(e)=>{
        //     this.hideContextMenu(e);
        //     console.log("click body");
        //     //   e.stopPropagation();
        // })
    };
    hideContextMenu=(e)=>{
      //  e.preventDefault();
        this.setState({visiable:false});
       // e.stopPropagation();
    };
    showContextMenu=(e)=>{
        e.preventDefault();
        this.state.menuStyles=this.getMousePosition(e);
        this.state.visiable=true;
        this.state.src=e.target;
        this.setState({visiable:true});
    };
    getMousePosition=(event)=> {
        const x = event.clientX || (event.touches && event.touches[0].pageX),
            y = event.clientY || (event.touches && event.touches[0].pageY);
        let scrollX = document.documentElement.scrollTop,
            scrollY = document.documentElement.scrollLeft,
            { innerWidth, innerHeight } = window,
            rect = this.dom.getBoundingClientRect(),
            menuStyles = {
                top: y + scrollY,
                left: x + scrollX
            };
        if (y + rect.height > innerHeight) {
            menuStyles.top -= rect.height;
        }
        if (x + rect.width > innerWidth) {
            menuStyles.left -= rect.width;
        }
        if (menuStyles.top < 0) {
            menuStyles.top = (rect.height < innerHeight) ? (innerHeight - rect.height) / 2 : 0;
        }
        if (menuStyles.left < 0) {
            menuStyles.left = (rect.width < innerWidth) ? (innerWidth - rect.width) / 2 : 0;
        }
        menuStyles.position="fixed";
        return menuStyles;

    };
    render=()=> {
        let menuStyles={...this.state.menuStyles, visibility:this.state.visiable?"visible":"hidden",position:"fixed"};

        let hackedChildren={};
        if(this.props.children.type==MenuItem || this.props.children.type==SubMenu )
              hackedChildren=React.cloneElement(this.props.children, {   src: this.state.src });
        else {
            hackedChildren= this.props.children.map( (o, i)=>{
                return React.cloneElement(o, { key:i,  src: this.state.src })
            });
        }

        return (

            <nav  ref={(c)=>this.dom=c} style={menuStyles}   id={this.props.id}  onClick={this.hideContextMenu}
                  className="react-context-menu">
                {hackedChildren}
            </nav>


        );
    }
};

export default ContextMenu;
