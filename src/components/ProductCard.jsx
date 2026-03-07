import { Link } from 'react-router-dom'

function ProductCard({ product }) {
  const isAvailable = product.status === 'available'

  return (
    <Link to={`/catalog/${product.id}`} className="product-card" aria-label={`View details for ${product.name}`}>
      <div className="product-image-link">
        <img src={product.photos[0]} alt={product.name} className="product-image" loading="lazy" />
      </div>

      <div className="product-card-body">
        <div className="product-top-row">
          <h3>{product.name}</h3>
          <span className={`status-badge ${isAvailable ? 'available' : 'sold'}`}>
            {isAvailable ? 'Available' : 'Sold'}
          </span>
        </div>

        <p>{product.shortDescription}</p>

        <div className="product-bottom-row">
          <span className="price">{product.price || 'Ask for price'}</span>
          <span className="view-link">View details</span>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard