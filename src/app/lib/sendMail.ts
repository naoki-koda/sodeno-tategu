'use server'

import nodemailer from 'nodemailer';

export type State = {
  errors?: {
    email?: string[];
    message?: string[];
  };
  message?: string | null;
}

export async function sendMail(preState: any, formData: FormData): Promise<State> {

  return {
    message: 'メールを送信しました。',
  };
}

