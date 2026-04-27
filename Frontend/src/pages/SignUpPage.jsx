import React, { useState } from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { User, Mail, Lock, Phone } from "lucide-react";
import { signupSchema } from "../utils/validators";
import { setCredentials } from "../store/slice/authSlice";
import { showToast } from "../store/slice/uiSlice";
import { setLocal, getLocal } from "../utils/storage";
import PageWrapper from "../components/PageWrapper";
import Input from "../components/Input";
import Button from "../components/Button";

const SignUpPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      mobile: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
    validationSchema: signupSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const mockUser = {
          id: "u2",
          name: values.name,
          email: values.email,
          mobile: values.mobile,
          role: "user",
        };
        const mockToken = "mock-jwt-token-newuser";

        // Store user data in localStorage for retrieval on login
        setLocal("homefix_user", mockUser);
        setLocal("homefix_token", mockToken);
        dispatch(setCredentials({ user: mockUser, token: mockToken }));
        dispatch(
          showToast({
            type: "success",
            message: "Account created successfully!",
          }),
        );

        window.gtag?.("event", "signup_success");

        navigate("/");
      } catch (error) {
        dispatch(
          showToast({ type: "error", message: "Failed to create account." }),
        );
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <PageWrapper
      title="Sign Up"
      className="flex items-center justify-center p-4 py-12 bg-[#fafafa]"
    >
      <div className="w-full max-w-md bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden border border-gray-100">
        <div className="p-8">
          <div className="text-center mb-8">
            <Link
              to="/"
              className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-xl font-bold text-2xl mb-4"
            >
              H
            </Link>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Create an account
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
              Join HomeFix for seamless home services
            </p>
          </div>

          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <Input
              id="name"
              name="name"
              type="text"
              label="Full Name"
              placeholder="John Doe"
              leftIcon={<User size={18} />}
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && formik.errors.name}
            />

            <Input
              id="mobile"
              name="mobile"
              type="text"
              label="Mobile Number"
              placeholder="9876543210"
              leftIcon={<Phone size={18} />}
              value={formik.values.mobile}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.mobile && formik.errors.mobile}
            />

            <Input
              id="email"
              name="email"
              type="email"
              label="Email Address"
              placeholder="john@example.com"
              leftIcon={<Mail size={18} />}
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && formik.errors.email}
            />

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

            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              label="Confirm Password"
              placeholder="••••••••"
              leftIcon={<Lock size={18} />}
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.confirmPassword && formik.errors.confirmPassword}
            />

            <div className="flex items-start mt-4">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  className="focus:ring-primary h-4 w-4 text-primary border-gray-300 rounded"
                  checked={formik.values.terms}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor="terms"
                  className="text-gray-600 dark:text-gray-400"
                >
                  I agree to the{" "}
                  <a href="#" className="text-primary hover:underline">
                    Terms & Conditions
                  </a>
                </label>
                {formik.touched.terms && formik.errors.terms && (
                  <p className="mt-1 text-xs text-red-600">
                    {formik.errors.terms}
                  </p>
                )}
              </div>
            </div>

            <Button
              type="submit"
              className="w-full mt-6"
              loading={loading}
              disabled={!formik.isValid}
            >
              Create Account
            </Button>
          </form>

          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
            <span>Already have an account?</span>
            <Link
              to="/login"
              className="text-primary font-medium hover:underline"
            >
              Log in
            </Link>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default SignUpPage;
