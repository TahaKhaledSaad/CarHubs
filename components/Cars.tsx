import { fetchCars } from "@/utils";
import React from "react";
import { CarCard, ShowMore } from "@/components";

async function Cars({ searchParams }: any) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });

  console.log("################");
  console.log(allCars.length);
  console.log("################");

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <div className="padding-x padding-y max-width">
      {!isDataEmpty ? (
        <section>
          <div className="home__cars-wrapper">
            {allCars?.map((car) => (
              <CarCard car={car} key={car.id} />
            ))}
          </div>
          <ShowMore
            pageNumber={(searchParams.limit || 10) / 10}
            isNext={(searchParams.limit || 10) < allCars.length}
          />
        </section>
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
