import { Link } from 'react-router-dom'
import '../App.css'
import Navigation from '../components/Navigation'
import { blogPosts } from '../content/blog'

function Blog() {
    return (
        <div className="app">
            <Navigation />

            <div className="container" style={{ paddingTop: '160px', paddingBottom: '120px' }}>
                <h1 className="section-heading" style={{ marginBottom: '4rem' }}>BLOG</h1>

                <div className="blog-grid">
                    {blogPosts.map((post) => (
                        <Link to={`/blog/${post.slug}`} key={post.slug} className="blog-card">
                            <div className="blog-card-image">
                                <img src={post.thumbnail} alt={post.title} />
                            </div>
                            <div className="blog-card-content">
                                <span className="blog-card-date">{post.date}</span>
                                <h2 className="blog-card-title">{post.title}</h2>
                                <p className="blog-card-excerpt">{post.excerpt}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <footer className="footer">
                <div className="footer-content">
                    <div>
                        <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '1rem' }}>FRF.inc</h2>
                        <p className="text-small">
                            ファイネスト レジデンス ファクトリー株式会社<br />
                            Tel: 03-5226-6094
                        </p>
                    </div>

                    <div className="footer-links">
                        <Link to="/">Home</Link>
                        <Link to="/blog">Blog</Link>
                        <Link to="/privacy" style={{ marginTop: '1rem', fontSize: '0.8rem' }}>Privacy Policy</Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Blog
