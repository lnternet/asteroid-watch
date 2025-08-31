import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import { List, ListSubheader, Typography } from "@mui/material";
import { AsteroidListItem } from "./AsteroidListItem";

export type ListItem = {
  date: string;
  name: string;
  isHazardous: boolean;
  closestApproach: string;
};

export type ExpandableListProps = {
  data: Array<{
    date: string;
    dateEntries: Array<ListItem>;
  }>;
};

export const ExpandableList: React.FC<ExpandableListProps> = (props) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <Paper
      sx={{
        backgroundColor: "#ddd8d7",
        boxShadow: "rgba(0, 0, 0, 0.5) 6px 6px 24px",
      }}
    >
      <List
        sx={{
          maxHeight: 380,
          overflow: "auto",
          paddingTop: 0,
        }}
      >
        {props.data.map((item) => (
          <li key={item.date}>
            <ul style={{ padding: 0, margin: 0 }}>
              <ListSubheader
                component="div"
                sx={{
                  position: "sticky",
                  top: 0,
                  backgroundColor: "#ddd8d7",
                  zIndex: 1,
                  borderRadius: "8px",
                  padding: "12px",
                }}
              >
                <Typography align="center" fontWeight={"bold"}>
                  {item.date}
                </Typography>
              </ListSubheader>
              {item.dateEntries.map((entry, index) => (
                <div key={index}>
                  <AsteroidListItem
                    index={index}
                    name={entry.name}
                    date={entry.date}
                    isHazardous={entry.isHazardous}
                    closestApproach={entry.closestApproach}
                    isExpanded={openIndex === index}
                    handleClick={handleClick}
                  />
                </div>
              ))}
            </ul>
          </li>
        ))}
      </List>
    </Paper>
  );
};
