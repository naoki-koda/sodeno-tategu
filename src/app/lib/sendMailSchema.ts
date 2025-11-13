
import { z } from 'zod';

// const optionalUrl = z
//   .string()
//   .trim()
//   .optional()
//   .refine(
//     (value) =>
//       !value ||
//       value.length === 0 ||
//       z.string().url().safeParse(value).success,
//     { message: '有効なURLを https:// から入力してください' },
//   );

const optionalPhone = z
  .string()
  .trim()
  .optional()
  .refine(
    (value) =>
      !value ||
      value.length === 0 ||
      /^[0-9+()\s]{6,}$/.test(value),
    { message: '電話番号の形式が正しくありません' },
  );

export const sendMailSchema = z
  .object({
    name: z.string().trim().min(1, 'お名前を入力してください'),
    kana: z.string().trim().min(1, 'お名前のフリガナを入力してください'),
    email: z.string().email('有効なメールアドレスを入力してください'),
    phone: optionalPhone,
    message: z.string().min(5, 'お問い合わせ内容を5文字以上入力してください'),
  });
