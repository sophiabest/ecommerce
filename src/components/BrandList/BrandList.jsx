import './BrandList.css';

function BrandList({ brands, activeBrand, setActiveBrand }) {
    const brnds = brands.map(brand =>
      <li
        key={brand}
        className={brand === activeBrand ? 'active grow' : 'grow'}
        onClick={() => setActiveBrand(brand)}
      >
        {brand}
      </li>
    );
    return (
      <ul className="BrandList">
        {brnds}
      </ul>
    );
  }
  
  export default BrandList;