---
title: Question 4
date: 2022/05/09
description: Imagine a customer reaches out in our GitHub community asking "How do I do a redirect from /hello-vercel to https://vercel.com?" In a couple of paragraphs, how do you respond?
tag: career
author: You
---

Vercel (and Next.js) both have the functionality to add Redirects to your application. You can add a Permanent and Temporary redirect to a different domain or even in-app redirect. In this case, you require a temporary redirect to use a page as a way to go to a different webpage.
  
    #### Setting up the redirect
      1. Create a `vercel.json` file with the code below.
      ```
      {
      "redirects": [
        { 
          "source": "/hello-vercel",
          "destination": "https://vercel.com/", 
          "permanent": false
        }
        ]
      }
      ```
      2. Push the changes and Vercel automatically redeploys your application.
    
Go to `yourdomain.com/hello-vercel`, and you should be redirected to https://vercel.com.