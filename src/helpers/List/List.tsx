import { ReactNode } from "react";
import { Wrapper } from "./List.styled";

interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => ReactNode;
}

export default function List<T>(props: ListProps<T>) {
  return <Wrapper>{props.items.map(props.renderItem)}</Wrapper>;
}
