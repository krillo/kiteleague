import { Link } from "react-router-dom";
import { ReactComponent as PinSVG } from "./design-tokens/icons/pin.svg";
import React from "react";

export const settingsFile = [
  {
    id: "showOnlyDaylight",
    text: "Show only daylight hours",
    type: "checkbox",
    value: true,
  },
  {
    id: "showKitesurf",
    text: "Show kite surfing spots",
    type: "checkbox",
    value: true,
  },
  {
    id: "showSnowkite",
    text: "Show snow kite spots",
    type: "checkbox",
    value: false,
  },
  {
    id: "showSpecial",
    text: "Show only special spots",
    type: "checkbox",
    value: false,
  },
];

export const getPath = {
  home: "/",
  summary: "/summary",
  settings: "/settings",
  detail: "/detail",
  debug: "/debug",
  img: "/img/icon/",
  weatherIcon: "/img/weathericon/svg/",
};
