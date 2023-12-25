import { FC, PropsWithChildren } from "react";
import Menu, { MenuProps } from "./Menu";
import SubMenu, { SubMenuProps } from "./SubMenu";
import MenuItem, { MenuItemProps } from "./MenuItem";

export type IMenuComponent = FC<PropsWithChildren<MenuProps>> & {
  Item: FC<PropsWithChildren<MenuItemProps>>;
  SubMenu: FC<PropsWithChildren<SubMenuProps>>;
};

const TransMenu = Menu as IMenuComponent;

TransMenu.Item = MenuItem;
TransMenu.SubMenu = SubMenu;

export default TransMenu;
