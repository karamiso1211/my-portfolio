import React from 'react';

// 1. スキルのデータ（数値は0〜100%で設定）
const skills = [
  { name: "HTML/CSS", level: 80 },
  { name: "Python", level: 70 },
  { name: "Unity / C#", level: 60 },
  { name: "Next.js", level: 40 },
  { name: "Git / GitHub", level: 10 },
];

// 2. 経歴のデータ
const timeline = [
  {
    year: "2023.04",
    title: "プログラミング学習開始",
    description: "大学の授業でJavaやC言語、Pythonに触れる",
  },
  {
    year: "2024.04",
    title: "HTML/CSSへの挑戦",
    description: "サイト作りの基本を学び始めると同時にUnityの勉強も始めた。",
  },
  {
    year: "2025.12",
    title: "ポートフォリオ制作",
    description: "学習の集大成として、Next.jsを使ったポートフォリオサイトの構築を開始。",
  },
  {
    year: "2026.1",
    title: "カレンダーアプリ作成",
    description: "就活での予定管理に使うため",
  },
];

export default function About() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      
      {/* --- セクション1: 自己紹介 --- */}
      <section className="mb-12">
        <h1 className="text-3xl font-bold mb-6 border-b-2 border-gray-200 pb-2">
          About Me
        </h1>
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* プロフィールアイコン（仮の円形） */}
          <div className="w-32 h-32 bg-gray-300 rounded-full flex-shrink-0 mx-auto md:mx-0"></div>
          
          <div>
            <h2 className="text-xl font-bold mb-2">karamiso / みそちゃ</h2>
            <p className="text-gray-600 leading-relaxed">
              はじめまして！Webエンジニアを目指して勉強中です。<br />
              「編集のしやすさ」と「コードの綺麗さ」を意識して開発することを心がけています。<br />
              新しい技術に触れるのが好きで、現在はNext.jsを中心にキャッチアップしています。
            </p>
          </div>
        </div>
      </section>

      {/* --- セクション2: スキルセット（プログレスバー） --- */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-1">
                <span className="font-medium">{skill.name}</span>
                <span className="text-gray-500 text-sm">{skill.level}%</span>
              </div>
              {/* バーの背景（灰色） */}
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                {/* バーの中身（青色・長さ可変） */}
                <div 
                  className="bg-blue-600 h-2.5 rounded-full" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- セクション3: 経歴（タイムライン） --- */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Timeline</h2>
        <div className="border-l-2 border-gray-200 ml-3 space-y-8">
          {timeline.map((item, index) => (
            <div key={index} className="relative pl-8">
              {/* タイムラインの「丸」ポチ */}
              <span className="absolute -left-[9px] top-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-white"></span>
              
              <span className="text-sm text-gray-500 font-bold">{item.year}</span>
              <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
              <p className="text-gray-600 mt-1">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}