import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

import Navigation from '../components/Navigation'

import sagamiharaImage from '../assets/sagamihara_residence.png'

function Home() {
    useEffect(() => {
        // Simple scroll reveal effect
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // Parallax effect
        const handleScroll = () => {
            const scrolled = window.scrollY;
            const heroBg = document.querySelector('.hero-bg');
            if (heroBg) {
                heroBg.style.transform = `translateY(${scrolled * 0.5}px) scale(1.1)`;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="app">
            <Navigation />

            <header className="hero">
                <div className="hero-bg animate-zoom"></div>
                <div className="hero-overlay"></div>
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <h1 className="giant-text animate-reveal">
                        Finest<br />
                        Residence<br />
                        Factory
                    </h1>
                    <div className="hero-sub animate-in delay-3">
                        <p className="hero-copy">資産としての住まい、生涯のパートナー。</p>
                        <p style={{ marginTop: '1.5rem', fontWeight: 600, opacity: 0.9, letterSpacing: '0.05em' }}>
                            独創的な "Wholesale Company" を目指して。
                        </p>
                    </div>
                </div>
            </header>

            <section className="section container" id="concept">
                <div className="asym-grid">
                    <div className="reveal">
                        <span className="section-title">Philosophy</span>
                        <h2 className="concept-title">
                            AIMING FOR<br />
                            "WHOLESALE<br />
                            COMPANY"
                        </h2>
                    </div>
                    <div className="reveal" style={{ alignSelf: 'end' }}>
                        <p className="text-body">
                            独創的な "Wholesale Company" を目指して。<br /><br />
                            私たちは既成概念にとらわれず、<br />
                            不動産開発の新たな流儀を確立します。<br />
                            品質、スピード、そして美学。<br />
                            すべてにおいて妥協なき創造を。
                        </p>
                    </div>
                </div>
            </section>

            {/* Business Section (Image Based) */}
            <section className="section" style={{ backgroundColor: '#f5f5f7' }}>
                <div className="container">
                    <div className="split-layout reveal">
                        <div className="split-content">
                            <span className="section-title">BUSINESS FIELD</span>
                            <h2 className="section-heading">REAL ESTATE<br />DEVELOPMENT</h2>
                            <p className="text-body">
                                私たちは、ただ建物を造るのではなく、<br />
                                そこに住まう人々の「時間」と「空間」を<br />
                                最高品質で提供するプロフェッショナル集団です。
                            </p>
                            <div style={{ marginTop: '2rem' }}>
                                <a href="#" className="arrow-link">FOR DEVELOPERS {'->'}</a>
                            </div>
                        </div>
                        <div className="split-image">
                            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" alt="Business" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Ecosystem Section (LTV) */}
            <section className="section container">
                <div className="reveal">
                    <div style={{ textAlign: 'left', marginBottom: '4rem' }}>
                        <span className="section-title">OUR ECOSYSTEM</span>
                        <h2 className="section-heading">LIFETIME PARTNERSHIP</h2>
                        <p className="text-body" style={{ maxWidth: '600px' }}>
                            開発から販売、管理、そしてリノベーションまで。<br />
                            住まいのライフサイクルすべてに寄り添い、資産価値を最大化する<br />
                            複合的なソリューションを提供します。
                        </p>
                    </div>

                    <div className="ecosystem-grid">
                        <div className="eco-card">
                            <div className="eco-icon">01</div>
                            <h3 className="eco-title">DEVELOPMENT</h3>
                            <p className="eco-desc">独創的な開発</p>
                        </div>
                        <div className="eco-card">
                            <div className="eco-icon">02</div>
                            <h3 className="eco-title">SALES & BROKERAGE</h3>
                            <p className="eco-desc">最適なマッチング</p>
                        </div>
                        <div className="eco-card">
                            <div className="eco-icon">03</div>
                            <h3 className="eco-title">MANAGEMENT</h3>
                            <p className="eco-desc">資産価値の維持・向上</p>
                        </div>
                        <div className="eco-card">
                            <div className="eco-icon">04</div>
                            <h3 className="eco-title">RENOVATION</h3>
                            <p className="eco-desc">空間の再定義</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gateways Section (Channels) */}
            <section className="section container">
                <div className="reveal">
                    <span className="section-title">CHANNELS</span>
                    <h2 className="section-heading" style={{ marginBottom: '4rem' }}>SOLUTIONS FOR YOU</h2>

                    <div className="gateway-grid">
                        <GatewayItem
                            title="For Investors"
                            desc="資産形成・運用"
                            image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop"
                        />
                        <GatewayItem
                            title="For Landowners"
                            desc="土地活用・等価交換"
                            image="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2232&auto=format&fit=crop"
                        />
                        <GatewayItem
                            title="For Residents"
                            desc="理想の住まい探し"
                            image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
                        />
                        <GatewayItem
                            title="For B2B"
                            desc="デベロッパー協業"
                            image="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                        />
                    </div>
                </div>
            </section>

            <section className="section container" id="topics">
                <span className="section-title reveal">Topics</span>
                <div className="topic-list reveal">
                    <TopicItem date="2022.07" title="（仮称）相模原市相模原プロジェクトがスタートしました。" />
                    <TopicItem date="2022.06" title="（仮称）台東区三ノ輪・入谷プロジェクトがスタートしました。" />
                    <TopicItem date="2022.06" title="板橋志村（区分・名称未定）の販売がスタートしました。" />
                    <TopicItem date="2022.06" title="プレシャスハーモニー八王子（区分）の販売が終了しました。" />
                    <TopicItem date="2022.03" title="（仮称）川崎・大島プロジェクトがスタートしました。" />
                    <TopicItem date="2022.01" title="プレシャスハーモニー八王子（区分）の販売がスタートしました。" />
                </div>
            </section>

            {/* Projects Section (Image Based) */}
            <section className="section container" id="projects">
                <span className="section-title reveal">New Projects</span>

                <div className="split-layout reveal" style={{ marginBottom: '6rem' }}>
                    <div className="split-image">
                        <div className="status-badge">ON SALE</div>
                        <img src={sagamiharaImage} alt="Project 1" />
                    </div>
                    <div className="split-content">
                        <h3 className="section-heading" style={{ fontSize: '2.5rem' }}>SAGAMIHARA<br />RESIDENCE</h3>
                        <p className="text-body" style={{ fontWeight: 'bold' }}>
                            神奈川県相模原市。<br />
                            都市の利便性と静寂が調和する場所。<br />
                            全38戸のプレミアムレジデンス。
                        </p>
                        <div className="project-specs">
                            <span>3LDK / 70.5㎡</span>
                            <span>¥4,500万〜</span>
                        </div>
                        <div style={{ marginTop: '2rem' }}>
                            <Link to="/project/sagamihara" className="arrow-link">VIEW DETAILS {'->'}</Link>
                        </div>
                    </div>
                </div>

                <div className="split-layout reverse reveal">
                    <div className="split-image">
                        <div className="status-badge sold">SOLD OUT</div>
                        <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" alt="Project 2" />
                    </div>
                    <div className="split-content">
                        <h3 className="section-heading" style={{ fontSize: '2.5rem' }}>MINOWA / IRIYA<br />PROJECT</h3>
                        <p className="text-body">
                            東京都台東区三ノ輪。<br />
                            伝統と革新が交差する街に佇む、<br />
                            全18戸の隠れ家。
                        </p>
                        <div className="project-specs">
                            <span>1LDK - 2LDK</span>
                            <span>完売御礼</span>
                        </div>
                        <div style={{ marginTop: '2rem' }}>
                            <Link to="/project/minowa" className="arrow-link">VIEW DETAILS {'->'}</Link>
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: '4rem', textAlign: 'right' }} className="reveal">
                    <a href="#" className="arrow-link">
                        View Past Projects {'->'}
                    </a>
                </div>
            </section>

            <section className="section container" id="rent">
                <div className="asym-grid">
                    <div className="reveal">
                        <span className="section-title">For Rent</span>
                        <h3 className="section-heading">APARTMENT</h3>
                        <p className="text-body" style={{ marginTop: '1rem' }}>賃貸物件をお探しの方はこちら</p>
                    </div>
                    <div className="reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                        <a href="#" className="giant-link">Click Here {'→'}</a>
                    </div>
                </div>
            </section>

            {/* Company Profile (Trust) */}
            <section className="section container" id="company">
                <div className="reveal">
                    <span className="section-title">CORPORATE PROFILE</span>
                    <h2 className="section-heading">COMPANY INFO</h2>

                    <div className="company-grid">
                        <dl className="company-row">
                            <dt>社名</dt>
                            <dd>ファイネスト レジデンス ファクトリー株式会社</dd>
                        </dl>
                        <dl className="company-row">
                            <dt>所在地</dt>
                            <dd>〒102-0093 東京都千代田区平河町2-4-5 平河町Kビル8階</dd>
                        </dl>
                        <dl className="company-row">
                            <dt>連絡先</dt>
                            <dd>TEL: 03-5226-6094 / FAX: 03-5226-6091</dd>
                        </dl>
                        <dl className="company-row">
                            <dt>設立</dt>
                            <dd>平成13年1月</dd>
                        </dl>
                        <dl className="company-row">
                            <dt>資本金</dt>
                            <dd>1,000万円</dd>
                        </dl>
                        <dl className="company-row">
                            <dt>代表者</dt>
                            <dd>代表取締役 金谷 陽平</dd>
                        </dl>
                        <dl className="company-row">
                            <dt>宅建免許</dt>
                            <dd>東京都知事（4）第79936号</dd>
                        </dl>
                        <dl className="company-row">
                            <dt>加盟団体</dt>
                            <dd>
                                公益社団法人 東京都宅地建物取引業協会<br />
                                公益社団法人 全国宅地建物取引業保証協会
                            </dd>
                        </dl>
                        <dl className="company-row">
                            <dt>事業内容</dt>
                            <dd>
                                不動産の売買、賃貸借、管理及びそれらの仲介、販売代理業<br />
                                建築に関する内外装工事の設計、施工、管理及び請負
                            </dd>
                        </dl>
                        <dl className="company-row">
                            <dt>主要取引銀行</dt>
                            <dd>
                                大東京信用組合 / 興産信用金庫 / 西武信用金庫 / 三井住友銀行
                            </dd>
                        </dl>
                        <dl className="company-row">
                            <dt>主要取引先</dt>
                            <dd>
                                株式会社長谷工コーポレーション / 株式会社オンズコンフィアンス<br />
                                株式会社プロポライフ / 明和地所株式会社 ほか各デベロッパー<br />
                                奈良建設株式会社 / 株式会社片山組<br />
                                日本ハウズイング株式会社 / 株式会社東急コミュニティー
                            </dd>
                        </dl>
                        <dl className="company-row">
                            <dt>法律顧問</dt>
                            <dd>大空法律事務所 水澤恒男弁護士</dd>
                        </dl>
                    </div>
                </div>
            </section>

            {/* Access Map Section */}
            <section className="section container" id="access">
                <div className="reveal">
                    <span className="section-title">ACCESS</span>
                    <h2 className="section-heading">LOCATION</h2>
                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.828798624856!2d139.7376!3d35.6812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c7600000001%3A0x0!2z5p2x5Lqs6YO95Y2D5Luj55Sw5Yy65bmz5rKz55S677yS4oiS77yU4oiS77yV!5e0!3m2!1sja!2sjp!4v1650000000000!5m2!1sja!2sjp"
                            width="100%"
                            height="450"
                            style={{ border: 0, filter: 'grayscale(100%)' }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </section>

            <section className="section container" id="contact" style={{ paddingBottom: '160px' }}>
                <div className="reveal">
                    <span className="section-title">Contact</span>
                    <h2 className="giant-text" style={{ fontSize: 'clamp(3rem, 8vw, 10rem)', marginTop: '2rem' }}>
                        03-5226-6094
                    </h2>
                    <p className="text-body" style={{ marginTop: '2rem' }}>
                        お電話による直接のお問い合わせは、こちらへ。<br />
                        受付時間: 10:00 - 18:00 (土日祝除く)
                    </p>
                    <div className="contact-actions" style={{ marginTop: '4rem', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                        <Link to="/contact" className="btn-primary">資料請求 (Request Info)</Link>
                        <Link to="/contact" className="btn-secondary">お問い合わせ (Contact)</Link>
                    </div>
                </div>
            </section>

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
                        <a href="#">For Developers</a>
                        <a href="#company">Company Info</a>
                        <a href="#access">Access & Map</a>
                        <Link to="/contact">Contact</Link>
                        <Link to="/privacy" style={{ marginTop: '1rem', fontSize: '0.8rem' }}>Privacy Policy</Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}

function TopicItem({ date, title }) {
    return (
        <div className="topic-item">
            <div className="topic-date">{date}</div>
            <div className="topic-title">{title}</div>
        </div>
    )
}

function GatewayItem({ title, desc, image }) {
    return (
        <div className="gateway-item" style={{ backgroundImage: `url(${image})` }}>
            <div className="gateway-overlay"></div>
            <div className="gateway-content">
                <h3 className="gateway-title">{title}</h3>
                <p className="gateway-desc">{desc}</p>
                <a href="#" className="arrow-link" style={{ color: '#fff', borderColor: '#fff' }}>View Solutions {'->'}</a>
            </div>
        </div>
    )
}

export default Home
