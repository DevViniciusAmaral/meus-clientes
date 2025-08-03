export interface IClient {
  id?: string;
  name: string;
  billingDate: string;
  isRecurrent: boolean;
  createdAt?: number;
  updatedAt?: number;
}
