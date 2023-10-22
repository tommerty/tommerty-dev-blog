import rss from "@astrojs/rss";

const postImportResult = import.meta.globEager("./posts/*.md");
const posts = Object.values(postImportResult);

export const get = () =>
  rss({
    title: "Tommerty's Blog",
    description: "A blog where I moan and complain about development and life things",
    site: import.meta.env.SITE,
    items: import.meta.glob("./posts/**/*.md"),
  });
