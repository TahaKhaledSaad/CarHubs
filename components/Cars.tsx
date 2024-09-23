import { fetchCars } from "@/utils";
import React from "react";
import { CarCard } from "@/components";

async function Cars({ searchParams }: any) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <div className="padding-x padding-y max-width">
      {!isDataEmpty ? (
        <div className="home__cars-wrapper">
          {allCars?.map((car) => (
            <CarCard car={car} key={car.id} />
          ))}
        </div>
      ) : (
        <div className="home__error-container">
          <p className="text-black text-xl font-bold">Oops, no results</p>
          <p>{allCars?.message}</p>
        </div>
      )}
    </div>
  );
}

export default Cars;
