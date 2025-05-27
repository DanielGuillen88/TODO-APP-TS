import { FILTERS_BUTTONS } from "../../consts";
import { type FilterValue } from "./types";

interface Props {
  
    // filterSelected: typeof TODO_FILTERS[keyof typeof TODO_FILTERS];
    // filterSelected: keyof typeof TODO_FILTERS;
    filterSelected: FilterValue;
    // onFilterChange: (filter: keyof typeof TODO_FILTERS) => void;
    onFilterChange: (filter: FilterValue) => void;

}

export const Filters: React.FC<Props> = (
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