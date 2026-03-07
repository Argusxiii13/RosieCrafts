import { useMemo, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { catalogCategories, categoryLabels, products } from '../data/catalog'

function CatalogPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [sortBy, setSortBy] = useState('name-asc')

  const visibleProducts = useMemo(() => {
    const filtered =
      activeCategory === 'all'
        ? products
        : products.filter((product) => product.category === activeCategory)

    const sorted = [...filtered]

    if (sortBy === 'name-asc') {
      sorted.sort((a, b) => a.name.localeCompare(b.name))
    }

    if (sortBy === 'available-first') {
      sorted.sort((a, b) => {
        if (a.status === b.status) {
          return a.name.localeCompare(b.name)
        }

        return a.status === 'available' ? -1 : 1
      })
    }

    return sorted
  }, [activeCategory, sortBy])

  return (
    <section className="page-stack">
      <div className="section-head">
        <h2>Catalog</h2>
        <p>Filter by category and browse handmade pieces.</p>
      </div>

      <div className="catalog-controls">
        <div className="filter-row" role="group" aria-label="Product categories">
          {catalogCategories.map((category) => (
            <button
              key={category}
              type="button"
              className={activeCategory === category ? 'chip active' : 'chip'}
              onClick={() => setActiveCategory(category)}
            >
              {categoryLabels[category]}
            </button>
          ))}
        </div>

        <label className="sort-label">
          Sort by
          <select value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
            <option value="name-asc">Name (A-Z)</option>
            <option value="available-first">Availability</option>
          </select>
        </label>
      </div>

      <div className="product-grid">
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default CatalogPage