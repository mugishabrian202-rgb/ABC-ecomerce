import products from '../data/products';
import ProductCard from '../components/ProductCard';
import { useSearchParams } from 'react-router-dom';

function ProductPage() {
    const [searchParams] = useSearchParams();
    const category = searchParams.get("category");

    const filtered = category
        ? products.filter(p => p.category === category)
        : products;

    return (
        <div>
            <h1>Our Products</h1>
            {category && <p>Filtered by: <strong>{category}</strong></p>}
            <div className="product-grid">
                {filtered.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default ProductPage;
