## App Router Course

The dashboard application was a code-along project. It was built using Next 14.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.

Some of my learnings:

- Optimizing data fetching by preventing network waterfall.
- Improving application loading experience with streaming and loading skeletons.
- Using URL params for holding application state. (e.g. adding search, pagination)
- Mutating data using Server Actions and revalidating paths after submission.
- Handling server-side form validations using the `UseFormState` hook. 
- Improving accessibility in forms.
- Handling errors gracefully using `error.tsx` and `notFound`.
- Adding metadata: types of metadata, adding open graph image, favicon, and creating template metadata title.

Also, I learned how to redirect, handle authentication using NextAuth, secure routes using the middleware.ts file, and more.

Key takeaway: *Behind the scenes, Server Actions create a `POST` API endpoint.*