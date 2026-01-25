import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* ヒーローセクション 
        bg-gradient-to-br: 左上から右下へのグラデーション
        from-gray-900 to-black: 濃いグレーから黒へ
      */}
      <section className="flex-grow flex flex-col items-center justify-center text-center p-8 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        
        {/* キャッチコピー */}
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
          Building the <span className="text-blue-400">Future</span><br />
          with Code.
        </h1>
        
        {/* サブテキスト */}
        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl">
          Web開発からゲーム制作まで。<br className="md:hidden"/>
          技術でアイデアを形にするエンジニア、karamisoのポートフォリオです。
        </p>
        
        {/* ボタンエリア */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href="/works" 
            className="px-8 py-4 bg-blue-600 rounded-full font-bold text-lg hover:bg-blue-700 transition shadow-lg hover:shadow-blue-500/25"
          >
            実績を見る
          </Link>
          
          <Link 
            href="/about" 
            className="px-8 py-4 border border-gray-500 rounded-full font-bold text-lg hover:bg-white hover:text-black transition"
          >
            私について
          </Link>
        </div>

      </section>
      
      {/* (オプション) 下部にちょっとした装飾やスクロールを促す矢印などを入れてもOK */}
    </div>
  );
}