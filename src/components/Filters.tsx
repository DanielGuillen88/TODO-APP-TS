import { FILTERS_BUTTONS } from "../consts";
import { type FilterValue } from "./types";

interface FiltersProps {  
    filterSelected: FilterValue;
    onFilterChange: (filter: FilterValue) => void;
}

export const Filters: React.FC<FiltersProps> = (
    { filterSelected, onFilterChange }) => {
  return (
    <ul className="filters">
        {
            Object.entries(FILTERS_BUTTONS).map(( [key, { href, literal }] ) => {
                // const isSelected = filterSelected === key;
                const isSelected = key === filterSelected;
                const className = isSelected ? "selected" : "";
                return (
                    <li key={key}>
                        <a
                            href={href}
                            className={className}
                            onClick={(event) => {
                                event.preventDefault();
                                onFilterChange(key as FilterValue);
                            }
                            }
                        >
                            {literal}
                        </a>
                    </li>
                );
            })
        }
    </ul>
  );
}