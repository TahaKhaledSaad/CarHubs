"use client";

import { Suspense } from "react";
import { ShowMoreProps } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import CustomButton from "./CustomButton";
// import { updateSearchParams } from "@/utils";

interface ShowButtonProps extends ShowMoreProps {
  actionType: "more" | "less"; // Define the type of action: show more or show less
}

function ShowCount({ pageNumber, isNext, actionType }: ShowButtonProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // ! Old code snippet for handleNavigation next 13 ❌❌
  // const handleNavigation = () => {
  //   const newLimit =
  //     actionType === "more"
  //       ? (pageNumber + 1) * 10
  //       : Math.max((pageNumber - 1) * 10, 10); // Ensure limit doesn't go below 10
  //   const newPathName = updateSearchParams("limit", `${newLimit}`);
  //   router.push(newPathName);
  // };

  // ** New code snippet for handleNavigation next 14 ✅✅
  const handleNavigation = () => {
    const newLimit =
      actionType === "more"
        ? (pageNumber + 1) * 10
        : Math.max((pageNumber - 1) * 10, 10);

    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("limit", `${newLimit}`);

    const newPathName = `${
      window.location.pathname
    }?${newSearchParams.toString()}`;

    router.push(newPathName, { scroll: false });
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
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
    </Suspense>
  );
}

export default ShowCount;
