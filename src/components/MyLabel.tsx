
import './myLabel.css';

export interface Props {
  /**
   * Name of the label to display
   */
  label: string;
  /**
   * Size of the label
   */
  size: 'normal' | 'h1' | 'h2' | 'h3';
  /**
   * Capitalize all letters
   */
  allCaps?: boolean;
  /**
   * Color of the label
   */
  color?: 'primary' | 'secondary' | 'tertiary';
  /**
   * What background color to use
   */
  fontColor?: string;
  /**
   * What background color to use
   */
  backgroundColor?: string;
}

export const MyLabel = ({ 
  label = 'No Label', 
  size = 'normal',
  allCaps = false,
  color,
  fontColor,
  backgroundColor = 'transparent',
}: Props) => {

  const getCalssColorLabel = () => {
    if(color === 'primary') return 'text-primary'
    if(color === 'secondary') return 'text-secondary'
    if(color === 'tertiary') return 'text-tertiary'
    return ''
  }

  return (
    <span 
      className={`label ${size} ${getCalssColorLabel()}`}
      style={{ color: fontColor, backgroundColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  )
}
