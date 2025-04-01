import React from "react";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { useRouter } from "next/router";
import Loader from "@/components/Loader";

const ServerDown = () => {
  const router = useRouter();
  return (
    <>
      <Loader />
      <div className="min-h-screen flex flex-col justify-between bg-gray-100">
        {/* Header */}
        <header className="bg-purple-800 text-white py-4 text-center">
          <div
            onClick={() => router.push("/")}
            className="flex justify-center items-center"
          >
            <Image src={logo} alt="Logo" width={80} height={80} />
            <h1 className="text-2xl font-bold ml-2">
              The Institute of Chartered Accountants of India
            </h1>
          </div>
          <p className="text-sm">Examination Results</p>
        </header>

        {/* Main Content */}
        <main className="flex-grow flex items-center justify-center text-center">
          <div className="bg-white p-8 shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold text-red-600">
              Server Down Temporarily
            </h2>
            <p className="text-gray-700 mt-4">
              We are experiencing technical issues. Please try again later.
            </p>
            <button
              onClick={() => router.push("/")}
              className="px-16 py-4 bg-purple-700 cursor-pointer rounded-3xl text-white my-4"
            >
              Back
            </button>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-purple-800 text-white py-4 text-center bottom-0 w-full">
          <p className="text-xs mt-2 px-4">
            Disclaimer:The result given is correct at the time of release of the
            result by the Institute which accepts no responsibility thereafter
            for errors or omissions caused as a result of their transmission via
            the Internet or their downloading or printing by the user. No
            material from this web site can be copied, reproduced, published,
            uploaded, posted, transmitted or distributed or dealt with in any
            manner, unless expressly authorized. Users are not permitted to
            change, modify or prepare derivative works from the content of this
            site. For any clarifications / confirmation please address your
            enquiries to Joint Secretary (Examinations),The Institute of
            Chartered Accountants of India, 'ICAI BHAWAN', Post Box No. 7112,
            Indraprastha Marg, New Delhi - 110 002{" "}
          </p>{" "}
        </footer>
      </div>
    </>
  );
};

export default ServerDown;
