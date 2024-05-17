## Static Blog Site Built with Next.js
Welcome to my static blog site built with Next.js! This README provides an overview of the project, its features, and how to get started.

### Overview
This project is a static blog site implemented using Next.js, a popular React framework for building server-rendered React applications. The blog site is designed to be fast, efficient, and SEO-friendly, leveraging the benefits of static site generation (SSG) provided by Next.js.

### Libraries
- tailwind
- gray-matter
- rehype
- remark 
- unified

### Features
Static Site Generation (SSG): The blog site is pre-rendered at build time, resulting in static HTML files for each page. This improves performance and ensures fast loading times.
Markdown Support: Write your blog posts in Markdown format for easy authoring and formatting.
Dynamic Routing: Next.js provides powerful routing capabilities, allowing for dynamic routes based on the file system structure.
SEO Optimization: With static site generation and server-side rendering, the blog site is optimized for search engines, ensuring better visibility and ranking in search results.
Responsive Design: The blog site is responsive and mobile-friendly, ensuring a seamless user experience across different devices and screen sizes.

### Getting Started
Follow these steps to set up and run the blog site locally:

Clone the Repository:
```bash
git clone https://github.com/iamsuryasonar/markdown_blog_app.git
```
Install Dependencies:

```bash
cd markdown_blog_app
npm install
```

Run the Development Server:

```bash
npm run dev
```
Open the Browser:

Visit http://localhost:3000 in your web browser to view the blog site.

### Directory Structure
The directory structure of the project is as follows:

```
markdown_blog_app/
├── app/                    # Next.js pages
│   ├── [slug].js           # Dynamic blog post pages
│   ├── components/          # Components
│   ├── hooks/              # Custom hooks
│   ├── layout.js           # Layout page
│   ├── page.js             # Home page
├── lib/                    # Utilities
│   ├── markdownToHtml.js       # Utility functions to convert markdown to html
│   ├── postUtility.js          # Utility functions to extract markdown from public folder
├── public/                 # Static assets
│   ├── posts/              # Markdown blog posts
|       ├── post1.md            # blog post in Markdown format
|       ├── post2.md            #  Another blog post
│   ├── images/      # Image files
├── next.config.js   # Next.js configuration
├── package.json     # NPM dependencies and scripts
└── README.md        # Project README
```
### Preview
[Click here...](https://websnippet.vercel.app/)

### Contributing
Contributions to the project are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on GitHub.

### License
This project is licensed under the MIT License. Feel free to use, modify, and distribute the code for your own purposes.
