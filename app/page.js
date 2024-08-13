import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-screen flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500">
          Share your thoughts and connect with others on OwnThoughts
        </h1>
        <p className="text-lg md:text-xl text-white mt-4">
          Here we unleash our thoughts and share with others with no identity. No one will judge you.
        </p>
      </div>
    </div>
  );
}
