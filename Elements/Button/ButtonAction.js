import React, { forwardRef } from 'react';
import Spinner from '../../components/Spinner';
import { StyledButtonAction } from './Button.styles';

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
              {label && <p className="unselectable">{label}</p>}
              {props.iconRight && <props.iconRight/>}
            </>
          }
        </>
      }
    </StyledButtonAction>
  );
});

export default ButtonAction;
