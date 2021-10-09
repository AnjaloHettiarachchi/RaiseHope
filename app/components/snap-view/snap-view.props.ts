export interface SnapViewProps {
  visible: boolean;
  onSnapTaken: (uri: string) => void;
  onViewClose: () => void;
}
