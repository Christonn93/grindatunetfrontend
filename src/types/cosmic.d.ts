export type CosmicObject = {
  id:  string;
  title: string;
  content: string;
  [key: string]: unknown;
}

export type CreateObjectPayload = {
  title: string;
  content: string;
  type: string;
}

export type UpdateObjectPayload = {
  id: string;
  title?: string;
  content?: string;
}
export type DeleteObjectPayload = {
  id: unknown;
}