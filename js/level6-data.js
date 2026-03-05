const LEVEL6_DATA = {
    id: 6,
    title: "設立後の手続きと実践ガイド",
    icon: "🏆",
    description: "設立後にやるべきことと専門家活用のガイド",
    modules: [
        {
            id: 601,
            title: "設立費用の比較と節約術",
            duration: "15分",
            content: `
<h2>株式会社の設立費用</h2>
<table>
<thead><tr><th>項目</th><th>費用</th></tr></thead>
<tbody>
<tr><td>定款認証手数料</td><td>30,000〜50,000円</td></tr>
<tr><td>収入印紙代（紙定款の場合）</td><td>40,000円</td></tr>
<tr><td>登録免許税</td><td>150,000円</td></tr>
<tr><td>印鑑セット</td><td>5,000〜30,000円</td></tr>
<tr><td>登記簿謄本・印鑑証明書</td><td>約7,000円</td></tr>
<tr><td><strong>合計（電子定款）</strong></td><td><strong>約192,000〜240,000円</strong></td></tr>
</tbody>
</table>

<h2>合同会社の設立費用</h2>
<table>
<thead><tr><th>項目</th><th>費用</th></tr></thead>
<tbody>
<tr><td>登録免許税</td><td>60,000円</td></tr>
<tr><td>印鑑セット</td><td>5,000〜30,000円</td></tr>
<tr><td>登記簿謄本・印鑑証明書</td><td>約7,000円</td></tr>
<tr><td><strong>合計</strong></td><td><strong>約72,000〜100,000円</strong></td></tr>
</tbody>
</table>

<div class="info-box tip">
<div class="info-box-title">💡 節約ポイント</div>
<ul>
<li><strong>電子定款</strong>を使えば収入印紙代40,000円が不要</li>
<li>合同会社なら定款認証が不要で、登録免許税も60,000円と安い</li>
<li>司法書士に依頼する場合、+50,000〜80,000円が相場</li>
</ul>
</div>
`,
            quiz: [
                {
                    id: "q601_1",
                    type: "choice",
                    question: "株式会社の登録免許税はいくら？",
                    options: ["60,000円", "100,000円", "150,000円", "200,000円"],
                    answer: 2,
                    explanation: "株式会社の登録免許税は150,000円（資本金の0.7%と150,000円のいずれか大きい方）です。"
                },
                {
                    id: "q601_2",
                    type: "choice",
                    question: "電子定款を利用するメリットは？",
                    options: ["登録免許税が免除される", "収入印紙代40,000円が不要", "定款認証が不要になる", "設立までの期間が半分になる"],
                    answer: 1,
                    explanation: "電子定款を使えば紙の定款に必要な収入印紙代40,000円が不要になります。"
                },
                {
                    id: "q601_3",
                    type: "choice",
                    question: "合同会社の設立費用が株式会社より安い主な理由は？",
                    options: ["税金が安いから", "定款認証が不要で登録免許税も安いから", "印鑑が不要だから", "届出先が少ないから"],
                    answer: 1,
                    explanation: "合同会社は定款認証が不要（公証役場への手数料不要）で、登録免許税も60,000円と株式会社の150,000円より安価です。"
                }
            ]
        },
        {
            id: 602,
            title: "設立後にやるべきこと",
            duration: "15分",
            content: `
<h2>優先度別アクションリスト</h2>

<h3>優先度 高（設立後すぐ）</h3>
<table>
<thead><tr><th>項目</th><th>詳細</th></tr></thead>
<tbody>
<tr><td><strong>税理士の選定</strong></td><td>設立届出から関わってもらうのがベスト。月額1〜3万円程度が相場</td></tr>
<tr><td><strong>会計ソフトの導入</strong></td><td>freee、マネーフォワード、弥生 等。初日から経理をスタート</td></tr>
<tr><td><strong>資金計画</strong></td><td>最低6か月分の運転資金を確保。創業融資の検討（日本政策金融公庫等）</td></tr>
</tbody>
</table>

<h3>優先度 中（1ヶ月以内）</h3>
<table>
<thead><tr><th>項目</th><th>詳細</th></tr></thead>
<tbody>
<tr><td><strong>ホームページ作成</strong></td><td>法人口座開設や取引開始の際に必要</td></tr>
<tr><td><strong>就業規則の整備</strong></td><td>従業員10人以上の場合は義務</td></tr>
<tr><td><strong>各種保険・共済の検討</strong></td><td>小規模企業共済（経営者の退職金制度）、経営セーフティ共済</td></tr>
</tbody>
</table>

<h3>優先度 低（3ヶ月以内）</h3>
<table>
<thead><tr><th>項目</th><th>詳細</th></tr></thead>
<tbody>
<tr><td><strong>補助金・助成金の調査</strong></td><td>創業補助金、IT導入補助金、各種助成金</td></tr>
<tr><td><strong>事業計画書の精緻化</strong></td><td>融資申込時にも使える本格的な事業計画</td></tr>
</tbody>
</table>

<div class="info-box warning">
<div class="info-box-title">⚠️ 注意</div>
法人口座の開設には時間がかかる場合があります（審査に2〜4週間）。早めに手続きを開始しましょう。
</div>
`,
            quiz: [
                {
                    id: "q602_1",
                    type: "choice",
                    question: "設立後に最も優先度が高いアクションは？",
                    options: ["ホームページ作成", "補助金調査", "税理士の選定と会計ソフト導入", "事業計画書の精緻化"],
                    answer: 2,
                    explanation: "税理士の選定と会計ソフトの導入は設立直後に行うべき最優先事項です。"
                },
                {
                    id: "q602_2",
                    type: "choice",
                    question: "就業規則の作成が義務となるのは従業員何人以上？",
                    options: ["5人", "10人", "20人", "50人"],
                    answer: 1,
                    explanation: "常時10人以上の従業員がいる事業場では、就業規則を作成し労働基準監督署に届出する義務があります。"
                },
                {
                    id: "q602_3",
                    type: "choice",
                    question: "小規模企業共済とは何？",
                    options: ["従業員の退職金制度", "経営者の退職金制度", "取引先の倒産に備える共済", "火災保険の一種"],
                    answer: 1,
                    explanation: "小規模企業共済は、小規模企業の経営者や役員のための退職金制度です。掛金は全額所得控除になります。"
                }
            ]
        },
        {
            id: 603,
            title: "相談先一覧と用語集",
            duration: "15分",
            content: `
<h2>専門家の相談先一覧</h2>
<table>
<thead><tr><th>相談先</th><th>得意な分野</th></tr></thead>
<tbody>
<tr><td><strong>司法書士</strong></td><td>設立登記、定款作成、登記変更</td></tr>
<tr><td><strong>行政書士</strong></td><td>許認可申請、定款作成</td></tr>
<tr><td><strong>税理士</strong></td><td>税務全般、節税対策、決算申告</td></tr>
<tr><td><strong>社会保険労務士</strong></td><td>社会保険、労働保険、就業規則</td></tr>
<tr><td><strong>弁護士</strong></td><td>契約書、紛争対応、法的助言</td></tr>
<tr><td><strong>中小企業診断士</strong></td><td>経営戦略、事業計画、補助金申請</td></tr>
<tr><td><strong>商工会議所</strong></td><td>経営相談、セミナー、ネットワーキング</td></tr>
<tr><td><strong>よろず支援拠点</strong></td><td>無料の経営相談（国の支援機関）</td></tr>
<tr><td><strong>日本政策金融公庫</strong></td><td>創業融資の相談</td></tr>
</tbody>
</table>

<h2>重要用語集</h2>
<table>
<thead><tr><th>用語</th><th>説明</th></tr></thead>
<tbody>
<tr><td><strong>発起人</strong></td><td>株式会社の設立を企画し、出資する人</td></tr>
<tr><td><strong>社員（合同会社）</strong></td><td>合同会社の出資者（従業員のことではない）</td></tr>
<tr><td><strong>定款</strong></td><td>会社の基本ルールを定めた文書</td></tr>
<tr><td><strong>登録免許税</strong></td><td>登記申請時に納める税金</td></tr>
<tr><td><strong>青色申告</strong></td><td>税務上の優遇措置を受けられる申告方法</td></tr>
<tr><td><strong>均等割</strong></td><td>赤字でも課される法人住民税の一部</td></tr>
<tr><td><strong>電子定款</strong></td><td>PDF化し電子署名した定款（印紙税不要）</td></tr>
<tr><td><strong>現物出資</strong></td><td>金銭以外の財産（車、PC等）を出資する方法</td></tr>
</tbody>
</table>

<div class="info-box tip">
<div class="info-box-title">💡 本ガイドについて</div>
一般的な情報を提供するものであり、個別の法的・税務的助言を構成するものではありません。実際の設立にあたっては専門家にご相談ください。
</div>
`,
            quiz: [
                {
                    id: "q603_1",
                    type: "choice",
                    question: "設立登記を依頼する専門家として最も適切なのは？",
                    options: ["税理士", "司法書士", "弁護士", "中小企業診断士"],
                    answer: 1,
                    explanation: "設立登記や定款作成は司法書士の専門分野です。"
                },
                {
                    id: "q603_2",
                    type: "choice",
                    question: "合同会社における「社員」の正しい意味は？",
                    options: ["従業員のこと", "出資者のこと", "取締役のこと", "株主のこと"],
                    answer: 1,
                    explanation: "合同会社の「社員」は出資者を意味し、一般的な「従業員」とは異なります。"
                },
                {
                    id: "q603_3",
                    type: "choice",
                    question: "創業融資の相談先として適切な公的機関は？",
                    options: ["商工会議所", "よろず支援拠点", "日本政策金融公庫", "税務署"],
                    answer: 2,
                    explanation: "日本政策金融公庫は創業融資を専門に扱う公的金融機関です。"
                }
            ]
        }
    ]
};
