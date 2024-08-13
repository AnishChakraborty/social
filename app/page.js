import Image from "next/image";
import "@/styles/globals.css";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-blue-900">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-red-400 to-pink-500">
          Share your thoughts and connect with others on OwnThoughts
        </h1>
        <p className="text-lg md:text-xl text-white mt-4">
          Here, we unleash our thoughts and share them with others in an <span className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">anonymous</span> and judgment-free space.
        </p>
      </div>
    </div>
  );
}
