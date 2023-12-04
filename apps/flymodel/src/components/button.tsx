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
  className,
  icon,
  iconClass,
  hideChildren,
  onClick,
  color = 'yellow',
  ...props
}) => {
  const Icon = icon;
  return (
    <button
      className={`
        text-yellow-300
        hover:text-yellow-400
        hover:border-yellow-300
        active:border-yellow-300
        flex flex-row space-x-1 items-center
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
