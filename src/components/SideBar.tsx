import './../styles/sidebar.scss';
import { Button } from './Button';

interface SideBarProps {
  genres: GenreProps[];
  selectedGenreId: number;
  action: any;
}

interface GenreProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export function SideBar({action, genres, selectedGenreId}:SideBarProps) {
  

   return (
     <>
     <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => action(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
     </>
   );
}