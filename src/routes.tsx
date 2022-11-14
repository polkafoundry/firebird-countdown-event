import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { URLS } from "./constants";
import EventCountdownPage from "./pages/EventCountdownPage";
import NotFoundPage from "./pages/NotFoundPage";

const routing = function createRouting() {
  return (
    <>
      <Routes>
        <Route path={URLS.HOME} element={<EventCountdownPage />} />
        <Route path="*" element={<NotFoundPage />} />
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
