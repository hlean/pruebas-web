export interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface NavItem {
  title: string;
  href: string;
  isButton?: boolean;
}