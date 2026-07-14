// @flow strict
import Link from 'next/link';

function BlogCard({ blog }) {

  return (
    <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group p-4 sm:p-5 flex flex-col"
    >
      <p className="text-[#16f2b3] text-sm">
        {new Date(blog.publishedAt).toLocaleDateString('en-IE', { year: 'numeric', month: 'short', day: 'numeric' })}
      </p>
      <Link target='_blank' href={blog.url}>
        <p className='my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-violet-500'>
          {blog.title}
        </p>
      </Link>
      <p className='text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3'>
        {blog.description}
      </p>
      <Link target='_blank' href={blog.url} className="mt-auto">
        <button className='bg-violet-500 text-white px-3 py-1.5 rounded-full text-xs'>
          Read on Blogger
        </button>
      </Link>
    </div>
  );
};

export default BlogCard;
