import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function Search() {
  const vegProducts = useSelector((state) => state.products.Veg);
  const nonVegProducts = useSelector((state) => state.products.Nonveg);

  // Combine Veg and Non-Veg products
  const allProducts = [...vegProducts, ...nonVegProducts];

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  // Real-time search as user types
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredItems([]);
    } else {
      const filtered = allProducts.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredItems(filtered);
    }
  }, [searchTerm, allProducts]);

  return (
    <div className="p-4 max-w-md mx-auto">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="🔍 Search for products..."
        className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {filteredItems.length > 0 ? (
        <ul className="mt-4 space-y-2">
          {filteredItems.map((item, index) => (
            <li key={index} className="p-2 bg-gray-100 rounded-md shadow-sm">
              <strong>{item.name}</strong> - ${item.price}
            </li>
          ))}
        </ul>
      ) : (
        searchTerm && <p className="mt-4 text-gray-500">No data matched.</p>
      )}
    </div>
  );
}

export default Search;
