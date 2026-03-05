const LEVEL2_DATA = {
    id: 2,
    title: "資本金と定款",
    icon: "📝",
    description: "資本金の決め方、定款作成、公証人認証の手続き",
    modules: [
        {
            id: 201,
            title: "資本金の決め方",
            duration: "15分",
            content: `
<h2>資本金とは</h2>
<p>資本金とは、会社設立時に出資者（発起人・社員）が会社に払い込むお金のことです。会社の信用力を示す指標の一つとなります。</p>

<h2>資本金額の目安</h2>
<table>
<thead><tr><th>金額</th><th>適している場合</th></tr></thead>
<tbody>
<tr><td><strong>1万円〜50万円</strong></td><td>とにかく安く設立したい、個人の延長で小さく始める。※法人口座開設が困難になる場合あり</td></tr>
<tr><td><strong>100万円〜300万円</strong></td><td>一般的な中小企業。法人口座開設もスムーズ。※最も多い価格帯</td></tr>
<tr><td><strong>500万円〜1,000万円</strong></td><td>許認可が必要な業種、BtoBで信用力が重要。※1,000万円以上は初年度から消費税課税</td></tr>
<tr><td><strong>1,000万円超</strong></td><td>大きな信用力が必要な業種。※初年度から消費税課税事業者に。法人住民税の均等割が上がる場合あり</td></tr>
</tbody>
</table>

<h2>資本金を決める際の重要ポイント</h2>
<h3>ポイント1：消費税の免税期間</h3>
<div class="info-box warning">
<div class="info-box-title">重要</div>
<ul>
<li>資本金1,000万円未満 → 最大2年間、消費税が免税</li>
<li>資本金1,000万円以上 → 初年度から消費税の課税事業者</li>
<li>※インボイス制度登録をした場合は免税期間なし</li>
</ul>
</div>

<h3>ポイント2：許認可業種の最低資本金</h3>
<table>
<thead><tr><th>業種</th><th>最低資本金</th></tr></thead>
<tbody>
<tr><td>建設業（一般）</td><td>500万円以上</td></tr>
<tr><td>労働者派遣業</td><td>2,000万円以上</td></tr>
<tr><td>有料職業紹介業</td><td>500万円以上</td></tr>
<tr><td>旅行業（第1種）</td><td>3,000万円以上</td></tr>
<tr><td>不動産業（宅建業）</td><td>1,000万円以上</td></tr>
</tbody>
</table>

<h3>ポイント3：法人住民税の均等割</h3>
<table>
<thead><tr><th>資本金等の額</th><th>年間均等割（東京23区）</th></tr></thead>
<tbody>
<tr><td>1,000万円以下</td><td>7万円</td></tr>
<tr><td>1,000万円超</td><td>18万円</td></tr>
<tr><td>1億円超</td><td>29万円</td></tr>
</tbody>
</table>

<h3>ポイント4：運転資金の確保</h3>
<div class="info-box tip">
<div class="info-box-title">目安：3〜6か月分の運転資金を資本金とする</div>
<p>計算例：家賃10万 + 人件費30万 + その他10万 = 月50万<br>50万 × 3か月 = 150万円 → 資本金150万円〜300万円が目安</p>
</div>

<h2>資本金の払い込み方法</h2>
<ol>
<li><strong>発起人個人の銀行口座を用意</strong>（まだ法人口座は存在しないため）</li>
<li><strong>資本金額を振り込む</strong>（「入金」ではなく「振込」で名前が記帳されること）</li>
<li><strong>通帳のコピーを取る</strong>（表紙、1ページ目、振込記載ページ）</li>
<li><strong>払込証明書を作成する</strong>（会社名、払込金額、払込日、代表者名を記載し通帳コピーと綴じる）</li>
</ol>
<div class="info-box danger">
<div class="info-box-title">注意事項</div>
<ul>
<li>定款作成日以降の振込であること</li>
<li>発起人全員分の振込が確認できること</li>
<li>ネット銀行の場合は取引明細の画面印刷でもOK</li>
</ul>
</div>
`,
            quiz: [
                { id: "q201_1", type: "choice", question: "消費税の免税期間を得るには、資本金をいくら未満にする必要がありますか？", options: ["500万円", "800万円", "1,000万円", "2,000万円"], answer: 2, explanation: "資本金1,000万円未満であれば、最大2年間消費税が免税となります。" },
                { id: "q201_2", type: "choice", question: "建設業（一般）の最低資本金はいくらですか？", options: ["100万円", "300万円", "500万円", "1,000万円"], answer: 2, explanation: "建設業（一般）の許認可を取得するには500万円以上の資本金が必要です。" },
                { id: "q201_3", type: "choice", question: "資本金1,000万円以下の場合の法人住民税均等割（東京23区）はいくらですか？", options: ["5万円", "7万円", "10万円", "18万円"], answer: 1, explanation: "資本金1,000万円以下の場合、東京23区での法人住民税均等割は約7万円です。" },
                { id: "q201_4", type: "choice", question: "資本金の払い込みで正しいのはどれですか？", options: ["法人口座に入金する", "発起人個人の口座に振り込む", "現金で保管する", "定款作成前に払い込む"], answer: 1, explanation: "設立前は法人口座が存在しないため、発起人個人の銀行口座に振り込みます。" },
                { id: "q201_5", type: "fill", question: "資本金の目安として、何か月分の運転資金を確保すべきとされていますか？（数字でX〜Yの形式で）", answer: "3〜6", explanation: "3〜6か月分の運転資金を資本金として確保することが推奨されています。" }
            ]
        },
        {
            id: 202,
            title: "定款の作成",
            duration: "20分",
            content: `
<h2>定款とは</h2>
<p>定款は「会社の憲法」とも呼ばれ、会社の基本的なルールを定めた文書です。</p>

<h2>定款の記載事項</h2>
<table>
<thead><tr><th>分類</th><th>内容</th><th>具体例</th></tr></thead>
<tbody>
<tr><td><strong>絶対的記載事項</strong></td><td>記載がないと定款自体が無効</td><td>商号、事業目的、本店所在地、出資財産の価額、発起人の氏名・住所</td></tr>
<tr><td><strong>相対的記載事項</strong></td><td>記載しないと効力が生じない</td><td>現物出資、株式の譲渡制限、取締役会・監査役の設置、役員の任期</td></tr>
<tr><td><strong>任意的記載事項</strong></td><td>記載しなくても有効だが記載可能</td><td>事業年度、役員の員数、株主総会の招集時期、配当の基準日</td></tr>
</tbody>
</table>

<h2>電子定款 vs 紙定款</h2>
<table>
<thead><tr><th>項目</th><th>電子定款</th><th>紙定款</th></tr></thead>
<tbody>
<tr><td>収入印紙</td><td>不要（0円）</td><td>4万円</td></tr>
<tr><td>作成方法</td><td>PDFに電子署名</td><td>紙に署名・押印</td></tr>
<tr><td>認証方法</td><td>オンライン申請</td><td>公証役場に持参</td></tr>
<tr><td>メリット</td><td>4万円の節約</td><td>手続きが分かりやすい</td></tr>
<tr><td>デメリット</td><td>電子署名環境必要</td><td>印紙代がかかる</td></tr>
<tr><td>代行費用目安</td><td>5,000円〜</td><td>-</td></tr>
</tbody>
</table>
<div class="info-box tip">
<div class="info-box-title">推奨</div>
<p>電子定款を利用して4万円節約しましょう。自分で電子署名環境を整えるより、行政書士等に電子定款作成を依頼した方が安くて確実です。</p>
</div>

<h2>定款のひな型（株式会社の場合）</h2>
<div class="info-box tip">
<div class="info-box-title">定款の構成</div>
<ul>
<li><strong>第1章 総則</strong>：商号、目的、本店所在地、公告方法</li>
<li><strong>第2章 株式</strong>：発行可能株式総数、譲渡制限、株券の不発行</li>
<li><strong>第3章 株主総会</strong>：招集時期、招集権者、議長、決議の方法</li>
<li><strong>第4章 取締役</strong>：員数、選任、任期、代表取締役、報酬</li>
<li><strong>第5章 計算</strong>：事業年度、剰余金の配当</li>
<li><strong>第6章 附則</strong>：設立時の資本金、最初の事業年度、発起人情報</li>
</ul>
</div>
`,
            quiz: [
                { id: "q202_1", type: "choice", question: "定款の絶対的記載事項に含まれないものはどれですか？", options: ["商号", "事業目的", "事業年度", "本店所在地"], answer: 2, explanation: "事業年度は任意的記載事項です。絶対的記載事項は商号、事業目的、本店所在地、出資財産の価額、発起人の氏名・住所です。" },
                { id: "q202_2", type: "choice", question: "電子定款で節約できる金額はいくらですか？", options: ["1万円", "2万円", "4万円", "6万円"], answer: 2, explanation: "電子定款にすると収入印紙4万円が不要になります。" },
                { id: "q202_3", type: "choice", question: "定款の別名は何ですか？", options: ["会社の法律", "会社の憲法", "会社の規則", "会社の方針"], answer: 1, explanation: "定款は「会社の憲法」とも呼ばれます。" },
                { id: "q202_4", type: "choice", question: "株式の譲渡制限は定款のどの記載事項に分類されますか？", options: ["絶対的記載事項", "相対的記載事項", "任意的記載事項", "法定記載事項"], answer: 1, explanation: "株式の譲渡制限は相対的記載事項です。記載しないと効力が生じません。" },
                { id: "q202_5", type: "fill", question: "紙定款で必要な収入印紙はいくらですか？（X万円の形式で）", answer: "4万円", explanation: "紙定款には4万円の収入印紙が必要です。電子定款なら不要です。" }
            ]
        },
        {
            id: 203,
            title: "公証人による定款認証",
            duration: "15分",
            content: `
<h2>定款認証とは</h2>
<p>株式会社を設立する場合、作成した定款を公証役場で公証人に認証してもらう必要があります。<strong>合同会社では定款認証は不要</strong>です。</p>

<h2>定款認証の手順</h2>
<div class="info-box tip">
<div class="info-box-title">3ステップ</div>
<ol>
<li><strong>事前確認</strong>：定款内容の最終確認、実質的支配者の申告書準備</li>
<li><strong>公証役場へ連絡</strong>：日時予約、定款案をFAX/メールで事前送付</li>
<li><strong>認証当日</strong>：本人確認書類提示、手数料支払、認証済み定款受領</li>
</ol>
<p>※管轄：本店所在地と同じ都道府県内の公証役場</p>
</div>

<h2>定款認証に必要なもの</h2>
<table>
<thead><tr><th>No</th><th>書類・持ち物</th><th>備考</th></tr></thead>
<tbody>
<tr><td>1</td><td>定款 3通</td><td>公証役場用・会社用・登記用</td></tr>
<tr><td>2</td><td>発起人の印鑑証明書</td><td>発行後3か月以内</td></tr>
<tr><td>3</td><td>発起人の実印</td><td>定款に押印済みであること</td></tr>
<tr><td>4</td><td>身分証明書</td><td>運転免許証・パスポート等</td></tr>
<tr><td>5</td><td>収入印紙 4万円分</td><td>電子定款の場合は不要</td></tr>
<tr><td>6</td><td>認証手数料</td><td>資本金額に応じて3〜5万円</td></tr>
<tr><td>7</td><td>謄本交付手数料</td><td>1ページ250円 × ページ数</td></tr>
<tr><td>8</td><td>実質的支配者の申告書</td><td>2018年11月から必須</td></tr>
<tr><td>9</td><td>委任状（代理人の場合）</td><td>代理人が手続きする場合</td></tr>
</tbody>
</table>

<h2>定款認証手数料（2022年1月改定）</h2>
<table>
<thead><tr><th>資本金の額</th><th>認証手数料</th></tr></thead>
<tbody>
<tr><td>100万円未満</td><td>3万円</td></tr>
<tr><td>100万円以上300万円未満</td><td>4万円</td></tr>
<tr><td>300万円以上</td><td>5万円</td></tr>
</tbody>
</table>
`,
            quiz: [
                { id: "q203_1", type: "choice", question: "定款認証が不要な会社形態はどれですか？", options: ["株式会社", "合同会社", "合資会社", "合名会社"], answer: 1, explanation: "合同会社は定款認証が不要です。株式会社のみ必要です。" },
                { id: "q203_2", type: "choice", question: "資本金300万円以上の場合の定款認証手数料はいくらですか？", options: ["3万円", "4万円", "5万円", "6万円"], answer: 2, explanation: "資本金300万円以上の場合、定款認証手数料は5万円です。" },
                { id: "q203_3", type: "choice", question: "印鑑証明書の有効期限は発行後何か月以内ですか？", options: ["1か月", "3か月", "6か月", "12か月"], answer: 1, explanation: "印鑑証明書は発行後3か月以内のものが必要です。" },
                { id: "q203_4", type: "choice", question: "定款は何通準備する必要がありますか？", options: ["1通", "2通", "3通", "5通"], answer: 2, explanation: "定款は3通準備します。公証役場用・会社用・登記用です。" },
                { id: "q203_5", type: "fill", question: "実質的支配者の申告書が必須になったのは何年何月からですか？（YYYY年MM月の形式で）", answer: "2018年11月", explanation: "実質的支配者の申告書は2018年11月から必須になりました。" }
            ]
        }
    ]
};
