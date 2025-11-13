'use server'

import nodemailer from 'nodemailer';
import { sendMailSchema } from './sendMailSchema';

export type State = {
  errors?: {
    name?: string[];
    kana?: string[];
    email?: string[];
    phone?: string[];
    message?: string[];
  };
  values?: {
    inquiryType?: string;
    name?: string;
    kana?: string;
    email?: string;
    phone?: string;
    message?: string;
  };
  message?: string | null;
};


export async function sendMail(_prevState: State, formData: FormData): Promise<State> {
  const inquiryType = formData.get('inquiryType');
  const validatedFields = sendMailSchema.safeParse({
    inquiryType: formData.get('inquiryType')?.toString() || '',
    name: formData.get('name')?.toString() || '',
    kana: formData.get('kana')?.toString() || '',
    email: formData.get('email')?.toString() || '',
    // confirmEmail: formData.get('confirmEmail')?.toString() || '',
    phone: formData.get('phone')?.toString() || '',
    message: formData.get('message')?.toString() || '',
  });
  console.log('sendmail');
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      values: {
        inquiryType: formData.get('inquiryType')?.toString(),
        name: formData.get('name')?.toString(),
        kana: formData.get('kana')?.toString(),
        email: formData.get('email')?.toString(),
        // confirmEmail: formData.get('confirmEmail')?.toString(),
        phone: formData.get('phone')?.toString(),
        message: formData.get('message')?.toString(),
      },
      message: null,
    };
  }

  const {
    name,
    kana,
    email,
    phone,
    message,
  } = validatedFields.data;

  try {
    const formatField = (value?: string) =>
      value && value.trim().length > 0 ? value.trim() : '（未入力）';

    // メール送信設定
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // または 'SMTP' サーバー設定
      auth: {
        user: process.env.SMTP_USER!,
        pass: process.env.SMTP_PASS!,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_TO || process.env.SMTP_USER!, // 管理者宛て
      subject: 'お問い合わせフォームより',
      text: `
  【お問い合わせ種別】${formatField(inquiryType?.toString())}
  【お名前】${name}
  【読み仮名】${kana}
  【メール】${email}
  【電話番号】${formatField(phone)}
  【メッセージ】
  ${message}
        `,
    });
    return { message: 'redirect' };
  } catch (error) {
    console.error('メール送信エラー:', error);
    return { message: 'failed' };
  }
}
