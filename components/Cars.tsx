import { fetchCars } from "@/utils";
import { CarCard, ShowCount } from "@/components";
import Image from "next/image";

async function Cars({ searchParams }: any) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel_type || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });

  const loading = !allCars;

  console.log("################");
  console.log("allCars", allCars.length);
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

          {loading && (
            <div>
              <Image src="/loader.svg" alt="loading" width={50} height={50} />
            </div>
          )}

          <div
            className={`flex justify-center w-fit bg-[#dae2ff] mx-auto rounded-full mt-10 p-2 ${
              allCars.length > 10 ? "gap-5" : ""
            }`}
          >
            {allCars.length > 10 && (
              <ShowCount
                pageNumber={(searchParams.limit || 10) / 10}
                isNext={(searchParams.limit || 10) < allCars.length}
                actionType="less"
              />
            )}

            <ShowCount
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) < allCars.length}
              actionType="more"
            />
          </div>
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
