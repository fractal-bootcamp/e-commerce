export interface VercelDeployment {
  uid: string;
  name: string;
  created: Date;
  state: string;
  logs?: string[];
  html?: string;
}
