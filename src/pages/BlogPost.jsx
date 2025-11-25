import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import '../App.css'
import Navigation from '../components/Navigation'
import { getBlogPost } from '../content/blog'

function BlogPost() {
    const { slug } = useParams()
    const post = getBlogPost(slug)

    if (!post) {
        return (
            <div className="app">
                <Navigation />
                <div className="container" style={{ paddingTop: '160px', textAlign: 'center' }}>
                    <h1>記事が見つかりません</h1>
                    <Link to="/blog" className="btn-primary" style={{ marginTop: '2rem', display: 'inline-block' }}>
                        ブログ一覧に戻る
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="app">
            <Navigation />

            <article className="container" style={{ paddingTop: '160px', paddingBottom: '120px' }}>
                <div className="blog-post-header">
                    <Link to="/blog" className="blog-back-link">← ブログ一覧に戻る</Link>
                    <span className="blog-post-date">{post.date}</span>
                    <h1 className="blog-post-title">{post.title}</h1>
                </div>

                {post.thumbnail && (
                    <div className="blog-post-thumbnail">
                        <img src={post.thumbnail} alt={post.title} />
                    </div>
                )}

                <div className="blog-post-content">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {post.content}
                    </ReactMarkdown>
                </div>
            </article>

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

export default BlogPost
