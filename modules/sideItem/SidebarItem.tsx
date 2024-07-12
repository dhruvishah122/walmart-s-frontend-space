import React from 'react'

const SidebarItem = ({optionText, OptionIcon}: any) => {
  return (
    <div className='sidebar_item_wrapper'>
      <div className='sidebar_item_icon'>{OptionIcon}</div>
      <div className='sidebar_item_text'>{optionText}</div>
    </div>
  )
}

export default SidebarItem
