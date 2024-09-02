This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Popsa.com - React Frontend test skeleton

## Getting Started

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Notes

###  Tech used 

* react drag and drop 
* css modules in the Image list , and Image component

#### Reasons 
- decided to use react dnd for the drag and drop functionally, some issues with getting to reactdnd work with React Testing Lib.  
- created a utils file with a function called move image - that swaps image url within drag and drop functionally, with a unit test
- using mouse events to style image to align closely with the example using transitions and clip-path

#### improvements

* I would use playwright for e2e test for testing the UI functionally in the context of a running app
