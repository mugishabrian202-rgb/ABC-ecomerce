import { useParams, Routes, Route, Link } from 'react-router-dom';
import products from '../data/products';
import Reviews from './Reviews';

function ProductDetailPage() {
    const { productId } = useParams();
    const product = products.find(p => p.id === productId);

    if (!product) return <p>Product not found.</p>;

    return (
        <div>
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} width="200" />
            <p>{product.description}</p>
            <p><strong>{product.price}</strong></p>

            <Link to="reviews">See Reviews</Link>

            <Routes>
                <Route path="reviews" element={<Reviews reviews={product.reviews} />} />
            </Routes>
        </div>
    );
}

export default ProductDetailPage;
