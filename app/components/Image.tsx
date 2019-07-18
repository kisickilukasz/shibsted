import * as React from 'react';

interface IImageProps {
    key: string;
    src: string;
    alt: string;
}

export const Image: React.FC<IImageProps> = ({
    key,
    src,
    alt,
}: IImageProps) => (
    <img
        key={key}
        src={src}
        alt={alt}
    />
);
