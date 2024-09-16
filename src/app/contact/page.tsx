'use client';

import { FC, FormEvent, useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactPage: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = (): Partial<FormData> => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    return newErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      // Submit form logic
      console.log('Form submitted successfully:', formData);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-4">Contact Me</h1>
      <form className="max-w-lg mx-auto space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          className={`w-full border p-2 rounded ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="text-red-500">{errors.name}</p>}

        <input
          type="email"
          name="email"
          className={`w-full border p-2 rounded ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}

        <textarea
          name="message"
          className={`w-full border p-2 rounded ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <p className="text-red-500">{errors.message}</p>}

        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
