import * as React from 'react';

interface IImageProps {
    className: string;
    key: string;
    src: string;
    alt: string;
}

export const Image: React.FC<IImageProps> = ({
    className,
    key,
    src,
    alt,
}: IImageProps) => (
    <img
        className={className}
        key={key}
        src={src}
        alt={alt}
    />
);
