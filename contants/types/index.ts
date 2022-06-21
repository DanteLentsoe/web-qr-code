export interface IQRData {
  text: string;
  rawBytes: Array<any>;
  numBits: number;
  format: number;
  buffer: Array<any>;
  byteLength: number;
  byteOffset: number;
  length: number;
  resultMetadata: Array<any>;
  resultPoints: Array<any>;
  timestamp: number;
}

export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}
