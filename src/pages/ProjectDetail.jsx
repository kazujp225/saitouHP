import { Link, useParams } from 'react-router-dom'
import '../App.css'

const projects = {
    sagamihara: {
        title: "SAGAMIHARA RESIDENCE",
        jpTitle: "（仮称）相模原市相模原プロジェクト",
        location: "神奈川県相模原市",
        units: "38戸",
        specs: "3LDK / 70.5㎡",
        price: "¥4,500万〜",
        description: "都市の利便性と静寂が調和する場所。全38戸のプレミアムレジデンス。",
        image: "/src/assets/sagamihara_residence.png",
        status: "ON SALE"
    },
    minowa: {
        title: "MINOWA / IRIYA PROJECT",
        jpTitle: "（仮称）台東区三ノ輪・入谷プロジェクト",
        location: "東京都台東区",
        units: "18戸",
        specs: "1LDK - 2LDK",
        price: "完売御礼",
        description: "伝統と革新が交差する街に佇む、全18戸の隠れ家。",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
        status: "SOLD OUT"
    }
}

import Navigation from '../components/Navigation'

function ProjectDetail() {
    const { id } = useParams()
    const project = projects[id]

    if (!project) {
        return <div className="container" style={{ paddingTop: '120px' }}>Project not found</div>
    }

    return (
        <div className="app">
            <Navigation />

            <div className="project-hero" style={{ height: '60vh', position: 'relative', overflow: 'hidden' }}>
                <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div className="hero-overlay"></div>
                <div className="container" style={{ position: 'absolute', bottom: '4rem', left: '50%', transform: 'translateX(-50%)', width: '100%', zIndex: 1, color: '#fff' }}>
                    <div className="status-badge" style={{ display: 'inline-block', marginBottom: '1rem' }}>{project.status}</div>
                    <h1 className="giant-text" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>{project.title}</h1>
                </div>
            </div>

            <div className="container" style={{ paddingBottom: '80px' }}>
                <div className="split-layout" style={{ marginTop: '4rem' }}>
                    <div className="split-content">
                        <h2 className="section-heading">{project.jpTitle}</h2>
                        <p className="text-body" style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '2rem' }}>
                            {project.description}
                        </p>

                        <dl className="company-row">
                            <dt>所在地</dt>
                            <dd>{project.location}</dd>
                        </dl>
                        <dl className="company-row">
                            <dt>総戸数</dt>
                            <dd>{project.units}</dd>
                        </dl>
                        <dl className="company-row">
                            <dt>間取り</dt>
                            <dd>{project.specs}</dd>
                        </dl>
                        <dl className="company-row">
                            <dt>価格</dt>
                            <dd>{project.price}</dd>
                        </dl>

                        <div style={{ marginTop: '4rem' }}>
                            <Link to="/contact" className="btn-primary">資料請求 (Request Info)</Link>
                        </div>
                    </div>
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
                        <Link to="/privacy" style={{ marginTop: '1rem', fontSize: '0.8rem' }}>Privacy Policy</Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default ProjectDetail
