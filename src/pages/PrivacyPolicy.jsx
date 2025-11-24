import { Link } from 'react-router-dom'
import '../App.css'

import Navigation from '../components/Navigation'

function PrivacyPolicy() {
    return (
        <div className="app">
            <Navigation />

            <div className="container" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
                <h1 className="section-heading" style={{ marginBottom: '4rem' }}>Privacy Policy</h1>

                <div className="text-body" style={{ maxWidth: '800px' }}>
                    <p style={{ marginBottom: '2rem' }}>
                        当社は、個人情報の重要性を認識し、個人情報保護に関する法令およびその他の規範を遵守し、 個人情報の適正な利用と管理を図るために、下記の通り対応いたします。
                    </p>

                    <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginTop: '3rem', marginBottom: '1rem' }}>1. 利用目的</h3>
                    <ol style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
                        <li>不動産の売買・賃貸、それらの代理・仲介・管理その他付帯する事業</li>
                        <li>新築住宅の開発、建築、その他付帯する事業</li>
                        <li>上記の事業に関して、郵便・電子メールによる営業活動、顧客動向分析および商品・営業手法開発等の調査分析</li>
                        <li>上記 1. の目的の達成に必要な範囲での、個人情報の第三者への提供</li>
                    </ol>

                    <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginTop: '3rem', marginBottom: '1rem' }}>2. 個人情報の第三者への提供</h3>
                    <p style={{ marginBottom: '1rem' }}>
                        お客様の個人情報は上記利用目的の達成に必要な範囲で、以下の相手先に対して書面・郵便物・電話・電子メール等で提供されることがあります。なお、ご本人からの同意がある場合を除いて、ご本人からの申し出により、相手先への提供は停止いたします。
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                        <li style={{ marginBottom: '0.5rem' }}><strong>(1) 個人情報を提供する相手先</strong></li>
                        <li style={{ paddingLeft: '1rem', marginBottom: '0.5rem' }}>・新規物件の販売における販売代理会社・媒介会社</li>
                        <li style={{ paddingLeft: '1rem', marginBottom: '0.5rem' }}>・不動産取引の付帯業務における金融機関、司法書士、土地家屋調査士、不動産管理会社、保険会社</li>
                        <li style={{ paddingLeft: '1rem', marginBottom: '0.5rem' }}>・その他、利用目的の達成に必要な範囲の相手先</li>
                    </ul>

                    <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginTop: '3rem', marginBottom: '1rem' }}>3. 提供される個人情報の項目</h3>
                    <p>
                        氏名・住所・電話番号・電子メールアドレス・その他利用目的達成に必要な範囲の項目
                    </p>

                    <div style={{ marginTop: '4rem', padding: '2rem', backgroundColor: '#f5f5f7', borderRadius: '8px' }}>
                        <h4 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>お問い合わせ窓口</h4>
                        <p>
                            ファイネスト レジデンス ファクトリー株式会社<br />
                            TEL: 03-5226-6094<br />
                            受付時間: 10:00 - 18:00 (土日祝除く)
                        </p>
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

export default PrivacyPolicy
