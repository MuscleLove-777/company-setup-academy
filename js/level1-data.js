const LEVEL1_DATA = {
    id: 1,
    title: "会社設立の基礎",
    icon: "🏛️",
    description: "法人化の意義、会社形態の選択、設立準備の基本",
    modules: [
        {
            id: 101,
            title: "なぜ法人化するのか",
            duration: "15分",
            content: `
<h2>法人化の主なメリット</h2>
<p>個人事業主から法人化を検討する主な理由は以下の通りです。</p>
<table>
<thead><tr><th>No</th><th>メリット</th><th>内容</th></tr></thead>
<tbody>
<tr><td>1</td><td><strong>節税効果</strong></td><td>所得800万円超で法人税が有利になる</td></tr>
<tr><td>2</td><td><strong>信用力向上</strong></td><td>取引先・金融機関からの信頼度UP</td></tr>
<tr><td>3</td><td><strong>有限責任</strong></td><td>個人資産を守れる</td></tr>
<tr><td>4</td><td><strong>資金調達</strong></td><td>融資・出資を受けやすくなる</td></tr>
<tr><td>5</td><td><strong>事業承継</strong></td><td>株式譲渡で事業を引き継げる</td></tr>
<tr><td>6</td><td><strong>人材採用</strong></td><td>社会保険完備で採用力向上</td></tr>
</tbody>
</table>

<h2>設立の全体フロー</h2>
<div class="info-box tip">
<div class="info-box-title">設立の8ステップ</div>
<p><strong>STEP 1</strong> 構想・準備 → <strong>STEP 2</strong> 定款作成 → <strong>STEP 3</strong> 公証人認証（株式会社のみ） → <strong>STEP 4</strong> 登記申請 → <strong>STEP 5</strong> 登記完了 → <strong>STEP 6</strong> 届出各種 → <strong>STEP 7</strong> 口座開設 → <strong>STEP 8</strong> 保険手続き</p>
</div>

<h2>個人事業主と法人の比較</h2>
<table>
<thead><tr><th>項目</th><th>個人事業主</th><th>法人</th></tr></thead>
<tbody>
<tr><td>設立費用</td><td>0円</td><td>6万円〜25万円</td></tr>
<tr><td>責任範囲</td><td>無限責任</td><td>有限責任</td></tr>
<tr><td>税率</td><td>累進課税（最大55%）</td><td>一定税率（約23〜30%）</td></tr>
<tr><td>社会的信用</td><td>低い</td><td>高い</td></tr>
<tr><td>会計処理</td><td>比較的簡単</td><td>複式簿記必須</td></tr>
<tr><td>社会保険</td><td>国民健康保険</td><td>健康保険+厚生年金</td></tr>
<tr><td>赤字繰越</td><td>3年</td><td>10年</td></tr>
<tr><td>決算公告</td><td>不要</td><td>必要（株式会社）</td></tr>
<tr><td>経費の範囲</td><td>狭い</td><td>広い</td></tr>
</tbody>
</table>
`,
            quiz: [
                { id: "q101_1", type: "choice", question: "法人化の主なメリットとして正しくないものはどれですか？", options: ["節税効果がある", "有限責任で個人資産を守れる", "設立費用が0円で済む", "信用力が向上する"], answer: 2, explanation: "法人の設立には6万円〜25万円程度の費用がかかります。0円で設立できるのは個人事業主です。" },
                { id: "q101_2", type: "choice", question: "法人税率が所得税より有利になる目安の所得額は？", options: ["300万円超", "500万円超", "800万円超", "1,000万円超"], answer: 2, explanation: "一般的に所得が800万円を超えてくると法人税率の方が有利になるとされています。" },
                { id: "q101_3", type: "choice", question: "法人の赤字繰越期間は何年ですか？", options: ["3年", "5年", "7年", "10年"], answer: 3, explanation: "法人は赤字（欠損金）を10年間繰り越すことができます。個人事業主は3年です。" },
                { id: "q101_4", type: "choice", question: "法人の責任範囲はどれですか？", options: ["無限責任", "有限責任", "連帯責任", "限定責任"], answer: 1, explanation: "法人（株式会社・合同会社）の出資者は有限責任であり、出資額の範囲内で責任を負います。" },
                { id: "q101_5", type: "fill", question: "法人は決算公告が必要な会社形態は何ですか？（漢字4文字）", answer: "株式会社", explanation: "株式会社は決算公告が義務付けられています。合同会社は不要です。" }
            ]
        },
        {
            id: 102,
            title: "株式会社 vs 合同会社",
            duration: "20分",
            content: `
<h2>基本比較表</h2>
<table>
<thead><tr><th>項目</th><th>株式会社</th><th>合同会社</th></tr></thead>
<tbody>
<tr><td>設立費用（実費）</td><td>約20〜25万円</td><td>約6〜10万円</td></tr>
<tr><td>最低資本金</td><td>1円</td><td>1円</td></tr>
<tr><td>出資者の名称</td><td>株主</td><td>社員</td></tr>
<tr><td>代表者の肩書</td><td>代表取締役</td><td>代表社員</td></tr>
<tr><td>経営と出資</td><td>分離可能</td><td>原則一致</td></tr>
<tr><td>利益配分</td><td>出資比率に応じる</td><td>自由に決められる</td></tr>
<tr><td>定款認証</td><td>必要（約5万円）</td><td>不要</td></tr>
<tr><td>登録免許税</td><td>15万円</td><td>6万円</td></tr>
<tr><td>決算公告</td><td>必要</td><td>不要</td></tr>
<tr><td>役員任期</td><td>最長10年</td><td>任期なし</td></tr>
<tr><td>上場</td><td>可能</td><td>不可</td></tr>
<tr><td>意思決定</td><td>株主総会+取締役会</td><td>社員の合意</td></tr>
</tbody>
</table>

<h2>どちらを選ぶべきか：判断ポイント</h2>
<div class="info-box tip">
<div class="info-box-title">判断フローチャート</div>
<ul>
<li><strong>将来上場を目指す</strong> → 株式会社一択</li>
<li><strong>BtoB取引がメインで大企業との取引が多い</strong> → 株式会社を推奨</li>
<li><strong>設立コストを抑えたい</strong> → 合同会社を推奨</li>
<li><strong>それ以外</strong> → どちらでもOK</li>
</ul>
</div>

<h2>業種別おすすめ</h2>
<table>
<thead><tr><th>業種</th><th>おすすめ</th><th>理由</th></tr></thead>
<tbody>
<tr><td>IT・Web開発</td><td>合同会社</td><td>コスト重視、BtoC中心</td></tr>
<tr><td>コンサルティング</td><td>株式会社</td><td>信用力が重要</td></tr>
<tr><td>飲食・小売</td><td>合同会社</td><td>設立費用を抑えたい</td></tr>
<tr><td>不動産</td><td>株式会社</td><td>金融機関との取引が多い</td></tr>
<tr><td>製造・建設</td><td>株式会社</td><td>BtoB取引、入札参加</td></tr>
<tr><td>フリーランス法人化</td><td>合同会社</td><td>最小コストで法人格取得</td></tr>
<tr><td>スタートアップ</td><td>株式会社</td><td>資金調達（出資）に対応</td></tr>
<tr><td>資産管理会社</td><td>合同会社</td><td>ランニングコスト削減</td></tr>
<tr><td>EC・通販</td><td>合同会社</td><td>社名が前面に出にくい</td></tr>
</tbody>
</table>

<h2>合同会社から株式会社への変更</h2>
<div class="info-box success">
<div class="info-box-title">組織変更は可能</div>
<p>合同会社で設立し、事業拡大に伴い株式会社へ組織変更することも可能です。</p>
<ul>
<li><strong>費用目安：</strong>約10万円（登録免許税6万円 + 官報公告3万円 + その他）</li>
<li><strong>期間：</strong>約2か月（官報公告期間含む）</li>
</ul>
</div>
`,
            quiz: [
                { id: "q102_1", type: "choice", question: "合同会社の登録免許税はいくらですか？", options: ["3万円", "6万円", "10万円", "15万円"], answer: 1, explanation: "合同会社の登録免許税は6万円（最低額）です。株式会社は15万円です。" },
                { id: "q102_2", type: "choice", question: "合同会社の出資者のことを何と呼びますか？", options: ["株主", "社員", "出資者", "パートナー"], answer: 1, explanation: "合同会社の出資者は「社員」と呼ばれます。従業員のことではありません。" },
                { id: "q102_3", type: "choice", question: "株式会社の役員任期は最長何年ですか？", options: ["2年", "4年", "5年", "10年"], answer: 3, explanation: "株式会社の取締役の任期は原則2年ですが、非公開会社では定款で最長10年まで延長できます。" },
                { id: "q102_4", type: "choice", question: "スタートアップにおすすめの会社形態はどちらですか？", options: ["合同会社", "株式会社", "合資会社", "合名会社"], answer: 1, explanation: "スタートアップは将来の資金調達（出資）に対応するため、株式会社が推奨されます。" },
                { id: "q102_5", type: "fill", question: "合同会社の代表者の肩書は何ですか？（漢字4文字）", answer: "代表社員", explanation: "合同会社の代表者は「代表社員」です。株式会社の場合は「代表取締役」です。" }
            ]
        },
        {
            id: 103,
            title: "設立前の構想と準備",
            duration: "20分",
            content: `
<h2>決めるべき基本事項</h2>
<table>
<thead><tr><th>No</th><th>決定事項</th><th>ポイント</th></tr></thead>
<tbody>
<tr><td>1</td><td>会社形態</td><td>株式会社 or 合同会社</td></tr>
<tr><td>2</td><td>商号（社名）</td><td>同一住所に同一商号は不可</td></tr>
<tr><td>3</td><td>事業目的</td><td>定款に記載、将来の事業も含める</td></tr>
<tr><td>4</td><td>本店所在地</td><td>自宅・事務所・バーチャルオフィス</td></tr>
<tr><td>5</td><td>資本金</td><td>1円以上、許認可要件に注意</td></tr>
<tr><td>6</td><td>事業年度</td><td>決算月を自由に設定可能</td></tr>
<tr><td>7</td><td>発起人・社員</td><td>1名以上（個人・法人OK）</td></tr>
<tr><td>8</td><td>役員構成</td><td>取締役1名以上（株式会社）</td></tr>
<tr><td>9</td><td>出資割合</td><td>株式の配分を決める</td></tr>
<tr><td>10</td><td>会社の印鑑</td><td>代表印・銀行印・角印の3本</td></tr>
</tbody>
</table>

<h2>商号（会社名）のルール</h2>
<div class="info-box tip">
<div class="info-box-title">必須ルール</div>
<p>「株式会社」or「合同会社」を含める必要があります。</p>
<ul>
<li>前株: 株式会社○○○</li>
<li>後株: ○○○株式会社</li>
</ul>
</div>
<p><strong>使える文字：</strong>漢字、ひらがな、カタカナ、ローマ字（大文字・小文字）、アラビア数字（0〜9）、一部の記号（&、'、,、-、.、・）</p>
<div class="info-box danger">
<div class="info-box-title">禁止事項</div>
<ul>
<li>同一住所に同一商号</li>
<li>有名企業と誤認される名前</li>
<li>「銀行」「信託」等の特定業種名（該当業種以外）</li>
<li>公序良俗に反する名前</li>
<li>「支店」「支社」「部門」等の使用</li>
</ul>
</div>

<h2>事業目的の書き方</h2>
<div class="info-box success">
<div class="info-box-title">良い例</div>
<ol>
<li>ソフトウェアの企画、開発、販売及び保守</li>
<li>Webサイトの企画、制作及び運営</li>
<li>インターネットを利用した各種情報提供サービス</li>
<li>経営コンサルティング業務</li>
<li><strong>前各号に附帯又は関連する一切の事業</strong> ← 必ず入れる</li>
</ol>
</div>
<p><strong>ポイント：</strong></p>
<ul>
<li>現在の事業だけでなく、将来やる可能性のある事業も入れる</li>
<li>許認可が必要な事業は、指定の文言で記載する</li>
<li>多すぎると信用を損なう（5〜10個程度が目安）</li>
</ul>

<h2>決算月の選び方</h2>
<ul>
<li><strong>繁忙期を避ける</strong>：売上が集中する月の直後は避ける</li>
<li><strong>消費税の免税期間を最大化</strong>：設立日からなるべく離れた月にする（例：4月設立→3月決算）</li>
<li><strong>税理士の繁忙期を避ける</strong>：2〜3月、12月は税理士が忙しい</li>
<li><strong>資金繰りを考慮</strong>：法人税の納付は決算月の2か月後</li>
</ul>
<div class="info-box tip">
<div class="info-box-title">推奨</div>
<p>設立月の前月を決算月にすると消費税の免税期間を最大化できます。例：4月1日設立→3月決算、7月1日設立→6月決算</p>
</div>

<h2>会社印鑑の準備</h2>
<table>
<thead><tr><th>印鑑</th><th>用途</th><th>サイズ目安</th></tr></thead>
<tbody>
<tr><td><strong>代表印（実印）</strong></td><td>法務局に届出。登記申請、契約書、銀行届出に使用</td><td>直径18mm程度</td></tr>
<tr><td><strong>銀行印</strong></td><td>銀行口座開設に使用。代表印と分けてリスク分散</td><td>直径16.5mm程度</td></tr>
<tr><td><strong>角印（社印）</strong></td><td>請求書、見積書、領収書等に使用</td><td>一辺21〜24mm程度</td></tr>
</tbody>
</table>
<p>費用目安：3本セットで5,000円〜30,000円。ネット注文が安く、納期は即日〜1週間です。</p>
`,
            quiz: [
                { id: "q103_1", type: "choice", question: "事業目的の最後に必ず入れるべき文言は？", options: ["以上", "上記のすべて", "前各号に附帯又は関連する一切の事業", "その他の事業"], answer: 2, explanation: "事業目的の最後には「前各号に附帯又は関連する一切の事業」を入れるのが一般的です。" },
                { id: "q103_2", type: "choice", question: "消費税の免税期間を最大化するには、決算月をどう設定すべきですか？", options: ["設立月と同じ月", "設立月の翌月", "設立月の前月", "3月固定"], answer: 2, explanation: "設立月の前月を決算月にすることで、最初の事業年度を約12か月取ることができ、免税期間を最大化できます。" },
                { id: "q103_3", type: "choice", question: "会社の印鑑で法務局に届出するのはどれですか？", options: ["角印", "銀行印", "代表印（実印）", "認印"], answer: 2, explanation: "代表印（実印）を法務局に届出します。丸印とも呼ばれます。" },
                { id: "q103_4", type: "choice", question: "商号に使えない文字はどれですか？", options: ["ローマ字", "アラビア数字", "＠（アットマーク）", "ハイフン（-）"], answer: 2, explanation: "商号に使える記号は&、'、,、-、.、・に限られており、＠は使えません。" },
                { id: "q103_5", type: "fill", question: "事業目的は何個程度が目安ですか？（数字でX〜Yの形式で）", answer: "5〜10", explanation: "事業目的は5〜10個程度が目安です。多すぎると信用を損なう場合があります。" }
            ]
        }
    ]
};
