import { Box, Typography } from "@mui/material";
import { ExpandableList, type ListItem } from "../list/ExpandableList";
import type { APIResponse } from "~/contracts/APIResponse";
import { useMemo } from "react";

type ContainerProps = {
  data: APIResponse;
};

export const Container: React.FC<ContainerProps> = (props) => {
  const normalizedListData = useMemo(() => {
    // Get dates from object, as they are keys not values:
    const dates = Object.keys(props.data.near_earth_objects);

    // Dates are in random order, need to sort them:
    dates.sort();

    // Map API response to component prop type:
    const normalizedListData = dates.map((date) => {
      const items = props.data.near_earth_objects[date].map(
        (item): ListItem => {
          return {
            date: item.close_approach_data[0].close_approach_date_full,
            name: item.name,
            isHazardous: item.is_potentially_hazardous_asteroid,
            closestApproach:
              item.close_approach_data[0].miss_distance.kilometers,
          };
        }
      );

      return {
        date: date,
        dateEntries: items,
      };
    });

    return normalizedListData;
  }, [props.data]);

  return (
    <Box sx={{ maxWidth: "600px", maxHeight: "70vh" }}>
      <Box
        display="flex"
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        gap="6px"
      >
        <Typography
          variant="h4"
          align="center"
          color="rgb(102, 85, 99)"
          fontWeight={"bold"}
        >
          Asteroid Watch
        </Typography>
      </Box>
      <Typography
        variant="body1"
        align="center"
        color="#443836"
        fontWeight={"bold"}
        marginBottom={"24px"}
      >
        <i>
          "If the Earth gets hit by an asteroid, it's game over. It's
          control-alt-delete for civilization."
        </i>
        - Bill Nye
      </Typography>
      <Typography
        variant="body2"
        align="left"
        color="#443836"
        marginBottom={"4px"}
      >
        Closest asteroids to Earth in next 7 days:
      </Typography>
      <ExpandableList data={normalizedListData} />
    </Box>
  );
};
