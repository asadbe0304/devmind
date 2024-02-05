export interface BlogType {
  categories: {
    category: string;
    id: string;
    slug: string;
  };
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  image: {
    url: string;
  };
  desciption: {
    html: string;
    text: string;
  };
  
  createdAt: string;
  asadbek: string;
  profile: {
    url: string;
  };
}
