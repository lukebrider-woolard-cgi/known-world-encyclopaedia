import React from "react";
import { ReactNode } from "react";

function flatten(text: string, child: any): string {
  return typeof child === "string" ? text + child : React.Children.toArray(child.props.children).reduce(flatten, text);
}

export function headingRenderer(children: ReactNode, level: 1 | 2 | 3 | 4 | 5 | 6) {
  const childrenArray = React.Children.toArray(children);
  const text = childrenArray.reduce(flatten, "");
  const slug = text.toLowerCase().replace(/\W/g, "-");
  return React.createElement("h" + level, { id: slug, key: slug }, children);
}
