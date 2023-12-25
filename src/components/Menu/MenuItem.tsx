import { CSSProperties, FC, PropsWithChildren, useContext } from "react";
import { MenuContext } from "./Menu";
import classNames from "classnames";

export interface MenuItemProps {
  index?: string;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
}

export const MenuItem: FC<PropsWithChildren<MenuItemProps>> = (props) => {
  const { index, disabled, className, style, children } = props;
  const context = useContext(MenuContext);
  const menuItemClass = classNames("menu-item", className, {
    "is-active": index === context.index,
    "is-disabled": disabled,
  });

  const handleClick = () => {
    if (!disabled && context.onSelect && typeof index === "string") {
      context.onSelect(index);
    }
  };

  return (
    <li className={menuItemClass} style={style} onClick={handleClick}>
      {children}
    </li>
  );
};

MenuItem.displayName = "MenuItem";
export default MenuItem;
