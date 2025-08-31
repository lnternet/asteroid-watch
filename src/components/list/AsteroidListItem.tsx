import { Warning, ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Collapse,
  Divider,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";

type AsteroidListItem = {
  index: number;
  name: string;
  date: string;
  isHazardous: boolean;
  closestApproach: number;
  isExpanded: boolean;
  handleClick: (index: number) => void;
};

export const AsteroidListItem: React.FC<AsteroidListItem> = (props) => {
  return (
    <>
      <ListItemButton
        onClick={() => props.handleClick(props.index)}
        sx={{
          padding: "12px 24px 12px 24px",
          gap: "12px",
        }}
      >
        <ListItemIcon>
          <img src="favicon.ico" width={32} height={32} alt="icon" />
        </ListItemIcon>
        <ListItemText primary={props.date} />
        <ListItemText primary={props.name} />
        {props.isHazardous && (
          <Tooltip title={"This asteroid is hazardous!"}>
            <ListItemIcon>
              <Warning color="error" />
            </ListItemIcon>
          </Tooltip>
        )}
        {props.isExpanded ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={props.isExpanded} timeout="auto" unmountOnExit>
        <Typography variant="body2" sx={{ padding: "12px 24px" }}>
          Closest approach (kilometers): {props.closestApproach}
        </Typography>
        <Divider variant="middle" />
        <Typography variant="body2" sx={{ padding: "12px 24px" }}>
          Estimated diameter (meters): N/A
        </Typography>
      </Collapse>
    </>
  );
};
