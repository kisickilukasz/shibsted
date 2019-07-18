import * as React from 'react';

interface IButtonProps {
    children: string,
}

export const Button: React.FC<IButtonProps> = ({
    children,
}: IButtonProps) => (
    <button
        type="submit"
    >
        {children}
    </button>
);