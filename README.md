# Fakedbook README

[Fakedbook](https://faked-book.herokuapp.com) is a minimal clone of Facebook, allowing it's users to share posts and pictures with their friends and leave comments on their friend's posts. Each user also has a wall where users can see their information and related posts.

This project was built using Ruby on Rails with postgresql for the backend and React/Redux for the frontend.

# Features

## Friending

Users have the ability to friend other users, which allows them to see each other's posts and comment on them as well. A user can send any user a friend request, after which the receiving user has the option to accept the request or decline the request.

![Friends](https://user-images.githubusercontent.com/32758132/61148123-effc9880-a492-11e9-9fee-17cc3a6c9170.png)

![friends_screenshot](https://user-images.githubusercontent.com/32758132/63617389-30752900-c59e-11e9-9178-1730f815f340.png)

## User Authentication

Users can create an account and use that to login and persist data across sessions. The authentication is based on the user's email and password combination. There's also the option to log in as a demo user to use the website without having to go through the account creation process. 

Secure Authentication with password encryption

![password_code](https://user-images.githubusercontent.com/32758132/63617607-bc875080-c59e-11e9-9a25-6b369e8d516e.png)
## Profile Page

Each user has a profile page, where users can see their information, related posts, and also send them a friend request or delete them as friends
![kevin_profile](https://user-images.githubusercontent.com/32758132/61148354-6c8f7700-a493-11e9-8ee4-f372cd6b8260.png)

## NavBar

The Navigation Bar gives users the ability to logout, accept/deny pending friend requests and also search for users via the search bar. 

![navbar](https://user-images.githubusercontent.com/32758132/61148408-90eb5380-a493-11e9-8b91-10dcd84f98ac.png)

![seach](https://user-images.githubusercontent.com/32758132/61148414-93e64400-a493-11e9-80b7-ec7c5c95adcf.png)







