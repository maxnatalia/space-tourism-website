import { useQuery } from "@tanstack/react-query";

export interface DestinationPlanet {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
}

export interface CrewMember {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  role: string;
  bio: string;
}

export interface TechnologyItem {
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
}

export interface AppData {
  destinations: DestinationPlanet[];
  crew: CrewMember[];
  technology: TechnologyItem[];
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

  const destinations: DestinationPlanet[] = data?.destinations || [];
  const crew: CrewMember[] = data?.crew || [];
  const technology: TechnologyItem[] = data?.technology || [];

  return { destinations, crew, technology, isError, isLoading };
};
