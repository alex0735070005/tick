
import React from 'react';

const ProjectOption = ({ innerProps, value, label, isSelected }) => {
    const active = isSelected && value ? ' t-active':'';
    const optionClass = (value ? 'tick-option' : 'tick-label') + active
    return (
        <div {...innerProps}>
            <span
                className={optionClass}
                onClick={(e)=>{
                    if(!value){
                        e.stopPropagation();
                    }
                }}
            >
                {label}
            </span>
        </div>)
}

export default ProjectOption;