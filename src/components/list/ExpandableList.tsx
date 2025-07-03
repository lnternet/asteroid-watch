import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import {
  Collapse,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";
import { ExpandLess, ExpandMore, Warning } from "@mui/icons-material";

export type ListItem = {
  date: string;
  name: string;
  isHazarduous: boolean;
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
    <Paper sx={{ boxShadow: "rgba(0, 0, 0, 0.5) 6px 6px 24px" }}>
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
                  backgroundColor: "background.paper",
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
                  <ListItemButton
                    onClick={() => handleClick(index)}
                    sx={{
                      padding: "12px 24px 12px 24px",
                      gap: "12px",
                    }}
                  >
                    <ListItemIcon>
                      <img
                        src="favicon.ico"
                        width={32}
                        height={32}
                        alt="icon"
                      />
                    </ListItemIcon>
                    <ListItemText primary={entry.date} />
                    <ListItemText primary={entry.name} />
                    {entry.isHazarduous && (
                      <ListItemIcon>
                        <Warning color="error" />
                      </ListItemIcon>
                    )}
                    {openIndex === index ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse
                    in={openIndex === index}
                    timeout="auto"
                    unmountOnExit
                  >
                    <Typography variant="body2" sx={{ padding: "12px 24px" }}>
                      Closest approach (kilometers): {entry.closestApproach}
                    </Typography>
                    <Divider variant="middle" />
                    <Typography variant="body2" sx={{ padding: "12px 24px" }}>
                      Closest approach (lunar distances): N/A
                    </Typography>
                    <Divider variant="middle" />
                    <Typography variant="body2" sx={{ padding: "12px 24px" }}>
                      Estimated diameter (meters): N/A
                    </Typography>
                  </Collapse>
                </div>
              ))}
            </ul>
          </li>
        ))}
      </List>
    </Paper>
  );
};
