import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { BsCheck } from 'react-icons/bs'
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { themeColors } from '../data/dummy';
import {  useStateContext} from "../contexts/ContextProvider"

const ThemeSettings = () => {
  return (
    <div className='bg-half-transparent w-screen fixed nav-item top-0 right-0'> 
      <div className='float-right h-screen dark:text-gray-200 bg-white dark:[#484B52] w-400'>
        <div className='flex justify-between items-center p-4 ml-4'>
          <p className='font-semibold text-lg'>
            Settings
          </p>
          <button
            type='button'
            onClick={()=> {}}
          >

          </button>
        </div>
      </div>
    </div>
  )
}

export default ThemeSettings