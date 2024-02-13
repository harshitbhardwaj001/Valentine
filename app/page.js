"use client";
import { useState } from "react";
import Sound from "./components/Sound";

export default function Home() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;
  const [main, setMain] = useState(false);

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  const handleClick = () => {
    setMain(true);
  };

  return (
    <>
      {!main && (
        <div className="w-[100vw] h-[108.5vh] absolute bg-[#D2042D] z-[100]">
          <h1 className="text-[#EAEAEA] mt-[20rem] ques w-[1350px] ml-[8rem] lg:max-xl:text-[1.8rem] lg:max-xl:w-[850px] xs:max-md:w-[300px] xs:max-md:ml-[2.3rem] xs:max-md:text-[1rem] xs:max-md:tracking-tight">
            Hi Baby, Can I ask you something?
          </h1>
          <button
            type="button"
            class="text-gray-900 text-xl bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg px-20 py-4 me-2 mb-2 ml-[42rem] mt-[5rem] button lg:max-xl:ml-[26rem] xs:max-md:ml-[5rem]"
            onClick={() => handleClick()}
          >
            YES
          </button>
        </div>
      )}
      <div className="flex flex-col items-center justify-center h-screen -mt-16">
        {yesPressed ? (
          <>
            <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
            <div className="text-4xl font-bold my-4">Ok yay!!!</div>
          </>
        ) : (
          <>
            <img
              className="h-[200px]"
              src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            />
            <h1 className="text-4xl my-4 xs:max-md:text-[1.3rem]">
              Will you be my Valentine Forever?
            </h1>
            <div>
              <button
                className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4`}
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}
              >
                Yes
              </button>
              <button
                onClick={handleNoClick}
                className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                {noCount === 0 ? "No" : getNoButtonText()}
              </button>
            </div>
          </>
        )}
        {main && <Sound />}
      </div>
    </>
  );
}
