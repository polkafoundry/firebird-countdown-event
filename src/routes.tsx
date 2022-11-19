import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { URLS } from "./constants";
import EventCountdownPage from "./pages/EventCountdownPage";

const routing = function createRouting() {
  return (
    <>
      <Routes>
        <Route path={URLS.HOME} element={<EventCountdownPage />} />
        <Route path="*" element={<EventCountdownPage />} />
      </Routes>
      <ToastContainer />
    </>
  );
};
/**
 * Wrap the app routes into router
 *
 * PROPS
 * =============================================================================
 * @returns {React.Node}
 */
export default routing;
