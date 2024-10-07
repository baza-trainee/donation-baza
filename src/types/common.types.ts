export interface ILoginData {
  email: string;
  password: string;
}

export interface IApplicationData {
  name: string;
  email: string;
  message: string;
}

export interface IApplication extends IApplicationData {
  id: string;
  createdAt: Date;
}

export interface IDocument {
  key: string;
  url: string;
}
