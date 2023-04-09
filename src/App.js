import { ColorModeContext, useMode } from "./theme";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import TopBar from "./scenes/global/TopBar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Contacts from "./scenes/contacts";
import Invoices from "./scenes/invoices";
import Form from "./scenes/form";
import Calendar from "./scenes/calendar";
import FAQ from "./scenes/faq";
import Bar from "./scenes/bar";
import Pie from "./scenes/pie";
import Line from "./scenes/line";
import Geography from "./scenes/geography";
import { ProSidebarProvider } from "react-pro-sidebar";
import { useEffect, useState } from "react";

function App() {
  const [theme, colorMode] = useMode();

  const [collapsed, setCollapsed] = useState(
    window.matchMedia("(min-width: 900px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 900px)")
      .addEventListener("change", (e) => setCollapsed(e.matches));
  }, []);

  const sidebarWidth = 250;

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <ProSidebarProvider>
            <Box
              position="fixed"
              width={sidebarWidth}
              height="100vh"
              sx={{
                transition: "width .3s ease",
                "& .ps-menu-button:hover": {
                  background: "transparent !important",
                },
              }}
            >
              <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
            </Box>
            <Box
              width={collapsed ? `calc(100% - ${sidebarWidth}px)` : "100%"}
              ml={collapsed ? `${sidebarWidth}px` : "80px"}
              sx={{
                transition: "width .3s ease, margin-left .3s ease",
                overflowX: "hidden",
              }}
            >
              <TopBar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/form" element={<Form />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />
                <Route path="/geography" element={<Geography />} />
              </Routes>
            </Box>
          </ProSidebarProvider>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
