import { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { products } from '../data/catalog'
import { contact } from '../data/contact'

function ProductDetailPage() {
  const { productId } = useParams()
  const product = products.find((item) => item.id === productId)
  const [activePhotoIndex, setActivePhotoIndex] = useState(0)
  const touchStartXRef = useRef(null)

  useEffect(() => {
    setActivePhotoIndex(0)
  }, [productId])

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
  const totalPhotos = product.photos.length

  const showPreviousPhoto = () => {
    setActivePhotoIndex((current) => (current === 0 ? totalPhotos - 1 : current - 1))
  }

  const showNextPhoto = () => {
    setActivePhotoIndex((current) => (current === totalPhotos - 1 ? 0 : current + 1))
  }

  const handleTouchStart = (event) => {
    touchStartXRef.current = event.changedTouches[0].clientX
  }

  const handleTouchEnd = (event) => {
    if (touchStartXRef.current === null) {
      return
    }

    const touchEndX = event.changedTouches[0].clientX
    const deltaX = touchEndX - touchStartXRef.current
    const swipeThreshold = 40

    if (deltaX > swipeThreshold) {
      showPreviousPhoto()
    } else if (deltaX < -swipeThreshold) {
      showNextPhoto()
    }

    touchStartXRef.current = null
  }

  return (
    <section className="product-detail">
      <div className="detail-gallery">
        <div
          className="detail-main-image-wrap"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <img
            key={product.photos[activePhotoIndex]}
            className="detail-main-image"
            src={product.photos[activePhotoIndex]}
            alt={`${product.name} view ${activePhotoIndex + 1}`}
            loading="lazy"
          />

          {totalPhotos > 1 && (
            <>
              <button
                className="gallery-arrow gallery-arrow-left"
                type="button"
                onClick={showPreviousPhoto}
                aria-label="Show previous image"
              >
                <svg className="gallery-arrow-icon" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                  <path d="M12 4 L6 10 L12 16" />
                </svg>
              </button>
              <button
                className="gallery-arrow gallery-arrow-right"
                type="button"
                onClick={showNextPhoto}
                aria-label="Show next image"
              >
                <svg className="gallery-arrow-icon" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                  <path d="M8 4 L14 10 L8 16" />
                </svg>
              </button>
              <p className="detail-image-count">
                {activePhotoIndex + 1} / {totalPhotos}
              </p>
            </>
          )}
        </div>

        {totalPhotos > 1 && (
          <div className="detail-thumb-strip" aria-label="Product image gallery thumbnails">
            {product.photos.map((photo, index) => {
              return (
                <button
                  key={photo}
                  type="button"
                  className={`detail-thumb ${index === activePhotoIndex ? 'active' : ''}`}
                  onClick={() => setActivePhotoIndex(index)}
                  aria-label={`Show image ${index + 1}`}
                  aria-current={index === activePhotoIndex}
                >
                  <img src={photo} alt={`${product.name} thumbnail ${index + 1}`} loading="lazy" />
                </button>
              )
            })}
          </div>
        )}
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