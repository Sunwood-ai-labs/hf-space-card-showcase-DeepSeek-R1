'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRobot,
  faUser,
  faUserTie,
  faUsers,
  faStar,
  faCodeBranch,
  faTag
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

export default function Gallery() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSpaces, setFilteredSpaces] = useState([]);
  
  const spaces = [
    {
      id: 1,
      title: "テキスト生成デモ",
      description: "GPTスタイルのテキスト生成デモ（パラメータ調整可能）",
      author: "AI開発者",
      stats: { stars: "2.3k", framework: "Transformers" },
      tags: ["NLP", "生成"],
      image: "https://github.com/user-attachments/assets/41e2c27d-ac66-4691-a4af-457a30701390"
    },
    {
      id: 2,
      title: "画像分類システム",
      description: "Vision Transformersを使ったリアルタイム画像分類",
      author: "CV研究者",
      stats: { stars: "1.8k", framework: "Torch" },
      tags: ["画像処理", "分類"],
      image: "https://github.com/user-attachments/assets/44eebe57-1828-4659-a023-8ab4df9274c1"
    },
    {
      id: 3,
      title: "多言語音声認識",
      description: "多言語対応のリアルタイム音声テキスト変換",
      author: "音声処理チーム",
      stats: { stars: "1.2k", framework: "Audio" },
      tags: ["ASR", "音声処理"],
      image: "https://github.com/user-attachments/assets/da431a60-f19f-4ca5-9b5c-956cc6c38c42"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
          <FontAwesomeIcon icon={faRobot} className="mr-2" />
          Hugging Face Spaces ギャラリー
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {spaces.map((space) => (
            <div
              key={space.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <img
                src={space.image}
                alt={space.title}
                className="w-full h-48 object-cover border-b border-gray-200"
              />
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{space.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{space.description}</p>

                <div className="flex items-center mb-4">
                  <div className="bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center mr-2">
                    <FontAwesomeIcon icon={faUser} className="text-gray-600 text-sm" />
                  </div>
                  <span className="text-gray-700">{space.author}</span>
                </div>

                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faStar} className="mr-1" />
                    <span>{space.stats.stars}</span>
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faCodeBranch} className="mr-1" />
                    <span>{space.stats.framework}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {space.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center"
                    >
                      <FontAwesomeIcon icon={faTag} className="mr-1 text-gray-500" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
