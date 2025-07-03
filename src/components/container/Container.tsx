import { AppBar, Box, Paper, Toolbar, Typography } from "@mui/material";
import { ExpandableList, type ListItem } from "../list/ExpandableList";
import type { APIResponse } from "~/contracts/APIResponse";

type ContainerProps = {
  data: APIResponse;
};

export const Container: React.FC<ContainerProps> = (props) => {
  const dates = Object.keys(props.data.near_earth_objects);
  const normalizedListData = dates.map((date) => {
    const items = props.data.near_earth_objects[date].map((item): ListItem => {
      return {
        date: item.close_approach_data[0].close_approach_date_full,
        name: item.name,
        isHazarduous: item.is_potentially_hazardous_asteroid,
        closestApproach: item.close_approach_data[0].miss_distance.kilometers,
      };
    });

    return {
      date: date,
      dateEntries: items,
    };
  });

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
          variant="h5"
          align="center"
          color="white"
          fontWeight={"bold"}
        >
          #Asteroid_Watch
        </Typography>
      </Box>
      <Typography
        variant="body2"
        align="center"
        color="white"
        marginBottom={"12px"}
      >
        Closest asteroids to Earth in next 7 days:
      </Typography>
      <ExpandableList data={normalizedListData} />
    </Box>
  );
};
