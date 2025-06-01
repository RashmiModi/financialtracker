import React,{useState} from 'react'
import EmojiPicker from 'emoji-picker-react';
import { LuImage,LuX } from 'react-icons/lu';
const EmojiPickerPopup = ({icon,onSelect}) => {
const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='flex flex-col md:flex-row items-start gap-5 mb-6'>
        <div className='flex items-center gap-4 cursor-pointer'
        onClick={() => setIsOpen(true)}
        >
            <div className='w-12 h-12 flex items-center justify-center text-2xl'>
                {icon ? (
                    <img src={icon} alt='Icon' className='w-8 h-8 rounded-full' />
                ) : (
                    <LuImage className='text-2xl' />
                )}
                
            </div>
                    <p className='text-sm text-gray-500'>{icon?"Change Icon":"Pick Icon"}</p>
        </div>

        {isOpen && (

            <div className=''>
                <button 
                className=''
                onClick={() => setIsOpen(false)}
                >
                    <LuX className='text-2xl' />    
                    </button>
                <EmojiPicker    
                open={isOpen}
                onEmojiClick={(emoji) => 
                    onSelect(emoji?.imageUrl || "" )}
                   
                    />
          
       
    </div>
  )
}
</div>
  )
}

export default EmojiPickerPopup