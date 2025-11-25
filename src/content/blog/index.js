import firstPost from './first-post.json';
import secondPost from './second-post.json';
import post03 from './post-03.json';
import post04 from './post-04.json';
import post05 from './post-05.json';
import post06 from './post-06.json';
import post07 from './post-07.json';
import post08 from './post-08.json';
import post09 from './post-09.json';
import post10 from './post-10.json';
import post11 from './post-11.json';
import post12 from './post-12.json';

export const blogPosts = [
  firstPost,
  secondPost,
  post03,
  post04,
  post05,
  post06,
  post07,
  post08,
  post09,
  post10,
  post11,
  post12
].sort((a, b) => new Date(b.date) - new Date(a.date));

export const getBlogPost = (slug) => {
  return blogPosts.find((post) => post.slug === slug);
};
