import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Brightness2OutlinedIcon from '@mui/icons-material/Brightness2Outlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { IconButton } from "@mui/material";
import { useCustomTheme } from "./theme_context";

const DarkModeIcon = styled(Brightness2OutlinedIcon)(({theme}) => ({
  strokeWidth: 0.5,
  color: "#2CD4BF"
}))

const LightModeIcon = styled(LightModeOutlinedIcon)(({theme}) => ({
  strokeWidth: 0.5,
  color: "#252529"
}))

export const ThemeModeButton = () => {
  const theme = useTheme();
  const { toggleColorMode } = useCustomTheme();

  return (
    <IconButton onClick={toggleColorMode} color="inherit">
      {theme.palette.mode === "dark" ? (
        <DarkModeIcon />
      ) : (
        <LightModeIcon />
      )}
    </IconButton>
  );
};
