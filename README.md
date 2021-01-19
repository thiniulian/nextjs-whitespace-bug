Replicating a bug in vercel found through next.js

Long story short, ISG doesn't work properly if you page route has spaces in it.
The build process works fine but subsequent tries to revalidate the cache will fail with the error:
ERR_UNESCAPED_CHARACTERS