export interface IDetectClick {
  ref: React.RefObject<HTMLDivElement>,
  setHasClickedOutsideTarget: React.Dispatch<React.SetStateAction<boolean>>,
 }
