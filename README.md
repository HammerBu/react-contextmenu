 

# React ContextMenu @yu

ContextMenu in React.
forked from https://github.com/vkbansal/react-contextmenu

## Installation

~~npm install --save react-contextmenu~~

import defaultcss from react-contextmenu
you need config webpack /*.file.css/ loader

## Usage
  菜单会自动绑定到上级元素! 自动解绑到document
  auto bind to parentNode,auto bind to document
  高级用法参考examples/index.js
  see examples/index.js
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
you can create one ContextMenu,then use jquery  to bind  events to   Tree Element manually..
create too much Menus will slow browser.

like this:
```js
 see example:
    $(".tree").bind("contextmenu",function(event){
         getElementById(ContextMenuID).dispatchEvent("contextmenu",event,$(this));
    }
    
        $(".gg").bind("contextmenu",function(event){
            event.stopPropagation();
            event.preventDefault();
            var evt = document.createEvent( 'HTMLEvents' );
            evt.initEvent("contextmenu", true, true);
            document.getElementById("mainContextMenu").dispatchEvent(evt,"contextmenu");
            console.log("bindding");
        });
```