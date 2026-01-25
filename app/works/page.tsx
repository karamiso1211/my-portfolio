import Link from 'next/link';
import Image from 'next/image'; // ← 追加: 画像用コンポーネント

const works = [
  {
    title: "ポートフォリオサイト",
    description: "現在作成している、Next.jsとTailwind CSSを使った個人のポートフォリオサイトです。",
    skills: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/", 
    image: "/images/EX_1.png", // ← 自分の画像ファイル名に変えてください
  },
  {
    title: "共有カレンダーアプリ",
    description: "家族や友人とリアルタイムで予定を共有できるアプリです。予定の色分けや、通知機能を実装しました。",
    skills: ["Next.js", "Firebase", "TypeScript"], // ← 実際に使った技術に変えてください
    link: "https://my-shared-calendar.vercel.app/", // ← アプリのURL または GitHubのURL
    image: "/images/calendar.png", // ← さっき入れた画像ファイル名
  },
  // 画像がない場合のダミーデータ
  {
    title: "架空のカフェLP",
    description: "HTML/CSSの基礎学習として模写コーディングを行いました。",
    skills: ["HTML", "CSS"],
    link: "#",
    image: "",
  },
];

export default function Works() {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Works</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {works.map((work, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-white flex flex-col">
            
            {/* --- 画像エリア --- */}
            {/* 画像がない場合にエラーにならないよう条件分岐しています */}
            <div className="relative w-full h-48 bg-gray-200">
              {work.image ? (
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover" // 画像を枠いっぱいに綺麗に切り取る設定
                />
              ) : (
                // 画像がない場合に表示するグレーの四角
                <div className="flex items-center justify-center h-full text-gray-400">
                  No Image
                </div>
              )}
            </div>

            {/* --- テキストエリア --- */}
            <div className="p-6 flex flex-col grow">
              <h2 className="text-xl font-bold mb-2">{work.title}</h2>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {work.skills.map((skill) => (
                  <span key={skill} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                    {skill}
                  </span>
                ))}
              </div>

              <p className="text-gray-600 mb-4 text-sm grow">
                {work.description}
              </p>
              
              <div className="mt-auto">
                <a 
                  href={work.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-500 hover:underline text-sm font-medium"
                >
                  詳しく見る →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}