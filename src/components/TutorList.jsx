import { useRef, useState } from 'react';
import TutorCard from './TutorCard';
import { useBioClamp } from '../hooks/useBioClamp';

export default function TutorList({
  tutors,
  favorites,
  selectedId,
  onSelect,
  onToggleFavorite,
  style,
}) {
  const containerRef = useRef(null);
  const [visibleCount, setVisibleCount] = useState(20);
  useBioClamp(containerRef, [tutors]);

  return (
    <>
      <div className="tutor-grid" ref={containerRef} style={style}>
        {tutors.slice(0, visibleCount).map((tutor) => (
          <TutorCard
            key={tutor.id}
            tutor={tutor}
            isFavorite={favorites.includes(tutor.id)}
            isSelected={tutor.id === selectedId}
            onSelect={() => onSelect(tutor.id)}
            onToggleFavorite={() => onToggleFavorite(tutor.id)}
          />
        ))}
      </div>
  
      {visibleCount < tutors.length && (
        <button
          type="button"
          onClick={() => setVisibleCount((prev) => prev + 20)}
        >
          Показати ще
        </button>
      )}
    </>
  );
}
