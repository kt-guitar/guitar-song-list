// ギター弾いてみた投稿一覧
// difficulty: 1〜5。未設定は null。
// comment: 一言コメント。空欄の場合は表示しない。

const albumOrder = [
  "avenue",
  "bouquet",
  "antique",
  "phenomenon",
  "eyes",
  "answer",
  "cubism",
  "theory",
  "flask",
  "hameln",
  "indoor",
  "thirsty",
  "その他",
];

const songs = [
  {
    album: "avenue",
    title: "ツツジの枯れる頃には",
    date: "2026-04-15",
    youtube: "https://www.youtube.com/watch?v=GR2tezOeiwY",
    difficulty: 3,
    comment: "テンポが速くてコードチェンジ忙しめ！"
  },
  {
    album: "avenue",
    title: "落下するデジャヴ",
    date: "2026-08-26",
    youtube: "https://www.youtube.com/watch?v=gwusl_fBndI",
    difficulty: 3,
    comment: "ガチおしゃれすぎコード、アウトロがやや難？"
  },
  {
    album: "avenue",
    title: "あの城まで歩いて",
    date: "2026-08-26",
    youtube: "https://www.youtube.com/watch?v=ISxALVBSAr8",
    difficulty: 5,
    comment: "指弾きﾑｽﾞ～！ライブ見たらサビの運指・ポジションが全く違いました…"
  },
  {
    album: "avenue",
    title: "最果ての庭",
    date: "2026-08-26",
    youtube: "https://www.youtube.com/watch?v=FLx1YBrcLC4",
    difficulty: 2,
    comment: "ラスサビ前の間奏が壮大すぎて思わず涙…"
  },
  {
    album: "avenue",
    title: "bedroom swimmer",
    date: "2026-07-20",
    youtube: "https://www.youtube.com/watch?v=zC35hDZK-88",
    difficulty: 2,
    comment: "アウトロ以外はだいぶ易しめで初心者おすすめ！★1寄り"
  },
  {
    album: "bouquet",
    title: "群青逃避行",
    date: "2026-03-11",
    youtube: "https://www.youtube.com/watch?v=44ljogsijNE",
    difficulty: 4,
    comment: "アルペジオ、クリーンのチョーキング等細かいテクニック多め…"
  },
  {
    album: "bouquet",
    title: "誰もが密室にて息をする",
    date: "2026-02-13",
    youtube: "https://www.youtube.com/watch?v=3vm-GjK99pg",
    difficulty: 4,
    comment: "この曲だけ明確に違う音作りにしてます、いっぱい歪ませた方が気持ち良いので…"
  },
  {
    album: "bouquet",
    title: "十七回忌",
    date: "2026-02-19",
    youtube: "https://www.youtube.com/watch?v=VSIe1v0pWEI",
    difficulty: 2,
    comment: "冒頭のひし形みたいな形のコードさえ弾ければあとは易しめ！★1寄り"
  },
  {
    album: "bouquet",
    title: "未完成に瞬いて",
    date: "2026-03-03",
    youtube: "https://www.youtube.com/watch?v=qgfZMBEfn8E",
    difficulty: 2,
    comment: "かなり繰り返しが多いので慣れればだいぶ易しめ"
  },
  {
    album: "bouquet",
    title: "クリームソーダ",
    date: "2026-03-23",
    youtube: "https://www.youtube.com/watch?v=Y-4xcDwgnBc",
    difficulty: 4,
    comment: "簡単そうに見えてかなりムズい、間奏のカッティングはミュートが大事！"
  },
  {
    album: "antique",
    title: "旧世界より",
    date: "2026-01-28",
    youtube: "https://www.youtube.com/watch?v=0Z4agSCK8u8",
    difficulty: 3,
    comment: "激エモギターソロ大好きすぎる…"
  },
  {
    album: "antique",
    title: "千年鳥",
    date: "2026-04-12",
    youtube: "https://www.youtube.com/watch?v=XejFky8t7mQ",
    difficulty: 2,
    comment: "速いけどコード自体はだいぶ易しめ！"
  },
  {
    album: "antique",
    title: "海馬の尻尾に小栴檀",
    date: "2026-03-30",
    youtube: "https://www.youtube.com/watch?v=2Gy_mAhFDac",
    difficulty: 3,
    comment: "間奏等のカントリー風ギターは想像よりも意外と簡単なので慣れ、大事◎"
  },
  {
    album: "antique",
    title: "額縁の中で",
    date: "2026-09-22",
    youtube: "https://www.youtube.com/watch?v=MHWdm27ssJM",
    difficulty: 5,
    comment: "イントロ等のリフがコードと単音が混ざって相当難関…"
  },
  {
    album: "antique",
    title: "渦巻く夏のフェルマータ",
    date: "2026-09-06",
    youtube: "https://www.youtube.com/watch?v=vhNeBmwa2zA",
    difficulty: 4,
    comment: "開放弦が混ざるアルペジオで頭が混乱しそうになります…"
  },
  {
    album: "phenomenon",
    title: "フランネル",
    date: "2026-08-30",
    youtube: "https://www.youtube.com/watch?v=eRneTzQPobk",
    difficulty: 3,
    comment: "速さが最大の障壁、コード自体はそこまで難しくはないはず…！"
  },
  {
    album: "phenomenon",
    title: "沈丁花",
    date: "2025-12-13",
    youtube: "https://www.youtube.com/watch?v=g9X_vm8XRHk",
    difficulty: 4,
    comment: "Bメロはどうやったら弾きながら歌えるんですか？？"
  },
  {
    album: "phenomenon",
    title: "式日",
    date: "2026-10-19",
    youtube: "https://youtu.be/aFyHcsMljd8",
    difficulty: 4,
    comment: "丁寧さが相当求められる指弾き、アンプの音量カチ上げて良いので相当優しく弾いてあげましょう"
  },
  {
    album: "phenomenon",
    title: "砂の王女",
    date: "2026-05-23",
    youtube: "https://www.youtube.com/watch?v=1QbgZj2FsY8",
    difficulty: 5,
    comment: "耳コピ苦労した部門堂々の1位、イントロだけで大量のドーパミンが分泌されます"
  },
  {
    album: "phenomenon",
    title: "眠れる海のセレナーデ",
    date: "2026-05-18",
    youtube: "https://www.youtube.com/watch?v=xWPf3yaUUbI",
    difficulty: 1,
    comment: "テンポもゆっくりで単音も出てこないのでおいしくるの中では1番初心者向けかも…？"
  },
  {
    album: "eyes",
    title: "五つ目の季節",
    date: "2026-10-12",
    youtube: "https://www.youtube.com/watch?v=K-BtTfZWeeY",
    difficulty: 3,
    comment: "気付かない間に転調したり戻ったりコードを引用したりしていて伏線回収のようなガチ芸術曲…"
  },
  {
    album: "eyes",
    title: "シンメトリー",
    date: "2026-08-15",
    youtube: "https://www.youtube.com/watch?v=2e_2nqk4s28",
    difficulty: 2,
    comment: "バレーコードさえ弾ければだいぶ易しめ曲です"
  },
  {
    album: "eyes",
    title: "空腹な動物のための",
    date: "2026-07-04",
    youtube: "https://www.youtube.com/watch?v=GodvwrHsJy4",
    difficulty: 1,
    comment: "簡単だけどカッケェ曲なので初心者の方はイントロだけでも弾いてみると楽しくなれます"
  },
  {
    album: "eyes",
    title: "ドクダミ",
    date: "2026-10-07",
    youtube: "https://www.youtube.com/watch?v=MTnLWpRPdyo",
    difficulty: 3,
    comment: "冒頭のアルペジオを本気でマスターすればもう概ね◎"
  },
  {
    album: "eyes",
    title: "黄昏のレシピ",
    date: "2026-06-29",
    youtube: "https://www.youtube.com/watch?v=qd3uUFYYSRA",
    difficulty: 3,
    comment: "ギターソロが相当難しいですが他は割とシンプルめ！"
  },
  {
    album: "answer",
    title: "ベルベット",
    date: "2026-11-02",
    youtube: "https://youtu.be/R8E-5itjLuw",
    difficulty: 3,
    comment: ""
  },
  {
    album: "answer",
    title: "夜顔",
    date: "2026-09-10",
    youtube: "https://www.youtube.com/watch?v=HPTyF93GFTk",
    difficulty: 2,
    comment: ""
  },
  {
    album: "answer",
    title: "マテリアル",
    date: "2026-05-04",
    youtube: "https://www.youtube.com/watch?v=_8VYWRCBtSQ",
    difficulty: 3,
    comment: ""
  },
  {
    album: "answer",
    title: "波打ち際のマーチ",
    date: "2026-09-28",
    youtube: "https://youtu.be/DpNL8IFKXko",
    difficulty: 1,
    comment: ""
  },
  {
    album: "answer",
    title: "garuda",
    date: "2026-05-13",
    youtube: "https://www.youtube.com/watch?v=uJhrnVip3II",
    difficulty: 4,
    comment: ""
  },
  {
    album: "cubism",
    title: "Utopia",
    date: "2026-07-11",
    youtube: "https://www.youtube.com/watch?v=bhonsLJ7ui0",
    difficulty: 4,
    comment: ""
  },
  {
    album: "cubism",
    title: "トロイメライ",
    date: "2026-04-07",
    youtube: "https://www.youtube.com/watch?v=APNrK97vq00",
    difficulty: 2,
    comment: ""
  },
  {
    album: "cubism",
    title: "水びたしの国",
    date: "2026-04-05",
    youtube: "https://www.youtube.com/watch?v=4d-Nb068xMc",
    difficulty: 4,
    comment: ""
  },
  {
    album: "cubism",
    title: "灰羽",
    date: "2026-04-22",
    youtube: "https://www.youtube.com/watch?v=iRqxn6LMqFA",
    difficulty: 4,
    comment: ""
  },
  {
    album: "cubism",
    title: "蒲公英",
    date: "2026-07-26",
    youtube: "https://www.youtube.com/watch?v=ySDAzcD49As",
    difficulty: 2,
    comment: ""
  },
  {
    album: "theory",
    title: "獣",
    date: "2026-04-19",
    youtube: "https://www.youtube.com/watch?v=qjt6VEpo0QU",
    difficulty: 4,
    comment: ""
  },
  {
    album: "theory",
    title: "透明造花",
    date: "2026-06-23",
    youtube: "https://www.youtube.com/watch?v=bOPeQm0K_bc",
    difficulty: 5,
    comment: ""
  },
  {
    album: "theory",
    title: "亡き王女のための水域",
    date: "2026-05-26",
    youtube: "https://www.youtube.com/watch?v=IMzvTHIh-qI",
    difficulty: 3,
    comment: ""
  },
  {
    album: "theory",
    title: "架空船",
    date: "2026-06-05",
    youtube: "https://www.youtube.com/watch?v=Gex5EQYDJjE",
    difficulty: 5,
    comment: ""
  },
  {
    album: "theory",
    title: "斜陽",
    date: "2026-07-15",
    youtube: "https://www.youtube.com/watch?v=oQn1I72SULc",
    difficulty: 2,
    comment: ""
  },
  {
    album: "flask",
    title: "epilogue",
    date: "2026-06-11",
    youtube: "https://www.youtube.com/watch?v=c-1McT9TNoc",
    difficulty: 2,
    comment: ""
  },
  {
    album: "flask",
    title: "憧景",
    date: "2026-11-17",
    youtube:"https://youtu.be/QKu2GVa0QJ0?si=rMXGRDxEJLtyAF8f",
    difficulty: 5,
    comment: ""
  },
  {
    album: "flask",
    title: "水仙",
    date: "2026-01-22",
    youtube: "https://www.youtube.com/watch?v=IYQGsC5YjRg",
    difficulty: 2,
    comment: ""
  },
  {
    album: "flask",
    title: "candle tower",
    date: "2026-07-29",
    youtube: "https://www.youtube.com/watch?v=gPRsfgXr31k",
    difficulty: 5,
    comment: ""
  },
  {
    album: "flask",
    title: "走馬灯",
    date: "2026-05-09",
    youtube: "https://www.youtube.com/watch?v=U-oQmbp-Lpg",
    difficulty: 3,
    comment: ""
  },
  {
    album: "hameln",
    title: "水葬",
    date: "2026-09-03",
    youtube: "https://www.youtube.com/watch?v=omSYZ0pPoKY",
    difficulty: 2,
    comment: ""
  },
  {
    album: "hameln",
    title: "命日",
    date: "2026-01-06",
    youtube: "https://www.youtube.com/watch?v=7fDH3lIZrlk",
    difficulty: 4,
    comment: ""
  },
  {
    album: "hameln",
    title: "dry flower",
    date: "2026-11-09",
    youtube: "https://youtu.be/OT-SPrrOGEU",
    difficulty: 3,
    comment: ""
  },
  {
    album: "hameln",
    title: "蜂蜜",
    date: "2026-03-29",
    youtube: "https://www.youtube.com/watch?v=YRuLF5N4Zxo",
    difficulty: 3,
    comment: ""
  },
  {
    album: "hameln",
    title: "nazca",
    date: "2026-09-14",
    youtube: "https://www.youtube.com/watch?v=c0-LrM7_yf4",
    difficulty: 4,
    comment: ""
  },
  {
    album: "indoor",
    title: "桜の木の下には",
    date: "2026-04-26",
    youtube: "https://www.youtube.com/watch?v=fuOftP2mKOQ",
    difficulty: 3,
    comment: ""
  },
  {
    album: "indoor",
    title: "look at the sea",
    date: "2026-11-26",
    youtube: "https://www.youtube.com/watch?v=T8_ZeT74FSg",
    difficulty: 2,
    comment: ""
  },
  {
    album: "indoor",
    title: "caramel city",
    date: "2026-10-01",
    youtube: "https://www.youtube.com/watch?v=ZGZFHVN7ZLo",
    difficulty: 3,
    comment: ""
  },
  {
    album: "indoor",
    title: "泡と魔女",
    date: "2026-06-17",
    youtube: "https://www.youtube.com/watch?v=coVf4lUlyg0",
    difficulty: 3,
    comment: ""
  },
  {
    album: "indoor",
    title: "あの秋とスクールデイズ",
    date: "2026-09-18",
    youtube: "https://www.youtube.com/watch?v=Slq7ayjO4xA",
    difficulty: 4,
    comment: ""
  },
  {
    album: "thirsty",
    title: "色水",
    date: "",
    youtube: "",
    difficulty: null,
    comment: ""
  },
  {
    album: "thirsty",
    title: "シュガーサーフ",
    date: "2026-08-10",
    youtube: "https://www.youtube.com/watch?v=RrVwKVsZQFg",
    difficulty: 3,
    comment: ""
  },
  {
    album: "thirsty",
    title: "5月の呪い",
    date: "2026-05-01",
    youtube: "https://www.youtube.com/watch?v=Oq86Mle6ySw",
    difficulty: 2,
    comment: ""
  },
  {
    album: "thirsty",
    title: "砂と少女",
    date: "2026-10-26",
    youtube: "https://youtu.be/LpCXZhbcP3s",
    difficulty: 4,
    comment: ""
  },
  {
    album: "thirsty",
    title: "紫陽花",
    date: "2026-06-01",
    youtube: "https://www.youtube.com/watch?v=sr7vjCSVeO0",
    difficulty: 4,
    comment: ""
  },
  {
    album: "その他",
    title: "夕立と魚",
    date: "2026-08-04",
    youtube: "https://www.youtube.com/watch?v=E_wX3xtd83U",
    difficulty: 2,
    comment: ""
  },
];
