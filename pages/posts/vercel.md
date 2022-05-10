---
title: Take Home Assignment
date: 2022/05/09
description: Community Management at Vercel
tag: career
author: You
---

This is my take home assignment for a position at **Vercel** and I've chosen the Blog Starter Kit to ensure accessibility and make the content readable. This also helps me to write the content on MDX, so it's an easier solution for everyone involved. 😄

Thank you for your interest in Vercel! We would appreciate approximately one hour of your time to complete a short familiarisation exercise. Before you start, you'll need a GitHub (recommended), GitLab or Bitbucket account. 

~~**1. If you haven't already, create a Hobby tier (free) account on Vercel. You can sign up to Vercel by using your GitHub, GitLab or BitBucket account.**~~

Done ✅

~~**2. Create a project on Vercel. You can use our get started guide, documentation and templates for help and inspiration.**~~

Done ✅

**3. Complete the following tasks. Add the responses directly to your Vercel project – please do not create a separate document.**
**Create pages or sections on your project for each question. If you're unable to complete any task, don't worry! Go ahead and explain what information or knowledge may be missing**

  <details markdown='1'><summary> **1. Which technical article, guide or lightning talk left the biggest positive impression on you? Why? Ideally, this article would not be associated with Vercel or web development, by the way! Please provide links.** </summary> It's not a lightning talk, but this is one of my favorite talks. Dylan covers a lot of what I learned back in middle school with tools like LOGO, which adds a nostalgic attachment. Since this covers everything I love about code, it's not just logical; it's artistic at the same time.
    <iframe width="560" height="315" src="https://www.youtube.com/embed/6avJHaC3C2U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    The talk simply conveys the best of what code can bring beyond solving complex problems. Through art, mathematics, and complex solutions, and understanding the behavior of different systems and how with different iterations, we understand the different irregularities and how code helps you create art within motion pictures, science, and Deep Fakes. </br> A guide that I really enjoy is Josh Comeau's written work on ![Building a Magic 3D Button](https://www.joshwcomeau.com/animation/3d-button/). Going through end-to-end concepts of mimicking physics on a 2D screen - his explanation from Josh is spot-on. The description and the reveal sliders to show precisely how it works is something that impresses me about the lengths Josh goes to explain the process with cubic-bezier and equilibrium curves. Close to the guide menitioned, Delba Olivier's blog on ![A like button that likes you back](https://delba.dev/blog/a-like-button-that-likes-you-back) is also something I enjoyed.</details>


  **2. What do you want to learn, or do more of, at work?**

    I'd like to do more of the following:
      1. Code more at work, and do more around web development. Whether it's solving user problems, or creating solutions or usecases myself, I'd like to create a technical aspect to my day-to-day than it is right now.
      2. Be a leader. I often assume ownership with various projects and tasks, and I want to learn how to, and actually lead a team at work.
      3. This is not for work entirely, but I would also like to give more talks because these help me learn at a faster pace and share knowledge. I haven't been able to do a lot of that in my current role, but I would enjoy giving more talks and create more content as well.


  **3. Add a temporary in-app redirect to your project, redirecting /hello-vercel (or any path – but be sure to tell us which!) to https://vercel.com**

    Check out [pran.sh/hello-vercel](https://www.pran.sh/hello-vercel). I was using ```permanent: true``` for a few commits before I realized. 😅


  **4. Imagine a customer reaches out in our GitHub community asking "How do I do a redirect from /hello-vercel to https://vercel.com?" In a couple of paragraphs, how do you respond?**

    Vercel (and Next.js) both have the functionality to add Redirects to your application. You can add a Permanent and Temporary redirect to a different domain or even in-app redirect. In this case, you require a temporary redirect to use a page as a way to go to a different webpage.
  
    #### Setting up the redirect
      1. Create a ```vercel.json``` file with the code below.
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
    
      Go to ```yourdomain.com/hello-vercel```, and you should be redirected to https://vercel.com.


  **5. A customer writes in to our GitHub community stating "I have a custom domain which I purchased at GoDaddy and I want to use it on my project". In a couple of paragraphs, how do you respond?** 

    You can use your custom domain purchased on GoDaddy with a Vercel project. Vercel allows you to add your custom domains purchased from any provider, to use for your projects on any tier. Make sure you have your GoDaddy's Advanced DNS settings opened up to add A records and CNAME to your domain. 
    
    Go to your project in Vercel and under the Domains tab, simply add your domain address. Click on **Add** to and folow the instructions to successfully add your domain to the project. You can find more details in the documentation [here](https://vercel.com/docs/concepts/projects/custom-domains#adding-a-domain).


  **6. What does Community mean to you?**
  
    TL;DR Community means everthing to me!

    My journey started as a Community member of a product I loved, and evangelizing for them started out of love, before anything else. The community mentioned is Mozilla's and being a Mozillian gave me a purpose, and a reason to advocate for a product that in my opinion, did the right thing. It also gave me an opportunity to see that not everything is perfect, and voice my opinion on what could be better. That volunteer community journey became a leadership one, as well as a technical one since my major us Electronics & Communications Engineering, and through an Open Source community, I learnt so much more about Web Development and Internet of Things than my college ever taught me.

    My early expeditions led me to do the same for my local community with Mozilla Gujarat, where I organized basic Computer skills workshops for underpriveleged children who grew up in a smartphone world but missed out on how to operate on a Computer. This put things in perspective for me while leading my community to more such talks, events, booth crawls and much more. Working with students around me, I saw a huge gap to fill within education that I wanted to solve which motivated me to mentor aspiring engineers like I was and connect them with professionals that can guide them to a better career.

    I have built and scaled different communities, and worn various hats in different capacities and I have always enjoyed achieving more together, and communities enable me to do that, as I enable communities.

  **7. Would, or how would, you improve the response shared with a customer here?** 
  
    - I would go ahead and speak with the team and try and figure out a way to check file changes in the root directory. 
    - Check what the best way is to do this, since it's a monorepo with 3 projects. I reckon that a script should be okay since the required solution has a criteria for common directory changes.
    - I will try and replicate the solution for myself, and if it works, reply with the code.
    - I will also let the Product team know of the solution to see if there's a way this can be automated and/or fits in the roadmap for features for any Enterprise or Community customers, if it makes sense.
  

  **8. What do you think is one of the most common problems which customers ask Vercel for help with? How would you help customers to overcome common problems, short-term and long-term?** 

    I really could not see a lot of common problems per se, on GitHub Discussions. If I have to imagine that there are a few common problems, I would ideally release a bi-weekly update with known bugs, feature updates, and opening up feedback channels for new releases.


  **9. If you could make one change to our flagship community, what would it be and why?** 

    Label Issues on GitHub, to help with triaging and better discover for the community.

    Since we are on the topic, I have a suggestion for engagement. This is a very well sorted community, in my opinion. I like the fact that Vercel is not trying to be everywhere, and create so many channels for you to keep track of. Instead of changing anything, I would add more engagement touchpoints for community growth. That could mean a lot of things starting from more engaging discussions on GitHub, Discord and Twitter. Could also host a few giveaways around different frameworks and also build out Ambassador or Influencer Programs, supporting Meetups worldwide, and a few more initiatives. I also believe Vercel can use a /community to point to:

    - Support channels for community users
    - Discord Links for different communities for Frameworks
    - Showcase for innovative community vercel.app usecases/projects
    - Learning Resources
    - Community and Sponsored Events
    - Frontend Meetups we can feature


  **10. How could we improve or alter this familiarisation exercise?** 

    I think this is perfect, and covers all the bases for the requirements Vercel has for the role.


~~**4. Make sure that you have re-deployed the project to reflect your latest changes and that the repository on GitHub, GitLab or Bitbucket is public.**~~

  Done ✅

~~**5. Respond to our original email with a link to both your deploy & repository and congratulate yourself on a job well done!**~~

If you're seeing this, I've already sent you an email. So,
<iframe src="https://giphy.com/embed/mn1cym1jiJOUg" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/reactiongifs-mn1cym1jiJOUg"></a></p>
