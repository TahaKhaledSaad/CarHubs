"use client";

import React, { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { SearchManufacturer } from "@/components";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SearchBar() {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams(); // Move this hook to the top level

  const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
    <button type="submit" className={`ml-3 z-10 ${otherClasses}`}>
      <Image
        src="/magnifying-glass.svg"
        alt="magnifying glass"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  );

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (manufacturer === "" && model === "") {
      return toast.info("Please fill in the search bar!");
    }

    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
  };

  const updateSearchParams = (model: string, manufacturer: string) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());

    if (model) {
      newSearchParams.set("model", model);
    } else {
      newSearchParams.delete("model");
    }

    if (manufacturer) {
      newSearchParams.set("manufacturer", manufacturer);
    } else {
      newSearchParams.delete("manufacturer");
    }

    const newPathName = `${
      window.location.pathname
    }?${newSearchParams.toString()}`;
    router.push(newPathName, { scroll: false });
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <form className="searchbar" onSubmit={handleSearch}>
        <div className="searchbar__item">
          <SearchManufacturer
            manufacturer={manufacturer}
            setManufacturer={setManufacturer}
          />
          <SearchButton otherClasses="sm:hidden" />
        </div>

        <div className="searchbar__item">
          <Image
            src="/model-icon.png"
            alt="model"
            width={25}
            height={25}
            className="absolute w-[20px] h-[20px] ml-4"
          />
          <input
            type="text"
            name="model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            placeholder="Tiguan..."
            className="searchbar__input"
          />
          <SearchButton otherClasses="sm:hidden" />
        </div>
        <SearchButton otherClasses="max-sm:hidden" />

        <ToastContainer position="top-right" hideProgressBar autoClose={1000} />
      </form>
    </Suspense>
  );
}

export default SearchBar;
