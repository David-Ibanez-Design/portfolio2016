<?php
/*
------------------
Language: English
------------------
*/
$current_lang = $lang;
$lang = array();

 // gobale

$lang['GLOBAL_PAGE_TITLE'] = 'デイビッド - イバネズ web デザイナー & フロントエンドデベロッパー';
$lang['GLOBAL_WORKS_LIST'] = array('osis','elsa','film' ,'isucare','lsp','lsa-portail','portfolio' );
$lang['GLOBAL_WORKS'] = [

	'osis' => [
		'name' => 'Osis',
		'class' => 'osis',
		'menu_items' => ['コンセプト','デザイン', ''],
		'link' => '',
	],

	'elsa' => [
		'name' => 'ELSA',
		'class' => 'elsa',
		'menu_items' => ['','', ''],
		'skills' => ['HTML 5','CSS 3/SASS', 'jQuery', 'Odoo'],
		'link' => 'http://eti38.mypsx.net:22869/fr_FR/',

	],

	'film' => [
		'name' => 'Ciné chez soi',
		'class' => 'film',
		'menu_items' => ['コンセプト','', 'デベロップメント'],
		'skills' => ['HTML 5','CSS 3/SASS', 'Susy'],
		'link' => 'http://davidibanez.com/projects/films/',
	],

	'isucare' => [
		'name' => 'Isucare',
		'class' => 'isucare',
		'menu_items' => ['コンセプト','デザイン', 'デベロップメント'],
		'skills' => ['HTML 5','CSS 3/SASS', 'jQuery', 'PHP'],
		'link' => 'http://isucare.com/',
	],

	'lsp' => [
		'name' => 'Labosalem production',
		'class' => 'lsp',
		'menu_items' => ['コンセプト','デザイン', 'デベロップメント'],
		'skills' => ['HTML 5','CSS 3/SASS', 'AngularJS', 'NodeJS', 'Express', 'MongoDB'],
		'link' => 'http://lsa-prproduction.herokuapp.com',
	],

	'lsa-portail' => [
		'name' => 'Labosalem portail',
		'class' => 'lsa-portail',
		'menu_items' => ['','', ''],
		'skills' => ['HTML 5','CSS 3/SASS', 'jQuery'],
		'link' => 'http://davidibanez.com/projects/lsa-portail/',
	],

	'portfolio' => [
		'name' => 'Portfolio',
		'class' => 'portfolio',
		'menu_items' => ['コンセプト','デザイン', 'デベロップメント'],
		'skills' => ['HTML 5','CSS 3/SASS', 'jQuery', 'PHP'],
		'link' => '',
	],
];


$lang['GLOBAL_SKILLS'] = [

	'HTML 5' => 'html',
	'CSS 3/SASS' => 'scss',
	'jQuery' => 'jquery',
	'PHP' => 'php',
	'Odoo' => 'php',
	'AngularJS' => 'javascript',
	'NodeJS' => 'javascript',
	'Express' => 'javascript',
	'MongoDB' => 'javascript',
	'Susy' => 'scss',
];

// Menu
$lang['MENU_LABEL'] = 'メニュー';
$lang['MENU_HOME'] = 'ホーム';
$lang['MENU_PROJECTS'] = 'お仕事';
$lang['MENU_CONTACT'] = 'お問い合わせ';

// lang

$lang['LANG_EN'] = 'en';
$lang['LANG_JA'] = 'ja';

// HomePage

$lang['HOMEPAGE_TITLE'] = ' こんにちは !';
$lang['HOMEPAGE_SUBTITLE'] = '<span class="text-red">ウェブデザインとフロントエンド</span>開発に3年の経験があります';

$lang['HOMEPAGE_TEXT'] = '私はクリーンでエレガントなウェブサイトをデザインし構築したいと考えております。<br>私の<a href="works.php?link=osis" class="underline"><span></span>デザインワークフローや</a>、Libsass用Susyを使用した<a href="works.php?link=film" class="underline"><span></span>レスポンシブ</a>なウェブサイト構築のやり方、<a href="works.php?link=lsp" class="underline"><span></span>AngularJS</a>を使った最新のプロジェクト、<a href="works.php?link=portfolio" class="underline"><span></span>SASS</a>を使ってのスタイリングに対するモジュラーアプローチをご覧ください';
$lang['HOMEPAGE_BTN'] = '履歴書を見る';

// Contact

$lang['CONTACT_TITLE'] = 'お問い合せ';
$lang['CONTACT_SUBTITLE'] = '<span class="resultSubmail text-red" >dibanez@rocketmail.com</span> にメールにてお受け致します';
$lang['CONTACT_BTN'] = '送信';

$lang['CONTACT_FORM'] = [

	'labels' => [
		'Name' => ['お名前',  'お名前が入力されていません.'],
		'Company' => '貴社',
		'Email' => ['メールアドレス',  'メールアドレスが正しくありません.'],
		'Website'  => 'ウェブサイト',
		'Message' => ['お問い合わせ内容',  'お問い合わせ内容が入力されていません.'],
	],

	'error_message' => [
		'title' => 'Error!',
		'message' => 'メッセージが送信されていません。',

	],

	'success_message' => [
		'title' => 'Thank you!',
		'message' => 'お問い合わせいただきありがとうございます。',

	],
];

// works

$lang['WORKS_BTN_ONLINE'] = 'see online';
$lang['WORKS_BTN_NEXT'] = 'next project';
$lang['WORKS_BTN_READ'] = 'read more';
$lang['WORKS_BTN_VIEW'] = 'View Work';
$lang['WORKS_LOGO_BACK'] = 'ホームページに戻ります';
$lang['WORKS_NAV'] = ['コンセプト', 'デザイン', 'デベロップメント'];

$lang['WORKS'] = [


	'film' => [

		'nav_sunnary' => 'Susyを使用して構築されたレスポンシブな映画お薦めサイト.',

		'task' => 'ブランドおよびウェブサイトのデザイン',


		'sunnary' => 'Ciné chez soi（自宅の映画館）は、映画とウェブデザイン/ウェブ開発という、私個人が特に情熱を注いでいる2つのものを組み合わせた、現在まだ進行中の個人的なプロジェクトです。<span class="para__space"></span>
							自分でブランドをデザインし、レスポンシブグリッド用にSASSとSusyを使用して、ウェブサイトを開発しました。',

		'design_sub' => 'お薦め映画',

		'design_part_1' => 'このウェブサイトは、映画好きの人を対象にして映画評や評価、あらすじ、コメントなどを提供する、お薦め映画のプラットフォームです。<br><br>
								私はこのサイトを、複数のデバイスやブラウザ、画面サイズでアクセスできるようにしたい、またクリーンで映画ポスターを中心とした見た目にしたい、と思いました。',
		'design_legende_1' => '同サイトにはデスクトップとモバイルバージョンがあります。',


		'code_sub' => 'LibsassとSusyを使ったレスポンシブデザイン',


		'code_part_1' => '同ホームページは<b> HTML </b>と<b> SASS </b>を使用して開発されました。私の<a class="link" href="#">SASSワークフロー</a>には<a class="link" href="http://bourbon.io/">Bourbon</a>や<a class="link" href="https://github.com/neoeno/libsass-compass-vertical-rhythm">Vertical Rhythm</a> 、Susyといった複数のプラグインが含まれていることから、SASSをCSSにコンパイルするのにRubyではなくLibsassを使いました。<b>Libsass</b> は SASS のc/c++ポートで、Rubyの<a class="link" href="https://www.solitr.com/blog/2014/01/css-preprocessor-benchmark/">4000倍速く</a>、どんなプロジェクトにも統合しやすいのです。<br><br>
					私はウェブ用のグリッドを迅速にデザインするために、<b>Bootstrap や Foundation</b> といったCSSフレームワークから <b>Responsive Grid System</b> といったサイトまで、ウェブで入手可能なツールを過去に多々利用してきました。
					こういったソリューションの問題点は、これらのツールのほとんどが、ワークフローにBEM規則を採用しているためすでに混み合ってきている私のマークアップにさらに大量のクラスを追加してしまうので、コードベースを膨れ上がらせてしまうこともあり、パフォーマンスに影響を与えかねないことです。<br><br>
					こういった問題の解決策が、私にとっては<a class="link" href="http://susy.oddbird.net/">Susy</a>だったのです。これは SASS ベースのグリッドフレームワークで、速く、レスポンシブ、かつ軽量で、マークアップに何も追加することなく完全にカスタマイズ化したグリッドを作成することを可能にしてくれるツールです。',

		'code_small_sub_1' => 'グリッドのセットアップ',

		'code_part_2' => 'まず最初に、<span class="code">setting.scss</span> にソートされ同サイトのグローバル設定がすべて含まれるマップの中に、グリッド用のデフォルトパラメータを作りました。シンタックスは次のようになります。：' ,

		'code_part_3' => 'このマップの中では幾つかのグローバル値が定義付けられています。レイアウトがページの全幅まで拡張できるよう、コンテナは100％に設定されており、カラムの数は12に設定、同サイトの全ブロックがこの数のサブディビジョンとなります。カラム間ガター値は0に設定、使用ボックスモデルは border-boxと設定します。<br><br>
							これはデフォルトの Sussy マップ値を使用して実装されたレイアウト:',

		'code_legende_2' => 'これはデフォルトの Susy マップ値を使用して実装したレイアウトです。',

		'code_part_4' => '前に述べましたように、各主要コンテナはグリッドのカラム総数のサブディビジョンとなっています。<b>設定ファイル</b>に設定されたデフォルト値のお蔭で、コンテナサイズやカラム数が変更した場合はブロックサイズは自動的に更新されます。',

		'code_small_sub_2' => 'グリッド・システムの実装',

		'code_part_5' => 'Susy はグリッドのカスタマイズ化にあたりSASSに完全に依存していますので、HTML マークアップには他に何も追加する必要がないのです。Susyを用いたグリッド作成において最も重要な特徴は、<span class="code">span</span> mixinです。<br><br>
							上の画像でお分かりのように、主要ブロックは 12 カラムグリッド内部にある特定のスペースを占拠する必要があります。<br><br>
							モバイル・デバイスにおいては、主要ブロックのすべてがグリッドの全幅に拡張し、ヘッダーは 12 のカラムのうち4つのカラムを取るロゴと、8つのカラムを取るメニュ➖の2つの部分に分かれます。<br><br>
							これはメインレベルのグリッドブロックがモバイルファーストの方法を使ってどうやって実装されたかを示したものです：',

		'code_small_sub_3' => 'ブレークポイントを使ったレスポンシブ化',

		'code_part_6' => 'この段階で、Susy を使用して構築したグリッドは流動的ではありますが、ウェブサイトはまだレスポンシブではありません。レイアウトをレスポンシブにするために、もう1つミックスインを使いました。<span class="code">Susy-breakpoint</span>です。Susy-breakpoint ミックスインはレイアウト内のメディアクエリを扱いやすくしてくれます。メディアクエリのブレークポイントを作成するのに必要な言語を簡潔化することによって、これが可能になります。<br><br>
						私の <span class="code">settings.css</span>ファイルでは、デフォルトブレークポイントのセットをデバイスによって定義付けました：',

		'code_part_7' => 'これらの変数はその後必要な際に <span class="code">Susy-breakpoint</span>ミックスイン内部で使用されます。こうやって、ホームページのレイアウトのメインブロックがブレークポイントを含むよう修正されたのです。',

		'code_small_sub_4' => '結論',

		'code_part_8' => 'このプロジェクトで Susy を使ってみて、このグリッドフレームワークを使えばいかに大量のコードなしでシンプルなレイアウトでも凝ったレイアウトでも早く簡単に作成することができるかが分かりました。このフレームワークは今後、特にブラウザ内で直接デザイン作業を行う場合やウェブサイトのレイアウトのプロトタイプを作成する際に、時間を節約するのに役立ってくれると思います。',
	],


	'lsp' => [

		'wide'	=> 'on',

		'nav_sunnary' => 'AngularJS ウェブアプリケーション',

		'task' => 'ウェブアプリケーションのデザインと開発',

		'sunnary' => 'Labosalem Production は医薬品卸売業者が製品購入や注文管理をできるように作られた、オンラインWebアプリケーションです。<span class="para__space"></span>私は<b> AngularJS </b>と<b> MEAN </b>スタックを使ってこのアプリケーションのデザインと構築を行いました。',

		'concept_sub' => 'ウェブbサイトからウェブアプリケーションまで',


		'concept_part_1' => 'Laboratoires Salem Production は、Laboratoires Salem が販売している製品を登録卸売業者が購入したり注文トラッキングしたりできるウェブサイトです。<b>VM Report </b>という前バージョンサイトはすでに4、5年間ほど存在していましたが、顧客には利用されておらず、注文は主に電話で行われている状態でした。<br><br>
							ユーザーに同プラットフォームに戻っていただけるよう、現ウェブサイトである新バージョンのサイトの<b>再設計と開発</b>を私が任されることになりました。<br><br>
							最初のステップとして私が取ったのは、既存サイトの主な問題を特定することでした。それでわかったのは、前バージョンが大変遅いということでした。つまり製品購入のプロセスに時間やステップがかかりすぎていたのです。特にメインメニューそのものに最大10ものサブカテゴリーがあり、レベルが余分にあるものもありました。さらに、インターフェースが複雑すぎて個々の情報を見つけるのが大変でした。また、レスポンシブなサイトではなく、小さめの画面では使用不可能でした。それで顧客は他の方法で注文を行うしかなかったのです。<br><br>
							顧客の問題を解決してくれるツールとしてではなく、製品購入や注文管理を面倒で不確かなものにする、厄介で遅いシステムとしてサイトが見られていたのです。<br><br>
							これから手掛けるウェブサイトは、簡単かつ直感的でレスポンシブなユーザーインターフェースにより、ユーザーが手間や時間をあまりかけずに注文できるようにしてあげる必要があります。ユーザーとの対話性は迅速で、新しく製品を購入するプロセスは容易なものにしてあげなければなりません。最終的にはウェブアプリケーションと同じような感覚がもてるWebサイトを作る必要があるのです。',


		'design_sub' => 'オンデマンドの情報',

		'design_part_1' => 'ユーザーインターフェース（UI）のデザインにおいては、簡潔さが大事です。ページにコントロールの表示が多ければ多いほど、ユーザーが特定の行為を済ませる時間がより長くかかってしまいます。チョイスが少ないほど利用可能な機能がより明白になり、さっと目渡しやすくなります。<br><br>
							ナビゲーションをより分かりやすくするために、私はメニューのメインカテゴリーのみを表示することにしました。',

		'design_list_1' => '<ul class="list_obj">
	        					<li>ダッシュボード（主な顧客用情報が集まった部分）</li>
	        					<li>注文（ユーザーが製品を注文できる場所）</li>
	        					<li>マイページ（ユーザーが個人的な情報や以前のアクティビティを集めたものをすべて見ることができる場所）</li>
	        					<li>連絡先</li>
	        				</ul>',

		'design_part_2' => 'ページ内部で入手可能な追加情報を隠すのには、簡単なタブシステムを使用しました。アクションボタンをクリックすれば新たにポップアップウィンドウが開き、そこから追加情報を読み出すことができるようになっています。' ,



		'design_part_3' => 'この方法を使えば、情報はまだ見えてはいますが、その全部が表示されるのはユーザーが必要とした場合のみとなり、ユーザー体験がより簡単でフレンドリーなものになります。<br><br>
							訪問者に集中して見てもらえるよう、要素間に色彩のコントラストや面積比を付けるようにしました。注文やメッセージは小さな白のボックスに、データ量の多めの情報はより大きく暗めのボックス内に表示されます。',

		'design_legende_2' => 'ダッシュボードのゾーニング',

		'design_legende_3' => '最終のデザイン',

		'code_sub' => '迅速でレスポンシブなフロントエンドの構築',

		'code_part_1' => 'フロントエンドのフレームワークには、AngularJS を選びました。双方向データバインディング機能があるからです。データをこうして取り扱うと、UIインタラクションがより簡単で迅速になります。<br><br>
						この原則のよい例が、注文ページです。',

		'code_legende_1' => '双方向データバインディングの能力のお蔭で、情報はリアルタイムで更新され、ユーザーは即座にフィードバックを得られることができるのです。',

		'code_part_2' => 'サーバー側には、MEANスタックの4つの主要コンポーネントのうち、この他の3つの部分を使用しました:',

		'code_list_1' => '<ul class="list_obj">
	        					<li>データベースとしてMongoDB</li>
	        					<li>WebフレームワークとしてExpress</li>
	        					<li>フロントエンドのフレームワークとしてAngularJS</li>
	        					<li>サーバープラットフォームとしてNodeJS</li>
	        				</ul>',

		'code_part_3' => 'MEANスタックは、SPA の長所をすべて提供してくれるだけでなく、その他のメリットも提供してくれます。LAMPスタックは幾つかの異なった言語に基いていますが、MEAN スタックは完全なJavaScriptスタックですから、MEAN ベースのアプリケーションのプログラミングが大幅にやりやすくなります。NodeJS もまた、ノンブロッキング・アーキテクチャであることから、<b>LAMP</b> を含む他のサーバー側テクノロジーよりもより速くスケーラブルです。',

		'code_small_sub_1' => 'MEAN スタックの例：請求書',

		'code_part_4' => '請求書は同アプリケーションを使って注文がある度に作成され、MongoDB データベースに格納され、後で見られるようになっています。同アプリケーションの他の部分と同様に、請求書は以下の構造を持つモジュールです：<br><br>

                      				Invoices<br>
                      				&nbsp;&nbsp;&nbsp;&nbsp;view<br>
                      				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;invoices.html<br>
                      				&nbsp;&nbsp;&nbsp;&nbsp;controller.js<br>
                      				&nbsp;&nbsp;&nbsp;&nbsp;factory.js<br><br>

                      				ォルダ <span class="code">view</span> には請求書のHTMLテンプレートのすべてが含まれています。<br><br>
                      				<span class="code">controller.js</span>ファイルは、factory からデータを取ってきて、その scope を介しビューに送る役目をします。',


		'code_part_5' => '<span class="code">factory.js</span>ファイルは<span class="code">$ressource</span>オブジェクトを使って特定のURLからデータを回収します。<br><br>',

		'code_part_6' => 'サーバー側では、Mongoose を使って MongoDB データベースにデータがリクエストされます。Mongoose はオブジェクトモデリングツールで、データベースのデータを JavaScript オブジェクトへ変換（そうするとこれをアプリケーションに使える）しやすいように設計されています。',

		'code_part_7' => 'この方法を使うと、アプリケーションの各部が個々のモジュール（注文、請求書、ログイン、お知らせ等）に分かれますので、コードがよりスケーラブルになりメンテナンスしやすくなります。複数のモジュール間で共有されたデータとビジネスロジックは、サービス内部に格納されます。',

		'code_small_sub_2' => 'タブモジュール',

		'code_part_8' => 'アプリケーション上にデータを表示する主な方法の 1 つ（この記事のデザインに関する部分でご覧いただける通り）が、タブシステムです。アプリケーション全体でよく利用されてますし、異なったデータを数多く取り扱う必要もあるため、簡潔な HTML 属性のセットを使って追加や削除、変更、表示が簡単にできるモジュラータブシステムを作りたかったのです。<br><br>
		Angular のカスタムディレクティブを使用すると、下の HTML コードは注文、ストック、メッセージという3つのタブを含む 1 ブロックを、それらに対応するデータと共に表示します。',

		'code_part_9' => 'この<span class="code">タブモジュール</span>は、タブそのものの構造とタブおよびデータそのもの、という2つの主要部分に分かれます。正しい構造は HTML マークアップ（structure="tab"）に提供された<span class="code">ストラクチャ</span>引数値に基づき、モジュールディレクティブを使ってロードされます。各タブブロック内部でロードの必要のあるデータは引数のコンテンツから特定され、<span class="code">TabsData</span> という配列内部に格納されます。',

		'code_part_10' => 'テンプレート<span class="code">タブ</span>がタブ構造と名前を表示し、それから<span class="code">ng-include</span>を使ってデータテンプレートに呼び出しをかけます。',

		'code_part_11' => 'フロントエンド構築プロセスには、SASS ファイルのプロセスと同じように、自動タスク用に Grunt の使用や、開発サーバーの実行、そしてより優れたパフォーマンスのためのファイルの集中化や最小限化などが含まれます。',

	],


	'osis' => [

		'nav_sunnary' => 'IT企業向けのブランドおよびウェブサイトのデザイン',

		'task' => 'ブランドおよびウェブサイトのデザイン',

		'sunnary' => 'Osis はオープンソース技術を専門とするフランスのITサービス会社です。<span class="para__space"></span>私は同社のブランドとウェブサイトをデザインしました。目指したのは同社の仕事の宣伝、そして市場におけるより大きな露出でした。',

		'concept_sub' => '「ブリーフ」の定義付け',

		'concept_part_1' => 'このプロジェクトで私が最初に行ったことは、プロジェクトの正確な目標を決めることでした。<br><br>
							このプロジェクトの目的は何か？自分はどんな問題を解決しようとしているのか？これを<b>「ブリーフ」</b>と題した文書に書き出しました。このプロジェクトの目標は、同社のオンラインプロフィールを作り、その仕事の宣伝とより大きな露出の獲得に役立てるようにすることでした。同社がどのような種類のサービスを提供しているかを示し、過去の業績と現在進行中の仕事を表示し、同社に連絡を取りたい人がそうしやすいような仕組みを作る必要がありました。この段階ではともかく、プロジェクトの最終的な目標を考え出しました。これらを記録に残し、プロジェクトがもっと進んだ段階でそれらを見直し、ちゃんと軌道に乗っているかどうかを確かめました。',

		'design_small_sub_1' => 'リサーチしアイデアを生み出す',

		'concept_part_2' => 'プロジェクトの目標がいったん決まった後、デザインを開始するまでの間をリサーチに費やしました。<br><br>
							この場合私は通常、依頼企業の競合企業を上位5社特定することから始めます。これらの企業はどうやってそのバリュープロポジションを強調しているのか？それらの企業の価格の違いは？こういった質問に答えていくことが、より成功の確立の高いブランドを作るのに役立つのです。ブランドが向かうべき方向をいったん大まかに決めた後、さらにリサーチを行いましたが、今度はアイデアを生み出すことを目的としたリサーチです。インスピレーションを得るのに他のサイトを見ることもありますが、他のデザイナーの仕事を見ないのがベスト、という場合もあります。<br><br>
							その場合は、問題に対するソリューションを自らブレインストーミングして考えだす方がいいと思っています。この段階では、必要なのはペンとスケッチブック、そして自らの思考のみです。',


		'design_sub' => 'ブランドをデザインする',

		'design_part_1' => '企業のブランドというのは基本的に、その企業を表現し他人がその企業をどう見るかを決定づける、視覚言語なのです。<br><br>
                        「ブリーフ」によれば、ブランドイメージの見た目と感じは、頭に残るような強いものでなければなりません。クライアントは、強く野性的なイメージがある白熊をブランドマスコットに使いたいと考えていました。オープンソースのある種の考え方ともマッチします。このアイデアを念頭に、様々な種類の白熊の画像を検索しインスピレーションを得ることから始めました。そして自分のガイドとなるような2、3の画像を選びました。それから幾つかのアイデアをスケッチし、タイポグラフィと文字の配列を使って実験を行ってから、最終的なロゴを決定しました（ロゴ描きにはAdobe Illustratorを使用）。',

		'design_legende_1' => '',

		'design_small_sub_2' => 'コンテンツについて考える',

		'design_part_2' => 'ウェブサイトをデザインする際にまず最初に決めなければいけないことの1つが、コンテンツです。ほとんどのプロジェクトの場合、これがデザインを決定づけるからです。<br><br>
							訪問者にはどんな情報を伝えなければならないのか？ある特定のポイントを使えるのに、簡潔な文章に書いた方がいいのか、それとも画像やダイアグラムで伝える方が理にかなっているのか？同プロジェクトのこの段階では、メッセージとその伝え方について考える必要がありました。それでクライアントに初期の段階からコンテンツをもらえるようお願いし、ドラフトを作り、それをホームページの紹介、サービスの説明、プロジェクト、パートナーリスト、会社の連絡先、という6つの主要部分に分けました。',

		'design_small_sub_3' => 'ワイヤーフレーム',

		'design_part_3' => '先だって集めておいたコンテンツから、クライアントの意向が、自社サービスの概要を伝え、見込み顧客が自社に連絡しやすいようにしたい、ということがはっきり分かっていました。<br><br>
							私は結局上のサイトマップでご覧いただけるような、簡潔なシングルページが5つのセクションに分かれているようなウェブサイトにしよう、と決めました。トップのナビゲーションバーにあるリンクをクリックすると、ユーザーをそのページの適切なセクションにスライドダウンしてくれます。基本要素をブロックにまとめるためと、何らかの青写真を得てそこから作業を始められるようにするため、サイトのセクションごとにワイヤーフレームをスケッチで描き出しました。<br><br>
							私のワイヤーフレームに対するアプローチは簡潔ながらも効果的で、この段階で私に必要なのはペンとスケッチブックのみです。まず、ウェブページに載せることになる要素をすべてリストに挙げます。それから関連しあう要素をグループ分けし、これらのグループに重要性に従って優先順位を付けます。ページ要素がグループに分かれそれに優先順位がついてしまえば、ページにそれらを配置する作業はずっと楽になります。より重要な要素はページトップ側に置き、白のスペースを使ってグルーピングを作ります。',

		'design_legende_1' => 'ウェブサイトのコンテンツ階層のスケッチ。',

		'design_legende_2' => 'サイトの基本要素のうちブロック',

		'design_small_sub_4' => 'フォトショップで高品質の試作を作成',

		'design_part_4' => 'デスクトップワイヤーフレームのスケッチができたら、Photoshopに移行し、より細かいサイトの試作品にとりかかりました。<br><br>
							このプロジェクトはシングルページのサイトでしたので、5つの異なるセクションのデザインにはすべてPhotoshopを使いましたが、普段はこのプログラムにあまり時間をかけないようにしています。進行プロセスを遅くしてしまうからです。その代わりに普通は、その他のデザイン要素や必要になると思われる大事なものと共に、メインページのテンプレートの試作を作るだけにしています。同様に、Photoshopでモバイルやタブレットのデザインの試作を作成したこともありません。ワイヤーフレームに基づいてこれらを単にコード化する方が早い、と気づいたからです。',

	],

	'portfolio' => [

		'wide'	=> 'on',

		'nav_sunnary' => 'SASS を使って構築したレスポンシブなクロスブラウザのポートフォリオ',

		'task' => 'ブランドおよびウェブサイトデザイン、開発',

		'sunnary' => '自分のポートフォリオは、過去と現在の仕事を紹介するためにコンテンツを強調して設計と構築を行いました。下<span class="para__space"></span>記の記事では、<b> BEM や OOCSS、SASS 用 SMACSS </b>を使用してウェブサイトのスタイルを管理するために用いるワークフローについて、詳しく説明しています。',

		'concept_sub' => '話題になるようなコンテンツにする',

		'concept_part_1' => 'クリエイティブ産業で仕事をする人なら誰もが、プロフェッショナルなポートフォリオを必要とします。私にとっては、WebデザインとWeb開発、という自分のやっている仕事を実際のメディアで見ていただくいい機会だと思っています。自分のポートフォリオを構築するにあたっての主な目標は、即座に印象を形成したいと願う潜在的雇用主の仕事をやりやすくしてあげられるような、シンプルなデザインを作ることでした。<br><br>
							ポートフォリオのサイト自体が背景に溶け込み、自分が見せたいと思う仕事のフレームの役割を果たす必要があります。したがって、これはほとんどのウェブサイトで一概に言えることですが、<b>コンテンツが王様</b>でなくてはなりません。さらに、画面のサイズやブラウザに関わらず、美しい画像と文章が見やすくなくてはなりません。',

		'design_sub' => 'ビジュアルの簡潔さ',

		'design_part_1' => '色を選ぶにあたっては、コンテンツを専念に見てもらえるよう、ウェブサイトに大きなコントラストを与えてくれるような色を選びました。',

		'design_legende_1' => 'ウェブサイトのカラーパレット。',

		'design_part_2' => '同サイトの全ページが同じレイアウト原則に従っています。ページは2つのセクションに分かれており、片側には追加の情報、もう片側にはそのページの中心となる情報が含まれています。繰り返しを避けるため、別のページではこの原則を少なくします。<br><br>
							例として、ホームページは2つの部分に分かれており、中心となるコンテンツは色のコントラストを用いて強調されています。連絡先のページでは、焦点は面積比の差を利用して作られています。中心となるコンテンツは追加情報よりも大きくなっているのです。<br><br>
							このデザインチョイスにより、簡潔ながらよく整理された、コンテンツが強調されるようなページを構築することができるとともに、ウェブサイト開発の際によりモジュラーなアプローチも可能になるのです。',

		'design_legende_2' => 'ユーザーとの対話の例：コンタクトフォーム。',

		'cod_sub' => 'モジュラーなアプローチ',

		'code_part_1' => 'ウェブデザイナーの観点からみてコンテンツが王様だとすると、ウェブ開発者にとっては<b>スピードが王様</b>だ、という人もいると思います。残念なことに、CSS はこの領域で見過ごされがちです。フロントエンドの開発者の多くが JavaScript のパフォーマンスに主に焦点を当てているからです。<br><br>
						自分の CSS 開発プロセスを向上させるために、このプロジェクトでは、スタイリングに異なったアプローチをとってみることにしました。<b>モジュラー HTML と CSS </b>を書くのに、最もよく使われる方法の幾つかを使ってみたのです。<a class="link" href="http://getbem.com/naming/">BEM </a>（Block、Element、Modifier ）方式、<a class="link" href="https://github.com/stubbornella/oocss/wiki">OOCSS </a>（Object oriented CSS ）方式、そして <a class="link" href="https://smacss.com/">SMACS </a>（ Block、Element、Modifier） 方式です。これらの手法を SCSS とあわせて使ってみました。',

		'code_small_sub_1' => 'BEM',

		'code_part_2' => 'BEM方式は、モジュラリティがすべて、という手法です。ページの各要素で1度以上使われたものはモジュールになる可能性があります。ある要素がモジュールになるには、その構造とスタイルが以下のような特定のやり方で作られている必要があります:<br>',

		'code_list_1' => '<ul class="list_obj">
		                    <li> モジュールがページ上をレイアウトを壊すことなくどこにでも移動することができるよう、コンテナはモジュールそのものから分かれている必要がある。</li>
		                    <li> クラス名はその要素の機能を反映するものでなくてはならない。さらに、BEMの命名規則に従っていなくてはならない。</li>
		                  </ul>',

		'code_part_3' => '<span class="code">wrapper__lang--left</span> という名前のコンテナが規則を定義し、モジュール <span class="code">Lang</span> のページ内における位置づけを行います。異なったコンテキストに使うことができるよう、モジュールそのものとは別々にスタイル設定されています。モジュールの lang 要素はその機能に従って命名され、その前には二重アンダースコア <span class="code">__dropdown</span> がついています。要素の修飾子にはダブルダッシュの印が付き、その <span class="code"> ––items</span> がそれに続きます。<br><br>
						その後 SCSS を使って、モジュールのスタイルはただ lang という名の、モジュールHTMLストラクチャに従って整理される SCSS ファイルに格納されます。',

		'code_part_4' => 'その要素に影響を与える JavaScript コードもすべて、lang という名のファイルにまとめられます。したがってモジュールは内蔵型で、レイアウトやコードを壊さずに追加や削除、修正が楽にできますので、より適応性やスケーラビリティに優れメンテナンスしやすいコードが可能になります。',

		'code_small_sub_2' => 'OOCSS',

		'code_part_5' => 'オブジェクトベースのコーディング方式がどれもそうであるように、OOCSSの目的はコードの再使用を促すことであり、最終的には、より速く効率的で追加やメンテナンスの楽なスタイルシートとなることです。<br><br>
						OOCSSは1つの主原則に基いています。<b>スキンとストラクチャの分割です</b>。スタイル化されたウェブページ上のほとんどすべての要素が異なった視覚的な特徴（「スキン」）を持っており、これが異なったコンテキストで繰り返されます。例えば色や文章のスタイルです。これらの特徴がクラスに分離されていくと、再使用が可能になり、どんな要素にも適用できるようになり、しかも基本的な結果は同じになるのです。私が自分のポートフォリオを開発している際には、この原則を色彩やボタン、ヘッドラインといった数多くの要素に取り入れました。<br><br>
						これらのスタイルすべてが「para（パラ）」クラスの中に含まれています。「パラ」はそれ自体がモジュールであり、異なったフォントサイズのすべてがこのモジュールの1つの要素として格納されており、特定のサイズのカラーバリエーションは修飾子として格納されています。一般的なスタイルは再使用可能な1つの「スキン」の中に合わせ入れられ、不必要に繰り返されるものは何もありません。私がやればよいことはただ「スキン」を適用するだけです。<br><br>
						',

		'code_part_6' => 'これらのスタイルすべてが「para（パラ）」クラスの中に含まれています。「パラ」はそれ自体がモジュールであり、異なったフォントサイズのすべてがこのモジュールの1つの要素として格納されており、特定のサイズのカラーバリエーションは修飾子として格納されています。一般的なスタイルは再使用可能な1つの「スキン」の中に合わせ入れられ、不必要に繰り返されるものは何もありません。私がやればよいことはただ「スキン」を適用するだけです。例えば、クラス <span class="code">para__large--dark</span> をすべての要素に適用します。結果は同じになります。',

		'code_small_sub_3' => 'SMACSS',

		'code_part_7' => 'SMACSS のまさに中核となるのは、CSS 規則をカテゴライズする方法です。このプロジェクトでは6種のカテゴリーを使用しました：',

		'code_list_2' => '<ul class="list_obj">
			                 <li><span class="code">Base</span></li>
			                 <li><span class="code">Layout</span></li>
			                 <li><span class="code">Elements</span></li>
			                 <li><span class="code">Module</span></li>
			                 <li><span class="code">Settings</span></li>
			                 <li><span class="code">State</span></li>
			                 <li><span class="code">Vendors</span></li>
			               </ul>',


		'code_part_8' => 'このカテゴリー化の目的は、デザインの内部で繰り返しの多いパターンを特定することです。つまり繰り返しを制限すれば、コード数も減るし、メンテナンスも楽になるし、ユーザーエクスペリエンスの一貫性もより大きくなるということです。私のワークフローには Grunt.js が備わっており、SCSS プリプロセッシングや画像、SVG オプティマイゼーションといった自動タスクを提供してくれました。また JavaScript ファイルを整理し最適化するために、<b>require.JS</b> も使いました。',

		'code_small_sub_4' => '結論',

		'code_part_9' => 'このプロジェクトのお蔭で、<b>OOCSS や SMACSS、BEM</b> といった原則を利用してモジュラリティについて探究することができました。また <b>SCSS</b> の長所を利用して、より整理されたスタイルシートを作成することができました。CSS スタイリングへのこの新たなアプローチは、今後も特に大型のプロジェクトで役に立つことになると思います。',

	],


	'elsa' => [

		'nav_sunnary' => 'Odoo ERP/CRM を使用してデザインと構築を行ったEコマースサイト',

		'task' => 'ウェブサイトデザイン',

		'sunnary' => 'ELSA は、Laboratoires Salem のために医薬品を医療関係者に販売するEコマースサイトです。<span class="para__space"></span>バックエンド用に Odoo EPR/CRM を使用した同ウェブサイトのデザインと開発を私が担当しました。',

		'design_legende_1' => 'ホームページ構造のスケッチ',

		'design_legende_2' => '製品のリスト構造のスケッチ',

		'design_sub' => 'ウェブサイトデザイン',

		'design_part_1' => 'クライアントと協力して、サイトの構造とコンテンツを決定しました。サイトマップは意図的に小さく浅めにし、ウェブサイトのナビゲーションがやりやすいようにしました。<br><br>
						同プロジェクトには、訪問者が Laboratoires Salem の販売する各種の製品を購入できるようにすることと、同社をユーザーに紹介すること、という2つの目標がありました。クライアントとのミーティングの後、私はほとんどのEコマースサイトで使われている従来方式の製品リストやスライダーとは違った構造を探し始めました。製品のリストを直ちに見せるのではなく、最新キャンペーンや新発売の製品、といった最重要の情報だけをまず見せるやり方を探していました。そうすれば、会社の紹介をきちんとできるようなスペースが十分に確保できると思ったのです。<br><br>
						クライアントにこの初期段階における方向性に満足していただいた後、フォトショップに移行し、忠実度の高い試作を作成しました',

		'design_legende_2' => 'ホームページのモックアップ',

		'design_part_2' => '製品リストのページでは、追加スペースを確保して特定の製品を販促したり最新の製品やキャンペーンを表示することができるようにしたほか、買い物カートに直接アクセスできるようにしました。製品はカテゴリーで見つけることができ、検索バーは製品リストのトップに見えるように置き、個々の製品をすばやく簡単に検索できるようにしました。',

		'design_legende_3' => '製品リストモックアップ',

		'design_legende_4' => 'ショッピングカートページのモックアップ',

		'design_sub' => '開発',

		'design_part_3' => 'クライアントは <a class="link" href="https://www.odoo.com/">Odoo</a> をすでに他の業務で使われていましたので、ELSA サイトもこの既存のインフラストラクチャに統合できるようにすることを望まれました。<br><br>
						したがって同サイトは、バックエンド用に Odoo を、フロントエンド用に HTML と CSS/SASS を使って開発されました。Odoo は Python、XML、JavaScript、そして Odoo 自体のテンプレートエンジン言語Qwebをベースにしたオープンソースの ERP/CRM で、Eコマース対応機能も備えています。',

	],

	'isucare' => [

		'nav_sunnary' => 'Laboratoires Salem 用に制作した製品カタログサイト',

		'task' => 'ウェブサイトのデザインおよび開発',

		'sunnary' => 'Isucare は、Laboratoires Salem が販売するハイパフォーマンスの血糖値監視デバイスです。<span class="para__space"></span>この製品を販売促進するために、カタログサイトをデザインし開発するよう依頼されました。',

		'concept_legende_1' => 'ウェブサイトのコンテンツ階層のスケッチ',

		'concept_legende_2' => 'ウェブサイトのレイアウトの詳細スケッチ',

		'concept_sub' => 'テンプレート作成',

		'concept_part_1' => 'デザイン開発チームの1員としての私の任務は、Salem Laboratory製品ラインアップの製品サイト第一版制作のお手伝いでした。そしてその製品は、Isucareという血糖値監視デバイスでした。<br>
						同ウェブサイトは他の一連の製品サイトの1つになるということで、均質のビジュアルアイデンティティを作り上げ、かつ同開発プロセスを容易にするために、私達はIsucareを他のすべての製品サイト用のテンプレートとすることに決めました。',

		'design_sub' => 'ウェブサイトのプランニング',

		'design_part_2' => '同サイトをデザインするにあたりまず最初に私達が行ったのは、コンテンツの決定でした。このサイトで私達は何を言おうとしているのか？まずサイトの目的を決定してから、そのメッセージを伝えるのに最も効果的な方法を探し始めました。<br><br>
						クライアントがお望みなのは、製品の利点やラインアップの概要を説明し、見込み客が同社に連絡しやすい方法を提供するカタログサイトであることは明らかでした。上のサイトマップでご覧いただけるように、私達は3つの部分に分かれたシングルページのサイトでいこうと決めました。ユーザーが1つのリンクをクリックすると、同ページの正しいセクションへとスクロールダウンされます。',

		'code_sub' => 'すべてを合わせる',

		'code_part_1' => '同サイトはフロントエンド用に <b>HTML/CSS と JavaScript</b> 、バックエンド用に <b>PHP</b> を使用して開発されました。フルページスクロール効果を作るのには、jQuery プラグイン <a class="link" href="http://alvarotrigo.com/fullPage/#secondPage">Fullpage.js</a> を使いました。',

	],

	'lsa-portail' => [

		'nav_sunnary' => 'Laboratoires Salem 用に制作した企業サイト',

		'task' => 'ウェブサイトのデザインおよび開発',

		'sunnary' => 'Labosalem Portail は Laboratoires Salem の企業サイトで、ユーザーに同社の他のウェブサイトの存在を伝えそこへ誘導してあげるためのサイトです。<span class="para__space"></span> このサイトを HTML と CSS/SASS、JavaScript を使ってデザインし、開発しました。',

		'concept_sub' => 'プロジェクト',

		'concept_part_1' => 'Laboratoires Salem のために、ユーザーに同社グループの他の各種ウェブサイトの存在を伝え誘導することを目的としたポータルサイトをデザインするよう依頼されました。<br><br>
						顧客は基本的に4つのグループに分けられます。医者、卸売業者、薬剤師、そして顧客です。薬剤師や卸売業者といった専門職の方々は同社のオンライン小売プラットフォームにアクセスする必要があり、顧客や医者は企業および製品サイトに誘導してあげる必要があります。',

		'concept_part_2' => ' この目標を達成するために、私は4つのセクションに分かれたシングルページレイアウトのサイトでいこうと決めました。セクションの1つでユーザーが職業を選べるようになっており、次にそのユーザーにはその選択に基いた具体的なコンテンツが提示されます。',

	],

];





?>