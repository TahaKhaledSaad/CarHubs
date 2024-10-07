"use client";

import { ShowMoreProps } from "@/types";
import { useRouter } from "next/navigation";
import CustomButton from "./CustomButton";
import { updateSearchParams } from "@/utils";

interface ShowButtonProps extends ShowMoreProps {
  actionType: "more" | "less"; // Define the type of action: show more or show less
}

function ShowCount({ pageNumber, isNext, actionType }: ShowButtonProps) {
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit =
      actionType === "more"
        ? (pageNumber + 1) * 10
        : Math.max((pageNumber - 1) * 10, 10); // Ensure limit doesn't go below 10
    const newPathName = updateSearchParams("limit", `${newLimit}`);
    router.push(newPathName);
  };

  return (
    <div>
      {actionType === "more" && !isNext && (
        <CustomButton
          title="Show More"
          btnType="button"
          handleClick={handleNavigation}
          containerStyles="bg-primary-blue rounded-full text-white"
        />
      )}
      {actionType === "less" && pageNumber > 1 && (
        <CustomButton
          title="Show Less"
          btnType="button"
          handleClick={handleNavigation}
          containerStyles="bg-primary-blue rounded-full text-white"
        />
      )}
    </div>
  );
}

export default ShowCount;
