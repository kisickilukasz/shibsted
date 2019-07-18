import * as React from 'react';
import {SearchInput} from "./styled/SearchInput";
import {SubmitButton} from "./styled/SubmitButton";
import {SearchSectionWrapper} from "./styled/SearchSectionWrapper";

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
    <SearchSectionWrapper>
        <form onSubmit={onSubmit}>
            <SearchInput
                className=""
                type="text"
                value={query}
                placeholder="Search for gifs and images"
                onChange={onChange}
            />
            <SubmitButton
                className=""
            >
                Search
            </SubmitButton>
        </form>
    </SearchSectionWrapper>
);