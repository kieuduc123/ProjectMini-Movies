import React from 'react';

const Button = ({onClick,className,type="button",bgColor = "primary" ,children}) => {
    let bgClassName = 'bg-primary';
    return (
        <button  type={type}
        onClick={onClick} className= {`mt-3 py-3 px-6 rounded-lg capitalize ${bgClassName}w-full mt-auto ${className}`}>{children}</button>
    );
};

export default Button;