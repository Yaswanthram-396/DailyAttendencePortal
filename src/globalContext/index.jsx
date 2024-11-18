import React, { Component, useState } from "react";

const ConfigurationContext = React.createContext({
  pagein: "Dashboard",
  handlePage: () => {},
});
export default ConfigurationContext;
