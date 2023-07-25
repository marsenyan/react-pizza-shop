import React from 'react';

export function Categories({ value, onChangeCategory }) {
  const categories = ['Todas', 'Carne', 'Deluxes', 'Picante', 'Vegeteriana', 'Mixta'];

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => (
          <li key={i} onClick={() => onChangeCategory(i)} className={value === i ? 'active' : ''}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}
