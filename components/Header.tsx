import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-900 text-white">
      {/* サイトのロゴ・タイトル */}
      <div className="text-xl font-bold">
        <Link href="/">My Portfolio</Link>
      </div>

      {/* ナビゲーションメニュー */}
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link href="/" className="hover:text-blue-400">Home</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-400">About</Link>
          </li>
          <li>
            <Link href="/works" className="hover:text-blue-400">Works</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;