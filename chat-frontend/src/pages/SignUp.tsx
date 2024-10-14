import { useState } from 'react';
import { Input, Button } from "@nextui-org/react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
  };

  return (
    <div className="container mx-auto mt-10 max-w-md">
      <h1 className="text-3xl font-bold mb-8 text-center">Sign Up</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          name="username"
          label="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          label="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          type="password"
          name="password"
          label="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <Button type="submit" color="primary" className="w-full">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUp;