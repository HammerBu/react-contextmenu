 

# React ContextMenu @yu

ContextMenu in React.
forked from https://github.com/vkbansal/react-contextmenu

## Installation

~~npm install --save react-contextmenu~~

import defaultcss from react-contextmenu
you need config webpack /*.file.css/ loader

## Usage
  会自动绑定到上级元素!
  auto bind to parentNode
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
 