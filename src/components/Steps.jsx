import React from "react";

const Steps = () => {
  return (
    <div className="container mx-auto py-20 px-3 md:px-0">
      <h1 className="font-primary text-tertiary font-bold text-3xl md:text-6xl text-center mb-0 md:mg-8">
        Create and sell your NFT
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-14 py-8">
        <div className="bg-primary text-tertiary text-center rounded-2xl border-tertiary w-full p-3 md:p-4 flex flex-col items-center cursor-pointer hover:scale-105 transition-all">
            <img src="/img/steps-1.png" alt="" className="w-3/4" />
            <h1 className="text-2xl md:text-4xl font-primary font-bold">
                Create Artwork
            </h1>
            <p className="text-sm md:text-lg">
            Create and sell your NFT Create and sell your NFT Create and sell your NFT Create and sell your NFT Create and sell your NFT
            </p>
        </div>
        <div className="bg-primary text-tertiary text-center rounded-2xl border-tertiary w-full p-3 md:p-4 flex flex-col items-center cursor-pointer hover:scale-105 transition-all">
            <img src="/img/steps-2.png" alt="" className="w-3/4" />
            <h1 className="text-2xl md:text-4xl font-primary font-bold">
                Create Artwork
            </h1>
            <p className="text-sm md:text-lg">
            Create and sell your NFT Create and sell your NFT Create and sell your NFT Create and sell your NFT Create and sell your NFT
            </p>
        </div>
        <div className="bg-primary text-tertiary text-center rounded-2xl border-tertiary w-full p-3 md:p-4 flex flex-col items-center cursor-pointer hover:scale-105 transition-all col-span-2 md:col-span-1">
            <img src="/img/steps-3.png" alt="" className="w-2/4 md:w-3/4" />
            <h1 className="text-2xl md:text-4xl font-primary font-bold">
                Create Artwork
            </h1>
            <p className="text-sm md:text-lg">
            Create and sell your NFT Create and sell your NFT Create and sell your NFT Create and sell your NFT Create and sell your NFT
            </p>
        </div>
      </div>
    </div>
  );
};

export default Steps;
