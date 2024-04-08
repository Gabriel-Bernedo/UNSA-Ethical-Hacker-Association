import { ComponentProps } from "./component";
export interface ContainerProps<T> extends ComponentProps{
  content?: T[],
}