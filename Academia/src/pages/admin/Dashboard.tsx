import React from 'react';
import { MainLayout } from '../../components/layouts/MainLayout';
import { Users, FileText, Bell, Calendar } from 'lucide-react';

const stats = [
  { name: 'Total Users', stat: '2,651', icon: Users },
  { name: 'Posts Today', stat: '147', icon: FileText },
  { name: 'Active Reports', stat: '12', icon: Bell },
  { name: 'Events This Week', stat: '4', icon: Calendar },
];

export const AdminDashboard: React.FC = () => {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto">
        <div className="md:flex md:items-center md:justify-between mb-8">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
              Admin Dashboard
            </h2>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {stats.map((item) => (
            <div
              key={item.name}
              className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
            >
              <dt>
                <div className="absolute bg-primary-500 rounded-md p-3">
                  <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <p className="ml-16 text-sm font-medium text-gray-500 truncate">
                  {item.name}
                </p>
              </dt>
              <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
                <p className="text-2xl font-semibold text-gray-900">{item.stat}</p>
              </dd>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Recent Activity
            </h3>
          </div>
          <div className="border-t border-gray-200">
            <div className="px-4 py-5 sm:p-6">
              <div className="space-y-4">
                {/* Activity items would go here */}
                <div className="text-sm text-gray-500">
                  No recent activity to show.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};