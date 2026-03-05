const LEVEL4_DATA = {
    id: 4,
    title: "設立後の手続き",
    icon: "📋",
    description: "届出・手続き、法人口座開設、バーチャルオフィス活用",
    modules: [
        {
            id: 401,
            title: "設立後の届出・手続き",
            duration: "25分",
            content: `
<h2>届出先一覧と期限</h2>
<table>
<thead><tr><th>届出先</th><th>届出書類</th><th>期限</th><th>届出条件</th></tr></thead>
<tbody>
<tr><td rowspan="5"><strong>税務署</strong></td><td>法人設立届出書</td><td>設立後2か月</td><td>必須</td></tr>
<tr><td>青色申告の承認申請書</td><td>設立後3か月</td><td>推奨</td></tr>
<tr><td>給与支払事務所等の開設届出書</td><td>設立後1か月</td><td>必須</td></tr>
<tr><td>源泉所得税の納期の特例申請</td><td>随時</td><td>推奨</td></tr>
<tr><td>消費税に関する届出書</td><td>必要に応じて</td><td>条件次第</td></tr>
<tr><td><strong>都道府県税事務所</strong></td><td>法人設立届出書</td><td>設立後15日〜1か月</td><td>必須</td></tr>
<tr><td><strong>市区町村役場</strong></td><td>法人設立届出書</td><td>設立後15日〜1か月</td><td>必須</td></tr>
<tr><td rowspan="3"><strong>年金事務所</strong></td><td>健康保険・厚生年金保険新規適用届</td><td>設立後5日</td><td>必須</td></tr>
<tr><td>被保険者資格取得届</td><td>設立後5日</td><td>必須</td></tr>
<tr><td>被扶養者届</td><td>設立後5日</td><td>該当者</td></tr>
<tr><td rowspan="2"><strong>労働基準監督署</strong></td><td>労働保険関係成立届</td><td>雇用後10日</td><td>従業員雇用時</td></tr>
<tr><td>概算保険料申告書</td><td>雇用後50日</td><td>従業員雇用時</td></tr>
<tr><td rowspan="2"><strong>ハローワーク</strong></td><td>雇用保険適用事業所設置届</td><td>雇用後10日</td><td>従業員雇用時</td></tr>
<tr><td>雇用保険被保険者資格取得届</td><td>雇用翌月10日</td><td>従業員雇用時</td></tr>
</tbody>
</table>

<h2>届出のタイムライン</h2>
<div class="info-box tip">
<div class="info-box-title">設立日からの目安</div>
<ul>
<li><strong>5日以内</strong>：年金事務所（社会保険関連）</li>
<li><strong>10日以内</strong>：労働基準監督署・ハローワーク（従業員雇用時）</li>
<li><strong>15日以内</strong>：都道府県税事務所・市区町村役場</li>
<li><strong>1か月以内</strong>：税務署（給与支払事務所等の開設届出書）</li>
<li><strong>2か月以内</strong>：税務署（法人設立届出書）</li>
<li><strong>3か月以内</strong>：税務署（青色申告の承認申請書）</li>
</ul>
</div>

<h2>税務署への届出 詳細</h2>
<h3>1. 法人設立届出書</h3>
<p>設立後2か月以内に提出。添付書類として定款コピーと登記簿謄本が必要です。</p>

<h3>2. 青色申告の承認申請書（重要）</h3>
<div class="info-box warning">
<div class="info-box-title">必ず提出しましょう</div>
<p>設立後3か月以内、又は最初の事業年度終了日のいずれか早い日の前日までに提出します。</p>
<ul>
<li>赤字の10年間繰越控除</li>
<li>少額減価償却資産の一括損金算入（30万円未満）</li>
<li>各種特別控除の適用</li>
</ul>
<p>提出しないと白色申告になり不利です。</p>
</div>

<h3>3. 給与支払事務所等の開設届出書</h3>
<p>設立後1か月以内に提出。役員報酬を支払う場合も必要です。</p>

<h3>4. 源泉所得税の納期の特例</h3>
<p>従業員10人未満の場合に申請可能。毎月の納付が年2回（7月・1月）にまとめられ、事務負担が大幅に軽減されます。</p>

<h2>社会保険の手続き</h2>
<div class="info-box danger">
<div class="info-box-title">社会保険加入は法人の義務</div>
<p>法人は従業員の有無にかかわらず、<strong>社長1人の会社でも社会保険に加入する義務</strong>があります。</p>
<ul>
<li>対象：健康保険（協会けんぽ or 組合健保）、厚生年金保険</li>
<li>保険料負担：会社と本人で折半</li>
<li>健康保険料率：約10%（地域により異なる）</li>
<li>厚生年金保険料率：18.3%</li>
</ul>
</div>
<div class="info-box warning">
<div class="info-box-title">注意</div>
<ul>
<li>役員報酬が0円の場合は加入できない場合がある</li>
<li>社会保険に未加入だと、年金事務所から指導が入る</li>
<li>未加入のまま放置すると遡及加入を求められる</li>
</ul>
</div>

<h2>労働保険の手続き（従業員を雇う場合）</h2>
<table>
<thead><tr><th>保険</th><th>届出先</th><th>対象</th><th>保険料負担</th></tr></thead>
<tbody>
<tr><td><strong>労災保険</strong></td><td>労働基準監督署</td><td>すべての従業員（パート・アルバイト含む）</td><td>全額会社負担</td></tr>
<tr><td><strong>雇用保険</strong></td><td>ハローワーク</td><td>週20時間以上勤務の従業員</td><td>会社と本人で負担</td></tr>
</tbody>
</table>
<p>※役員は原則として労働保険の対象外（ただし兼務役員は対象となる場合あり）</p>
`,
            quiz: [
                { id: "q401_1", type: "choice", question: "青色申告の承認申請書の提出期限は設立後何か月以内ですか？", options: ["1か月", "2か月", "3か月", "6か月"], answer: 2, explanation: "青色申告の承認申請書は設立後3か月以内、又は最初の事業年度終了日のいずれか早い日の前日までに提出します。" },
                { id: "q401_2", type: "choice", question: "年金事務所への届出期限は設立後何日以内ですか？", options: ["5日", "10日", "15日", "30日"], answer: 0, explanation: "年金事務所への健康保険・厚生年金保険の届出は設立後5日以内です。" },
                { id: "q401_3", type: "choice", question: "社会保険について正しいのはどれですか？", options: ["従業員が5人以上の場合のみ加入義務がある", "社長1人の会社でも加入義務がある", "合同会社は加入不要", "個人事業主でも加入義務がある"], answer: 1, explanation: "法人は従業員の有無にかかわらず、社長1人の会社でも社会保険に加入する義務があります。" },
                { id: "q401_4", type: "choice", question: "源泉所得税の納期の特例が使えるのは従業員何人未満の場合ですか？", options: ["5人", "10人", "20人", "50人"], answer: 1, explanation: "従業員10人未満の場合に源泉所得税の納期の特例を申請できます。" },
                { id: "q401_5", type: "fill", question: "厚生年金保険料率は何%ですか？（数字で）", answer: "18.3", explanation: "厚生年金保険料率は18.3%で、会社と本人で折半（各9.15%）して負担します。" }
            ]
        },
        {
            id: 402,
            title: "法人口座の開設",
            duration: "20分",
            content: `
<h2>法人口座が必要な理由</h2>
<ul>
<li><strong>信用力の向上</strong>：取引先への請求書に法人名義の口座を記載できる</li>
<li><strong>経理の明確化</strong>：個人と法人の資金を完全に分離</li>
<li><strong>融資の前提条件</strong>：金融機関からの融資には法人口座が必須</li>
<li><strong>税務調査対策</strong>：公私混同を避けることで税務リスクを軽減</li>
<li><strong>決済サービスの利用</strong>：クレジットカード決済等の導入に必要</li>
</ul>

<h2>銀行別の特徴比較</h2>
<table>
<thead><tr><th>銀行種別</th><th>審査難易度</th><th>維持費</th><th>信用力</th><th>開設しやすさ</th></tr></thead>
<tbody>
<tr><td>メガバンク（三菱UFJ等）</td><td>高い</td><td>無料〜低額</td><td>最高</td><td>難しい</td></tr>
<tr><td>地方銀行</td><td>中程度</td><td>無料〜低額</td><td>高い</td><td>比較的開設しやすい</td></tr>
<tr><td>信用金庫</td><td>低い</td><td>出資金必要</td><td>中程度</td><td>開設しやすい</td></tr>
<tr><td>ネット銀行（GMO等）</td><td>低い</td><td>無料</td><td>中程度</td><td>最も開設しやすい</td></tr>
<tr><td>ゆうちょ銀行</td><td>中程度</td><td>無料</td><td>高い</td><td>中程度</td></tr>
</tbody>
</table>

<h2>法人口座開設に必要な書類</h2>
<table>
<thead><tr><th>No</th><th>書類</th><th>備考</th></tr></thead>
<tbody>
<tr><td>1</td><td>登記簿謄本</td><td>発行後6か月以内</td></tr>
<tr><td>2</td><td>会社の印鑑証明書</td><td>法務局で取得</td></tr>
<tr><td>3</td><td>代表者の本人確認書類</td><td>運転免許証・パスポート等</td></tr>
<tr><td>4</td><td>代表者の印鑑証明書</td><td>個人の印鑑証明書</td></tr>
<tr><td>5</td><td>会社の実印</td><td>銀行届出印として使用</td></tr>
<tr><td>6</td><td>定款のコピー</td><td>事業内容の確認用</td></tr>
<tr><td>7</td><td>会社のホームページ等</td><td>事業実態の証明</td></tr>
<tr><td>8</td><td>事業計画書</td><td>銀行によって求められる</td></tr>
</tbody>
</table>

<h2>法人口座開設のコツ</h2>
<div class="info-box success">
<div class="info-box-title">審査に通りやすくなるポイント</div>
<ol>
<li><strong>資本金は100万円以上</strong>にする（1円会社は審査で不利）</li>
<li><strong>ホームページを用意</strong>する（事業実態の証明）</li>
<li><strong>固定電話番号を持つ</strong>（IP電話やクラウドPBXでもOK）</li>
<li><strong>事業計画書をしっかり作る</strong></li>
<li><strong>本店所在地に実態を持つ</strong></li>
<li><strong>まず開設しやすい銀行から</strong>攻める（ネット銀行→信用金庫→地銀→メガバンク）</li>
<li><strong>代表者の経歴をアピール</strong>する</li>
</ol>
</div>

<div class="info-box danger">
<div class="info-box-title">審査で落ちやすいケース</div>
<ul>
<li>資本金が極端に少ない（1円〜数万円）</li>
<li>事業内容が不明確</li>
<li>バーチャルオフィスのみで実態が見えない</li>
<li>ホームページがない</li>
<li>代表者の本人確認が不十分</li>
<li>過去に金融事故がある</li>
</ul>
</div>

<h2>おすすめの口座開設戦略</h2>
<div class="info-box tip">
<div class="info-box-title">段階的な口座開設戦略</div>
<p><strong>Phase 1（設立直後）</strong>：ネット銀行（GMOあおぞら、住信SBI等）→審査が比較的緩く、振込手数料が安い</p>
<p><strong>Phase 2（事業安定後）</strong>：地方銀行 or 信用金庫 → 融資の相談がしやすい</p>
<p><strong>Phase 3（事業拡大時）</strong>：メガバンク → 大企業との取引で信用力を発揮</p>
</div>
`,
            quiz: [
                { id: "q402_1", type: "choice", question: "法人口座の開設が最もしやすい銀行はどれですか？", options: ["メガバンク", "地方銀行", "信用金庫", "ネット銀行"], answer: 3, explanation: "ネット銀行は審査が比較的緩く、最も開設しやすいです。" },
                { id: "q402_2", type: "choice", question: "法人口座開設に有利とされる資本金額は？", options: ["1円以上", "10万円以上", "100万円以上", "1,000万円以上"], answer: 2, explanation: "資本金100万円以上にすることで、法人口座の審査に通りやすくなります。" },
                { id: "q402_3", type: "choice", question: "口座開設の段階的戦略で最初に攻めるべき銀行は？", options: ["メガバンク", "地方銀行", "ネット銀行", "信用金庫"], answer: 2, explanation: "まずはネット銀行から開設し、事業実績を作ってから他の銀行に広げるのが戦略的です。" },
                { id: "q402_4", type: "choice", question: "登記簿謄本は発行後何か月以内のものが必要ですか？", options: ["1か月", "3か月", "6か月", "12か月"], answer: 2, explanation: "法人口座開設時の登記簿謄本は発行後6か月以内のものが必要です。" },
                { id: "q402_5", type: "fill", question: "法人口座の審査で不利になる、事業実態を証明できないオフィス形態は何ですか？（カタカナ含む）", answer: "バーチャルオフィス", explanation: "バーチャルオフィスのみだと事業実態が見えず、法人口座の審査が厳しくなる銀行があります。" }
            ]
        },
        {
            id: 403,
            title: "バーチャルオフィスの活用",
            duration: "15分",
            content: `
<h2>バーチャルオフィスとは</h2>
<p>バーチャルオフィスとは、実際にオフィスを借りずに住所・電話番号等のビジネスインフラを利用できるサービスです。</p>
<ul>
<li>法人登記用の住所提供</li>
<li>郵便物の受取・転送</li>
<li>電話番号の提供・転送</li>
<li>会議室の利用（オプション）</li>
<li>受付対応（オプション）</li>
</ul>
<p><strong>月額費用目安：2,000円〜15,000円</strong></p>

<h2>メリット・デメリット</h2>
<table>
<thead><tr><th>メリット</th><th>デメリット</th></tr></thead>
<tbody>
<tr><td>初期費用を大幅に削減</td><td>法人口座開設の審査が厳しくなることがある</td></tr>
<tr><td>一等地の住所を使える（渋谷、丸の内等）</td><td>同じ住所を他社も使っている</td></tr>
<tr><td>自宅住所を非公開にできる</td><td>許認可が取れない業種がある</td></tr>
<tr><td>場所を選ばず働ける</td><td>郵便物の受取にタイムラグがある</td></tr>
<tr><td>月額数千円から利用可能</td><td>来客対応が難しい</td></tr>
</tbody>
</table>

<h2>バーチャルオフィスの選び方</h2>
<ol>
<li><strong>法人登記が可能か確認する</strong>：すべてのバーチャルオフィスが登記可能とは限らない</li>
<li><strong>住所の信頼性</strong>：ビジネス街の住所か、検索して怪しい評判がないか</li>
<li><strong>郵便物の転送頻度</strong>：週1回、週2回、即日転送など</li>
<li><strong>銀行口座開設の実績</strong>：そのバーチャルオフィスの住所で法人口座開設実績があるか</li>
<li><strong>会議室の有無</strong>：来客対応が必要な場合</li>
<li><strong>契約条件</strong>：最低契約期間、解約時のペナルティ</li>
</ol>

<h2>バーチャルオフィスが使えない業種</h2>
<div class="info-box danger">
<div class="info-box-title">許認可が取れない業種</div>
<p>以下の業種は物理的な事業所が必要なため、バーチャルオフィスでは許認可を取得できません。</p>
<ul>
<li>人材派遣業（20平米以上の事業所が必要）</li>
<li>有料職業紹介業</li>
<li>古物商（一部の公安委員会で不可）</li>
<li>不動産業（宅建業免許）</li>
<li>士業事務所（弁護士、税理士等）</li>
<li>金融商品取引業</li>
<li>探偵業</li>
<li>建設業（一部の都道府県で不可）</li>
</ul>
<p>※自治体や管轄機関によって判断が異なる場合があります。事前に管轄機関に確認することを推奨します。</p>
</div>
`,
            quiz: [
                { id: "q403_1", type: "choice", question: "バーチャルオフィスの月額費用目安はどのくらいですか？", options: ["500円〜3,000円", "2,000円〜15,000円", "20,000円〜50,000円", "50,000円以上"], answer: 1, explanation: "バーチャルオフィスの月額費用目安は2,000円〜15,000円です。" },
                { id: "q403_2", type: "choice", question: "バーチャルオフィスのデメリットとして正しくないものはどれですか？", options: ["法人口座開設が難しくなることがある", "許認可が取れない業種がある", "初期費用が高い", "郵便物にタイムラグがある"], answer: 2, explanation: "バーチャルオフィスのメリットは初期費用を大幅に削減できることです。初期費用が高いはデメリットではありません。" },
                { id: "q403_3", type: "choice", question: "人材派遣業でバーチャルオフィスが使えない理由は？", options: ["法律で禁止されている", "20平米以上の事業所が必要", "資本金が足りない", "信用力が不足する"], answer: 1, explanation: "人材派遣業は20平米以上の物理的な事業所が必要なため、バーチャルオフィスでは許認可を取得できません。" },
                { id: "q403_4", type: "choice", question: "バーチャルオフィスを選ぶ際に確認すべき重要ポイントはどれですか？", options: ["建物の築年数", "銀行口座開設の実績", "従業員数", "駐車場の有無"], answer: 1, explanation: "そのバーチャルオフィスの住所で法人口座が開設できた実績があるかどうかは重要な選定ポイントです。" },
                { id: "q403_5", type: "fill", question: "バーチャルオフィスのメリットの一つとして、自宅住所を何にできますか？（漢字2文字）", answer: "非公開", explanation: "バーチャルオフィスを使えば、自宅住所を非公開にして法人登記ができます。" }
            ]
        }
    ]
};
