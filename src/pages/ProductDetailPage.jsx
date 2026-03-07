import { Link, useParams } from 'react-router-dom'
import { products } from '../data/catalog'
import { contact } from '../data/contact'

function ProductDetailPage() {
  const { productId } = useParams()
  const product = products.find((item) => item.id === productId)

  if (!product) {
    return (
      <section className="page-stack">
        <h2>Product Not Found</h2>
        <p>This item may have been removed or renamed.</p>
        <Link to="/catalog" className="primary-btn">
          Back to Catalog
        </Link>
      </section>
    )
  }

  const isAvailable = product.status === 'available'

  return (
    <section className="product-detail">
      <div className="detail-gallery">
        {product.photos.map((photo, index) => (
          <img key={photo} src={photo} alt={`${product.name} view ${index + 1}`} loading="lazy" />
        ))}
      </div>

      <div className="detail-content">
        <div className="detail-top-row">
          <p className="eyebrow detail-status-text">{isAvailable ? 'Available Now' : 'Currently Sold'}</p>
          <Link to="/catalog" className="detail-back-link">
            Back to Catalog
          </Link>
        </div>
        <h2>{product.name}</h2>
        <p className="detail-price">{product.price || 'Ask for price'}</p>
        <p>{product.fullDescription}</p>

        <div className="detail-cta-group">
          <a className="primary-btn" href={`mailto:${contact.email}`}>
            Interested? Contact me to order!
          </a>
        </div>
      </div>
    </section>
  )
}

export default ProductDetailPage