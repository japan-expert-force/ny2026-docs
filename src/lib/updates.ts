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
        "アップデートは Java 1.21 / BE 1.21.0 である。主な新要素は Trial Chambers, Trial Spawner, Vault, Ominous Vault, Breeze, Bogged, Mace, Breeze Rod, Wind Charge, Heavy Core, 新銅・Tuff ブロック, Crafter, Ominous Bottle, Trial Key, Explorer Map, 新ポーション、新絵画である。",
      features: [
        "**Mace**: Heavy Core と Breeze Rod でクラフトできる",
        "**Crafter**: Tuff、Redstone Dust、Iron Ingot でクラフトできる",
        "**Trial Key**: Trial Spawner 攻略時にドロップする",
        "**Ominous Bottle**: Trial Chamber 内やチェストで入手できる",
      ],
      notes: [
        "Trial Chamber は地下深くに生成される",
        "Trial Omen は一定時間で消失するため、Ominous Vault の解放は迅速に行う必要がある",
        "Breeze は風攻撃、Bogged は毒矢攻撃を行うため、装備を整えて挑戦するとよい",
        "新ブロックや絵画、ポーションは Trial Chamber や Vault 報酬で入手できる",
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
        "アップデートは Java 1.21.2 / BE 1.21.40 である。主な新要素は Bundle（アイテム圧縮用）、Bedrock Hardcore モードである。",
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
        "アップデートは Java 1.21.4 / BE 1.21.50 である。主な新要素は Pale Garden バイオーム、Creaking（新 mob）、Creaking Heart、Pale oak 系木材、Pale Hanging Moss、Eyeblossom、Resin 系ブロック、Pale oak boat である。",
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
        "アップデートは Java 1.21.5 / BE 1.21.70 である。主な新要素は温暖/寒冷バリアント（豚・牛・鶏）、新植生（Bush、Firefly Bush、Leaf Litter、Wildflowers）、Fallen Trees、新 Explorer Maps、卵の色バリアント、環境音である。",
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
        "アップデートは Java 1.21.6 / BE 1.21.90 である。主な新要素は Happy Ghast（乗れる ghast）、Harness、Ghastling、Dried Ghast、Locator Bar、新音楽ディスク、新絵画である。",
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
        "アップデートは Java 1.21.9 / BE 1.21.111 である。主な新要素は Copper Tools/Weapons/Armor、Copper Nugget、Copper Chest、Copper Bars、Copper Chain、Copper Lantern/torch、Shelf ブロック、Copper Golem、Copper Golem Statue である。",
      features: [
        "**Copper Golem**: 銅ブロック等で作成できる新たなゴーレム",
        "**銅製品**: Copper Tools/Weapons/Armor は鉄と同等の性能を持つ新装備",
        "**Copper Chest**: 大容量チェスト",
        "**Copper Shelf**: アイテム展示用ブロック",
        "**Copper Lantern/torch**: 新たな照明",
      ],
      notes: [
        "Copper Golem は自律的に動き回り、Copper Chest 等の整理や Redstone 信号の発生など多機能",
        "酸化は時間経過で進行し、見た目が変化する。ワックスで保護できる",
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
        "アップデートは Java 1.21.11 / BE 1.21.130 である。主な新要素は Spear（jab/charge 武器）、Nautilus（乗れる海洋マウント）、Nautilus Armor、Netherite Horse Armor、Spear 専用エンチャント（Lunge）、Camel Husk、Parched、Zombie Nautilus、Zombie Horse である。",
      features: [
        "**Spear**: Jab（通常攻撃）と Charge（溜め攻撃）の2種の攻撃が可能な新武器",
        "**Nautilus**: 水中で騎乗できる新マウント",
        "**Nautilus Armor**: 専用防具で性能が向上",
        "**Lunge エンチャント**: 溜め攻撃時に前方へ大きく飛び込む特殊効果",
        "**Camel Husk/Parched**: 砂漠バイオームで出現する新 Mob",
      ],
      notes: [
        "Spear は新素材でクラフトでき、Lunge エンチャントで強化できる",
        "Nautilus は水中移動に特化し、Armor 装備で性能が向上する",
        "Breath of the Nautilus は水中呼吸バーが凍結し、長時間潜水できる",
      ],
    },
  },
];
