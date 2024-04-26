import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const POSTS_DIRECTORY = path.join(process.cwd(), 'public/posts');
const WORDS_PER_MINUTE = 150;

function readingTime(post) {
    let result = {};
    const regex = /\w+/g;
    result.wordCount =
        post.match(regex).length;

    result.readingTime =
        Math.ceil(
            result.wordCount /
            WORDS_PER_MINUTE);
    return result;
};

export function getSortedPostsData() {
    const fileNames = fs.readdirSync(POSTS_DIRECTORY);
    const allPostsData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, '');

        const fullPath = path.join(POSTS_DIRECTORY, `${fileName}/${fileName}.md`);

        const fileContents = fs.readFileSync(fullPath, 'utf8');

        const read = readingTime(fileContents)
        const matterResult = matter(fileContents);

        return {
            id,
            read,
            ...matterResult.data,
        };
    });

    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export function getPostContent(fileName) {
    let updatedFileName = fileName;
    if (fileName.indexOf('.md') !== -1) {
        updatedFileName = fileName.slice(0, -3);
    }

    const fullPath = path.join(POSTS_DIRECTORY, `${updatedFileName}/${updatedFileName}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const { content, data } = matter(fileContents);
    return content;
}

export function getPostMetaData(fileName) {
    let updatedFileName = fileName;
    if (fileName.indexOf('.md') !== -1) {
        updatedFileName = fileName.slice(0, -3);
    }
    const fullPath = path.join(POSTS_DIRECTORY, `${updatedFileName}/${updatedFileName}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const read = readingTime(fileContents)
    const matterResult = matter(fileContents);

    return {
        read,
        ...matterResult.data,
    };
}
