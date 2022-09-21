import { useContext } from 'react';
import { blogContext } from '../context/blogContext';

export const useBlog = () => useContext(blogContext);