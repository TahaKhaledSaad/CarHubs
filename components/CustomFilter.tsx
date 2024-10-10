"use client";

import { useState, Suspense } from "react";
import Image from "next/image";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react";
import { IStringProp } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
// import { updateSearchParams } from "@/utils";

const yearsOfProduction = [
  { title: "Year", value: "" },
  { title: "2015", value: "2015" },
  { title: "2016", value: "2016" },
  { title: "2017", value: "2017" },
  { title: "2018", value: "2018" },
  { title: "2019", value: "2019" },
  { title: "2020", value: "2020" },
  { title: "2021", value: "2021" },
  { title: "2022", value: "2022" },
  { title: "2023", value: "2023" },
];

const fuels = [
  { title: "Fuel Type", value: "" }, // Updated placeholder title
  { title: "Gas", value: "Gas" }, // Clear distinction between title and value
  { title: "Electricity", value: "Electricity" },
];

const CustomFilter = ({ title }: IStringProp) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Dynamically decide between years and fuels
  const loopedArray = title === "year" ? yearsOfProduction : fuels;

  const [selected, setSelected] = useState(loopedArray[0]);

  function handleUpdateParams(e: { title: string; value: string }) {
    const newSearchParams = new URLSearchParams(searchParams.toString());

    if (title === "fuel") {
      newSearchParams.set("fuel_type", e.value.toLowerCase());
    } else if (title === "year") {
      newSearchParams.set("year", e.value);
    }

    const newPathName = `${
      window.location.pathname
    }?${newSearchParams.toString()}`;
    router.push(newPathName, { scroll: false });
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="w-fit">
        <Listbox
          value={selected}
          onChange={(e) => {
            setSelected(e);
            handleUpdateParams(e);
          }}
        >
          <div className="relative w-fit z-10">
            <ListboxButton className="custom-filter__btn">
              <span className="block truncate">
                {selected.value !== "" ? selected.value : selected.title}
              </span>
              <Image
                src="/chevron-up-down.svg"
                width={20}
                height={20}
                alt="Chevron Up Down"
              />
            </ListboxButton>
            <Transition
              as="div"
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <ListboxOptions className="custom-filter__options">
                {loopedArray.map((option) => (
                  <ListboxOption
                    key={option.value}
                    value={option}
                    className="cursor-pointer select-none relative py-2 px-4 data-[focus]:text-white data-[focus]:bg-[#2d5bff]"
                  >
                    {({ selected }) => (
                      <span
                        className={`${
                          selected ? "font-medium" : "font-normal"
                        } block truncate`}
                      >
                        {option.value !== "" ? option.value : option.title}
                      </span>
                    )}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </Transition>
          </div>
        </Listbox>
      </div>
    </Suspense>
  );
};

export default CustomFilter;
