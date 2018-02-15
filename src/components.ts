import { elements, Component, DefaultOutput } from "@funkia/turbine";
const { button, div, span } = elements;

type NavBar = {
  brand?: Component<DefaultOutput>[];
  start?: Component<DefaultOutput>[];
  end?: Component<DefaultOutput>[];
};

export function navbar({ brand, start, end }: NavBar = {}) {
  const children = [];
  if (brand !== undefined) {
    children.push(div({ class: "navbar-brand" }, brand));
  }

  const menu = [];
  if (start !== undefined) {
    menu.push(div({ class: "navbar-start" }, start));
  }
  if (end !== undefined) {
    menu.push(div({ class: "navbar-end" }, end));
  }

  if (menu.length > 0) {
    children.push(div({ class: "navbar-menu" }, menu));
  }
  return div({ class: "navbar" }, children);
}

export function navbarBurger() {
  return button({ class: "button navbar-burger" }, [span(), span(), span()]);
}

export function navbarItem() {}

navbar();
