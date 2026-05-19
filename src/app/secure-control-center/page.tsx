'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/useAuthStore';

export default function AdminPage() {
  const router = useRouter();
  const { user } = useAuthStore();

  useEffect(() => {
    if (!user?.isAdmin) {
      router.push('/');
    }
  }, [user, router]);

  if (!user?.isAdmin) return null;

  return (
    <div className='min-h-screen bg-cyber-dark pt-20 px-4'>
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-4xl font-bold text-cyber-blue mb-8'>Admin Control Center</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {/* Dashboard Cards */}
          <div className='glass p-6 rounded-lg'>
            <h2 className='text-xl font-bold text-white mb-4'>Projects</h2>
            <p className='text-gray-400'>Manage your portfolio projects</p>
          </div>
          <div className='glass p-6 rounded-lg'>
            <h2 className='text-xl font-bold text-white mb-4'>Experience</h2>
            <p className='text-gray-400'>Update your work experience</p>
          </div>
          <div className='glass p-6 rounded-lg'>
            <h2 className='text-xl font-bold text-white mb-4'>Skills</h2>
            <p className='text-gray-400'>Manage your technical skills</p>
          </div>
          <div className='glass p-6 rounded-lg'>
            <h2 className='text-xl font-bold text-white mb-4'>Settings</h2>
            <p className='text-gray-400'>Configure site settings</p>
          </div>
        </div>
      </div>
    </div>
  );
}
