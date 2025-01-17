export interface CosmicObject {
  id: string;
  title: string;
  content: string;
  [key: string]: unknown;
}

export interface CreateObjectPayload {
  title: string;
  content: string;
  type: string;
}

export interface UpdateObjectPayload {
  id: string;
  title?: string;
  content?: string;
}
