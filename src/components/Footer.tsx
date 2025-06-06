import { Filters } from "./Filters";
import { type FilterValue } from "./types";

interface FooterProps {
    activeCount: number;
    completedCount: number;
    filterSelected: FilterValue;
    onClearCompleted: () => void;
    handleFilterChange: (filter: FilterValue) => void;
}

export const Footer: React.FC<FooterProps> = ({ 
    activeCount = 0,
    completedCount = 0,
    filterSelected,
    onClearCompleted,
    handleFilterChange
 }) => {
  return (
    <footer className="footer">

      <span className="todo-count">
        <strong>Pendientes: {activeCount}</strong>
      </span>
      
        <Filters
            filterSelected={filterSelected}
            onFilterChange={handleFilterChange}
        />

        {

            completedCount > 0 && (
                <button
                    className="clear-completed"
                    onClick={onClearCompleted}
                >
                    Limpiar completados
                </button>
            )
        }

    </footer>
  )
}
export default Footer;