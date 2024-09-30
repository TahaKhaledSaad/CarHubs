"use client";

import { CustomFilterProps } from "@/types";
import { Fragment, useState } from "react";
import Image from "next/image";
import { Listbox, ListboxButton, Transition } from "@headlessui/react";

const CustomFilter = ({ title, options }: CustomFilterProps) => {
  const [selected, setSelected] = useState(options ? options[0] : null);

  console.log("I'm selected", selected);

  return (
    <div className="w-fit">
      <Listbox value={selected} onChange={(selected) => setSelected(selected)}>
        <div className="relative w-fit z-10">
          <ListboxButton className="custom-filter__btn">
            <span className="block truncate">
              {selected ? selected.title : "Select an option"}
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
          ></Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilter;
