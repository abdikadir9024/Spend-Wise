# SpendWise

## Project Description
SpendWise is a simple budget tracker web application. The user enters a monthly budget and a list of expenses, and SpendWise calculates the total spending and remaining balance and displays a clear budget summary on the page. This project was deployed to the internet using GitHub and Netlify as part of the Web Hosting and Deployment module.

## Technologies Used
- HTML5
- CSS3
- JavaScript
- Git and GitHub (version control and code hosting)
- Netlify (hosting and continuous deployment)

## GitHub Repository Information
- Repository: https://github.com/abdikadir9024/Spend-Wise
- Visibility: Public
- Branch: `main`

## Live Netlify Website URL
https://spendwise-abdikadi.netlify.app
## Deployment Process Summary
sssssss
1. **Deployment readiness:** I checked that the project files (`index.html`, `style.css`, `script.js`, `README.md`) were in one folder, with `index.html` at the root and relative paths used for the CSS and JavaScript files.
2. **GitHub repository:** I initialized Git in the project folder, committed my files, and pushed them to a public GitHub repository named `Spend-Wise`.
3. **Netlify deployment:** I connected the `Spend-Wise` repository to Netlify, deploying from the `main` branch. No build command was needed because the project is a static website.
4. **Custom site name:** I changed the default Netlify subdomain to `spendwise-abdikadi`, so the site is available at `https://spendwise-abdikadir.netlify.app`.
5. **Continuous deployment test:** I edited the tagline in `index.html`, committed the change, and pushed it to GitHub. Netlify automatically started a new deploy and updated the live site without any manual action. I repeated this once more to confirm it works ("Second auto deploy test").
6. **Final testing:** I opened the live site and confirmed that the page, styles, and JavaScript all load correctly, and that the "Start Budgeting" button works and displays the budget summary.

## Challenges Encountered During Deployment
- **Running Git in the wrong folder:** I first ran `git init` in my home directory instead of the project folder, which caused an `index.lock` error when running `git add .`. I fixed it by removing the mistaken `.git` folder from the home directory and working from inside the SpendWise folder.
- **Push failed with "src refspec main does not match any":** This happened because my commit had failed, so there was no commit to push. After working in the correct folder and committing successfully, the push worked.
- **Wrong repository connected to Netlify:** I accidentally selected an empty repository and a similarly named repository, so Netlify showed an "empty repository" error and did not show my latest changes. I fixed it by relinking the Netlify project to the correct `Spend-Wise` repository.
- **Private site:** The Netlify project was private by default, so it was not publicly accessible. I changed it to public so anyone can visit the site.

## Lessons Learned
- Always check which folder I am in before running Git commands, and use `git status` and `git log` to confirm the state of the repository.
- A push can only succeed if there is at least one commit, so I must check that `git commit` worked first.
- The repository connected to Netlify must be the same one I push to; otherwise changes will never appear on the live site.
- Continuous deployment saves time: after connecting GitHub to Netlify, every `git push` to `main` updates the live website automatically.
- Always test the live site (preferably in an incognito window) to make sure it is public and that all files load correctly.																													