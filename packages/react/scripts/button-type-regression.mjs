import assert from "node:assert/strict";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

import { Button } from "../dist/index.js";

const defaultMarkup = renderToStaticMarkup(React.createElement(Button, null, "Default"));
assert.match(defaultMarkup, /^<button[^>]* type="button"[^>]*>/);

const submitMarkup = renderToStaticMarkup(
  React.createElement(Button, { type: "submit" }, "Submit"),
);
assert.match(submitMarkup, /^<button[^>]* type="submit"[^>]*>/);

const asChildMarkup = renderToStaticMarkup(
  React.createElement(
    Button,
    { asChild: true, type: "submit", variant: "link" },
    React.createElement("a", { href: "/docs" }, "Docs"),
  ),
);

assert.match(asChildMarkup, /^<a[^>]* href="\/docs"[^>]*>/);
assert.doesNotMatch(asChildMarkup, /\stype="submit"/);

console.log("button type regression checks: PASS");
