Replicating a bug in vercel found through next.js

Long story short, ISG doesn't work properly if you page route has spaces in it.
The build process works fine but subsequent tries to revalidate the cache will fail with the error:
ERR_UNESCAPED_CHARACTERS

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fthiniulian%2Fnextjs-whitespace-bug)