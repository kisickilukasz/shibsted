import * as React from 'react';
import { Input } from "./Input";
import { Button } from "./Button";

interface ISearchSectionProps {
    query: string;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchSection: React.FC<ISearchSectionProps> = ({
    query,
    onSubmit,
    onChange,
}: ISearchSectionProps) => (
    <form onSubmit={onSubmit}>
        <Input
            type="text"
            value={query}
            onChange={onChange}
        />
        <Button>
            Search
        </Button>
    </form>
);