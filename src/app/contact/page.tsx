import ContactForm from '@/app/ui/contact/contact-form';
import PrivacyPolicyContent from '@/app/ui/privacy-policy';

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 bg-slate-50">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight">お問い合わせ</h1>
        <p className="mt-4 text-sm text-slate-600">
          下記フォームに必要事項をご入力のうえ送信してください。<br />
          内容を確認のうえ、担当者よりご連絡いたします。
        </p>
      </header>

      <ContactForm />
      <PrivacyPolicyContent />
    </main>
  );
}
