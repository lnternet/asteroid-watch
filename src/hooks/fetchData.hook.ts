import { useQuery } from "@tanstack/react-query";
import type { APIResponse } from "~/contracts/APIResponse";
import { formatDateParts } from "~/utils/date";

// NeoWs (Near Earth Object Web Service) https://api.nasa.gov/#asteroids-neows

export const useAsteroidData = (useMockData: boolean = false) => {
  return useQuery<APIResponse>({
    queryKey: ["data"],
    retry: false,
    queryFn: async (): Promise<APIResponse> => {
      if (useMockData) return (await fetch("./mock_response.json")).json();

      const baseUrl = "https://api.nasa.gov";
      const APIEndpoint = "neo/rest/v1/feed";

      const date = new Date();
      const startDate = formatDateParts(date);
      date.setDate(date.getDate() + 7);
      const endDate = formatDateParts(date);

      const res = await fetch(
        `${baseUrl}/${APIEndpoint}?start_date=${startDate}&end_date=${endDate}&api_key=DEMO_KEY`
      );

      if (!res.ok) throw new Error("API response was not ok");
      return res.json();
    },
  });
};
