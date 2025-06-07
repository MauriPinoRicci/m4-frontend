'use client';

import { Card, CardBody, CardHeader, Image } from '@heroui/react';
import { Product } from '@/services/products';

interface CardComponentProps {
  product: Product;
}

export const CardComponent = ({ product }: CardComponentProps) => {
  return (
    <div className="p-4">
      <Card className="py-4">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">{product.name}</p>
          <small className="text-default-500">Stock: {product.stock}</small>
          <h4 className="font-bold text-large">${product.price}</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt={product.name}
            className="object-cover rounded-xl"
            src={product.image}
            width={270}
          />
          <p className="text-sm mt-2">{product.description}</p>
        </CardBody>
      </Card>
    </div>
  );
};
