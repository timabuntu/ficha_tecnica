import ProductItem from "../ProductItem";

const ProductList: React.FC = () => {
  const products = [
    {
      item: 'abobrinha',
      amountPaid: 2.5,
      quantity: 1000,
      valuePerItem: 2.5
    },
    {
      item: 'cebola',
      amountPaid: 3.7,
      quantity: 1000,
      valuePerItem: 3.7
    },
    {
      item: 'chuchu',
      amountPaid: 1.2,
      quantity: 1000,
      valuePerItem: 1.2
    },
    {
      item: 'morango',
      amountPaid: 5,
      quantity: 1000,
      valuePerItem: 5
    },
  ]
  return (

    <ul>
      {products.map((product, index) => {
        return <ProductItem  product={product} />
      })}
    </ul>

  );
}

export default ProductList;
