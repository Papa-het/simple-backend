import express from "express";
import path from "path";

export const setStatic = (() =>
  express.static(path.join(__dirname, "public"), { maxAge: 31557600000 }))();
