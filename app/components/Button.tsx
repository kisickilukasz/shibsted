import * as React from 'react';

interface IButtonProps {
    className: string,
    children: string,
}

export const Button: React.FC<IButtonProps> = ({
    className,
    children,
}: IButtonProps) => (
    <button
        className={className}
        type="submit"
    >
        {children}
    </button>
);