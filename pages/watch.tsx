// pages/watch.tsx
import Head from 'next/head';

export default function Watch() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Head>
        <title>完整观看 - Yuyucn</title>
      </Head>
      <main className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow">
        <h1 className="text-2xl font-bold mb-4">📺 完整观看</h1>
        <p className="mb-4 text-gray-600">感谢支持！您已解锁完整视频内容：</p>

        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-full rounded"
            src="https://www.youtube.com/embed/jQN9Knedjdg"
            title="完整小说视频"
            frameBorder="0"
            allow="accelerometer; autop
