import './CategoryList.css';

function CategoryList({ categories, activeCat, setActiveCat }) {
  const cats = categories.map(cat =>
    <li
      key={cat}
      className={cat === activeCat ? 'active grow' : 'grow'}
      onClick={() => setActiveCat(cat)}
    >
      {cat}
    </li>
  );
  return (
    <ul className="CategoryList">
      {cats}
    </ul>
  );
}

export default CategoryList;