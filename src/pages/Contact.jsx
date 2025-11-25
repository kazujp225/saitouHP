import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

import Navigation from '../components/Navigation'

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        type: '資料請求 (Request Info)',
        message: ''
    })
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            if (response.ok) {
                setSubmitted(true)
            } else {
                alert('送信に失敗しました。もう一度お試しください。')
            }
        } catch (error) {
            alert('送信に失敗しました。もう一度お試しください。')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="app">
            <Navigation />

            <div className="container" style={{ paddingTop: '160px', paddingBottom: '120px' }}>
                <h1 className="section-heading" style={{ marginBottom: '4rem' }}>CONTACT</h1>

                {submitted ? (
                    <div className="reveal visible" style={{ textAlign: 'center', padding: '6rem 0' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: 900 }}>Thank you for your inquiry.</h2>
                        <p className="text-body">
                            お問い合わせありがとうございます。<br />
                            担当者より折り返しご連絡させていただきます。
                        </p>
                        <Link to="/" className="btn-primary" style={{ marginTop: '3rem', display: 'inline-block' }}>Back to Home</Link>
                    </div>
                ) : (
                    <div className="contact-layout reveal visible">
                        {/* Left Column: Info */}
                        <div className="contact-info">
                            <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '2rem', lineHeight: 1.2 }}>
                                We'd love to<br />hear from you.
                            </h2>
                            <p className="text-body" style={{ marginBottom: '3rem' }}>
                                物件に関するお問い合わせ、資料請求、その他ご質問等は、
                                下記フォームよりお気軽にお問い合わせください。
                            </p>

                            <div style={{ marginBottom: '4rem' }}>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: 900, color: '#0f172a', marginBottom: '1.5rem', letterSpacing: '0.1em' }}>PHONE</h3>
                                <p className="contact-phone">03-5226-6094</p>
                                <p style={{ fontSize: '1.1rem', color: '#666', marginTop: '1rem', fontWeight: 700 }}>10:00 - 18:00 (土日祝除く)</p>
                            </div>

                            <div>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: 900, color: '#0f172a', marginBottom: '1.5rem', letterSpacing: '0.1em' }}>ADDRESS</h3>
                                <p className="contact-address">
                                    〒102-0093<br />
                                    東京都千代田区平河町2-4-5<br />
                                    平河町Kビル8階
                                </p>
                            </div>
                        </div>

                        {/* Right Column: Form */}
                        <div className="contact-form-container">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label className="form-label">
                                        お名前 (Name) <span className="required-mark">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-input"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="山田 太郎"
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">
                                        メールアドレス (Email) <span className="required-mark">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-input"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="info@example.com"
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">
                                        電話番号 (Phone)
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        className="form-input"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="03-1234-5678"
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">
                                        お問い合わせ種別 (Inquiry Type)
                                    </label>
                                    <div style={{ position: 'relative' }}>
                                        <select
                                            name="type"
                                            className="form-select"
                                            value={formData.type}
                                            onChange={handleChange}
                                        >
                                            <option>資料請求 (Request Info)</option>
                                            <option>物件見学 (View Property)</option>
                                            <option>その他 (Other)</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="form-label">
                                        お問い合わせ内容 (Message) <span className="required-mark">*</span>
                                    </label>
                                    <textarea
                                        name="message"
                                        className="form-textarea"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="6"
                                        placeholder="ご質問やご要望をご記入ください。"
                                    ></textarea>
                                </div>

                                <div style={{ marginTop: '3rem', textAlign: 'right' }}>
                                    <button type="submit" className="btn-primary" style={{ minWidth: '200px', cursor: 'pointer' }} disabled={loading}>{loading ? '送信中...' : '送信する (Submit)'}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
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

export default Contact
