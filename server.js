import 'dotenv/config';
import express from 'express';
import { Resend } from 'resend';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Resend設定
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(express.json());

// 静的ファイルを配信
app.use(express.static(path.join(__dirname, 'dist')));

// お問い合わせAPI
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, type, message } = req.body;

  try {
    await resend.emails.send({
      from: 'お問い合わせ <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL || 'info@example.com',
      subject: `【お問い合わせ】${type} - ${name}様`,
      html: `
        <h2>お問い合わせ内容</h2>
        <p><strong>お名前:</strong> ${name}</p>
        <p><strong>メールアドレス:</strong> ${email}</p>
        <p><strong>電話番号:</strong> ${phone || '未入力'}</p>
        <p><strong>お問い合わせ種別:</strong> ${type}</p>
        <p><strong>メッセージ:</strong></p>
        <p>${message}</p>
      `
    });

    res.json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    res.status(500).json({ success: false, error: 'メール送信に失敗しました' });
  }
});

// SPAのルーティング対応
app.get('/{*path}', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
