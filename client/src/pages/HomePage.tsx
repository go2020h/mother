import { ScrollArea } from '@/components/ui/scroll-area'
import { Link } from 'wouter'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollArea className="h-screen w-full">
        {/* Top View Section - Full width */}
        <div className="relative w-full bg-black text-white pt-8">
          <div className="container mx-auto px-4 md:px-8">
            <div className="lyt">
              <div className="logo relative w-[240px] h-[73px] mx-auto mb-8">
                <div className="in">
                  <h1>
                    <img src="https://cdn.shopify.com/s/files/1/0611/4476/0578/files/logo_mother.svg?v=1638851245" alt="MOTHER BRACELET" className="w-full h-auto" />
                  </h1>
                </div>
              </div>
              <div className="visual relative h-[300px] md:h-[430px]">
                <div className="image relative w-full h-full">
                  <img src="https://cdn.shopify.com/s/files/1/0611/4476/0578/files/top_image_watch.png?v=1638413858" alt="" className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="text relative text-center">
                <p className="text-3xl font-bold mb-8">
                  Makuakeで5600万円達成の健康デバイス
                  <br />
                  ついにレンタル開始。
                </p>

                {/*
                  <div className="pushbutton-wp mt-8 flex justify-center pb-16">
                    <Link href="/products">
                      <a className="inline-block" target="_blank" rel="noopener noreferrer">
                        <div className="pushbutton px-12 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-lg font-bold">製品一覧はこちら</div>
                      </a>
                    </Link>
                  </div>
                */}
                <div className="pushbutton-wp mt-8 flex justify-center pb-16">
                  <a href="/products" className="inline-block" target="_blank" rel="noopener noreferrer">
                    <div className="pushbutton px-12 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-lg font-bold">製品一覧はこちら</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 md:px-8 pb-16 max-w-5xl">
          {/* Story Section */}
          <div className="story_section mt-16">
            <div className="summaryContainer bg-muted p-6 rounded-lg mb-8">
              <ol className="summaryList space-y-4">
                <li className="summaryItem flex items-center gap-2 min-w-0">
                  <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 bg-yellow-500 rounded-full text-white">✓</span>
                  <span className="min-w-0">
                    <strong>心拍、睡眠、体表温、歩数、カロリー</strong>を自動計測。ベストコンディションの健康管理に特化
                  </span>
                </li>
                <li className="summaryItem flex items-center gap-2 min-w-0">
                  <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 bg-yellow-500 rounded-full text-white">✓</span>
                  <span className="min-w-0">
                    <strong>シリコンバレー特許技術で充電不要！</strong>200年の時を経て、ゼーベック効果による体温発電を実用化
                  </span>
                </li>
                <li className="summaryItem flex items-center gap-2 min-w-0">
                  <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 bg-yellow-500 rounded-full text-white">✓</span>
                  <span className="min-w-0">
                    <strong>Made in Japan。</strong>三栄電子・キヤノン電子とともに" ものづくり大国 "の底力を世界へ
                  </span>
                </li>
              </ol>
            </div>

            <div className="leftProjectDetail space-y-8">
              <div className="leftText project-content space-y-8">
                <div className="space-y-4">
                  <p className="text-center text-3xl">
                    充電するための
                    <span className="font-bold text-3xl text-blue-800">取り外しが不要</span>
                  </p>
                  <p className="text-center text-3xl">
                    歩数、睡眠、心拍、体表温を
                    <span className="font-bold text-3xl">24時間365日モニタリング</span>
                  </p>
                </div>

                <img className="detail-image w-full" src="//static.makuake.com/upload/project/18232/detail_18232_16255412694321.png" alt="MOTHER Bracelet メイン画像" />
                <p className="font-bold">全ての人に、毎日、ほんの一瞬でも、自分の健康を振り返る時間を作って欲しい。</p>

                <div className="space-y-4">
                  <p>当社では生活習慣病予防プラットフォーム構築のため、活動量計を活用した青木医師監修オンデマンドトレーニングアプリ「Lav (Lifestyle Assist for Vitality.) 」を開発・運営してまいりました。</p>
                  <p>
                    サービスを提供する中で、"充電のために手首から取り外さなければならない"という課題が、<strong>ダウンタイム（データが取れない時間)</strong>
                    を生み出し、的確なアドバイスを行う上でネックになっていました。それに加え、"充電のために一度、手首から外す"という行為そのものが、活動量計の継続利用を妨げていたのです。
                  </p>
                </div>

                <div className="relative">
                  <h1 className="text-3xl font-bold text-center text-white bg-black py-4 px-4 mb-8 w-screen relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw]">充電により 貴重なデータを失っている</h1>
                </div>

                <h3 className="text-xl font-bold">みなさん、24時間365日体調を管理したことがありますか？</h3>

                <img className="detail-image w-full" src="//static.makuake.com/upload/project/18232/detail_18232_1625627563.png" alt="データ計測イメージ" />

                <img className="detail-image w-full" src="//static.makuake.com/upload/project/18232/detail_18232_16254544281834.jpg" alt="データ分析グラフ" />

                <p>私自身、日々の活動量、睡眠の状態、心拍数※などをチェックして、アンチエイジング・ライフスタイルの実践に役立てています。</p>
                <p>
                  しかし、既存の活動量計は<strong>充電のために、しばしば外さなければならないという面倒な問題</strong>がありました。充電のタイミングでダウンタイムが発生し、データをロストするため、複数のデバイスを使用しています。
                  <br />
                  <span className="text-gray-500">※運動状況確認のための心拍数計測</span>
                </p>

                <img className="detail-image w-full" src="//static.makuake.com/upload/project/18232/detail_18232_16255608618135.png" alt="データ分析イメージ" />

                <p>
                  実は医療の分野では、24時間365日の連続データを取得できることがすごく期待されています。例えば、医療の現場では、薬の副作用の評価のためモニタリングが必要ですが、トラッカーが充電のために外されていると、空白の時間が生まれデータが不連続となります。この間に何が起こったか非常に問題になります。
                  <strong>24時間365日モニタリングできる</strong>ことにより得られるメリットというのは計り知れないものがあります。MOTHER Braceletは医療分野においても大きな可能性を秘めています。
                </p>

                <p>その一方、個人利用のシーンにおいては、煩わしい通知や表示機能を排除し、楽しく継続的に健康管理をすることだけに特化されたデバイスになっています。</p>

                <div className="relative">
                  <h1 className="text-3xl font-bold text-center text-white bg-black py-4 px-4 mb-8 w-screen relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw]">継続利用を妨げる原因も、充電</h1>
                </div>
                <h3 className="text-xl font-bold">ダウンしないため着脱する手間がいりません。</h3>

                <img className="detail-image w-full" src="//static.makuake.com/upload/project/18232/detail_18232_16249325931326.png" alt="着脱の手間イメージ" />

                <p>既存の活動量計は、寝ている間に充電したり、日中取り外して充電したり、特殊な電池と交換したりと継続するための手間が少なからず発生していました。</p>
                <p>
                  <strong>「充電のために身体から取り外さなければならない」</strong>という課題を克服したMOTHER Bracelet。
                </p>
                <p>長年の課題が改善されたことで、継続利用を妨げる手間がなくなりました。これにより、健康管理のハードルは大きく下がることが予想されます。</p>

                <div className="relative">
                  <h1 className="text-3xl font-bold text-center text-white bg-black py-4 px-4 mb-8 w-screen relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw]">健康の秘訣は、継続的なモニタリング</h1>
                </div>
                <h3 className="text-xl font-bold">モニタリングするだけで生活が変わります。</h3>

                <img className="detail-image w-full" src="//static.makuake.com/upload/project/18232/detail_18232_16242416907389.png" alt="健康モニタリングイメージ" />

                <p>ダイエット外来では、朝晩2回体重を測定し記録するだけで、体重を自分で管理しやすくなることがわかっています。あるいは、糖尿病の医学分野では、患者さんに自分の血糖値を測ってモニタリングさせるだけで、血糖値がコントロールしやすくなるというエビデンスもあります。</p>
                <p>
                  自分のカラダをモニタリングするということは、自分の身体の仕組みを知るということです。<strong>体の仕組みを知ることで、無意識のうちに健康な状態を作る</strong>ことができます。
                </p>

                <div className="relative">
                  <h1 className="text-3xl font-bold text-center text-white bg-black py-4 px-4 mb-8 w-screen relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw]">あなただけのデータを統計化</h1>
                </div>
                <h3 className="text-xl font-bold">傾向を分析し、ベストパフォーマンスを再現する</h3>

                <img className="detail-image w-full" src="//static.makuake.com/upload/project/18232/detail_18232_16240010099741.png" alt="データ統計画面" />

                <p>
                  MOTHER Bracelet は健康状態を把握する上で重要な5つの要素「<strong>歩数・心拍・活動量、体表温、睡眠量」を24時間365日自動で計測</strong>。これら全てのデータはお手持ちのスマートフォンにある"MOTHER App "から確認できます。
                </p>
                <p>
                  常時装着する事で計測条件は常に一定。データが蓄積されるほど、<strong>統計的に健康状態を把握</strong>することができ、信頼性がアップしていきます。
                </p>

                <p>
                  アプリ内では、過去の自分のデータと比較し、未来の傾向を掴むことが可能です。定性的な"なんとなくの"不調や"なんとなく"の好調を定量的に捉えることで、スッキリ起きられる要因、<strong>高パフォーマンスな要因を解明</strong>していきます。
                </p>

                <div className="relative">
                  <h1 className="text-3xl font-bold text-center text-white bg-black py-4 px-4 mb-8 w-screen relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw]">MOTHER Braceletの特徴</h1>
                </div>

                <img className="detail-image w-full" src="//static.makuake.com/upload/project/18232/detail_18232_16249325413248.gif" alt="MOTHER Bracelet 特徴アニメーション" />

                <h2 className="text-2xl font-bold">❶無充電という不可能を可能に</h2>
                <h3 className="text-xl font-bold">200年の時を経て、体温発電が実現</h3>

                <img className="detail-image w-full" src="//static.makuake.com/upload/project/18232/detail_18232_16254578210340.jpg" alt="体温発電の仕組み" />

                <p>
                  MOTHER Bracelet はゼーベック効果を利用した『温度差発電技術』を搭載。<strong>外気と体表面の温度差を利用し発電</strong>、駆動するので充電するために取り外す必要はありません。
                </p>
                <p>
                  エストニアの物理学者トーマス・ゼーベックによって1821年に発見された現象が、<strong>200年の研究</strong>・開発を経て、ついに実生活に導入されました。
                </p>

                <img className="detail-image w-full" src="//static.makuake.com/upload/project/18232/detail_18232_16254574931455.jpg" alt="技術説明イメージ" />

                <p>Matrix社はエネルギー事業に革新をもたらす企業としてシリコンバレーで注目の企業の一社です。そんな彼らの技術を本デバイスのコアテクノロジーとして採用し、共同開発を進めてきました。</p>
                <p>
                  これにより、体温による永続的な電力供給、つまり<strong>「充電不要」のデバイス</strong>が誕生しました。
                </p>

                <h2 className="text-2xl font-bold">❷軽く・小さく・腕に馴染む</h2>
                <h3 className="text-xl font-bold">活動量計ではなく、ブレスレット</h3>

                <img className="detail-image w-full" src="//static.makuake.com/upload/project/18232/detail_18232_16242414905571.png" alt="MOTHER Bracelet 装着イメージ" />

                <p>かっこよく、美しくいるために身につけるデバイスだからこそ、ファッションを邪魔しないシンプルな形を追求しました。軽くて小さいので腕に馴染みます。</p>
                <p>
                  また、<strong>バンドが交換可能</strong>であるため、プライベートやビジネス、シーンを選ばず使用できます。現在、デザイナーと協力し、腕時計をより引き立たせるバンドを開発しております。
                </p>

                <h2 className="text-2xl font-bold">❸もちろん、防水</h2>
                <h3 className="text-xl font-bold">水回りの作業にも使用することが可能</h3>

                <img className="detail-image w-full" src="//static.makuake.com/upload/project/18232/detail_18232_16242415096658.png" alt="防水機能イメージ" />

                <p>
                  お皿洗いやお風呂の掃除はもちろん、入浴時も大丈夫な<strong>50m防水</strong>。充電不要であるため、端子を繋ぐ差し込み口を気にする必要がありません。そのため、水に濡れる心配なく使用できます。
                </p>

                <div className="relative">
                  <h1 className="text-3xl font-bold text-center text-white bg-black py-4 px-4 mb-8 w-screen relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw]">MADE IN JAPAN</h1>
                </div>
                <h3 className="text-xl font-bold">ものづくり大国 日本の真髄を結集。</h3>

                <img className="detail-image w-full" src="//static.makuake.com/upload/project/18232/detail_18232_16249324269916.gif" alt="製造プロセス" />

                <p>
                  MOTHER Braceletの<strong>製造はキヤノン電子と三栄電子とともに</strong>行っております。50年以上に渡り、様々な商品の技術サポートを手掛ける三栄電子と、数々のMADE IN
                  JAPANプロダクトを生み出してきたキヤノン電子の確かな技術力が組み合わさったことで、MOTHERの高品質での製造が確固たるものになりました。
                </p>

                <div className="relative">
                  <h1 className="text-3xl font-bold text-center text-white bg-black py-4 px-4 mb-8 w-screen relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw]">自分の時間を大切に</h1>
                </div>
                <h3 className="text-xl font-bold">時計と通知の機能はOFF。</h3>

                <img className="detail-image w-full" src="//static.makuake.com/upload/project/18232/detail_18232_16242414549687.png" alt="シンプルな機能説明" />

                <p>デジタルと繋がる世界は便利ですが、メンタル不調を引き起こす一因となっています。身につける人には、時間や通知を気にせず快適に過ごしていてほしい。</p>
                <p>
                  健康管理に特化するため、<strong>通知と時計の機能はOFF</strong>にしました。
                </p>

                <div className="relative">
                  <h1 className="text-3xl font-bold text-center text-white bg-black py-4 px-4 mb-8 w-screen relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw]">健康は義務ではない。だからこそ、楽しく</h1>
                </div>
                <h3 className="text-xl font-bold">毎日の活動がエナジーとして加算。</h3>

                <img className="detail-image w-full" src="//static.makuake.com/upload/project/18232/detail_18232_16242416202266.png" alt="エナジー加算の仕組み" />

                <p>
                  日々の<strong>健康に対するあらゆる活動がエナジーとして加算</strong>・蓄積されていきます。
                </p>
                <p>専用アプリのSup機能では、大切な人を気に掛けることができ、お互いにエナジーを送りあうことができます。</p>

                <img className="detail-image w-full" src="//static.makuake.com/upload/project/18232/detail_18232_16242423186217.png" alt="アプリケーション画面" />

                <div className="relative">
                  <h1 className="text-3xl font-bold text-center text-white bg-black py-4 px-4 mb-8 w-screen relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw]">健康のおすそ分け</h1>
                </div>
                <p className="text-xl font-bold mb-8">MOTHERではあなたが健康になればなるほど、より多くのエナジーがたまるように設計されています。</p>

                <img className="detail-image w-full rounded-lg" src="http://farm2.static.flickr.com/1199/1324874066_17c16c2909.jpg" alt="エナジー活用イメージ" />

                <p className="mt-8">
                  そのエナジーは自身がおすそ分けしたい人に別の形でプレゼントすることができます。自分の子供の笑顔に、難病を抱えるアフリカの子供達、殺処分をされてしまう動物達など、自身が健康になることで得たエナジーによって対象の方々が勝手に救われていく、そのエナジーがどのように使われているか可視化され、それを見て健康へのモチベーションが上がる。そんなポジティブな社会の実現にMOTHERはチャレンジしていきます。
                </p>

                <h3 className="text-xl font-bold mt-8">あなたが健康になればなるほど、誰かが救われる社会。</h3>

                <img className="detail-image w-full" src="//static.makuake.com/upload/project/18232/detail_18232_16242423953311.png" alt="ユーザー体験イメージ" />

                <p>24時間正確に計測されたデータは健康的な人生をおくるための指針になります。心身ともに活力に満たされ、大切な人と前向きに関わりあうことで、毎日はもっと楽しくなります。</p>

                <div className="relative">
                  <h1 className="text-3xl font-bold text-center text-white bg-black py-4 px-4 mb-8 w-screen relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw]">プロジェクトへの想い</h1>
                </div>

                <p>MOTHER Bracelet では活動量計としての機能を持たせながらも、ユーザーが気軽にファッションの一部として身につけられるデバイスを目指し、デザイン性を追求しています。</p>

                <p>構想から3年、我々のビジョンに共感していただいた各分野のエキスパートたちが集い、無充電で健康を管理し、モチベーションまで与えるデバイス「MOTHER Bracelet」が誕生しました。</p>
                <p>我々の実現したい理想に、最新のテクノロジー、デザイン、そして製造の信頼性、各方面で業界をリードするパートナーの皆様の力が集約して、今回の製品の実現に至っています。</p>
                <img className="detail-image w-full" src="//static.makuake.com/upload/project/18232/detail_18232_16242437609174.png" alt="プロジェクトチーム" />

                <div className="space-y-1">
                  <p>WHO(世界保健機関)では、「健康」を次のように定義しています。</p>
                  <p>「健康とは身体的・精神的・社会的に完全に良好な状態であり、単に疾病のない状態や病弱でないことではない」</p>
                  <p>健康と聞いてその多くは「身体的な健康」に着目するデバイスがほとんどです。我々は精神的・社会的な健康まで管理する本当の意味で健康になれるデバイスの開発に取り組んでいます。</p>
                </div>

                <p className="font-bold">
                  <strong>全ての人に、毎日、ほんの一瞬でも、自分の健康を振り返る時間を作って欲しい。</strong>
                </p>

                <p>
                  精神的、社会的な観点での健康は自分ひとりだけではなかなか得ることが難しいです。つまり健康はあなた1人だけの問題ではないということです。充電不要で24時間365日データをロストしないことで、ただの身体データだけでなく、心拍数の起伏や体温の起伏など精神データとしても現れてきます。また、エナジーが可視化され社会性を持つようになり、MOTHERでつながるコミュニティとして拡大していきたいと思っています。
                </p>

                <img className="detail-image w-full" src="//static.makuake.com/upload/project/18232/detail_18232_16242436358946.png" alt="最終製品イメージ" />

                {/* New Customer Testimonials Section */}
                <div className="relative">
                  <h1 className="text-3xl font-bold text-center text-white bg-black py-4 px-4 mb-8 w-screen relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw]">お客様の声</h1>
                </div>

                <div className="space-y-6">
                  <div className="relative bg-muted p-6 rounded-lg shadow-sm">
                    <div className="absolute left-4 -top-3 w-4 h-4 rotate-45 bg-muted"></div>
                    <p className="text-foreground">体温で発電するなんて、夢のようですね。</p>
                  </div>

                  <div className="relative bg-muted p-6 rounded-lg shadow-sm">
                    <div className="absolute left-4 -top-3 w-4 h-4 rotate-45 bg-muted"></div>
                    <p className="text-foreground">made in Japanと聞いだけでこのチャレンジは買う価値ありと思いました。製造業日本ガンバレ！</p>
                  </div>

                  <div className="relative bg-muted p-6 rounded-lg shadow-sm">
                    <div className="absolute left-4 -top-3 w-4 h-4 rotate-45 bg-muted"></div>
                    <p className="text-foreground">健康志向を高める商品の開発や改良を今後も期待しています。数年後には5～10人に1人の手首にこの商品が装着されていればいいなと思っています。</p>
                  </div>

                  <div className="relative bg-muted p-6 rounded-lg shadow-sm">
                    <div className="absolute left-4 -top-3 w-4 h-4 rotate-45 bg-muted"></div>
                    <p className="text-foreground">24時間365日のデータが健康管理に有効活用できるように，取得したデータの閲覧・管理の部分も充実してもらえると嬉しいです。</p>
                  </div>
                </div>

                <div className="relative">
                  <h1 className="text-3xl font-bold text-center text-white bg-black py-4 px-4 mb-8 w-screen relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw]">FAQ</h1>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <p>
                      <span className="text-primary font-bold">Q1</span>：<strong>計測項目は何がありますか？</strong>
                      <br />
                      <span className="text-rose-500 font-bold">A1</span>：歩数/心拍数/消費カロリー/睡眠/体表温/アクテビティが計測可能です。
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p>
                      <span className="text-primary font-bold">Q2</span>：<strong>エナジーはどうやって貯まりますか？</strong>
                      <br />
                      <span className="text-rose-500 font-bold">A2</span>：歩数や睡眠の同期等、簡単な項目で貯まっていく予定です。
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p>
                      <span className="text-primary font-bold">Q3</span>：<strong>バンドの交換は可能ですか？</strong>
                      <br />
                      <span className="text-rose-500 font-bold">A3</span>：可能です。今後、複数の付け替えバンドを展開予定です！
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p>
                      <span className="text-primary font-bold">Q4</span>：<strong>時計機能はありますか？</strong>
                      <br />
                      <span className="text-rose-500 font-bold">A4</span>：時計機能はありません。
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p>
                      <span className="text-primary font-bold">Q5</span>：<strong>通知機能はありますか？</strong>
                      <br />
                      <span className="text-rose-500 font-bold">A5</span>：通知機能はありません。
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p>
                      <span className="text-primary font-bold">Q6</span>：<strong>MOTHERアプリが対応するOSは？</strong>
                      <br />
                      <span className="text-rose-500 font-bold">A6</span>：Apple iOS 13 以上、Android OS 7.0 以上を予定しております。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  )
}
