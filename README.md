## Learn Next.js Course Project

The dashboard application was a code-along project and was built using Next 14.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.

## My learnings:

- Optimizing data fetching by preventing network waterfall.
- Improving application loading experience with streaming and loading skeletons.
- Using URL params for holding application state. (e.g. adding search, pagination)
- Mutating data using Server Actions and revalidating paths after submission.
- Handling server-side form validations using the `useFormState` hook and `Zod`. 
- Improving accessibility in forms.
- Handling errors gracefully using `error.tsx` and `notFound`.
- Adding metadata: types of metadata, adding open graph image, favicon, and creating template metadata title.

Also, I learned how to redirect, handle authentication using NextAuth, secure routes using the middleware.ts file, and more.

Key takeaway: *Behind the scenes, Server Actions create a `POST` API endpoint.*

[Read more](https://nextjs.org/learn/dashboard-app/mutating-data#:~:text=Behind%20the%20scenes%2C%20Server%20Actions%20create%20a%20POST%20API%20endpoint.%20This%20is%20why%20you%20don%27t%20need%20to%20create%20API%20endpoints%20manually%20when%20using%20Server%20Actions.)

## Getting Started
- Install dependencies using `pnpm install`
- Rename `.env.example` to `.env`
- Create a GitHub repository and push the code.
- On Vercel connect the repository and deploy your project.
- Create a Postgres database on Vercel from the storage tab.
- Once created, navigate to the `.env.local` tab, click Show secret and Copy Snippet.
- In your `.env` file paste the snippet.
- Seed db using `pnpm seed`
- Start dev server using `pnpm dev`

## Login credentials
- Email: `user@nextmail.com`
- Password: `123456`