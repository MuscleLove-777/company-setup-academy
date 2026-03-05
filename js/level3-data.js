const LEVEL3_DATA = {
    id: 3,
    title: "登記と設立費用",
    icon: "⚖️",
    description: "法務局での登記手続きと設立費用の完全内訳",
    modules: [
        {
            id: 301,
            title: "法務局での設立登記",
            duration: "20分",
            content: `
<h2>登記申請の概要</h2>
<p>定款認証（株式会社の場合）と資本金の払い込みが完了したら、法務局に設立登記を申請します。<strong>登記申請日が会社の設立日</strong>となります。</p>

<h2>登記申請の流れ</h2>
<ol>
<li><strong>書類の準備</strong>：登記申請書の作成、添付書類の収集、登録免許税の準備</li>
<li><strong>法務局への申請</strong>：窓口申請 or オンライン申請。管轄は本店所在地を管轄する法務局</li>
<li><strong>審査期間</strong>：通常3日〜1週間程度。補正がある場合は連絡あり</li>
<li><strong>登記完了</strong>：登記簿謄本（履歴事項全部証明書）と印鑑カードを取得</li>
<li><strong>各種届出へ</strong>：税務署、年金事務所、ハローワーク等</li>
</ol>

<h2>登記申請に必要な書類（株式会社）</h2>
<table>
<thead><tr><th>No</th><th>書類名</th><th>備考</th></tr></thead>
<tbody>
<tr><td>1</td><td>設立登記申請書</td><td>法務局の書式を使用</td></tr>
<tr><td>2</td><td>定款（認証済み）</td><td>公証役場で認証した原本</td></tr>
<tr><td>3</td><td>発起人の決定書</td><td>本店所在地の詳細決定</td></tr>
<tr><td>4</td><td>取締役の就任承諾書</td><td>各取締役分</td></tr>
<tr><td>5</td><td>代表取締役の就任承諾書</td><td>代表取締役分</td></tr>
<tr><td>6</td><td>取締役の印鑑証明書</td><td>発行後3か月以内</td></tr>
<tr><td>7</td><td>払込証明書</td><td>通帳コピー添付</td></tr>
<tr><td>8</td><td>印鑑届出書</td><td>会社代表印の届出</td></tr>
<tr><td>9</td><td>登記すべき事項</td><td>CD-R又はオンライン</td></tr>
<tr><td>10</td><td>収入印紙</td><td>登録免許税分</td></tr>
<tr><td>11</td><td>本人確認証明書</td><td>取締役の住民票等</td></tr>
</tbody>
</table>

<h2>登記申請に必要な書類（合同会社）</h2>
<table>
<thead><tr><th>No</th><th>書類名</th><th>備考</th></tr></thead>
<tbody>
<tr><td>1</td><td>設立登記申請書</td><td>法務局の書式を使用</td></tr>
<tr><td>2</td><td>定款</td><td>認証不要（原本そのまま）</td></tr>
<tr><td>3</td><td>代表社員の就任承諾書</td><td>定款で定めた場合</td></tr>
<tr><td>4</td><td>代表社員の印鑑証明書</td><td>発行後3か月以内</td></tr>
<tr><td>5</td><td>払込証明書</td><td>通帳コピー添付</td></tr>
<tr><td>6</td><td>印鑑届出書</td><td>会社代表印の届出</td></tr>
<tr><td>7</td><td>登記すべき事項</td><td>CD-R又はオンライン</td></tr>
<tr><td>8</td><td>収入印紙</td><td>登録免許税分</td></tr>
<tr><td>9</td><td>本人確認証明書</td><td>社員の住民票等</td></tr>
</tbody>
</table>

<h2>登記完了後に取得すべき書類</h2>
<table>
<thead><tr><th>書類</th><th>用途</th><th>費用</th></tr></thead>
<tbody>
<tr><td>登記簿謄本（履歴事項全部証明書）</td><td>各種届出、口座開設</td><td>600円/通</td></tr>
<tr><td>印鑑証明書</td><td>契約、口座開設</td><td>450円/通</td></tr>
<tr><td>印鑑カード</td><td>印鑑証明書の取得用</td><td>無料</td></tr>
</tbody>
</table>
<div class="info-box tip">
<div class="info-box-title">推奨</div>
<p>登記簿謄本は5〜10通、印鑑証明書は3〜5通程度取得しておくと安心です。</p>
</div>
`,
            quiz: [
                { id: "q301_1", type: "choice", question: "会社の設立日はいつになりますか？", options: ["定款作成日", "定款認証日", "登記申請日", "登記完了日"], answer: 2, explanation: "登記申請日が会社の設立日となります。" },
                { id: "q301_2", type: "choice", question: "登記の審査期間はどのくらいですか？", options: ["即日", "3日〜1週間", "2〜3週間", "1か月"], answer: 1, explanation: "登記の審査期間は通常3日〜1週間程度です。" },
                { id: "q301_3", type: "choice", question: "登記簿謄本の正式名称は何ですか？", options: ["会社証明書", "法人登録証", "履歴事項全部証明書", "設立証明書"], answer: 2, explanation: "登記簿謄本の正式名称は「履歴事項全部証明書」です。" },
                { id: "q301_4", type: "choice", question: "登記簿謄本1通の発行手数料はいくらですか？", options: ["300円", "450円", "600円", "1,000円"], answer: 2, explanation: "登記簿謄本は1通600円です。印鑑証明書は1通450円です。" },
                { id: "q301_5", type: "fill", question: "合同会社の登記申請で定款認証は必要ですか？（「必要」か「不要」で）", answer: "不要", explanation: "合同会社の定款は認証不要です。原本をそのまま提出します。" }
            ]
        },
        {
            id: 302,
            title: "設立費用の完全内訳",
            duration: "20分",
            content: `
<h2>株式会社の設立費用</h2>
<table>
<thead><tr><th>費目</th><th>金額</th><th>備考</th></tr></thead>
<tbody>
<tr><td>定款認証手数料</td><td>3〜5万</td><td>資本金額に応じる</td></tr>
<tr><td>定款の謄本交付手数料</td><td>約2千</td><td>250円×ページ数</td></tr>
<tr><td>収入印紙（紙定款の場合）</td><td>4万</td><td>電子定款なら不要</td></tr>
<tr><td>登録免許税</td><td>15万</td><td>資本金×0.7%（最低15万円）</td></tr>
<tr><td>会社の印鑑セット</td><td>0.5〜3万</td><td>ネット注文が安い</td></tr>
<tr><td>登記簿謄本</td><td>約5千</td><td>600円×必要通数</td></tr>
<tr><td>印鑑証明書</td><td>約2千</td><td>450円×必要通数</td></tr>
</tbody>
</table>
<div class="info-box tip">
<div class="info-box-title">合計</div>
<ul>
<li>電子定款の場合：<strong>約20万円</strong></li>
<li>紙定款の場合：<strong>約24万円</strong></li>
</ul>
</div>

<h2>合同会社の設立費用</h2>
<table>
<thead><tr><th>費目</th><th>金額</th><th>備考</th></tr></thead>
<tbody>
<tr><td>定款認証手数料</td><td>0円</td><td>合同会社は認証不要</td></tr>
<tr><td>収入印紙（紙定款の場合）</td><td>4万</td><td>電子定款なら不要</td></tr>
<tr><td>登録免許税</td><td>6万</td><td>資本金×0.7%（最低6万円）</td></tr>
<tr><td>会社の印鑑セット</td><td>0.5〜3万</td><td></td></tr>
<tr><td>登記簿謄本</td><td>約5千</td><td></td></tr>
<tr><td>印鑑証明書</td><td>約2千</td><td></td></tr>
</tbody>
</table>
<div class="info-box success">
<div class="info-box-title">合計</div>
<ul>
<li>電子定款の場合：<strong>約7万円</strong></li>
<li>紙定款の場合：<strong>約11万円</strong></li>
</ul>
</div>

<h2>設立費用の比較</h2>
<div class="info-box warning">
<div class="info-box-title">差額は約13万円</div>
<p>株式会社（電子定款）：約20万円 vs 合同会社（電子定款）：約7万円</p>
</div>

<h2>自分でやる vs 専門家に依頼</h2>
<table>
<thead><tr><th></th><th>自分でやる</th><th>設立サービス利用</th><th>司法書士依頼</th></tr></thead>
<tbody>
<tr><td>費用（株式会社）</td><td>約20万円</td><td>約20〜25万円</td><td>約26〜35万円</td></tr>
<tr><td>費用（合同会社）</td><td>約7万円</td><td>約7〜12万円</td><td>約12〜18万円</td></tr>
<tr><td>所要時間</td><td>1〜3週間</td><td>1〜2週間</td><td>1週間程度</td></tr>
<tr><td>手間</td><td>大</td><td>中</td><td>小</td></tr>
<tr><td>ミスのリスク</td><td>高い</td><td>低い</td><td>極めて低い</td></tr>
<tr><td>電子定款対応</td><td>困難</td><td>対応</td><td>対応</td></tr>
</tbody>
</table>
<div class="info-box tip">
<div class="info-box-title">推奨</div>
<ul>
<li><strong>コスト重視</strong> → 設立サービス（freee、マネーフォワード等）</li>
<li><strong>安心重視</strong> → 司法書士に依頼</li>
<li><strong>学習目的</strong> → 自分でやってみる</li>
</ul>
</div>
`,
            quiz: [
                { id: "q302_1", type: "choice", question: "株式会社の登録免許税の最低額はいくらですか？", options: ["6万円", "10万円", "15万円", "20万円"], answer: 2, explanation: "株式会社の登録免許税は資本金×0.7%ですが、最低額は15万円です。" },
                { id: "q302_2", type: "choice", question: "合同会社を電子定款で設立した場合の総費用はおよそいくらですか？", options: ["約3万円", "約7万円", "約15万円", "約20万円"], answer: 1, explanation: "合同会社を電子定款で設立する場合の総費用は約7万円です。" },
                { id: "q302_3", type: "choice", question: "株式会社と合同会社の設立費用の差額はおよそいくらですか？", options: ["約5万円", "約8万円", "約13万円", "約20万円"], answer: 2, explanation: "電子定款の場合、株式会社約20万円-合同会社約7万円＝差額約13万円です。" },
                { id: "q302_4", type: "choice", question: "ミスのリスクが最も低い方法はどれですか？", options: ["自分でやる", "設立サービス利用", "司法書士に依頼", "行政書士に依頼"], answer: 2, explanation: "司法書士への依頼はミスのリスクが極めて低く、最も安心な方法です。" },
                { id: "q302_5", type: "fill", question: "登録免許税は資本金の何%で計算されますか？（数字で）", answer: "0.7", explanation: "登録免許税は資本金×0.7%で計算されます。ただし最低額があります。" }
            ]
        }
    ]
};
