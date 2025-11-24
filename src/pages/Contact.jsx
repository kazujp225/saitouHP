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

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Simulate form submission
        console.log('Form submitted:', formData)
        setSubmitted(true)
    }

    return (
        <div className="app">
            <Navigation />

            <div className="container" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
                <h1 className="section-heading" style={{ marginBottom: '4rem' }}>CONTACT</h1>

                {submitted ? (
                    <div className="reveal visible" style={{ textAlign: 'center', padding: '4rem 0' }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Thank you for your inquiry.</h2>
                        <p className="text-body">
                            お問い合わせありがとうございます。<br />
                            担当者より折り返しご連絡させていただきます。
                        </p>
                        <Link to="/" className="btn-primary" style={{ marginTop: '2rem', display: 'inline-block' }}>Back to Home</Link>
                    </div>
                ) : (
                    <div className="reveal visible" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <p className="text-body" style={{ marginBottom: '3rem' }}>
                            物件に関するお問い合わせ、資料請求、その他ご質問等は、<br />
                            下記フォームよりお気軽にお問い合わせください。
                        </p>

                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div className="form-group">
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', fontSize: '0.9rem' }}>お名前 (Name) <span style={{ color: 'red' }}>*</span></label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    style={{ width: '100%', padding: '1rem', border: '1px solid #ddd', borderRadius: '4px', fontSize: '1rem' }}
                                    placeholder="山田 太郎"
                                />
                            </div>

                            <div className="form-group">
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', fontSize: '0.9rem' }}>メールアドレス (Email) <span style={{ color: 'red' }}>*</span></label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    style={{ width: '100%', padding: '1rem', border: '1px solid #ddd', borderRadius: '4px', fontSize: '1rem' }}
                                    placeholder="info@example.com"
                                />
                            </div>

                            <div className="form-group">
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', fontSize: '0.9rem' }}>電話番号 (Phone)</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    style={{ width: '100%', padding: '1rem', border: '1px solid #ddd', borderRadius: '4px', fontSize: '1rem' }}
                                    placeholder="03-1234-5678"
                                />
                            </div>

                            <div className="form-group">
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', fontSize: '0.9rem' }}>お問い合わせ種別 (Inquiry Type)</label>
                                <select
                                    name="type"
                                    value={formData.type}
                                    onChange={handleChange}
                                    style={{ width: '100%', padding: '1rem', border: '1px solid #ddd', borderRadius: '4px', fontSize: '1rem', backgroundColor: '#fff' }}
                                >
                                    <option>資料請求 (Request Info)</option>
                                    <option>物件見学 (View Property)</option>
                                    <option>その他 (Other)</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', fontSize: '0.9rem' }}>お問い合わせ内容 (Message) <span style={{ color: 'red' }}>*</span></label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="6"
                                    style={{ width: '100%', padding: '1rem', border: '1px solid #ddd', borderRadius: '4px', fontSize: '1rem', resize: 'vertical' }}
                                    placeholder="ご質問やご要望をご記入ください。"
                                ></textarea>
                            </div>

                            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                                <button type="submit" className="btn-primary" style={{ minWidth: '200px', cursor: 'pointer' }}>送信する (Submit)</button>
                            </div>
                        </form>
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
