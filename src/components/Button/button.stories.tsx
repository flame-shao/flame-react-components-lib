import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";
import React from "react";

const meta = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "默认按钮",
  args: {
    children: "Default Button",
  },
};

export const DifferentSize: Story = {
  name: "不同尺寸按钮",
  render: () => {
    return (
      <>
        <Button size="lg"> large button </Button>
        <Button size="sm"> small button </Button>
      </>
    );
  },
};

export const DifferentType: Story = {
  name: "不同类型按钮",
  render: () => {
    return (
      <>
        <Button btnType="primary"> primary button </Button>
        <Button btnType="danger"> danger button </Button>
        <Button btnType="link" href="http://shaocket.com">
          link button
        </Button>
      </>
    );
  },
};
