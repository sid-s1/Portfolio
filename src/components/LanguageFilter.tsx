import React from "react";

interface ILanguageFilter {
    filter: String,
    clickLanguageFilter: Function,
    selectedFilter: String
}

const LanguageFilter: React.FC<ILanguageFilter> = ({filter,clickLanguageFilter,selectedFilter}) => {
    const className = filter === selectedFilter ? "each-language-filter selected-language" : "each-language-filter";
    return <div className={className} onClick={() => clickLanguageFilter(filter)}>
        {filter}
    </div>
};

export default LanguageFilter;