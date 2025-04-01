import React from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import { useRouter } from "next/router";
import Loader from "@/components/Loader";

const Home = () => {
  const reloadPage = () => {
    window.location.reload();
  };
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100">
      <Loader />
      {/* Header */}
      <header className="bg-purple-700 text-white py-4 text-center relative">
        <div className="flex justify-center items-center gap-4">
          <Image src={logo} alt="ICAI Logo" width={50} height={50} />
          <h1 className="text-2xl font-bold">
            The Institute of Chartered Accountants of India
          </h1>
        </div>
        <p className="text-sm">Examination Results</p>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-8 text-center">
        <div className="bg-red-600 text-white py-3 text-xl font-bold rounded-md">
          This site cannot be reached
        </div>

        {/* Exam Results */}
        <div className="mt-6 bg-white shadow-lg p-6 rounded-lg text-left">
          <h2 className="text-purple-700 font-bold text-lg">CHECK RESULTS</h2>
          <p>
            <strong>Foundation</strong> : Jan 2025
          </p>
          <p className="text-green-600">Announced on 12th March 2025</p>

          <p>
            <strong>Intermediate Examination</strong> : Jan 2025
          </p>
          <p className="text-green-600">Announced on 07th March 2025</p>

          <p>
            <strong>Final Examination </strong> : Jan 2025
          </p>
          <p className="text-green-600">Announced on 19th March 2025</p>
        </div>

        {/* Merit List */}
        <div className="mt-6 bg-white shadow-lg p-6 rounded-lg text-left">
          <h2 className="text-purple-700 font-bold text-lg">
            CHECK MERIT LIST
          </h2>
          <p>
            <strong>Final Examination</strong> : Jan 2025
          </p>
          <p className="text-green-600">Announced on 19th March 2025</p>
        </div>

        {/* Reload Button */}
        <button
          onClick={() => router.push("/serverDown")}
          className="mt-6 bg-purple-700 text-white px-6 py-2 rounded-md hover:bg-purple-800 transition"
        >
          Check Result
        </button>
      </main>

      {/* Footer */}
      <footer className="bg-purple-700 text-white py-4 text-center bottom-0 w-full">
        <p>Hosted by National Informatics Centre</p>
        <p className="text-xs mt-2 px-4">
          Disclaimer:The result given is correct at the time of release of the
          result by the Institute which accepts no responsibility thereafter for
          errors or omissions caused as a result of their transmission via the
          Internet or their downloading or printing by the user. No material
          from this web site can be copied, reproduced, published,
        </p>
      </footer>
    </div>
  );
};

export default Home;
