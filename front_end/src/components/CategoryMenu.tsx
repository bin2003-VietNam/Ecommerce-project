import React from 'react'

interface MenuItem {
  id: string;
  label: string;          
  url: string;                     
  children?: MenuItem[];  
}
interface MenuColumn {
  id: string;
  title: string;          
  items: MenuItem[];      
}

interface CategoryMenuProps {
  id: string;
  label: string;          
  icon: string;           
  url: string;
  columns?: MenuColumn[]; 
}

function CategoryMenu() {
  return (
    <div>
        CategoryMenu
    </div>
  )
}

export default CategoryMenu