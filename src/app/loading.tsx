import { FaSpinner } from "react-icons/fa";

export default function Loading() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-white text-gray-800">
      <p className="animate-pulse text-xl"><FaSpinner size={24} className="mr-5"/>Il contenuto sta caricando, un momento...</p>
    </div>
  );
}
