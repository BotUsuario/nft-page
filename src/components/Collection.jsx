import React from "react";
import Button from "./Button";
import { FaEthereum } from "react-icons/fa";
import data from "../data/item-nft.json";

const Collection = () => {
  return (
    <>
      <div className="container mx-auto py-4 md:py-20 px-3 md:px-0">
        <div className="flex justify-between items-center">
          <h1 className="font-primary text-tertiary font-bold text-5xl">
            Hot Drops
          </h1>
          <Button text="view more" variant="secondary" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-14 py-8">
          {data.map((item) => {
            return (
              <div className="border-2 md:border-4 bg-background rounded-2xl border-tertiary w-full p-3 flex flex-col gap-4 hover:scale-105 transition-all cursor-pointer hover:bg-[#141414]">
                <img src={`/img/${item.image}`} className="w-full rounded-xl" />
                <div>
                  <h1 className="font-primary text-tertiary font-bold text-xl md:text-3xl">
                    {item.title}
                  </h1>
                  <p className="text-tertiary">{item.username}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-tertiary font-bold">{item.price}</p>
                  <div className="bg-secondary p-2 rounded-full">
                    <FaEthereum color="#ECDBBA" size="1rem" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Collection;
