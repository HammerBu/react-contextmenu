import React from "react";




class ContextMenu extends React.compants{
        init(x, y) {
        let scrollX = document.documentElement.scrollTop,
            scrollY = document.documentElement.scrollLeft,
            { innerWidth, innerHeight } = window,
            rect = this.menu.getBoundingClientRect(),
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

            return menuStyles;
        },
        render() {

            return (
                    <nav   style={this.init()}  id={this.props.id}
                        className="react-context-menu">
                        {children}
                    </nav>

            );
        }
});

export default ContextMenu;
