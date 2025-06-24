import Link from 'next/link';
import Form from '@/app/ui/contact/contact-form';
import { kosugiMaru } from '@/app/ui/fonts';

export default function Page() {
  return (
    <>
      <div className="flex justify-center gap-4 mt-4">
        <h2 className={`text-2xl font-bold ${kosugiMaru.className}`}>お問い合わせ</h2>
      </div>
      <div className="text-center mt-4">
        <p>下記メールフォーム、またはお電話にてお問い合わせください。</p>
      </div>
      <Form />
    </>
  )
}
