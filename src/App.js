import { Route, Routes } from "react-router-dom";
import { ConfigProvider } from "antd";

import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";

function App() {
  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            colorBgContainer: "#eef4fd",
          },
          Table: {
            colorBgContainer: "#F4F9FF",
            colorText: "#A2A3A5",
            colorIcon: "#0066FF",
          },
        },
      }}
    >
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </>
    </ConfigProvider>
  );
}

export default App;
