import { CSSProperties, FC, PropsWithChildren, useContext } from "react";
import { MenuContext } from "./Menu";
import classNames from "classnames";

export interface MenuItemProps {
  index?: string;
  /**选项是否被禁用 */
  disabled?: boolean;
  /**选项扩展的 className */
  className?: string;
  /**选项的自定义 style */
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
