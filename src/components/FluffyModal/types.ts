export type FluffyModalPropsType = {
  modalHeight: number;
  children: React.ReactNode;
  padding?: number;
};

export type ModalHandle = {
  open: () => void;
  close: () => void;
};
