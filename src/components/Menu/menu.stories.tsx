import type { Meta, StoryObj } from "@storybook/react";

import Menu from "./index";
import React from "react";

const meta = {
  title: "Menu",
  id: "Menu",
  component: Menu,
  tags: ["autodocs"],
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ADefaultMenu: Story = {
  name: "默认Menu",
  render: (args) => {
    return (
      <Menu defaultIndex="0" {...args}>
        <Menu.Item>cool link</Menu.Item>
        <Menu.Item>cool link 2</Menu.Item>
        <Menu.Item disabled>disabled</Menu.Item>
        <Menu.SubMenu title="下拉选项">
          <Menu.Item>下拉选项一</Menu.Item>
          <Menu.Item>下拉选项二</Menu.Item>
        </Menu.SubMenu>
      </Menu>
    );
  },
};

export const BClickMenu: Story = {
  name: "纵向的 Menu",
  render: (args) => {
    return (
      <Menu {...args} defaultIndex="0" mode="vertical">
        <Menu.Item>cool link</Menu.Item>
        <Menu.Item>cool link 2</Menu.Item>
        <Menu.SubMenu title="点击下拉选项">
          <Menu.Item>下拉选项一</Menu.Item>
          <Menu.Item>下拉选项二</Menu.Item>
        </Menu.SubMenu>
      </Menu>
    );
  },
};

export const COpenedMenu: Story = {
  name: "默认展开的纵向 Menu",
  render: (args) => {
    return (
      <Menu
        {...args}
        defaultIndex="2-1"
        mode="vertical"
        defaultOpenSubMenus={["2"]}
      >
        <Menu.Item>cool link</Menu.Item>
        <Menu.Item>cool link 2</Menu.Item>
        <Menu.SubMenu title="默认展开下拉选项">
          <Menu.Item>下拉选项一</Menu.Item>
          <Menu.Item>下拉选项二</Menu.Item>
        </Menu.SubMenu>
      </Menu>
    );
  },
};
