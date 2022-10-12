import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './styles';

export interface IButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: 'secondary' | 'primary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  isFullWidth?: boolean;
}

export const Button = React.forwardRef<
  HTMLButtonElement,
  IButtonProps
  // React.ComponentPropsWithoutRef<'button'>
>(({ children, variant, size, isFullWidth, ...props }, ref) => {
  // If someone provide their own type="button" or type="submit" then based on precedence rule it will not take type="button" whihc is defined here rather then when {...prsps} spread out it will take it from that and override the button type which we default mentioned here.
  return (
    <StyledButton
      ref={ref}
      variant={variant}
      size={size}
      isFullWidth={isFullWidth}
      type="button"
      {...props}
    >
      {children}
    </StyledButton>
  );
});

Button.propTypes = {
  variant: PropTypes.oneOf(['secondary', 'primary', 'danger']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  isFullWidth: PropTypes.bool,
};

Button.defaultProps = {
  variant: 'secondary',
  size: 'medium',
  isFullWidth: false,
};
Button.displayName = 'Button';
