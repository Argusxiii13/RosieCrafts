import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { products } from '../data/catalog'

function HomePage() {
  const featuredProducts = products.filter((product) => product.featured)

  return (
    <div className="page-stack">
      <section className="hero-section">
        <p className="eyebrow">Handmade Catalog</p>
        <h2>Unique handcrafted pieces made for thoughtful gifting and everyday joy.</h2>
        <p>
          Discover yarn creations, printed works, mystery boxes, and more. Each item is made
          with care and offered in limited quantities.
        </p>
        <Link className="primary-btn" to="/catalog">
          Browse the Catalog
        </Link>
      </section>

      <section className="section-block">
        <div className="section-head">
          <h2>Featured Products</h2>
          <Link to="/catalog">See full catalog</Link>
        </div>

        <div className="product-grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default HomePage