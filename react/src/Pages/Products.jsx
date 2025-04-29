import React from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../db/supabaseClient';
import { useEffect, useState } from 'react';
import ProductCard from '../components/Cards/ProductCards';

function Products() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data, error } = await supabase
          .from('Iphone_Electronic')
          .select('*')
          .eq('category', categoryName);

        if (error) {
          console.error('Error fetching products:', error);
        } else {
          setProducts(data);
        }
      } catch (err) {
        console.error('Unexpected error:', err);
      }
    };

    if (categoryName) {
      fetchProducts();
    }
  }, [categoryName]);

  const SeeMoreRouting = (productId) => {
    console.log('See More clicked!');
    console.log('Product Id:', productId);
    window.location.href = `/product-details/${productId}`;
  };

  return (
    <div>
      <h1>Products Page</h1>
      {categoryName && <p>Category: {categoryName}</p>}

      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard
            SeeMore={() => SeeMoreRouting(product.id)} // Pass a function reference
            image={product.images?.[0] || 'https://th.bing.com/th/id/OIP.fLz_nyWcsH8YBnUzKD8eCAHaFl?rs=1&pid=ImgDetMain'}
            key={product.id}
            name={product.name}
            price={product.price}
            onBuyNow={() => console.log('Buy Now clicked for', product.name)}
          />
        ))
      ) : (
        <p>No products found for this category.</p>
      )}
    </div>
  );
}

export default Products;