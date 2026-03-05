const LEVEL5_DATA = {
    id: 5,
    title: "実践・応用編",
    icon: "🚀",
    description: "設立スケジュール、書類チェックリスト、よくある失敗、まとめ",
    modules: [
        {
            id: 501,
            title: "設立スケジュール・タイムライン",
            duration: "15分",
            content: `
<h2>標準的なスケジュール（株式会社：約2〜4週間）</h2>
<table>
<thead><tr><th>期間</th><th>作業内容</th></tr></thead>
<tbody>
<tr><td><strong>Week 1 Day 1-3</strong></td><td>構想・準備：会社形態の決定、商号・事業目的の決定、資本金・決算月の決定、役員構成の決定、印鑑の発注</td></tr>
<tr><td><strong>Week 1 Day 3-5</strong></td><td>定款の作成：定款の起案、公証役場への事前相談、定款の修正・確定</td></tr>
<tr><td><strong>Week 1 Day 5-7</strong></td><td>定款認証・資本金払い込み：公証役場で定款認証、発起人口座へ資本金を振込</td></tr>
<tr><td><strong>Week 2 Day 8-10</strong></td><td>登記申請書類の準備：各種書類の作成、払込証明書の作成、書類の最終確認</td></tr>
<tr><td><strong>Week 2 Day 10-11</strong></td><td>法務局へ登記申請（この日が設立日）</td></tr>
<tr><td><strong>Week 2 Day 11-14</strong></td><td>審査期間（通常3日〜1週間）</td></tr>
<tr><td><strong>Week 3 Day 14-15</strong></td><td>登記完了：登記簿謄本・印鑑カード・印鑑証明書の取得</td></tr>
<tr><td><strong>Week 3 Day 15-21</strong></td><td>各種届出：税務署、都道府県税事務所、市区町村、年金事務所、法人口座の開設手続き</td></tr>
<tr><td><strong>Week 4 Day 21-28</strong></td><td>事業開始の準備：法人口座開設完了、法人クレジットカード申込、会計ソフト導入、税理士選定</td></tr>
</tbody>
</table>

<h2>合同会社のスケジュール（約1〜2週間）</h2>
<table>
<thead><tr><th>期間</th><th>作業内容</th></tr></thead>
<tbody>
<tr><td><strong>Week 1 Day 1-2</strong></td><td>構想・準備 + 印鑑発注</td></tr>
<tr><td><strong>Week 1 Day 2-3</strong></td><td>定款の作成（認証不要なので速い）</td></tr>
<tr><td><strong>Week 1 Day 3-4</strong></td><td>資本金の払い込み</td></tr>
<tr><td><strong>Week 1 Day 4-5</strong></td><td>登記申請書類の準備</td></tr>
<tr><td><strong>Week 1 Day 5</strong></td><td>法務局へ登記申請（＝設立日）</td></tr>
<tr><td><strong>Week 1 Day 5-10</strong></td><td>審査期間</td></tr>
<tr><td><strong>Week 2 Day 10</strong></td><td>登記完了・謄本取得</td></tr>
<tr><td><strong>Week 2 Day 10-14</strong></td><td>各種届出・口座開設手続き</td></tr>
</tbody>
</table>
<div class="info-box tip">
<div class="info-box-title">合同会社のメリット</div>
<p>合同会社は定款認証が不要なため、株式会社より約1〜2週間短縮できます。</p>
</div>

<h2>設立日を狙って逆算する</h2>
<div class="info-box warning">
<div class="info-box-title">逆算スケジュール（株式会社の場合）</div>
<ul>
<li><strong>-21日</strong>：構想開始、印鑑発注</li>
<li><strong>-14日</strong>：定款案の作成、公証役場に事前相談</li>
<li><strong>-10日</strong>：定款の修正・確定</li>
<li><strong>-7日</strong>：公証役場で定款認証</li>
<li><strong>-5日</strong>：資本金の払い込み</li>
<li><strong>-3日</strong>：登記申請書類の最終準備</li>
<li><strong>0日</strong>：法務局へ登記申請（この日が設立日）</li>
</ul>
</div>

<div class="info-box tip">
<div class="info-box-title">設立日のポイント</div>
<ul>
<li>月初（1日）にすると均等割が1か月分余計にかかる</li>
<li>月末近くの方が初年度の均等割が節約できる</li>
<li>縁起の良い日（大安等）を選ぶ人も多い</li>
<li>土日祝日は法務局が閉庁なので注意</li>
</ul>
</div>
`,
            quiz: [
                { id: "q501_1", type: "choice", question: "株式会社の設立にかかる標準的な期間はどのくらいですか？", options: ["約1週間", "約2〜4週間", "約2〜3か月", "約半年"], answer: 1, explanation: "株式会社の設立は標準的に約2〜4週間かかります。" },
                { id: "q501_2", type: "choice", question: "合同会社が株式会社より設立が早い主な理由は？", options: ["書類が少ない", "定款認証が不要", "登記が即日完了", "資本金が不要"], answer: 1, explanation: "合同会社は定款認証が不要なため、約1〜2週間短縮できます。" },
                { id: "q501_3", type: "choice", question: "設立日を月初にするデメリットは？", options: ["審査が厳しくなる", "均等割が1か月分余計にかかる", "届出の期限が短くなる", "特にデメリットはない"], answer: 1, explanation: "月初に設立すると法人住民税の均等割が1か月分余計にかかる場合があります。" },
                { id: "q501_4", type: "choice", question: "登記申請日から逆算して定款認証を行うのは約何日前ですか？", options: ["3日前", "7日前", "14日前", "21日前"], answer: 1, explanation: "逆算スケジュールでは、登記申請日の約7日前に公証役場で定款認証を行います。" },
                { id: "q501_5", type: "fill", question: "法務局が閉庁しているのは何曜日ですか？（土日祝日のうち主なものを2つ）", answer: "土日", explanation: "法務局は土日祝日は閉庁しているため、登記申請（＝設立日）にはできません。" }
            ]
        },
        {
            id: 502,
            title: "必要書類チェックリスト",
            duration: "15分",
            content: `
<h2>設立前に準備する書類</h2>
<table>
<thead><tr><th>No</th><th>項目</th></tr></thead>
<tbody>
<tr><td>1</td><td>発起人（社員）の印鑑証明書を取得</td></tr>
<tr><td>2</td><td>発起人（社員）の本人確認書類を用意</td></tr>
<tr><td>3</td><td>会社印鑑セット（代表印・銀行印・角印）</td></tr>
<tr><td>4</td><td>商号の事前調査（法務局で類似商号確認）</td></tr>
<tr><td>5</td><td>事業目的の確定</td></tr>
<tr><td>6</td><td>本店所在地の決定</td></tr>
<tr><td>7</td><td>資本金額の決定</td></tr>
<tr><td>8</td><td>決算月の決定</td></tr>
<tr><td>9</td><td>役員構成の決定</td></tr>
<tr><td>10</td><td>発行可能株式総数の決定（株式会社）</td></tr>
</tbody>
</table>

<h2>定款認証に必要な書類（株式会社のみ）</h2>
<table>
<thead><tr><th>No</th><th>項目</th></tr></thead>
<tbody>
<tr><td>1</td><td>定款 3通（公証役場保存用・会社保存用・登記申請用）</td></tr>
<tr><td>2</td><td>発起人全員の印鑑証明書（3か月以内）</td></tr>
<tr><td>3</td><td>発起人全員の実印</td></tr>
<tr><td>4</td><td>収入印紙 4万円（紙定款の場合）</td></tr>
<tr><td>5</td><td>認証手数料（3〜5万円）</td></tr>
<tr><td>6</td><td>謄本交付手数料（約2千円）</td></tr>
<tr><td>7</td><td>実質的支配者の申告書</td></tr>
<tr><td>8</td><td>委任状（代理人が行く場合）</td></tr>
</tbody>
</table>

<h2>登記申請チェックリスト（株式会社）</h2>
<table>
<thead><tr><th>No</th><th>項目</th></tr></thead>
<tbody>
<tr><td>1</td><td>設立登記申請書</td></tr>
<tr><td>2</td><td>認証済み定款の謄本</td></tr>
<tr><td>3</td><td>発起人の決定書（本店所在地の詳細）</td></tr>
<tr><td>4</td><td>取締役の就任承諾書</td></tr>
<tr><td>5</td><td>代表取締役の就任承諾書</td></tr>
<tr><td>6</td><td>取締役の印鑑証明書（3か月以内）</td></tr>
<tr><td>7</td><td>払込証明書（通帳コピー添付）</td></tr>
<tr><td>8</td><td>印鑑届出書</td></tr>
<tr><td>9</td><td>登記すべき事項（CD-R or オンライン）</td></tr>
<tr><td>10</td><td>収入印紙（登録免許税15万円分）</td></tr>
<tr><td>11</td><td>本人確認証明書（住民票等）</td></tr>
</tbody>
</table>

<h2>設立後の届出チェックリスト</h2>
<table>
<thead><tr><th>No</th><th>項目</th></tr></thead>
<tbody>
<tr><td colspan="2"><strong>【税務署】</strong></td></tr>
<tr><td>1</td><td>法人設立届出書（設立後2か月以内）</td></tr>
<tr><td>2</td><td>青色申告の承認申請書（設立後3か月以内）</td></tr>
<tr><td>3</td><td>給与支払事務所等の開設届出書（1か月以内）</td></tr>
<tr><td>4</td><td>源泉所得税の納期の特例申請書</td></tr>
<tr><td colspan="2"><strong>【地方自治体】</strong></td></tr>
<tr><td>5</td><td>都道府県税事務所への届出</td></tr>
<tr><td>6</td><td>市区町村への届出</td></tr>
<tr><td colspan="2"><strong>【社会保険】</strong></td></tr>
<tr><td>7</td><td>健康保険・厚生年金 新規適用届</td></tr>
<tr><td>8</td><td>被保険者資格取得届</td></tr>
<tr><td>9</td><td>被扶養者届（該当者がいる場合）</td></tr>
<tr><td colspan="2"><strong>【その他】</strong></td></tr>
<tr><td>10</td><td>法人口座の開設</td></tr>
<tr><td>11</td><td>会計ソフトの導入</td></tr>
<tr><td>12</td><td>税理士との契約</td></tr>
</tbody>
</table>
`,
            quiz: [
                { id: "q502_1", type: "choice", question: "株式会社の登記申請に必要な収入印紙（登録免許税）はいくら分ですか？", options: ["4万円", "6万円", "10万円", "15万円"], answer: 3, explanation: "株式会社の登録免許税は15万円分の収入印紙が必要です。" },
                { id: "q502_2", type: "choice", question: "設立前に法務局で確認すべきことは何ですか？", options: ["登記の予約", "類似商号の確認", "税金の計算", "届出書の提出"], answer: 1, explanation: "設立前に法務局で商号の事前調査（類似商号の確認）を行います。" },
                { id: "q502_3", type: "choice", question: "設立後の届出で最も優先度が高いのはどれですか？", options: ["ホームページの作成", "法人クレジットカードの申込", "青色申告の承認申請書", "名刺の作成"], answer: 2, explanation: "青色申告の承認申請書は期限内に提出しないと不利になるため、最も優先度が高い届出の一つです。" },
                { id: "q502_4", type: "choice", question: "定款は何通必要ですか？", options: ["1通", "2通", "3通", "5通"], answer: 2, explanation: "定款は3通必要です（公証役場保存用・会社保存用・登記申請用）。" },
                { id: "q502_5", type: "fill", question: "設立登記申請時に法務局に届出する印鑑の書類名は何ですか？（漢字5文字）", answer: "印鑑届出書", explanation: "印鑑届出書を提出して会社代表印を届出します。" }
            ]
        },
        {
            id: 503,
            title: "よくある失敗と注意点",
            duration: "20分",
            content: `
<h2>設立時のよくある失敗 TOP 10</h2>
<table>
<thead><tr><th>No</th><th>失敗の内容</th><th>対策</th></tr></thead>
<tbody>
<tr><td>1</td><td>資本金を1,000万円以上にして初年度から消費税課税</td><td>消費税の免税メリットを考慮し、999万円以下に設定</td></tr>
<tr><td>2</td><td>事業目的を狭く書きすぎて追加の登記変更が必要に（変更登記3万円）</td><td>将来の事業展開も見据えて幅広く記載</td></tr>
<tr><td>3</td><td>決算月を3月にしたが税理士が繁忙期で対応が遅れた</td><td>設立月の前月を決算月にするなど、繁忙期を避ける</td></tr>
<tr><td>4</td><td>青色申告の承認申請書を期限内に出し忘れた</td><td>設立後すぐに提出する</td></tr>
<tr><td>5</td><td>資本金の払い込み日が定款作成日より前だった</td><td>定款作成日以降の日付で払い込む</td></tr>
<tr><td>6</td><td>印鑑証明書の有効期限が切れていた</td><td>3か月以内のものを新たに取得する</td></tr>
<tr><td>7</td><td>商号に使えない文字を使ってしまった</td><td>事前に法務局で確認する</td></tr>
<tr><td>8</td><td>役員の住所を間違えて登記してしまった</td><td>住民票と完全一致させる</td></tr>
<tr><td>9</td><td>法人口座が開設できず事業開始が遅れた</td><td>まずネット銀行から開設を試みる</td></tr>
<tr><td>10</td><td>社会保険の届出を忘れて遡及加入を求められた</td><td>設立後5日以内に年金事務所へ届出</td></tr>
</tbody>
</table>

<h2>設立後のよくある失敗</h2>
<div class="info-box danger">
<div class="info-box-title">役員報酬の設定ミス</div>
<ul>
<li>期首から3か月以内に決定しないと損金算入できない</li>
<li>年度途中の変更は原則として認められない</li>
<li>高すぎると社会保険料の負担が重い</li>
<li>低すぎると生活が成り立たない</li>
</ul>
<p>→ 税理士と相談して適切な金額を設定する</p>
</div>

<div class="info-box warning">
<div class="info-box-title">経理処理の放置</div>
<p>領収書やレシートを溜め込み、決算直前にまとめて処理しようとして混乱するケースが多い。→ 会計ソフトを導入し、日々の経理を習慣化する</p>
</div>

<div class="info-box warning">
<div class="info-box-title">公私混同</div>
<p>個人の支出を法人口座から支払ったり、個人と法人の資金を区別しないケース。→ 法人口座と個人口座を完全に分離する</p>
</div>

<h2>法人化後のランニングコスト</h2>
<table>
<thead><tr><th>項目</th><th>年間費用目安</th></tr></thead>
<tbody>
<tr><td>法人住民税（均等割）※赤字でも発生</td><td>約7万円（最低）</td></tr>
<tr><td>税理士顧問料（決算申告込み）</td><td>約20〜50万円/年</td></tr>
<tr><td>社会保険料（会社負担分）</td><td>報酬の約15%</td></tr>
<tr><td>登記変更費用（役員改選等）</td><td>1万〜3万円/回</td></tr>
<tr><td>決算公告費用（株式会社・官報掲載）</td><td>約3〜8万円/年</td></tr>
</tbody>
</table>
<div class="info-box danger">
<div class="info-box-title">注意</div>
<p>赤字でも法人住民税の均等割（約7万円）は毎年発生します。個人事業主に戻す場合は解散・清算の手続きが必要で費用と時間がかかります。法人化は慎重に判断しましょう。</p>
</div>

<h2>税務上の重要ポイント</h2>
<ul>
<li><strong>法人化のタイミング</strong>：所得が800万円を超えてきたら検討</li>
<li><strong>消費税の免税期間</strong>：資本金1,000万円未満なら最大2年間免税。インボイス制度との兼ね合いに注意</li>
<li><strong>役員報酬と法人利益のバランス</strong>：最適なバランスは年間利益によって異なる。税理士にシミュレーションを依頼</li>
<li><strong>経費の範囲</strong>：法人は個人より広い。交際費は年間800万円まで（中小企業）。生命保険、社宅なども活用可能</li>
</ul>
`,
            quiz: [
                { id: "q503_1", type: "choice", question: "役員報酬はいつまでに決定しないと損金算入できませんか？", options: ["設立後1か月以内", "期首から3か月以内", "決算月の前月まで", "いつでも変更可能"], answer: 1, explanation: "役員報酬は期首から3か月以内に決定しないと損金算入できません。" },
                { id: "q503_2", type: "choice", question: "赤字でも毎年発生するコストはどれですか？", options: ["法人税", "消費税", "法人住民税の均等割", "事業税"], answer: 2, explanation: "法人住民税の均等割（約7万円）は赤字でも毎年発生します。" },
                { id: "q503_3", type: "choice", question: "事業目的の変更登記にかかる費用はいくらですか？", options: ["1万円", "3万円", "6万円", "15万円"], answer: 1, explanation: "事業目的の変更登記には約3万円の費用がかかります。" },
                { id: "q503_4", type: "choice", question: "中小企業の交際費の損金算入限度額は年間いくらまでですか？", options: ["100万円", "300万円", "500万円", "800万円"], answer: 3, explanation: "中小企業の交際費は年間800万円まで損金算入できます。" },
                { id: "q503_5", type: "fill", question: "資本金の払い込みは定款作成日のいつ以降に行う必要がありますか？（漢字2文字）", answer: "以降", explanation: "資本金の払い込みは定款作成日以降に行う必要があります。定款作成日より前に払い込むと無効です。" }
            ]
        },
        {
            id: 504,
            title: "まとめと次のステップ",
            duration: "15分",
            content: `
<h2>会社設立 全体フロー まとめ</h2>
<h3>Phase 1: 構想・準備（1〜3日）</h3>
<ul>
<li>会社形態の決定（株式会社 or 合同会社）</li>
<li>商号・事業目的・本店所在地の決定</li>
<li>資本金・決算月の決定</li>
<li>役員構成の決定</li>
<li>印鑑の発注</li>
</ul>

<h3>Phase 2: 定款作成・認証（3〜7日）</h3>
<ul>
<li>定款の起案・作成</li>
<li>公証役場での認証（株式会社のみ）</li>
<li>資本金の払い込み</li>
</ul>

<h3>Phase 3: 登記申請・完了（5〜10日）</h3>
<ul>
<li>登記申請書類の準備</li>
<li>法務局へ登記申請（申請日 = 設立日）</li>
<li>審査・登記完了</li>
<li>登記簿謄本・印鑑カードの取得</li>
</ul>

<h3>Phase 4: 設立後の届出（5〜30日）</h3>
<ul>
<li>税務署への各種届出</li>
<li>都道府県・市区町村への届出</li>
<li>年金事務所への届出（社会保険）</li>
<li>法人口座の開設</li>
<li>労働保険の手続き（従業員雇用時）</li>
</ul>

<h3>Phase 5: 事業開始準備</h3>
<ul>
<li>会計ソフトの導入</li>
<li>税理士の選定・契約</li>
<li>法人クレジットカードの取得</li>
<li>ホームページの作成</li>
<li>名刺・封筒等のビジネスツール準備</li>
</ul>

<h2>費用サマリー</h2>
<table>
<thead><tr><th>項目</th><th>株式会社（電子定款）</th><th>合同会社（電子定款）</th></tr></thead>
<tbody>
<tr><td>登録免許税</td><td>150,000円</td><td>60,000円</td></tr>
<tr><td>定款認証</td><td>30,000〜50,000円</td><td>0円</td></tr>
<tr><td>謄本手数料</td><td>約2,000円</td><td>-</td></tr>
<tr><td>印鑑セット</td><td>5,000〜30,000円</td><td>5,000〜30,000円</td></tr>
<tr><td>登記簿謄本</td><td>約5,000円</td><td>約5,000円</td></tr>
<tr><td>印鑑証明書</td><td>約2,000円</td><td>約2,000円</td></tr>
<tr><td><strong>合計</strong></td><td><strong>約200,000〜240,000円</strong></td><td><strong>約72,000〜100,000円</strong></td></tr>
</tbody>
</table>

<h2>次にやるべきこと</h2>
<h3>優先度 高</h3>
<ol>
<li><strong>税理士を早期に選定する</strong>：設立届出から関わってもらうのがベスト。月額1〜3万円程度が相場</li>
<li><strong>会計ソフトを導入する</strong>：freee、マネーフォワード、弥生等。初日から経理をスタート</li>
<li><strong>資金計画を立てる</strong>：最低6か月分の運転資金を確保。創業融資の検討（日本政策金融公庫等）</li>
</ol>

<h3>優先度 中</h3>
<ol start="4">
<li>ホームページを作成する</li>
<li>就業規則を整備する（従業員10人以上の場合は義務）</li>
<li>各種保険・共済の検討（小規模企業共済、経営セーフティ共済）</li>
</ol>

<h3>優先度 低</h3>
<ol start="7">
<li>補助金・助成金の情報収集</li>
<li>事業計画書の精緻化</li>
</ol>

<h2>相談先一覧</h2>
<table>
<thead><tr><th>相談先</th><th>得意な分野</th></tr></thead>
<tbody>
<tr><td>司法書士</td><td>設立登記、定款作成、登記変更</td></tr>
<tr><td>行政書士</td><td>許認可申請、定款作成</td></tr>
<tr><td>税理士</td><td>税務全般、節税対策、決算申告</td></tr>
<tr><td>社会保険労務士</td><td>社会保険、労働保険、就業規則</td></tr>
<tr><td>弁護士</td><td>契約書、紛争対応、法的助言</td></tr>
<tr><td>中小企業診断士</td><td>経営戦略、事業計画、補助金申請</td></tr>
<tr><td>商工会議所</td><td>経営相談、セミナー、ネットワーキング</td></tr>
<tr><td>よろず支援拠点</td><td>無料の経営相談（国の支援機関）</td></tr>
<tr><td>日本政策金融公庫</td><td>創業融資の相談</td></tr>
</tbody>
</table>

<h2>付録：用語集</h2>
<table>
<thead><tr><th>用語</th><th>説明</th></tr></thead>
<tbody>
<tr><td>発起人</td><td>株式会社の設立を企画し、出資する人</td></tr>
<tr><td>社員（合同会社）</td><td>合同会社の出資者（従業員のことではない）</td></tr>
<tr><td>定款</td><td>会社の基本ルールを定めた文書</td></tr>
<tr><td>登録免許税</td><td>登記申請時に納める税金</td></tr>
<tr><td>登記簿謄本</td><td>法務局で取得する会社の公的証明書</td></tr>
<tr><td>履歴事項全部証明書</td><td>登記簿謄本の正式名称</td></tr>
<tr><td>印鑑証明書</td><td>届出済みの印鑑を証明する書類</td></tr>
<tr><td>青色申告</td><td>税務上の優遇措置を受けられる申告方法</td></tr>
<tr><td>均等割</td><td>赤字でも課される法人住民税の一部</td></tr>
<tr><td>標準報酬月額</td><td>社会保険料の計算基準となる報酬額</td></tr>
<tr><td>決算公告</td><td>株式会社に義務付けられた財務情報の公開</td></tr>
<tr><td>電子定款</td><td>PDF化し電子署名した定款（印紙税不要）</td></tr>
<tr><td>現物出資</td><td>金銭以外の財産（車、PC等）を出資する方法</td></tr>
<tr><td>取締役会</td><td>取締役3名以上で構成する意思決定機関</td></tr>
<tr><td>監査役</td><td>取締役の業務を監査する役職</td></tr>
</tbody>
</table>
`,
            quiz: [
                { id: "q504_1", type: "choice", question: "設立後に最も優先して行うべきことはどれですか？", options: ["名刺の作成", "ホームページの作成", "税理士の選定", "補助金の申請"], answer: 2, explanation: "税理士を早期に選定し、設立届出から関わってもらうのがベストです。" },
                { id: "q504_2", type: "choice", question: "創業融資の相談先として適切なのはどれですか？", options: ["メガバンク", "日本政策金融公庫", "信用金庫", "ネット銀行"], answer: 1, explanation: "日本政策金融公庫は創業融資の相談先として最も適切です。" },
                { id: "q504_3", type: "choice", question: "就業規則の整備が義務となるのは従業員何人以上の場合ですか？", options: ["1人以上", "5人以上", "10人以上", "50人以上"], answer: 2, explanation: "従業員10人以上の場合、就業規則の作成・届出が義務付けられています。" },
                { id: "q504_4", type: "choice", question: "設立登記を担当する専門家は誰ですか？", options: ["行政書士", "税理士", "司法書士", "社会保険労務士"], answer: 2, explanation: "設立登記は司法書士の専門分野です。" },
                { id: "q504_5", type: "fill", question: "無料の経営相談ができる国の支援機関は何ですか？（ひらがな＋漢字）", answer: "よろず支援拠点", explanation: "よろず支援拠点は国が設置した無料の経営相談窓口です。" }
            ]
        }
    ]
};
