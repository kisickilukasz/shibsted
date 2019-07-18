import * as React from 'react';

interface IInputProps {
    className: string;
    type: string;
    value: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<IInputProps> = ({
    className,
    type,
    value,
    placeholder,
    onChange,
}: IInputProps) => (
    <input
        className={className}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
    />
);