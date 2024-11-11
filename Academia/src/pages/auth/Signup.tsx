import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link, useNavigate } from 'react-router-dom';
import { AuthLayout } from '../../components/layouts/AuthLayout';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { useAuthStore } from '../../store/authStore';

const signupSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email().endsWith('@eastdelta.edu.bd', { message: 'Must be an East Delta University email' }),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  studentId: z.string().min(5, 'Student ID is required'),
  department: z.string().min(2, 'Department is required'),
  semester: z.number().min(1).max(12),
});

type SignupForm = z.infer<typeof signupSchema>;

const departments = [
  'Computer Science & Engineering',
  'Electrical & Electronic Engineering',
  'Business Administration',
  'English',
  'Law',
];

export const Signup: React.FC = () => {
  const navigate = useNavigate();
  const { signup, isLoading, error } = useAuthStore();
  const { register, handleSubmit, formState: { errors } } = useForm<SignupForm>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupForm) => {
    await signup(data);
    if (!error) {
      navigate('/feed');
    }
  };

  return (
    <AuthLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Create your account</h2>
          <p className="mt-2 text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-primary-600 hover:text-primary-500">
              Sign in
            </Link>
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Full Name"
            {...register('name')}
            error={errors.name?.message}
            fullWidth
          />

          <Input
            label="Email address"
            type="email"
            {...register('email')}
            error={errors.email?.message}
            fullWidth
          />

          <Input
            label="Password"
            type="password"
            {...register('password')}
            error={errors.password?.message}
            fullWidth
          />

          <Input
            label="Student ID"
            {...register('studentId')}
            error={errors.studentId?.message}
            fullWidth
          />

          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              Department
            </label>
            <select
              {...register('department')}
              className="block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-primary-500 focus:ring-primary-500"
            >
              <option value="">Select Department</option>
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
            {errors.department && (
              <p className="text-sm text-red-600">{errors.department.message}</p>
            )}
          </div>

          <Input
            label="Semester"
            type="number"
            min={1}
            max={12}
            {...register('semester', { valueAsNumber: true })}
            error={errors.semester?.message}
            fullWidth
          />

          {error && (
            <div className="text-sm text-red-600">{error}</div>
          )}

          <Button type="submit" fullWidth isLoading={isLoading}>
            Create account
          </Button>
        </form>
      </div>
    </AuthLayout>
  );
};