// ギター弾いてみた投稿一覧
// difficulty: 1〜5。未設定は null。

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
    difficulty: 3
  },
  {
    album: "avenue",
    title: "落下するデジャヴ",
    date: "2026-08-26",
    youtube: "https://www.youtube.com/watch?v=gwusl_fBndI",
    difficulty: 3
  },
  {
    album: "avenue",
    title: "あの城まで歩いて",
    date: "2026-08-26",
    youtube: "https://www.youtube.com/watch?v=ISxALVBSAr8",
    difficulty: 5
  },
  {
    album: "avenue",
    title: "最果ての庭",
    date: "2026-08-26",
    youtube: "https://www.youtube.com/watch?v=FLx1YBrcLC4",
    difficulty: 2
  },
  {
    album: "avenue",
    title: "bedroom swimmer",
    date: "2026-07-20",
    youtube: "https://www.youtube.com/watch?v=zC35hDZK-88",
    difficulty: 2
  },
  {
    album: "bouquet",
    title: "群青逃避行",
    date: "2026-03-11",
    youtube: "https://www.youtube.com/watch?v=44ljogsijNE",
    difficulty: 4
  },
  {
    album: "bouquet",
    title: "誰もが密室にて息をする",
    date: "2026-02-13",
    youtube: "https://www.youtube.com/watch?v=3vm-GjK99pg",
    difficulty: 4
  },
  {
    album: "bouquet",
    title: "十七回忌",
    date: "2026-02-19",
    youtube: "https://www.youtube.com/watch?v=VSIe1v0pWEI",
    difficulty: 2
  },
  {
    album: "bouquet",
    title: "未完成に瞬いて",
    date: "2026-03-03",
    youtube: "https://www.youtube.com/watch?v=qgfZMBEfn8E",
    difficulty: 2
  },
  {
    album: "bouquet",
    title: "クリームソーダ",
    date: "2026-03-23",
    youtube: "https://www.youtube.com/watch?v=Y-4xcDwgnBc",
    difficulty: 4
  },
  {
    album: "antique",
    title: "旧世界より",
    date: "2026-01-28",
    youtube: "https://www.youtube.com/watch?v=0Z4agSCK8u8",
    difficulty: 4
  },
  {
    album: "antique",
    title: "千年鳥",
    date: "2026-04-12",
    youtube: "https://www.youtube.com/watch?v=XejFky8t7mQ",
    difficulty: 2
  },
  {
    album: "antique",
    title: "海馬の尻尾に小栴檀",
    date: "2026-03-30",
    youtube: "https://www.youtube.com/watch?v=2Gy_mAhFDac",
    difficulty: 3
  },
  {
    album: "antique",
    title: "額縁の中に",
    date: "",
    youtube: "",
    difficulty: null
  },
  {
    album: "antique",
    title: "渦巻く夏のフェルマータ",
    date: "",
    youtube: "",
    difficulty: null
  },
  {
    album: "phenomenon",
    title: "フランネル",
    date: "2026-08-30",
    youtube: "https://www.youtube.com/watch?v=eRneTzQPobk",
    difficulty: 3
  },
  {
    album: "phenomenon",
    title: "沈丁花",
    date: "2025-12-13",
    youtube: "https://www.youtube.com/watch?v=g9X_vm8XRHk",
    difficulty: 4
  },
  {
    album: "phenomenon",
    title: "式日",
    date: "",
    youtube: "",
    difficulty: null
  },
  {
    album: "phenomenon",
    title: "砂の王女",
    date: "2026-05-23",
    youtube: "https://www.youtube.com/watch?v=1QbgZj2FsY8",
    difficulty: 5
  },
  {
    album: "phenomenon",
    title: "眠れる海のセレナーデ",
    date: "2026-05-18",
    youtube: "https://www.youtube.com/watch?v=xWPf3yaUUbI",
    difficulty: 1
  },
  {
    album: "eyes",
    title: "五つ目の季節",
    date: "",
    youtube: "",
    difficulty: null
  },
  {
    album: "eyes",
    title: "シンメトリー",
    date: "2026-08-15",
    youtube: "https://www.youtube.com/watch?v=2e_2nqk4s28",
    difficulty: 2
  },
  {
    album: "eyes",
    title: "空腹な動物のための",
    date: "2026-07-04",
    youtube: "https://www.youtube.com/watch?v=GodvwrHsJy4",
    difficulty: 1
  },
  {
    album: "eyes",
    title: "ドクダミ",
    date: "",
    youtube: "",
    difficulty: null
  },
  {
    album: "eyes",
    title: "黄昏のレシピ",
    date: "2026-06-29",
    youtube: "https://www.youtube.com/watch?v=qd3uUFYYSRA",
    difficulty: 3
  },
  {
    album: "answer",
    title: "ベルベット",
    date: "",
    youtube: "",
    difficulty: null
  },
  {
    album: "answer",
    title: "夜顔",
    date: "",
    youtube: "",
    difficulty: null
  },
  {
    album: "answer",
    title: "マテリアル",
    date: "2026-05-04",
    youtube: "https://www.youtube.com/watch?v=_8VYWRCBtSQ",
    difficulty: 3
  },
  {
    album: "answer",
    title: "波打ち際のマーチ",
    date: "",
    youtube: "",
    difficulty: null
  },
  {
    album: "answer",
    title: "garuda",
    date: "2026-05-13",
    youtube: "https://www.youtube.com/watch?v=uJhrnVip3II",
    difficulty: 4
  },
  {
    album: "cubism",
    title: "Utopia",
    date: "2026-07-11",
    youtube: "https://www.youtube.com/watch?v=bhonsLJ7ui0",
    difficulty: 4
  },
  {
    album: "cubism",
    title: "トロイメライ",
    date: "2026-04-07",
    youtube: "https://www.youtube.com/watch?v=APNrK97vq00",
    difficulty: 2
  },
  {
    album: "cubism",
    title: "水びたしの国",
    date: "2026-04-05",
    youtube: "https://www.youtube.com/watch?v=4d-Nb068xMc",
    difficulty: 4
  },
  {
    album: "cubism",
    title: "灰羽",
    date: "2026-04-22",
    youtube: "https://www.youtube.com/watch?v=iRqxn6LMqFA",
    difficulty: 4
  },
  {
    album: "cubism",
    title: "蒲公英",
    date: "2026-07-26",
    youtube: "https://www.youtube.com/watch?v=ySDAzcD49As",
    difficulty: 2
  },
  {
    album: "theory",
    title: "獣",
    date: "2026-04-19",
    youtube: "https://www.youtube.com/watch?v=qjt6VEpo0QU",
    difficulty: 4
  },
  {
    album: "theory",
    title: "透明造花",
    date: "2026-06-23",
    youtube: "https://www.youtube.com/watch?v=bOPeQm0K_bc",
    difficulty: 5
  },
  {
    album: "theory",
    title: "亡き王女のための水域",
    date: "2026-05-26",
    youtube: "https://www.youtube.com/watch?v=IMzvTHIh-qI",
    difficulty: 3
  },
  {
    album: "theory",
    title: "架空船",
    date: "2026-06-05",
    youtube: "https://www.youtube.com/watch?v=Gex5EQYDJjE",
    difficulty: 5
  },
  {
    album: "theory",
    title: "斜陽",
    date: "2026-07-15",
    youtube: "https://www.youtube.com/watch?v=oQn1I72SULc",
    difficulty: 2
  },
  {
    album: "flask",
    title: "epilogue",
    date: "2026-06-11",
    youtube: "https://www.youtube.com/watch?v=c-1McT9TNoc",
    difficulty: 2
  },
  {
    album: "flask",
    title: "憧景",
    date: "",
    youtube: "",
    difficulty: null
  },
  {
    album: "flask",
    title: "水仙",
    date: "2026-01-22",
    youtube: "https://www.youtube.com/watch?v=IYQGsC5YjRg",
    difficulty: 3
  },
  {
    album: "flask",
    title: "candle tower",
    date: "2026-07-29",
    youtube: "https://www.youtube.com/watch?v=gPRsfgXr31k",
    difficulty: 5
  },
  {
    album: "flask",
    title: "走馬灯",
    date: "2026-05-09",
    youtube: "https://www.youtube.com/watch?v=U-oQmbp-Lpg",
    difficulty: 3
  },
  {
    album: "hameln",
    title: "水葬",
    date: "2026-09-03",
    youtube: "https://www.youtube.com/watch?v=omSYZ0pPoKY",
    difficulty: 2
  },
  {
    album: "hameln",
    title: "命日",
    date: "2026-01-06",
    youtube: "https://www.youtube.com/watch?v=7fDH3lIZrlk",
    difficulty: 4
  },
  {
    album: "hameln",
    title: "dry flower",
    date: "",
    youtube: "",
    difficulty: null
  },
  {
    album: "hameln",
    title: "蜂蜜",
    date: "2026-03-29",
    youtube: "https://www.youtube.com/watch?v=YRuLF5N4Zxo",
    difficulty: 3
  },
  {
    album: "hameln",
    title: "nazca",
    date: "",
    youtube: "",
    difficulty: null
  },
  {
    album: "indoor",
    title: "桜の木の下には",
    date: "2026-04-26",
    youtube: "https://www.youtube.com/watch?v=fuOftP2mKOQ",
    difficulty: 3
  },
  {
    album: "indoor",
    title: "look at the sea",
    date: "",
    youtube: "",
    difficulty: null
  },
  {
    album: "indoor",
    title: "caramel city",
    date: "",
    youtube: "",
    difficulty: null
  },
  {
    album: "indoor",
    title: "泡と魔女",
    date: "2026-06-17",
    youtube: "https://www.youtube.com/watch?v=coVf4lUlyg0",
    difficulty: 3
  },
  {
    album: "indoor",
    title: "あの秋とスクールデイズ",
    date: "",
    youtube: "",
    difficulty: null
  },
  {
    album: "thirsty",
    title: "色水",
    date: "",
    youtube: "",
    difficulty: null
  },
  {
    album: "thirsty",
    title: "シュガーサーフ",
    date: "2026-08-10",
    youtube: "https://www.youtube.com/watch?v=RrVwKVsZQFg",
    difficulty: 3
  },
  {
    album: "thirsty",
    title: "5月の呪い",
    date: "2026-05-01",
    youtube: "https://www.youtube.com/watch?v=Oq86Mle6ySw",
    difficulty: 2
  },
  {
    album: "thirsty",
    title: "砂と少女",
    date: "",
    youtube: "",
    difficulty: null
  },
  {
    album: "thirsty",
    title: "紫陽花",
    date: "2026-06-01",
    youtube: "https://www.youtube.com/watch?v=sr7vjCSVeO0",
    difficulty: 4
  },
  {
    album: "その他",
    title: "夕立と魚",
    date: "2026-08-04",
    youtube: "https://www.youtube.com/watch?v=E_wX3xtd83U",
    difficulty: 2
  },
];
