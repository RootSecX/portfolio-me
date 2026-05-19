import { ReactNode } from 'react';

export const metadata = {
  title: 'Admin Control Center',
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
