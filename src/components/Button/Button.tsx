import {
  FC,
  PropsWithChildren,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
} from "react";
import classNames from "classnames";
export type ButtonSize = "lg" | "sm";
export type ButtonType = "primary" | "default" | "danger" | "link";

interface BaseButtonProps {
  className?: string;
  /**设置 Button 的禁用 */
  disabled?: boolean;
  /**设置 Button 的尺寸 */
  size?: ButtonSize;
  /**设置 Button 的类型 */
  btnType?: ButtonType;
  href?: string;
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

export const Button: FC<PropsWithChildren<ButtonProps>> = (props) => {
  const { className, disabled, size, btnType, href, children, ...restProps } =
    props;
  const btnClass = classNames("btn", className, {
    [`btn-${size}`]: size,
    [`btn-${btnType}`]: btnType,
    disabled: btnType === "link" && disabled,
  });
  if (btnType === "link" && href) {
    return (
      <a className={btnClass} href={href} {...restProps}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={btnClass} disabled={disabled} {...restProps}>
        {children}
      </button>
    );
  }
};

Button.defaultProps = {
  disabled: false,
  size: "sm",
  btnType: "default",
};

export default Button;
