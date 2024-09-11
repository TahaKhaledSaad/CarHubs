/** Usage Of Typescript Interfaces

 * export and create interfaces for the components
 * specifices how the structure of the component should look like
 * what variables and values it should take

 */

import { MouseEventHandler } from "react";

// 1. Custom Button Props Interface
export interface CustomButtonProps {
  title: string;
  containerStyles?: string; // optional
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}
