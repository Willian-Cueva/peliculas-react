import { MoviesGrid } from "../MoviesGrid/MoviesGrid";
import { Search } from "../Search/Search";

export function Landingpage() {
  return (
    <div>
      <Search />
      <MoviesGrid />
    </div>
  );
}
