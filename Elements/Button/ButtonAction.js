import React, { forwardRef } from 'react';
import Spinner from '../../components/Spinner';
import { StyledButtonAction } from './Button.style';

export const ButtonAction = forwardRef((props, ref) => {
  const { children, icon, iconRight, loading, disabled, label, ...restProps } = props;
  const { variation } = restProps;

  return (
    <StyledButtonAction {...restProps} className={variation} ref={ref} disabled={disabled || loading}>
      {children
        ? children
        : <>
          {loading
            ? <Spinner color="#fff" />
            : <>
              {props.icon && <props.icon/>}
              {label && label}
              {props.iconRight && <props.iconRight/>}
            </>
          }
        </>
      }
    </StyledButtonAction>
  );
});

export default ButtonAction;
