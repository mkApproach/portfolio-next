// theme-context.tsx
import React, {
  createContext,
  useState,
  useMemo,
  useContext,
  ReactNode,
} from "react";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";

// テーマモードを切り替える関数を格納するコンテキストを作成
const ColorModeContext = createContext({ toggleColorMode: () => {} });

interface CustomThemeProviderProps {
  children: ReactNode;
}

// カスタムテーマプロバイダー
export const CustomThemeProvider = ({ children }: CustomThemeProviderProps) => {
  const [mode, setMode] = useState<"light" | "dark">("light");

  // テーマを切り替える関数
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
    </ColorModeContext.Provider>
  );
};

export const useCustomTheme = () => useContext(ColorModeContext);
