import React from 'react';
import { MainLayout } from '../components/layouts/MainLayout';
import { useAuthStore } from '../store/authStore';
import { Button } from '../components/ui/Button';
import { Edit2, MapPin, Calendar, BookOpen } from 'lucide-react';

export const Profile: React.FC = () => {
  const { user } = useAuthStore();

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto">
        {/* Cover and Profile Section */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div 
            className="h-48 bg-gradient-to-r from-primary-500 to-secondary-500"
          />
          <div className="relative px-4 sm:px-6 lg:px-8 pb-8">
            <div className="relative -mt-16 sm:flex sm:items-end sm:space-x-5">
              <div className="flex">
                <img
                  className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                  src={user?.avatar || `https://ui-avatars.com/api/?name=${user?.name}`}
                  alt={user?.name}
                />
              </div>
              <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                <div className="sm:hidden md:block mt-6 min-w-0 flex-1">
                  <h1 className="text-2xl font-bold text-gray-900 truncate">{user?.name}</h1>
                  <p className="text-sm text-gray-500">{user?.email}</p>
                </div>
                <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                  <Button>
                    <Edit2 className="h-4 w-4 mr-2" />
                    Edit Profile
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Info */}
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <div className="flex items-center text-sm text-gray-500">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Department: {user?.department}
                </div>
              </div>
              <div className="sm:col-span-1">
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-2" />
                  Semester: {user?.semester}
                </div>
              </div>
              <div className="sm:col-span-1">
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="h-4 w-4 mr-2" />
                  Student ID: {user?.studentId}
                </div>
              </div>
            </dl>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="bg-white shadow rounded-lg divide-y divide-gray-200">
            {/* Activity items would go here */}
            <div className="p-4 text-sm text-gray-500">
              No recent activity to show.
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};