import Head from "next/head";
import Link from "next/link";
import VideoPlayer from "../components/VideoPlayer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Head>
        <title>Yuyucn | 小说推文视频平台</title>
      </Head>
      <main className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow">
        <h1 className="text-2xl font-bold mb-4">🎬 小说视频试看平台</h1>
        <p className="mb-4 text-gray-600">观看 3 分钟试看内容，付费解锁后半段</p>

        <VideoPlayer />

        <div className="mt-6 text-center">
          <Link href="/watch">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              解锁并继续观看
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
