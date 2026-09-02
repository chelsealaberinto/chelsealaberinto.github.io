export type ProjectCategory = 'all' | 'invitations' | 'branding' | 'decks' | 'web';

export interface Project {
  id: string;
  title: string;
  category: 'invitations' | 'branding' | 'decks' | 'web';
  categoryLabel: string;
  tagClass?: string;
  image: string;
  description: string;
  longDescription?: string;
  tags: string[];
  client?: string;
  year?: string;
  isFeatured?: boolean;
  liveUrl?: string;
  actionType?: 'image' | 'iframe';
}
