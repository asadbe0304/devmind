export interface BlogType {
  excerpt: string;
  id: string;
  createdAt: string;
  desciption: {
    text: string;
  };
  slug: string;
  createdBy: {
    name: string;
    picture: string;
    id: string;
  };
}
