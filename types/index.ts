import { manufacturers } from "./../constants/index";
/** Usage Of Typescript Interfaces

 * export and create interfaces for the components
 * specifices how the structure of the component should look like
 * what variables and values it should take

 */

import { MouseEventHandler } from "react";

// 1. Custom Button Props Interface
export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}

// 2. Manufacturer Interface
export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

// 3. Car Interface
export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

// 4. Filter Interface
export interface FilterProps {
  manufacturer: string;
  year: number;
  fuel: string;
  limit: number;
  model: string;
}
