import { CarProps, FilterProps } from "@/types";

// export async function fetchCars(filters: FilterProps) {
//   const { manufacturer, year, fuel, limit, model } = filters;
//   const headers = {
//     "x-rapidapi-key": "0967cb9f05msh19404c9fb2d34fap150855jsn9b0564b7e764",
//     "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
//   };

//   const response = await fetch(
//     `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
//     {
//       headers: headers,
//     }
//   );

//   const data = await response.json();

//   return data;
// }

export async function fetchCars(filters: FilterProps) {
  const { manufacturer, year, fuel, limit, model } = filters;
  const headers = {
    "x-rapidapi-key": "0967cb9f05msh19404c9fb2d34fap150855jsn9b0564b7e764",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  // Build query string dynamically
  let queryString = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}`;

  // Only add fuel_type if it's defined and not an empty string
  if (fuel && fuel !== "") {
    queryString += `&fuel_type=${fuel}`;
  }

  const response = await fetch(queryString, {
    headers: headers,
  });

  const data = await response.json();
  return data;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50;
  const mileageFactor = 0.1;
  const ageFactor = 0.05;
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  return rentalRatePerDay.toFixed(0);
};

// Not Working: cause Api key is not valid
export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");

  const { make, year, model } = car;

  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);

  return `${url}`;
};

export const updateSearchParam = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  if (value) {
    searchParams.set(type, value);
  } else {
    searchParams.delete(type);
  }

  const newPahthName = `${window.location.pathname}?${searchParams.toString()}`;

  return newPahthName;
};

export const updateMoreSearchParam = (params: { [key: string]: string }) => {
  const searchParams = new URLSearchParams(window.location.search);

  Object.entries(params).forEach(([key, value]) => {
    if (value) {
      searchParams.set(key, value);
    } else {
      searchParams.delete(key);
    }
  });

  const newPathName = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathName;
};
