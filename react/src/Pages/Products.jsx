import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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

  const navigate = useNavigate();

  const SeeMoreRouting = (productId) => {
    console.log('See More clicked!');
    console.log('Product Id:', productId);  
    navigate(`/product-details/${productId}`);
    const productInfo = products.find((product) => product.id === productId);
    if (productInfo) {
      localStorage.setItem('selectedProduct', JSON.stringify(productInfo));
    }
  };

  return (
    <div className="container mt-5  py-4">
      <h1 className="text-center mb-4">Products Page</h1>
      {categoryName && <p className="text-center text-muted">Category: <strong>{categoryName}</strong></p>}

      {products.length > 0 ? (
        <div className="row">
          {products.map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
              <ProductCard
                SeeMore={() => SeeMoreRouting(product.id)}
                image={product.images?.[0] || 'https://th.bing.com/th/id/OIP.fLz_nyWcsH8YBnUzKD8eCAHaFl?rs=1&pid=ImgDetMain'}
                name={product.name}
                price={product.price}
                onBuyNow={() => console.log('Buy Now clicked for', product.name)}
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-danger">No products found for this category.</p>
      )}
    </div>
  );
}

export default Products;