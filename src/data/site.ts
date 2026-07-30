export const site = {
  name: '白山公園ガイド',
  title: '白山公園ガイド｜新潟の四季とまち歩き',
  description:
    '国指定名勝・白山公園の見どころ、桜、蓮、紅葉、アクセス、駐車場、白山神社、燕喜館、周辺グルメを案内する非公式の日本語観光ガイドです。',
  domain: 'HakusanKoen.com',
  url: 'https://hakusankoen.com',
  address: '新潟県新潟市中央区一番堀通町地先',
  coordinates: { lat: 37.9144137, lng: 139.0393424 },
  gaId: 'G-HXM22WWPKP',
};

export const mainNav = [
  { label: '見どころ', href: '/highlights/' },
  { label: '四季', href: '/seasons/' },
  { label: '散歩コース', href: '/courses/' },
  { label: 'アクセス', href: '/access/' },
  { label: '駐車場', href: '/parking/' },
  { label: '周辺グルメ', href: '/gourmet/' },
];

export const quickFacts = [
  { label: '入園料', value: '無料', note: '屋外公園区域' },
  { label: '目安時間', value: '60–90分', note: '神社・燕喜館を含む' },
  { label: '最寄りバス停', value: '市役所前', note: '徒歩約3分' },
  { label: '駐車料金', value: '30分 100円', note: 'A〜D駐車場' },
];

export const seasons = [
  {
    name: '春',
    kana: 'はる',
    period: '3月下旬–5月',
    title: '梅から桜へ、花の時間',
    description: '梅林の香りに始まり、ひょうたん池と空中庭園を桜が包みます。',
    image: '/images/plum-grove.webp',
    href: '/sakura/',
    accent: '桜・梅・牡丹',
  },
  {
    name: '夏',
    kana: 'なつ',
    period: '6月–8月',
    title: '深い緑と蓮池の朝',
    description: '松の木陰と水辺の涼しさ。蓮は朝の散歩でゆっくり眺めたい景色です。',
    image: '/images/summer-pond.webp',
    href: '/seasons/#summer',
    accent: '新緑・蓮・水景',
  },
  {
    name: '秋',
    kana: 'あき',
    period: '10月–11月',
    title: '静かな回廊と色づく木々',
    description: '空中庭園の曲線と落葉、石灯籠のある池畔に落ち着いた時間が流れます。',
    image: '/images/autumn-walk.webp',
    href: '/seasons/#autumn',
    accent: '紅葉・落葉・夕景',
  },
  {
    name: '冬',
    kana: 'ふゆ',
    period: '12月–2月',
    title: '雪景色と白山さま',
    description: '雪をまとった松と庭石、初詣の白山神社。新潟らしい凛とした季節です。',
    image: '/images/garden-lantern.webp',
    href: '/seasons/#winter',
    accent: '雪・初詣・静寂',
  },
];

export const courseList = [
  {
    duration: '30分',
    title: '水辺の小径',
    summary: '短い時間で白山公園らしい池、築山、石灯籠を巡ります。',
    stops: ['市役所前', 'ひょうたん池', '美由岐賀岡', '蓮池', '燕喜館前'],
    pace: '約1.2km',
  },
  {
    duration: '60分',
    title: '公園と白山さま',
    summary: '白山神社の参拝と歴史庭園をひとつの流れで楽しむ定番コースです。',
    stops: ['白山神社楼門', '拝殿', '梅林', 'ひょうたん池', '蓮池', '燕喜館'],
    pace: '約2.0km',
  },
  {
    duration: '120分',
    title: '文化と空中庭園',
    summary: '燕喜館、りゅーとぴあ、空中庭園まで足を延ばすゆったりコースです。',
    stops: ['白山神社', '白山公園', '燕喜館', '空中庭園', 'りゅーとぴあ', '信濃川方向'],
    pace: '約3.1km',
  },
];

export const gourmetList = [
  {
    name: '燕喜館の抹茶',
    category: '園内・和のひと休み',
    walk: '園内',
    description: '歴史ある座敷と庭を眺めながら、提供日に抹茶と菓子を楽しめます。',
    note: '提供日・内容は当日確認',
  },
  {
    name: 'りゅーとぴあのカフェ',
    category: '近い・休憩しやすい',
    walk: '徒歩3–5分',
    description: '観劇の前後や雨の日にも使いやすい、文化会館内のカフェです。',
    note: '催事日に営業時間変更あり',
  },
  {
    name: '青島食堂 東堀店',
    category: '生姜醤油ラーメン',
    walk: '徒歩5–10分',
    description: '新潟県を代表する生姜醤油ラーメン。冷える季節の散歩後にも似合います。',
    note: '混雑・売切れに注意',
  },
  {
    name: '三吉屋 西堀本店',
    category: '新潟あっさり醤油',
    walk: '徒歩15–20分',
    description: '細麺と澄んだスープが印象的な、新潟の伝統的な一杯です。',
    note: '営業日は当日確認',
  },
  {
    name: 'とんかつ太郎 古町本店',
    category: 'タレかつ丼',
    walk: '徒歩18–22分',
    description: '薄めのかつを甘辛い醤油だれにくぐらせた、新潟らしい名物料理です。',
    note: '昼は早めの来店がおすすめ',
  },
  {
    name: '古町の甘味と喫茶',
    category: 'まち歩きの余韻',
    walk: '徒歩15分前後',
    description: '老舗菓子店や小さな喫茶店を探しながら、古町へ歩くのも楽しみです。',
    note: '個店の定休日に注意',
  },
];

export const faqList = [
  {
    question: '白山公園は何時まで入れますか？',
    answer:
      '屋外の公園区域は自由に散策できます。ただし、白山神社の楼門、燕喜館、駐車場、文化施設にはそれぞれ利用時間があります。夜間は足元と周辺施設の閉館時間にご注意ください。',
  },
  {
    question: '入園料はかかりますか？',
    answer:
      '白山公園の屋外区域は無料です。燕喜館の一般見学も通常は無料ですが、催しや貸室利用、飲食には料金がかかる場合があります。',
  },
  {
    question: '新潟駅から一番わかりやすい行き方は？',
    answer:
      '新潟駅から路線バスで「市役所前」へ向かい、下車後に徒歩約3分がわかりやすい方法です。観光循環バスの運行日には「白山公園前」も便利です。',
  },
  {
    question: '桜の見頃はいつですか？',
    answer:
      '例年は4月上旬から中旬が中心ですが、気温により前後します。梅、桜、八重桜と時期をずらして花が続くため、最新の開花情報を確認して訪れてください。',
  },
  {
    question: '雨の日でも楽しめますか？',
    answer:
      '短い庭園散歩に加え、燕喜館やりゅーとぴあを組み合わせると過ごしやすくなります。石畳や園路が濡れるため、滑りにくい靴がおすすめです。',
  },
  {
    question: 'ベビーカーや車いすで歩けますか？',
    answer:
      '空中庭園や主要動線には平坦な区間がありますが、歴史庭園には細い園路や段差もあります。市役所前側や文化施設側から入り、無理のない範囲で巡ると安心です。',
  },
];
