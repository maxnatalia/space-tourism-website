import { useQuery } from "@tanstack/react-query";

export interface DestinationsProps {
  name: string;
}

export const useFetchData = () => {
  const getData = async () => {
    const response = await fetch("/space-tourism-website/data.json");

    if (!response.ok) {
      throw new Error("Failed to load data");
    }

    return response.json();
  };

  const { data, isLoading, isError } = useQuery(["data"], getData);

  console.log(data);

  return { data, isError, isLoading };
};
