import * as React from 'react';

interface IInputProps {
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<IInputProps> = ({
    type,
    value,
    onChange,
}: IInputProps) => (
    <input
        type={type}
        value={value}
        onChange={onChange}
    />
);