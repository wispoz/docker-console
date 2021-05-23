'use strict';
const Menu = async (menu)=>{
        return await menu.apply(this, ...arguments);
};
export default Menu;