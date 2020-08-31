import styled, { css } from '../../styled'
import { IButtonPropTypes } from './prop-types'

const Button = styled.button<IButtonPropTypes>`
  position: relative;
  box-sizing: border-box;
  height: 36px;
  padding: 0 24px;
  color: ${(props) => props.theme.hx_theme_txt};
  font-size: 13px;
  background-color: #fff;
  border: 1px solid ${(props) => props.theme.btn_border_color};
  border-radius: 4px;
  appearance: none;
  outline: none;
  overflow: hidden;
  cursor: pointer;

  &:active::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .08);
  }

  ${(props) => !props.type && props.color && css`
    color: #fff;
    border: none;
  `}
  ${(props) => !props.type && props.color === 'primary' && css`
    background-color: ${props.theme.hx_theme};
  `}
  ${(props) => !props.type && props.color === 'success' && css`
    background-color: ${props.theme.successColor};
  `}
  ${(props) => !props.type && props.color === 'warning' && css`
    background-color: ${props.theme.warningColor};
  `}
  ${(props) => !props.type && props.color === 'error' && css`
    background-color: ${props.theme.errorColor};
  `}
  ${(props) => !props.type && props.color === 'gray' && css`
    background-color: ${props.theme.disabledColor};
  `}

  ${(props) => props.type === 'line' && props.color === 'primary' && css`
    color: ${props.theme.hx_theme};
    border-color: ${props.theme.hx_theme};
  `}
  ${(props) => props.type === 'line' && props.color === 'success' && css`
    color: ${props.theme.successColor};
    border-color: ${props.theme.successColor};
  `}
  ${(props) => props.type === 'line' && props.color === 'warning' && css`
    color: ${props.theme.warningColor};
    border-color: ${props.theme.warningColor};
  `}
  ${(props) => props.type === 'line' && props.color === 'error' && css`
    color: ${props.theme.errorColor};
    border-color: ${props.theme.errorColor};
  `}
  ${(props) => props.type === 'line' && props.color === 'gray' && css`
    color: ${props.theme.disabledColor};
    border-color: ${props.theme.disabledColor};
  `}

  ${(props) => props.size === 'small' && css`
    height: 36x;
    padding: 0 16px;
    font-size: 13px;
  `}
  ${(props) => props.size === 'large' && css`
    height: 50px;
    padding: 0 24px;
    font-size: 14px;
  `}

  ${(props) => props.block && css`
    width: 100%;
    padding: 0;
    font-weight: bold;
  `}
  ${(props) => props.block && !props.size && css`
    font-size: 14px;
  `}
  ${(props) => props.block && props.size === 'small' && css`
    font-size: 14px;
  `}
  ${(props) => props.block && props.size === 'large' && css`
    font-size: 15px;
  `}

  ${(props) => props.disabled && css`
    color: #fff;
    background-color: ${props.theme.disabledColor};
    border: none;
  `}
`

export { Button }
export default Button
