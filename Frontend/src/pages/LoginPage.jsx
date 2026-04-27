import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Mail, Lock, LogIn } from 'lucide-react';
import { loginSchema } from '../utils/validators';
import { setCredentials } from '../store/slice/authSlice';
import { showToast } from '../store/slice/uiSlice';
import { setLocal, getLocal } from '../utils/storage';
import PageWrapper from '../components/PageWrapper';
import Input from '../components/Input';
import Button from '../components/Button';

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: { identifier: '', password: '' },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Retrieve stored user data from localStorage
        const storedUser = getLocal('homefix_user');

        // Check if stored user matches the login identifier (email or mobile)
        let mockUser;
        if (storedUser && (storedUser.email === values.identifier || storedUser.mobile === values.identifier)) {
          mockUser = storedUser;
        } else {
          mockUser = { id: 'u1', name: 'John Doe', email: values.identifier, mobile: values.identifier, role: 'user' };
        }

        const mockToken = 'mock-jwt-token-12345';

        setLocal('homefix_token', mockToken);
        dispatch(setCredentials({ user: mockUser, token: mockToken }));
        dispatch(showToast({ type: 'success', message: 'Logged in successfully!' }));

        window.gtag?.('event', 'login_success');

        navigate('/');
      } catch (err) {
        console.error(err);
        dispatch(showToast({ type: 'error', message: 'Invalid credentials. Try again.' }));
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <PageWrapper title="Login" className="flex items-center justify-center p-4 bg-[#fafafa]">
      <div className="w-full max-w-md bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden border border-gray-100">
        
        <div className="p-8">
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-xl font-bold text-2xl mb-4">H</Link>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Welcome back</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">Log in to manage your bookings</p>
          </div>

          <form onSubmit={formik.handleSubmit} className="space-y-5">
            <Input
              id="identifier"
              name="identifier"
              type="text"
              label="Email or Mobile Number"
              placeholder="Enter email or mobile"
              leftIcon={<Mail size={18} />}
              value={formik.values.identifier}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.identifier && formik.errors.identifier}
            />

            <div>
              <Input
                id="password"
                name="password"
                type="password"
                label="Password"
                placeholder="••••••••"
                leftIcon={<Lock size={18} />}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.password && formik.errors.password}
              />
              <div className="flex justify-end mt-1">
                <a href="#" className="text-xs text-primary hover:text-blue-600 font-medium">Forgot password?</a>
              </div>
            </div>

            <Button type="submit" className="w-full" loading={loading} disabled={!formik.isValid || !formik.dirty}>
              Log in
            </Button>
          </form>

          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
            <span>Don't have an account?</span>
            <Link to="/signup" className="text-primary font-medium hover:underline">Sign up</Link>
          </div>
          
          <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-6">
            <Button variant="outline" className="w-full" leftIcon={<LogIn size={18} />}>
              Continue with Google
            </Button>
            <p className="text-center text-xs text-gray-500 mt-6">
              Are you a professional? <Link to="/provider/join" className="text-primary font-medium">Join here</Link>
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default LoginPage;
