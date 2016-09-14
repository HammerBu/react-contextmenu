 

## React ContextMenu @yu 
ContextMenu in React.

forked from https://github.com/vkbansal/react-contextmenu

##Feature

you can custeom Icons

callback will return DOM element.
![img](http://img.blog.csdn.net/20160915005025428)
## Installation

npm install --save react-contextmenu-yu


## Usage
 
  auto bind to parentNode,auto bind to document
 
  see examples/index.js
  
  you have to add css manually:(webpack)
   
  you need config webpack /*.file.css/ loader
    
    import s from "style!raw!react-contextmenu-yu/modules/default-react-context-menu.file.css"

  
```js
<div !!!!parentNode!!!!!>
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
    
</div>
```
    onClick(click-event,data,srcElement)
     
    srcElement come from rightClick
    
I have no idea of reusing Menus.

you can create one ContextMenu,then use jquery  to bind  events to   TreeElement manually.

create too much Menus will slow browser, but pass args easier.

like this:
```js
 see example:
    $(".tree").bind("contextmenu",function(event){
         getElementById(ContextMenuID).dispatchEvent("contextmenu",event,$(this));
    };
    
        $(".gg").bind("contextmenu",function(event){
            event.stopPropagation();
            event.preventDefault();
            var evt = document.createEvent( 'HTMLEvents' );
            evt.initEvent("contextmenu", true, true);
            document.getElementById("mainContextMenu").dispatchEvent(evt,"contextmenu");
            console.log("bindding");
        });
```