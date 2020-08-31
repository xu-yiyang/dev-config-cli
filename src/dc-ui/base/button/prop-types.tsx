export interface IButtonPropTypes {
  type?: 'line'
  color?: 'primary' | 'success' | 'warning' | 'error' | 'gray'
  size?: 'large' | 'small'
  block?: boolean
  disabled?: boolean
  onClick?: React.MouseEventHandler
  children?: React.ReactNode
}
