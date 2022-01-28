interface IProductItemProps {
  product:{
    item: string;
    amountPaid: number;
    quantity: number;
    valuePerItem: number;
  }
}

const ProductItem: React.FC<IProductItemProps> = ({product}) => {
  return (
    <li>
      <strong>{product.item} </strong>
      <span>R$ {product.amountPaid}</span>
      <p>{product.quantity}</p>
      <strong>R$ {product.valuePerItem}</strong>
    </li>
  );
}

export default ProductItem;
