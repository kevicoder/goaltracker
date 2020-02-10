export interface Risk {
  name: string;
  description: string;
  probability: number;
  cost?: number;
  relatedStep: number;
  relatedMitigation: number;
  relatedContingency: number;
}
