import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 text-center">MOTHER Bracelet プライバシーポリシー</h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. はじめに</h2>
          <p className="mb-4">
            本プライバシーポリシーは、NFES Technologies（以下「当社」といいます）が提供する健康管理ウェアラブルデバイス「MOTHER Bracelet」および関連するアプリケーション（以下「本サービス」といいます）における、ユーザーの個人情報の取り扱いについて定めるものです。
          </p>
          <p>
            当社は、ユーザーのプライバシーを尊重し、個人情報の保護に関する法律その他の関連法令を遵守します。本サービスをご利用いただくにあたり、本プライバシーポリシーをご確認いただき、内容にご同意いただけますようお願い申し上げます。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. 収集する個人情報</h2>
          <p className="mb-4">当社は、本サービスの提供にあたり、以下の個人情報を収集します。</p>
          <ul className="list-disc pl-6 mb-4">
            <li>メールアドレス</li>
            <li>健康情報
              <ul className="list-disc pl-6 mt-2">
                <li>歩数</li>
                <li>心拍数</li>
                <li>消費カロリー</li>
                <li>睡眠データ</li>
                <li>体表温</li>
              </ul>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. 個人情報の利用目的</h2>
          <p className="mb-4">当社は、収集した個人情報を以下の目的で利用します。</p>
          <ul className="list-disc pl-6">
            <li>本サービスの提供・運営・維持</li>
            <li>ユーザーへのより良い健康状態を目指すためのアドバイス提供</li>
            <li>本サービスの品質向上・改善</li>
            <li>新機能・新サービスの開発</li>
            <li>お問い合わせへの対応</li>
            <li>メンテナンス情報、アップデート情報等の通知</li>
            <li>利用規約に違反する行為への対応</li>
            <li>その他、上記に付随する目的</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. 個人情報の第三者提供</h2>
          <p className="mb-4">当社は、以下の場合を除き、ユーザーの個人情報を第三者に提供することはありません。</p>
          <ul className="list-disc pl-6 mb-4">
            <li>ユーザーの同意がある場合</li>
            <li>法令に基づく場合</li>
            <li>人の生命、身体または財産の保護のために必要がある場合であって、ユーザーの同意を得ることが困難である場合</li>
            <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、ユーザーの同意を得ることが困難である場合</li>
            <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、ユーザーの同意を得ることにより当該事務の遂行に支障を及ぼすおそれがある場合</li>
          </ul>
          <p>ユーザーの同意がある場合、当社は第三者へ個人情報を提供し、さらなる健康に関連した提案をする可能性があります。</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. 個人情報の開示・訂正・削除</h2>
          <p className="mb-4">
            ユーザーは、自身の個人情報について、スマートフォンアプリケーションを通じて閲覧することができます。さらなる情報開示が必要な場合や、個人情報の訂正・削除をご希望の場合は、下記の連絡先までお問い合わせください。
          </p>
          <p>ただし、法令等により当社が保管義務を負う情報に関しては、削除のご要望に応じられない場合があります。</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Cookie（クッキー）等の使用</h2>
          <p>
            現在、当社は本サービスにおいてCookieやその他のトラッキング技術を使用していません。将来的に使用する場合は、本プライバシーポリシーを更新し、ユーザーに通知します。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. セキュリティ対策</h2>
          <p>
            当社は、個人情報の漏洩、滅失、または毀損の防止その他の個人情報の安全管理のために必要かつ適切な措置を講じます。個人情報の取り扱いを外部に委託する場合には、委託先に対して必要かつ適切な監督を行います。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">8. 未成年者の利用について</h2>
          <p>
            本サービスは全年齢のユーザーを対象としており、未成年者も利用可能です。未成年者が本サービスを利用する場合は、保護者の同意を得た上で利用するものとします。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">9. プライバシーポリシーの変更</h2>
          <p>
            当社は、必要に応じて本プライバシーポリシーを変更することがあります。変更後のプライバシーポリシーは、当社ウェブサイトに掲載した時点から効力を生じるものとし、掲載をもってユーザーへの通知とします。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">10. 当社情報</h2>
          <p className="mb-4">本プライバシーポリシーに関する事項は、下記の会社情報をご確認ください。</p>
          <p className="mb-1">【会社名】NFES Technologies</p>
          <p>【住所】〒690-0003 島根県松江市朝日町484-19島根銀行本店ビル11F</p>
        </section>

        <p className="text-right text-sm text-gray-600 mt-8">最終更新日：2025年3月24日</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
