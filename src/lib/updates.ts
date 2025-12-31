export interface NewElement {
  name: string;
  category: string;
  description: string;
  acquisition?: string;
}

export interface DetailedFlow {
  step: number;
  title: string;
  details: string[];
}

export interface Update {
  id: string;
  version: string;
  date: string;
  title: string;
  description: string;
  flowChart: string;
  details?: {
    overview: string;
    features: string[];
    notes?: string[];
    newElements?: NewElement[];
    detailedFlow?: DetailedFlow[];
    references?: { title: string; url: string }[];
  };
}

export const updates: Update[] = [
  {
    id: "1.21",
    version: "1.21",
    date: "2024-06-13",
    title: "Tricky Trials",
    description:
      "地下ダンジョン Trial Chambers、新モブ Breeze・Bogged、新武器 Mace、Trial Spawner/Vault、Ominous Bottle などを追加",
    flowChart: `flowchart TD
    A[Ominous Bottle入手] --> B[Trial Omen付与]
    B --> C[Trial Chamber発見]
    C --> D[Trial Spawner攻略]
    D --> E[Trial Key入手]
    E --> F[Vault開放]
    D --> G[Ominous Vault開放（Trial Omen状態）]
    F & G --> H[報酬獲得]`,
    details: {
      overview:
        "Java Edition 1.21 のアップデートです。主な新要素は Trial Chambers, Trial Spawner, Vault, Ominous Vault, Breeze, Bogged, Mace, Breeze Rod, Wind Charge, Heavy Core, 新銅・Tuff ブロック, Crafter, Ominous Bottle, Trial Key, Explorer Map, 新ポーション、新絵画です。",
      newElements: [
        {
          name: "Breeze（ブリーズ）",
          category: "敵対Mob",
          description:
            "Trial Chamberに出現する敵対的な新Mob。Wind Chargeで風攻撃を行い、大きくジャンプして移動する。矢やトライデントなど飛び道具を自動的に偏向する",
          acquisition:
            "Trial Chamberの戦闘部屋にあるTrial Spawnerからスポーン（夜間も含む）。範囲16ブロック以内でプレイヤーを攻撃",
        },
        {
          name: "Breeze Rod（ブリーズロッド）",
          category: "素材",
          description: "Breezeを倒すとドロップする素材。Maceの作成に必要",
          acquisition:
            "Breezeを倒すと1-2個ドロップ（Lootingエンチャントで増加）",
        },
        {
          name: "Bogged（ボッグド）",
          category: "敵対Mob",
          description:
            "キノコで覆われたスケルトンの亜種。毒の矢（Poison IV、4秒間）を使用する。通常のスケルトンよりも攻撃速度が遅い（3.5秒/2.5秒）。ハサミで刈ることができ、キノコ2個をドロップ",
          acquisition:
            "Trial Chamberの戦闘部屋、沼地バイオーム、マングローブの沼地にスポーン（スケルトンの約30%を置き換え）。Java版では光レベル0でスポーン、Bedrock版では光レベル0-7（マングローブの沼地では昼間も可）",
        },
        {
          name: "Mace（メイス）",
          category: "武器",
          description:
            "全武器中最も遅い攻撃速度（0.6）を持つが、高所からのSmash Attack（叩きつけ攻撃）で大ダメージを与える新武器。基本攻撃力6、最初の3ブロック落下で+4ダメージ/ブロック、次の5ブロックで+2ダメージ/ブロック、それ以降+1ダメージ/ブロック。成功したSmash Attackで落下ダメージ無効化",
          acquisition:
            "Heavy Core（Ominous Vaultから7.5%の確率）+ Breeze Rod でクラフト。耐久値500",
        },
        {
          name: "Wind Charge（ウィンドチャージ）",
          category: "投擲アイテム",
          description:
            "投擲して風爆発を起こし、エンティティをノックバックさせる。ドア、トラップドア、ボタン、レバー、フェンスゲートのブロック状態を切り替え、ろうそくを消火可能",
          acquisition: "Breezeの攻撃で使用される。クラフト不可",
        },
        {
          name: "Heavy Core（ヘビーコア）",
          category: "レアアイテム",
          description: "Maceの作成に必要な非常にレアなアイテム",
          acquisition:
            "Ominous Vaultから7.5%の確率で入手（Trial Omen状態でTrial Spawnerを攻略後に開放可能）",
        },
      ],
      features: [
        "**Trial Chambers**: 地下深く（Y=-20~-40付近）に生成される大規模なダンジョン構造物",
        "**Trial Spawner**: Trial Chamber内に配置され、プレイヤー数に応じてモブをスポーンさせる特殊なスポナー。攻略後はクールダウンに入り、Trial Keyをドロップ",
        "**Vault**: Trial KeyまたはOminous Trial Keyで開けられる報酬チェスト。一度のみ開封可能",
        "**Breeze**: Trial Chamberに出現する敵対Mob。Wind Chargeで風攻撃を行い、ジャンプして移動する",
        "**Bogged**: Trial Chamberに出現するスケルトンの亜種。毒矢を使用し、キノコバイオームでも自然スポーン",
        "**Mace（メイス）**: Heavy CoreとBreeze Rodでクラフトできる新武器。高所からの落下攻撃で大ダメージを与える",
        "**Wind Charge**: Breezeがドロップするアイテム。投擲して風爆発を起こし、エンティティを吹き飛ばす",
        "**Heavy Core**: Ominous Vaultから入手できるレアアイテム。Maceのクラフトに必要",
        "**Ominous Bottle**: Trial Chamberやチェストで入手可能。飲むと「Trial Omen」エフェクトを付与",
        "**Trial Omen**: Ominous Bottleで付与されるエフェクト。Trial Chamber内でOminous Trial Spawnerを起動し、より困難な戦闘とOminous Vaultへのアクセスが可能に",
        "**Crafter**: Redstone動力でクラフトを自動化するブロック。Tuff、Redstone Dust、Iron Ingotでクラフト",
      ],
      notes: [
        "**Breezeの戦闘特性**: HP30、飛び道具を自動偏向（Wind Charge以外）、落下ダメージ無効、最大15ブロック水平・5ブロック垂直のジャンプ攻撃が可能。Iron Golemに対して積極的に攻撃する",
        "**Breezeの弱点**: 近接攻撃は困難なため弓矢や遠距離武器が有効。Wind Chargeは偏向されないため効果的",
        "**Boggedの詳細**: HP16、毒矢（Poison IV、4秒間で3ダメージ）を使用。攻撃クールダウンがスケルトンより1.5秒長い（Easy/Normal: 3.5秒、Hard: 2.5秒）。日光で燃える。ハサミで刈ることで赤/茶キノコを2個ドロップし、再度刈れなくなる",
        "**Boggedのスポーン条件**: 沼地・マングローブの沼地でスケルトンの30%を置き換え。Java版：光レベル0、4体グループ。Bedrock版：光レベル0-7、1-2体グループ（マングローブでは昼間も可）",
        "**Maceの専用エンチャント**: Density（Smash Attackダメージ+0.5/ブロック/レベル、最大V）、Breach（防具効果15%減少/レベル、最大IV）、Wind Burst（Smash Attack成功時に上方へ跳ね上がる、レベルごとに8ブロック、最大III）",
        "**Maceの性能**: 攻撃速度0.6（全武器中最遅）、通常攻撃6ダメージ、DPS 3.6（クリティカル5.4）。Smash Attackは落下距離に応じて大幅増加：最初3ブロック+4/ブロック、次5ブロック+2/ブロック、以降+1/ブロック（上限なし）",
        "**Maceの取得難易度**: Heavy Coreの入手がOminous Vaultから7.5%と非常に低確率。Ominous Vaultの開放にはTrial Omenエフェクト（Ominous Bottleを飲む）が必要",
        "**Trial Chamberの探索**: 地下深く（Y=-20~-40）に生成されます。複数の部屋と通路、罠で構成される大規模構造物です",
        "**Trial Spawnerの仕組み**: 範囲内のプレイヤー数に応じてスポーン数が増加します。全てのモブを倒すとクールダウンに入り、Trial Keyをドロップ。30分後に再起動可能",
        "**Ominous Trial Spawner**: Trial Omenエフェクト中にTrial Spawnerに近づくと起動。通常より強力なモブがスポーンし、Ominous Vaultへのアクセスが可能に",
        "**Vaultの種類**: 通常のVaultはTrial Keyで開封、Ominous VaultはOminous Trial Keyで開封。各Vaultはプレイヤーごとに一度のみ開封可能",
        "**Trial Omenの取得**: Ominous Bottleを飲むか、特定の条件で付与。エフェクトは一定時間で消失するため、Ominous Vaultの解放は迅速に行う必要があります",
        "**新ブロック**: 銅とTuffの建築ブロックバリエーションが多数追加。Copper Bulb（レッドストーンで点灯）、Copper Grate（透過ブロック）、Chiseled Copper、Cut Copperなど",
        "**新ポーション**: Oozing（スライム化）、Weaving（クモの巣生成）、Wind Charged（風ダメージ反射）、Infested（シルバーフィッシュ召喚）の4種類を追加",
      ],
      references: [
        {
          title: "Minecraft Wiki: Trial Chambers",
          url: "https://minecraft.wiki/w/Trial_Chamber",
        },
        {
          title: "Minecraft Wiki: Mace",
          url: "https://minecraft.wiki/w/Mace",
        },
        {
          title: "Minecraft Wiki: Breeze",
          url: "https://minecraft.wiki/w/Breeze",
        },
        {
          title: "公式 Changelog",
          url: "https://aka.ms/MCChangelogs",
        },
      ],
    },
  },
  {
    id: "1.21.2",
    version: "1.21.2",
    date: "2024-10-22",
    title: "Bundles of Bravery",
    description:
      "Bundle（アイテム圧縮）、Bedrock Hardcore モード、Bundle の染色や運用方法を追加",
    flowChart: `flowchart TD
    A[兎の皮・糸を集める] --> B[Bundle作成]
    B --> C[染料で染色]
    C --> D[Bundleにアイテム詰める]
    D --> E[チェストで運用]
    E --> F[村チェストから入手]`,
    details: {
      overview:
        "Java Edition 1.21.2 のアップデートです。主な新要素は Bundle（アイテム圧縮用）です。",
      newElements: [
        {
          name: "Bundle（バンドル）",
          category: "アイテム",
          description:
            "異なる種類のアイテムを1つのインベントリスロットに最大64個分まで混在して格納できるアイテム。スタック数に応じて容量を消費（64個スタックのアイテムは1/64、16個スタックは1/16、非スタックアイテムは全容量を消費）",
          acquisition:
            "糸1個+革1個でクラフト。村のチェスト（砂漠、平原、雪原、武器鍛冶、サバンナ、地図製作者、タイガ、皮なめし）から33.3%の確率で入手可能",
        },
      ],
      features: [
        "**Bundle**: 兎の皮 6 枚と糸 2 本でクラフトできる",
        "**染色**: 染料と Bundle をクラフトして色付き Bundle を作成できる",
        "**運用**: Bundle に複数種類のアイテムを詰めることができる",
        "**入手**: チェストや村のチェストから Bundle を入手できる",
      ],
      notes: [
        "**Bundleの容量計算**: 64個スタックアイテム（土、石など）は1/64を消費、16個スタックアイテム（エンダーパール、卵など）は1/16（4/64）を消費、非スタックアイテム（剣など）は全容量（64/64）を消費",
        "**Bundleの使用例**: 32本の棒（32×1/64）と8個のエンダーパール（8×4/64）で合計64/64となり満杯に。探検時の雑多なアイテムの整理に便利",
        "**染色システム**: 16色の染料で染色可能。革防具のような多色混合ではなく、1色のみ（識別しやすさ重視）",
        "**Bundleのネスト**: Bundle内に別のBundleを入れることが可能（1/16 + 内容物の容量を消費）。シュルカーボックスは入れられないが、シュルカーボックス内にBundleは入れられる",
        "**アイテムの出し入れ**: インベントリ画面で左クリック/右クリックまたはタッチ操作で出し入れ。ホットバーで使用すると最後に入れたアイテムを投げ出す",
        "**Bundle UI**: ホバーすると青い充填バー表示。空の時「Empty」、満杯時は赤く「Full」と表示。内容物は右から左へ最大4列で表示",
        "Bundle は最大 64 個分のアイテムを混在して格納できる",
        "Java 版と BE 版で挙動や入手方法が異なる場合がある",
        "BE の Hardcore は Realms にも対応している",
      ],
    },
  },
  {
    id: "1.21.4",
    version: "1.21.4",
    date: "2024-12-03",
    title: "The Garden Awakens",
    description:
      "新バイオーム Pale Garden、Creaking・Creaking Heart、Pale oak 系木材、Resin、Pale Hanging Moss などを追加",
    flowChart: `flowchart TD
    A[Pale Garden探索] --> B[Creaking Heart発見]
    B --> C[Creakingと遭遇]
    A --> D[Resin採取]
    D --> E[装飾・トリム利用]
    A --> F[Pale oak伐採]
    F --> G[木材・ボート作成]`,
    details: {
      overview:
        "Java Edition 1.21.4 のアップデートです。主な新要素は Pale Garden バイオーム、Creaking（新 mob）、Creaking Heart、Pale oak 系木材、Pale Hanging Moss、Eyeblossom、Resin 系ブロック、Pale oak boat です。",
      newElements: [
        {
          name: "Creaking（クリーキング）",
          category: "敵対Mob",
          description:
            "Pale Garden バイオームで夜間のみCreaking Heartから生成される特殊な敵対Mob。プレイヤーが見ている間は完全に静止し、背後に回ると超高速で接近して近接攻撃（Easy: 2.5、Normal: 3、Hard: 4.5ダメージ）を行う。Creaking Heartとリンクしている間は無敵",
          acquisition:
            "Pale Gardenで夜間、2つのPale Oak丸太（またはStripped変種）の間に同じ向きでCreaking Heartを配置すると、16ブロック水平・8ブロック垂直の範囲内にスポーン。Spawn Eggでも生成可能",
        },
        {
          name: "Creaking Heart（クリーキングハート）",
          category: "ブロック",
          description:
            "Creakingを生成する特殊なブロック。Creakingとリンクしており、このブロックを破壊するとCreakingが即座に死亡する。攻撃されるとResin Clumpを周辺のPale Oak丸太に生成",
          acquisition:
            "Pale Garden バイオームの Pale Oak の木の中心に自然生成。採掘にはツルハシが必要",
        },
        {
          name: "Pale Oak（ペールオーク）",
          category: "木材",
          description:
            "淡い灰色の新しい木材。板材、階段、フェンス、ドア、トラップドア、ボート、看板など通常の木材バリエーションが全て利用可能",
          acquisition:
            "Pale Garden バイオームで入手。斧で伐採。苗木から栽培可能",
        },
        {
          name: "Pale Hanging Moss（ペールハンギングモス）",
          category: "装飾ブロック",
          description: "Pale Gardenに生成される吊り下がる苔。装飾用",
          acquisition: "Pale Gardenで自然生成。ハサミで回収",
        },
        {
          name: "Eyeblossom（アイブロッサム）",
          category: "植物",
          description:
            "Pale Gardenに生成される目のような花。開花状態と閉じた状態がある",
          acquisition: "Pale Gardenで自然生成",
        },
        {
          name: "Resin（樹脂）",
          category: "素材・装飾",
          description:
            "Creakingがダメージを受けると周辺のPale Oak丸太に生成されるResin Clumpから回収。Resin Brickなど装飾ブロックの作成やトリム素材として利用可能",
          acquisition:
            "Creaking HeartにリンクしたCreakingを攻撃すると、夜間に周辺のPale Oak丸太にResin Clumpが成長。これを回収してResinを入手",
        },
      ],
      features: [
        "**Pale Garden**: ダークフォレストの亜種として生成される非常にレアなバイオーム",
        "**Creaking**: 夜間に Creaking Heart からスポーンする新モブ",
        "**Pale oak**: 淡い色のオーク系木材で装飾に活用できる",
        "**Resin**: 装飾やトリム素材として利用できる",
      ],
      notes: [
        "**Creakingの戦闘メカニクス**: Survivalまたは Adventureモードのプレイヤーが視界内（視線方向60°以内）に捉えると完全に静止。第三者視点やFOV変更は影響しない。ガラス、鉄格子、パウダースノー越しでも検知される。Carved Pumpkinを装備すると視界内でも動ける",
        "**Creaking Heartの配置条件**: 2つのPale Oak系丸太（Log、Wood、Strippedバリエーション）の間に同じ軸・向きで配置。夜間（Overworld）のみ起動し、Creakingを32ブロック半径内に生成",
        "**Creakingの無敵性**: Creaking HeartとリンクしているCreakingはあらゆるダメージ（void・/kill除く）を受けない。溶岩、マグマブロック、パウダースノーなどの危険ブロックも安全に移動。ダメージを受けるとオレンジ/灰色のパーティクルがCreaking Heart方向へ移動",
        "**Creakingの行動範囲**: Creaking Heartから32ブロックのユークリッド距離半径内。この範囲外に押し出されると即座に死亡。範囲内で意図的に移動範囲外へは出ない",
        "**Creakingのデスポーン**: 昼間になると自然デスポーン（Name Tagで命名済みを除く）。Creaking Heartから32ブロック外、またはプレイヤーと同じブロックに5秒以上いると即デスポーン＆再スポーン",
        "**Resin Clumpの成長**: Creakingが攻撃されると、夜間にCreaking Heart周辺のPale Oak丸太にResin Clumpが成長。ハサミまたは斧で回収可能",
        "**Pale Oakの入手**: Pale Gardenで苗木を入手し、通常の木と同様に栽培可能。成長にはボーンミールが使用可能",
        "**Pale Gardenの希少性**: ダークフォレストの亜種として非常にレアに生成。見つけるには広範囲の探索が必要",
        "Creaking は Pale Garden でのみ出現する",
        "Resin は装飾やトリム素材として利用できる",
        "Pale oak boat はチェスト付きも作成できる",
      ],
    },
  },
  {
    id: "1.21.5",
    version: "1.21.5",
    date: "2025-03-25",
    title: "Spring to Life",
    description:
      "mob バリアント（豚・牛・鶏）、新植生（Bush・Firefly Bush・Leaf Litter・Wildflowers）、Fallen Trees、新 Explorer Map、卵バリアントを追加",
    flowChart: `flowchart TD
    A[バイオーム探索] --> B[mobバリアント発見]
    A --> C[新植生採取]
    A --> D[Fallen Trees発見]
    E[Cartographer取引] --> F[Explorer Map入手]
    F --> G[各地探索]
    B & C & D & G --> H[卵バリアント収集]`,
    details: {
      overview:
        "Java Edition 1.21.5 のアップデートです。主な新要素は温暖/寒冷バリアント（豚・牛・鶏）、新植生（Bush、Firefly Bush、Leaf Litter、Wildflowers）、Fallen Trees、新 Explorer Maps、卵の色バリアント、環境音です。",
      newElements: [
        {
          name: "温暖バリアント動物（豚・牛・鶏）",
          category: "友好Mob",
          description:
            "サバンナ、ジャングル、砂漠などの暖かいバイオームにスポーンする茶色系の色合いの動物バリアント。通常バリアントと性能は同じで見た目のみ異なる",
          acquisition:
            "温暖バイオーム（サバンナ、ジャングル、砂漠、メサなど）で自然スポーン。繁殖時は親のいずれかのバリアントがランダムで遺伝",
        },
        {
          name: "寒冷バリアント動物（豚・牛・鶏）",
          category: "友好Mob",
          description:
            "雪原、タイガ、凍った海などの寒いバイオームにスポーンする灰色・白系の色合いの動物バリアント。通常バリアントと性能は同じで見た目のみ異なる",
          acquisition:
            "寒冷バイオーム（雪原、タイガ、凍った海、雪山など）で自然スポーン。繁殖時は親のいずれかのバリアントがランダムで遺伝",
        },
        {
          name: "Bush（ブッシュ）",
          category: "植物",
          description:
            "平原、森林などに生成される低木の装飾用植物。ハサミで回収可能",
          acquisition: "平原、森林バイオームで自然生成。ハサミでの回収が必要",
        },
        {
          name: "Firefly Bush（ホタルブッシュ）",
          category: "植物",
          description:
            "沼地や川沿いに生成される低木。夜間にホタルの粒子エフェクトが発生し幻想的な雰囲気を演出",
          acquisition: "沼地、川沿いで自然生成。ハサミで回収可能",
        },
        {
          name: "Leaf Litter（落ち葉）",
          category: "装飾ブロック",
          description:
            "森林バイオームの地面に生成される落ち葉。歩くとサクサクとした音がする",
          acquisition: "森林バイオームで自然生成",
        },
        {
          name: "Wildflowers（野生の花）",
          category: "植物",
          description:
            "平原、草原などに生成される新しい花のバリエーション。染料の材料や装飾に使用",
          acquisition: "平原、草原バイオームで自然生成",
        },
        {
          name: "Fallen Trees（倒木）",
          category: "構造物",
          description:
            "オーク、スプルース、シラカバ、ジャングルの倒れた木が森林に生成される。横たわった原木で構成され、自然な森の景観を演出",
          acquisition:
            "対応する森林バイオーム（オーク、スプルース、シラカバ、ジャングル）で自然生成",
        },
        {
          name: "新 Explorer Map",
          category: "アイテム",
          description:
            "村人の製図家（Cartographer）から購入できる新たな探索マップ。特定の構造物や場所への道筋を示す",
          acquisition: "製図家村人との取引で入手。エメラルドとコンパスが必要",
        },
        {
          name: "卵の色バリアント",
          category: "アイテム",
          description:
            "鶏が産む卵に複数の色バリエーションが追加（詳細な色は要確認）。機能は同じで見た目のみ異なる",
          acquisition: "鶏が産卵時にランダムで色が決定",
        },
      ],
      features: [
        "**動物バリアント**: 豚・牛・鶏に温暖/寒冷/通常の3種類のバリアントを追加",
        "**Bush**: 平原や森林などに生成される装飾用植物",
        "**Firefly Bush**: 沼地や川沿いに生成され、夜間にホタルの粒子が発生",
        "**Fallen Trees**: オーク、スプルース、シラカバ、ジャングルの倒木が新たに生成",
        "**Explorer Map**: 村人の製図家から新たな地図が購入可能",
      ],
      notes: [
        "**温暖バリアントの詳細**: 豚は赤褐色、牛は茶色系のまだら模様、鶏は茶色系の羽毛。サバンナ、ジャングル、砂漠、メサ、熱帯などの暖かいバイオームでスポーン",
        "**寒冷バリアントの詳細**: 豚は灰色、牛は白黒のホルスタイン風、鶏は白～灰色の羽毛。雪原、タイガ、凍った海、雪山、凍った川などの寒いバイオームでスポーン",
        "**バリアントの遺伝**: 繁殖時は両親のバリアント（温暖、寒冷、通常）のいずれかがランダムで子に遺伝。異なるバリアント同士でも繁殖可能",
        "**Bushの用途**: 主に装飾用。ハサミで回収しないと消滅。コンポスターに使用可能",
        "**Firefly Bushの特性**: 夜間（ゲーム内時間の夜）にホタルの光る粒子が発生。沼地や川沿いの雰囲気作りに最適。ハサミで回収可能",
        "**Fallen Treesの構成**: 横向きに配置された原木で構成。周辺にキノコやコケが生えていることもある。木材資源として利用可能",
        "**Leaf Litterの音**: 歩くと特有のサクサク音が鳴る。秋の森の雰囲気を演出",
        "**Wildflowersの種類**: 複数の新しい花の種類が追加（詳細は要確認）。染料作成や装飾に使用",
        "**Explorer Mapの種類**: 新たな構造物（詳細は要確認）への地図が追加。製図家村人との取引で入手",
        "**卵バリアントの機能**: 色が異なるだけで、投擲・孵化などの機能は全て同じ。視覚的なバリエーションの追加",
        "**環境音の追加**: 各バイオームに新しい環境音（鳥のさえずり、風の音など）が追加され、より没入感が向上（詳細は要確認）",
        "温暖バリアントはサバンナ、ジャングル、砂漠などの暖かいバイオームでスポーン",
        "寒冷バリアントは雪原、タイガ、凍った海などの寒いバイオームでスポーン",
        "繁殖時は親のいずれかのバリアントがランダムで生まれる",
      ],
    },
  },
  {
    id: "1.21.6",
    version: "1.21.6",
    date: "2025-06-17",
    title: "Chase the Skies",
    description:
      "乗れる Happy Ghast、Harness、Ghastling、Dried Ghast、Locator Bar、新音楽ディスクや絵画を追加",
    flowChart: `flowchart TD
    A[Nether探索] --> B[Happy Ghast発見]
    B --> C[繁殖]
    C --> D[Harness作成・装着]
    D --> E[Happy Ghastに騎乗]
    E --> F[空中移動体験]
    F --> G[Locator Bar活用]
    A --> H[新ディスク・絵画収集]
    A --> I[Dried Ghast採取]`,
    details: {
      overview:
        "Java Edition 1.21.6 のアップデートです。主な新要素は Happy Ghast（乗れる ghast）、Harness、Ghastling、Dried Ghast、Locator Bar、新音楽ディスク、新絵画です。",
      newElements: [
        {
          name: "Happy Ghast（ハッピーガスト）",
          category: "友好Mob・マウント",
          description:
            "Netherで騎乗可能な友好的なガストのバリアント。Harnessを装着することで最大4人まで同時に騎乗可能な空中マウントとして機能。上下左右への3次元移動が可能。Leadで他のエンティティ（ボート、大型Mob）を吊り下げて運搬可能",
          acquisition:
            "Dried Ghastブロックを水中に約20分間浸すとGhastling（幼体）に変化。Ghastlingに雪玉を与えて成長を加速（Java: 10%/個、Bedrock: 10個で成体）。20分で自然成長",
        },
        {
          name: "Ghastling（ガストリング）",
          category: "友好Mob（幼体）",
          description:
            "Happy Ghastの幼体。近くのプレイヤーや特定の友好Mob（羊、牛、豚、馬など）を16ブロック範囲内で追従する。水中でも溺れない",
          acquisition:
            "Dried Ghastブロックを水に浸すと約20分で誕生。雪玉で成長加速可能",
        },
        {
          name: "Harness（ハーネス）",
          category: "装備アイテム",
          description:
            "Happy Ghastに装着することで騎乗・操作が可能になる専用装備。16色の染料で染色可能。ハサミで取り外し可能",
          acquisition: "クラフト（レシピ詳細は要確認、おそらく革・糸など）",
        },
        {
          name: "Dried Ghast（ドライドガスト）",
          category: "ブロック",
          description:
            "Netherで生成される乾燥したガストのブロック。水で湿らせるとGhastlingに変化する特殊ブロック",
          acquisition: "Netherで自然生成。建材や装飾としても利用可能",
        },
        {
          name: "Locator Bar（ロケーターバー）",
          category: "UI機能",
          description:
            "他のプレイヤーの方向を画面上部に表示する新UI機能。マルチプレイでの協力プレイやPvPに有用",
          acquisition: "設定で有効化が必要（デフォルト無効）",
        },
      ],
      features: [
        "**Happy Ghast**: Nether で騎乗可能な新たなガストのバリアント",
        "**Harness**: Happy Ghast に装着することで騎乗・操作が可能になる専用アイテム",
        "**Dried Ghast**: Nether で生成される新ブロックで建材や装飾に利用可能",
        "**Locator Bar**: 他プレイヤーの方向を画面上部に表示する新 UI",
      ],
      notes: [
        "**Happy Ghastの騎乗システム**: Harnessを装着した成体のHappy Ghastに最大4人まで同時騎乗可能。最初のプレイヤーが操縦席（顔の上）に座り、2-4人目は側面に時計回りに配置。降りると反時計回りに回転して空席を埋める",
        "**Happy Ghastの操作方法**: 前進キーで視線方向へ移動、ジャンプキーで真上へ上昇。下降は下を向いて前進、または上を向いて後退。横移動で高度維持。移動速度約3.6m/s",
        "**Happy Ghastの特性**: HP20、移動速度0.05（非常にゆっくり浮遊）。火・溶岩ダメージを受ける（通常のGhastは無効）。Fireballは撃てない。リードで繋げる（最大16ブロック、通常Mobは12ブロック）",
        "**Happy Ghastのホーム位置**: スポーン地点をホームとして記憶。Harness装着/取外し、リード切断、降車、誘引解除、Ghastlingの追従終了時に現在地を新ホームに更新。Harness未装着時は64ブロック、装着時/Ghastlingは32ブロック範囲内を徘徊",
        "**Happy Ghastの回復**: 通常時はHP回復1/30秒。Y=187-196（雲の高さ）または雨・雪天候時はHP回復1/秒に加速",
        "**Ghastlingの成長**: 20分（24000tick）で成体に成長。雪玉で加速（Java: 1個で10%短縮、Bedrock: 10個で即成体）。近くのプレイヤーや羊、牛、豚、馬、ラマ、ロバ、ラクダ、Happy Ghast、キツネ、オウム、ウサギ、パンダ、Skeleton Horseなど友好Mobを16ブロック範囲で追従（×1.1速度）、5ブロックで停止",
        "**Harnessの装着**: 成体Happy GhastのみHarnessを装着可能。ハサミで取り外してアイテムとして回収。装着中はゴーグルが目を覆う。16色の染料で染色可能",
        "**Happy Ghastのプラットフォーム機能**: プレイヤーがHappy Ghastの上に立つと、Happy Ghastは静止して方位に整列し、ソリッドブロックのように振る舞う。高所建築の足場として利用可能。プレイヤーが離れると再び浮遊し、上のエンティティは落下",
        "**Happy Ghastの運搬機能**: Leadでボート（Chest付き含む）、または大型Mob（馬、ロバ、ラバ、Skeleton Horse、Zombie Horse、ラクダ、Camel Husk、Sniffer）を吊り下げて空中輸送可能。複数同時吊り下げ可能（上限なし）。吊り下げ時は4本のロープで表示。ハサミで全Lead同時切断可能",
        "**Dried Ghastの使用法**: 水中に約20分間浸すことでGhastlingに変化。Nether建材としても使用可能",
        "**Locator Barの用途**: マルチプレイで他プレイヤーの位置を把握。協力プレイや競争要素のあるゲームモードで有用。デフォルトでは無効のため設定で有効化が必要",
        "**新音楽ディスク**: 詳細は要確認（タイトル、入手法など）",
        "**新絵画**: 装飾用の新絵画が追加",
        "Happy Ghast は Nether でのみ出現する",
        "Harness はレザーや新素材でクラフトできる",
        "Locator Bar は設定で有効化が必要",
      ],
    },
  },
  {
    id: "1.21.9",
    version: "1.21.9",
    date: "2025-09-30",
    title: "The Copper Age",
    description:
      "銅の拡張（Copper Tools・Armor・Chest・Shelf 等）、Copper Golem、Golem Statue、酸化やワックス処理、Copper Collection イベントを追加",
    flowChart: `flowchart TD
    A[銅鉱石採掘] --> B[インゴット精錬]
    B --> C[銅製品クラフト]
    C --> D[Copper Golem作成]
    D --> E[Golem Statue酸化観察]
    C --> F[Copper Chest/Shelf設置]
    D --> G[自動整理体験]
    F --> H[イベント参加]`,
    details: {
      overview:
        "Java Edition 1.21.9 のアップデートです。主な新要素は Copper Tools/Weapons/Armor、Copper Nugget、Copper Chest、Copper Bars、Copper Chain、Copper Lantern/torch、Shelf ブロック、Copper Golem、Copper Golem Statue です。",
      features: [
        "**Copper Golem**: 銅ブロック（任意の酸化段階）とカービドパンプキンで作成できる自動整理ゴーレム",
        "**銅製品**: Copper Tools/Weapons/Armor は鉄と同等の性能を持つ新装備",
        "**Copper Chest**: Copper Golem作成時に自動生成される専用チェスト（酸化段階は銅ブロックに準拠）",
        "**Copper Shelf**: アイテム展示用ブロック",
        "**Copper Lantern/torch**: 新たな照明ブロック",
      ],
      notes: [
        "**Copper Golemの仕組み**: Copper Chestからアイテムを取り出し（最大16個）、近くの木製チェストやトラップチェストへ自動搬送します。65×17×65の範囲内を探索可能",
        "**酸化システム**: 4段階の酸化（未酸化→露出→風化→酸化）があり、7~7時間40分で次の段階へ進行。完全酸化後は平均8.62秒でCopper Golem Statueに変化",
        "**ワックス処理**: ハニカムで酸化の進行を停止可能。斧で除去できます",
        "**Statueの再生**: 未酸化の Copper Golem Statue に斧を使用すると、Copper Golem として復活します",
        "**アイテム記憶**: Copper Golem は開けたチェストを最大9個まで記憶し、10個目で記憶をリセットします",
        "**Iron Golemとの連携**: Iron Golem からポピーをもらい、頭上のロッドに装着できます（ハサミで回収可能）",
      ],
      references: [
        {
          title: "Minecraft Wiki: Copper Golem",
          url: "https://minecraft.wiki/w/Copper_Golem",
        },
        {
          title: "Minecraft Wiki: The Copper Age",
          url: "https://minecraft.wiki/w/The_Copper_Age",
        },
      ],
    },
  },
  {
    id: "1.21.11",
    version: "1.21.11",
    date: "2025-12-09",
    title: "Mounts of Mayhem",
    description:
      "槍（Spear）、Nautilus（乗れる海洋マウント）、Nautilus Armor、Netherite Horse Armor、Camel Husk・Parched・Zombie Nautilus などの新 mob を追加",
    flowChart: `flowchart TD
    A[Spear作成] --> B[Jab/Charge練習]
    B --> C[Nautilus発見・馴致]
    C --> D[Nautilus Armor装備]
    D --> E[Nautilus騎乗]
    E --> F[砂漠でCamel Husk戦]
    F --> G[Parched/Zombie Nautilus体験]
    G --> H[Netherite Horse Armor装備]`,
    details: {
      overview:
        "Java Edition 1.21.11 のアップデートです。主な新要素は Spear（jab/charge 武器）、Nautilus（乗れる海洋マウント）、Nautilus Armor、Netherite Horse Armor、Spear 専用エンチャント（Lunge）、Camel Husk、Parched、Zombie Nautilus、Zombie Horse です。",
      newElements: [
        {
          name: "Spear（槍）",
          category: "武器",
          description:
            "全武器中最長のリーチを持つ新武器。Jab（素早い突き）とCharge（溜め突進）の2つの攻撃方式が可能。移動速度に応じてダメージが増加",
          acquisition:
            "木・石・銅・鉄・金・ダイヤ・ネザライトの7段階で作成可能（棒2本+素材）",
        },
        {
          name: "Lunge エンチャント",
          category: "エンチャント",
          description:
            "Spear専用エンチャント（Lv1~3）。Jab攻撃時に視線方向へ水平に飛び込む。満腹度6以上必要で、使用時に満腹度・耐久値を消費",
          acquisition: "エンチャントテーブルまたは村人取引",
        },
        {
          name: "Nautilus（オウムガイ）",
          category: "マウント",
          description:
            "海洋に生息する中立的なマウント。挑発時にダッシュ攻撃を行う。フグで馴致・繁殖可能。騎乗時にBreath of the Nautilusエフェクトで酸素バーが凍結",
          acquisition: "海洋バイオームで自然スポーン。フグで馴致",
        },
        {
          name: "Nautilus Armor",
          category: "防具",
          description:
            "Nautilus専用の段階的防具（皮・鉄・金・ダイヤ・ネザライト）。性能を大幅に向上",
          acquisition: "各素材でクラフト",
        },
        {
          name: "Netherite Horse Armor",
          category: "防具",
          description:
            "馬用のネザライト防具。防御力19（9.5ハート）、防具靭性3、ノックバック耐性1を提供",
          acquisition:
            "鍛冶台でダイヤモンド馬鎧+ネザライトアップグレード鋳型でアップグレード",
        },
        {
          name: "Camel Husk（キャメルハスク）",
          category: "敵対Mob",
          description:
            "砂漠に夜間スポーンするアンデッド化したラクダ。ハスク（鉄の槍装備）とParchedが騎乗。日光で燃えない。兎の足で誘導・回復可能",
          acquisition: "砂漠バイオームで夜間自然スポーン（Camel Husk Jockey）",
        },
        {
          name: "Parched（パーチド）",
          category: "敵対Mob",
          description:
            "砂漠に夜間スポーンするスケルトンの亜種。弱化の矢を使用。通常スケルトンより射撃速度が遅く、Bogged同等。日光で燃えず、弱化耐性を持つ",
          acquisition: "砂漠バイオームで夜間自然スポーン",
        },
        {
          name: "Zombie Nautilus",
          category: "敵対Mob",
          description:
            "Nautilusのアンデッド化バリアント。溺死者（トライデント装備）が騎乗。通常より約10%速く泳ぐ。温暖な海ではサンゴ色バリアントがスポーン。日光で燃焼（Nautilus Armorで防止可能）",
          acquisition: "海洋バイオームで自然スポーン（Zombie Nautilus Jockey）",
        },
        {
          name: "Zombie Horse（ゾンビホース）",
          category: "敵対Mob",
          description:
            "平原・サバンナに夜間スポーンする、アンデッド化した馬。ゾンビ（鉄の槍装備）が騎乗。赤キノコで誘導・回復可能。サドル・馬鎧装備可能。日光で燃焼（馬鎧で防止可能）",
          acquisition:
            "平原・サバンナバイオームで夜間自然スポーン（Zombie Horseman）",
        },
      ],
      features: [
        "**Spear**: Jab（通常攻撃）と Charge（溜め攻撃）の2種の攻撃が可能な新武器",
        "**Nautilus**: 水中で騎乗できる新マウント",
        "**Nautilus Armor**: 専用防具で性能が向上",
        "**Lunge エンチャント**: 溜め攻撃時に前方へ大きく飛び込む特殊効果",
        "**Camel Husk/Parched**: 砂漠バイオームで出現する新 Mob",
      ],
      notes: [
        "**Spearの特徴**: 全ての武器の中で最長のリーチを持ちます。Jabは素早い攻撃、Chargeは溜めて突進する攻撃で、移動速度が速いほどダメージが増加します",
        "**Lunge エンチャント**: Spear専用で、Jab攻撃時に視線方向へ水平に飛び込みます。水平に完璧に視線を合わせると最大距離を達成。満腹度6以上が必要で、使用時にレベルに応じた満腹度と耐久値1を消費します",
        "**Nautilusの飼育**: フグまたはフグ入りバケツで馴致・繁殖可能。その後は他の魚や魚入りバケツでも餌付け可能。騎乗にはサドルが必要で、マウス/ジョイスティックで操作（Happy Ghast同様）",
        "**Breath of the Nautilus**: Nautilusまたは Zombie Nautilus に騎乗中に付与されるエフェクト。酸素バーが凍結し、長時間潜水が可能になります",
        "**Nautilusの陸上行動**: 陸上では脱水状態になります。Baby Nautilusは独自のモデルとサウンドを持ちます",
        "**アンデッドマウント**: Camel Husk、Zombie Nautilus、Zombie Horseは全てアンデッド系で、未飼育時は敵対Mobとしてカウントされ、デスポーンします。飼育後は通常のマウント同様に扱えます",
        "**Zombie Nautilusの特性**: 通常のNautilusより約10%速く泳ぎ、陸上でも脱水しません。温暖な海ではサンゴ色のバリアントがスポーンします",
        "**Zombie Horseの改良**: 従来は入手困難でしたが、平原・サバンナで夜間にZombie Horseman（ゾンビが鉄の槍を持って騎乗）として自然スポーンするようになりました。テクスチャも更新され、ドロップアイテムも増加（腐肉2-3個）",
        "**馬・ラクダの水中挙動**: 騎乗中は水中で沈まなくなりました（ただし頭が水中に入ると降ろされます）",
        "**ゾンビ・ピグリンの装備**: ゾンビ、ハスク、ゾンビピッグマン、ピグリンが槍を持ってスポーンし、チャージ攻撃を使用する可能性があります",
      ],
      references: [
        {
          title: "Minecraft Wiki: Mounts of Mayhem",
          url: "https://minecraft.wiki/w/Mounts_of_Mayhem",
        },
        {
          title: "Minecraft Wiki: Spear",
          url: "https://minecraft.wiki/w/Spear",
        },
        {
          title: "Minecraft Wiki: Nautilus",
          url: "https://minecraft.wiki/w/Nautilus",
        },
      ],
    },
  },
];
