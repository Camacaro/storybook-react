/// <reference types="react" />
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
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, backgroundColor, }: Props) => JSX.Element;
