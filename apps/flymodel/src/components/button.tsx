import { ComponentProps, FC } from 'react';
import { Icon } from 'react-feather';

export type ButtonProps = {
  className?: string;
  color?: string;
  icon?: Icon;
  iconClass?: string;
  hideChildren?: boolean;
};

export const Button: FC<ButtonProps & ComponentProps<'button'>> = ({
  icon,
  iconClass,
  hideChildren,
  onClick,
  className = '',
  color = 'yellow',
  ...props
}) => {
  const Icon = icon;
  return (
    <button
      className={`
        text-${color}-400
        hover:text-${color}-400
        hover:border-${color}-300
        active:border-${color}-300
        flex flex-row space-x-1 items-center
        bg-black/95 border-black
        ${className}
    `}
      {...props}
      onClick={hideChildren ? undefined : onClick}
    >
      {Icon && <Icon className={iconClass} />}
      {!hideChildren && props.children}
    </button>
  );
};
