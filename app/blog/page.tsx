"use client";
import { useRouter } from 'next/navigation';
import React from 'react';


const Blog = () => {
    const router = useRouter();

  return (
    <div>
      <h1>Hello  from  Blog Page </h1>
    <button onClick={() => router.push("/blog/first")}>  Blog First </button> 
    </div>
  );
};

export default Blog;