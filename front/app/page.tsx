'use client';

import { CardComponent } from '@/components/card';
import { getProducts } from '@/services/products';
import { useEffect, useState } from 'react';
import { Product } from '@/services/products';

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await getProducts();
      setProducts(productsData);
    };

    fetchProducts();
  }, []);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {products.map((product) => (
        <CardComponent key={product.id} product={product} />
      ))}
    </section>
  );
}
