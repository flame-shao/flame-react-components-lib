import { render, screen, fireEvent } from "@testing-library/react";
import Button, { ButtonProps } from "./Button";

const defaultProps = {
  onClick: jest.fn(),
};

const testProps: ButtonProps = {
  btnType: "primary",
  size: "lg",
  className: "klass",
};

const linkProps: ButtonProps = {
  btnType: "link",
  href: "http://shaocket.com",
};

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn(),
};

describe("test button component", () => {
  it("should render the correct default button", () => {
    render(<Button {...defaultProps}>button</Button>);
    const element = screen.getByText("button");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("BUTTON");
    expect(element).toHaveClass("btn btn-default");
    fireEvent.click(element);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });

  it("should render the correct component based on different props", () => {
    render(<Button {...testProps}>primary</Button>);
    const element = screen.getByText("primary");
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("btn-lg btn-primary klass");
  });

  it("should render a link when btnType equals link and href is provided", () => {
    render(<Button {...linkProps}>link</Button>);
    const element = screen.getByText("link");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("A");
    expect(element).toHaveClass("btn btn-link");
  });

  it("should render disabled button when disabled set to true", () => {
    render(<Button {...disabledProps}>disabled</Button>);
    const element = screen.getByText("disabled");
    expect(element).toBeInTheDocument();
    expect(element).toBeDisabled();
    fireEvent.click(element);
    expect(disabledProps.onClick).not.toHaveBeenCalled();
  });
});
