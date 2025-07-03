export type APIResponse = {
  element_count: number;
  near_earth_objects: {
    [date: string]: Array<{
      name: string;
      is_potentially_hazardous_asteroid: boolean;
      close_approach_data: Array<{
        close_approach_date_full: string;
        miss_distance: {
          lunar: string;
          kilometers: string;
        };
      }>;
    }>;
  };
};
