export interface data {
  dataPath: [];
  IdCardSelected: string;
  setData: (newData: any) => void;
  updateCardSelected: (selectedElement: string | null) => void;
};