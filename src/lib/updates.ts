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
        "**Trial Chamberの探索**: 地下深く（Y=-20~-40）に生成されます。複数の部屋と通路、罠で構成される大規模構造物です",
        "**Trial Spawnerの仕組み**: 範囲内のプレイヤー数に応じてスポーン数が増加します。全てのモブを倒すとクールダウンに入り、Trial Keyをドロップ。30分後に再起動可能",
        "**Ominous Trial Spawner**: Trial Omenエフェクト中にTrial Spawnerに近づくと起動。通常より強力なモブがスポーンし、Ominous Vaultへのアクセスが可能に",
        "**Vaultの種類**: 通常のVaultはTrial Keyで開封、Ominous VaultはOminous Trial Keyで開封。各Vaultはプレイヤーごとに一度のみ開封可能",
        "**Maceの特性**: 落下距離に応じてダメージが増加。エンチャント「Density」でさらに強化可能。「Wind Burst」エンチャントで攻撃後に上方へ跳ね上がります",
        "**Breezeの戦闘**: Wind Chargeで風攻撃を行います。ジャンプして移動し、通常の近接攻撃は困難。弓矢や遠距離武器が有効",
        "**Boggedの特性**: 毒矢を使用するスケルトンの亜種。通常のスケルトンより射撃速度が遅い。キノコバイオームの沼地でも自然スポーン",
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
      features: [
        "**Bundle**: 兎の皮 6 枚と糸 2 本でクラフトできる",
        "**染色**: 染料と Bundle をクラフトして色付き Bundle を作成できる",
        "**運用**: Bundle に複数種類のアイテムを詰めることができる",
        "**入手**: チェストや村のチェストから Bundle を入手できる",
      ],
      notes: [
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
      features: [
        "**Pale Garden**: ダークフォレストの亜種として生成される非常にレアなバイオーム",
        "**Creaking**: 夜間に Creaking Heart からスポーンする新モブ",
        "**Pale oak**: 淡い色のオーク系木材で装飾に活用できる",
        "**Resin**: 装飾やトリム素材として利用できる",
      ],
      notes: [
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
      features: [
        "**動物バリアント**: 豚・牛・鶏に温暖/寒冷/通常の3種類のバリアントを追加",
        "**Bush**: 平原や森林などに生成される装飾用植物",
        "**Firefly Bush**: 沼地や川沿いに生成され、夜間にホタルの粒子が発生",
        "**Fallen Trees**: オーク、スプルース、シラカバ、ジャングルの倒木が新たに生成",
        "**Explorer Map**: 村人の製図家から新たな地図が購入可能",
      ],
      notes: [
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
      features: [
        "**Happy Ghast**: Nether で騎乗可能な新たなガストのバリアント",
        "**Harness**: Happy Ghast に装着することで騎乗・操作が可能になる専用アイテム",
        "**Dried Ghast**: Nether で生成される新ブロックで建材や装飾に利用可能",
        "**Locator Bar**: 他プレイヤーの方向を画面上部に表示する新 UI",
      ],
      notes: [
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
