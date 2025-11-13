'use client';

import { sendMail, State } from '@/app/lib/sendMail';
import { useRouter } from 'next/navigation';
import { useActionState, useEffect } from 'react';

const inquiryTypes = [
  { value: 'door', label: 'ドア（引き違い戸や開戸等）' },
  { value: 'syouji', label: '障子' },
  { value: 'cupboard', label: 'カップボード' },
  { value: 'syuno', label: '収納' },
  { value: 'senmen', label: '洗面化粧台' },
  { value: 'desk', label: '造作デスク' },
  { value: 'other', label: 'その他の建具、造作家具' },
];

type FieldName = keyof NonNullable<State['errors']>;

export default function ContactForm() {
  const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useActionState(sendMail, initialState);
  const router = useRouter();

  useEffect(() => {
    if (state.message === 'redirect') {
      router.push('/done');
    } else if (state.message === 'failed') {
      router.push('/failed');
    }
  }, [state.message, router]);

  const renderError = (field: FieldName) =>
    state.errors?.[field]?.map((error) => (
      <p className="mt-2 text-sm text-rose-500" key={error}>
        {error}
      </p>
    ));

  return (
    <form
      className="mt-10 grid gap-8 text-sm text-slate-800"
      action={formAction}
    >
      <fieldset className="grid gap-4">
        <span className="text-base font-semibold text-slate-900">
          お問い合わせ種別
          <span className="ml-2 text-xs text-red-600">必須</span>
        </span>
        <div className="grid gap-2 md:grid-cols-2">
          {inquiryTypes.map((type) => (
            <label
              key={type.value}
              className="flex cursor-pointer items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 transition hover:border-slate-300"
            >
              <input
                type="radio"
                name="inquiryType"
                value={type.label}
                required
                className="h-4 w-4 border-slate-300 text-slate-900 focus:ring-slate-500"
                defaultChecked={state.values?.inquiryType === type.value}
              />
              <span className="text-sm font-medium text-slate-900">
                {type.label}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-6">
        <div className="grid gap-1 md:grid-cols-2 md:gap-6">
          <div className="grid gap-1">
            <label className="text-sm font-semibold" htmlFor="name">
              お名前<span className="ml-2 text-xs text-red-600">必須</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="例：山田 太郎"
              className="w-full rounded border border-slate-200 px-4 py-3 text-sm shadow-sm placeholder:text-slate-400 focus:border-slate-400 focus:outline-none"
              defaultValue={state.values?.name ?? ''}
            />
            {renderError('name')}
          </div>

          <div className="grid gap-1">
            <label className="text-sm font-semibold" htmlFor="kana">
              お名前（フリガナ）
            </label>
            <input
              id="kana"
              name="kana"
              type="text"
              placeholder="例：ヤマダ タロウ"
              className="w-full rounded border border-slate-200 px-4 py-3 text-sm shadow-sm placeholder:text-slate-400 focus:border-slate-400 focus:outline-none"
              required
              defaultValue={state.values?.kana ?? ''}
            />
            {renderError('kana')}
          </div>
        </div>

        <div className="grid gap-1 md:grid-cols-2 md:gap-6">
          <div className="grid gap-1">
            <label className="text-sm font-semibold" htmlFor="email">
              メールアドレス
              <span className="ml-2 text-xs text-red-600">必須</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="例：contact@example.com"
              className="w-full rounded border border-slate-200 px-4 py-3 text-sm shadow-sm placeholder:text-slate-400 focus:border-slate-400 focus:outline-none"
              defaultValue={state.values?.email ?? ''}
            />
            {renderError('email')}
          </div>

          <div className="grid gap-1">
            <label className="text-sm font-semibold" htmlFor="phone">
              お電話番号
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="例：03-1234-5678"
              className="w-full rounded border border-slate-200 px-4 py-3 text-sm shadow-sm placeholder:text-slate-400 focus:border-slate-400 focus:outline-none"
              defaultValue={state.values?.phone ?? ''}
            />
            {renderError('phone')}
          </div>
        </div>

        <div className="grid gap-1">
          <label className="text-sm font-semibold" htmlFor="how">
            当社をお知りになったきっかけ
          </label>
          <input
            id="how"
            name="how"
            type="text"
            placeholder="例：ウェブ検索／ご紹介など"
            className="w-full rounded border border-slate-200 px-4 py-3 text-sm shadow-sm placeholder:text-slate-400 focus:border-slate-400 focus:outline-none"
          />
        </div>

        <div className="grid gap-1">
          <label className="text-sm font-semibold" htmlFor="message">
            お問い合わせ内容
            <span className="ml-2 text-xs text-red-600">必須</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            placeholder="お問い合わせ内容をご記入ください"
            className="w-full rounded border border-slate-200 px-4 py-3 text-sm shadow-sm placeholder:text-slate-400 focus:border-slate-400 focus:outline-none"
            defaultValue={state.values?.message ?? ''}
          />
          {renderError('message')}
        </div>
      </div>

      <div className="rounded-lg bg-zinc-100 p-4 text-xs text-slate-600">
        <p>
          ご入力いただいた個人情報は、当社プライバシーポリシーに基づき厳重に管理いたします。内容により回答にお時間を要する場合がございます。
        </p>
      </div>

      <div className="flex items-center gap-2 text-xs text-slate-600">
        <input
          id="privacy"
          name="privacy"
          type="checkbox"
          required
          className="h-4 w-4 border-slate-300 text-slate-900 focus:ring-slate-500"
        />
        <label htmlFor="privacy">
          <span className="font-medium text-slate-800">個人情報保護方針</span>
          に同意する
        </label>
      </div>

      <button
        type="submit"
        className="w-full rounded bg-zinc-800 px-6 py-3 text-sm font-semibold tracking-wide text-white transition hover:bg-slate-700"
      >
        入力内容を送信する
      </button>
    </form>
  );
}
