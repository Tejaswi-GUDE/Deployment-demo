# Git & Deploy Playground

Welcome to the **Git & Deploy Playground**! 🚀

This beginner-friendly frontend project is designed for hands-on workshops where you learn how to take a website from code on your computer all the way to a live, published site on the internet using **Git**, **GitHub**, and **Vercel**.

Zero prior coding or Git experience is required!

---

## 📁 Project Structure

Here is a quick tour of the files in this project:

| File | What it does |
| :--- | :--- |
| **`index.html`** | The main home page. Contains the structure, headings, buttons, and concepts section. |
| **`about.html`** | The about page. Explains what Git, GitHub, and Vercel do, plus deployment steps. |
| **`style.css`** | The stylesheet. Controls colors, fonts, spacing, cards, and mobile responsiveness. |
| **`script.js`** | The JavaScript file. Adds interactivity to the "Try It" button on the home page. |
| **`README.md`** | This guide! Contains instructions for students and workshop attendees. |

---

## 🛠️ Key Concepts in Simple Words

- **Git:** A program installed on your computer that acts like an "undo history" or "save points in a game". It tracks every edit you make to your files.
- **GitHub:** A website in the cloud that stores copies of your Git repositories. It lets you share code and collaborate with others.
- **Vercel:** A free cloud platform that takes your code from GitHub and turns it into a live public website with a real URL (e.g., `https://your-project.vercel.app`).

---

## 📥 Step 1: Fork and Clone the Repository

### A. Fork the Repository (Make Your Own Copy on GitHub)
1. Open this repository's page on [GitHub.com](https://github.com).
2. Look at the top-right corner of the page and click the **Fork** button.
3. Under "Owner", choose your personal GitHub account, then click **Create fork**.
4. You now have your very own personal copy of the repository under your GitHub account!

### B. Clone the Repository (Download to Your Laptop)
1. On your forked repository page, click the green **<> Code** button.
2. Make sure **HTTPS** is selected and copy the URL shown (it will look like `https://github.com/YOUR-USERNAME/git-deploy-playground.git`).
3. Open your terminal or command prompt (Terminal on macOS/Linux, Git Bash or PowerShell on Windows).
4. Run the following command (replace the URL with your copied link):
   ```bash
   git clone https://github.com/YOUR-USERNAME/git-deploy-playground.git
   ```
5. Navigate into the downloaded folder:
   ```bash
   cd git-deploy-playground
   ```

---

## 🌐 Step 2: Open the Website Locally

You don't need any server, Node.js, or installation to run this website!

1. Open your computer's file explorer and find the project folder.
2. Double-click **`index.html`** (or right-click and choose **Open with > Google Chrome / Edge / Firefox / Safari**).
3. The website will open in your browser!
4. Click the **Try It** button to test the JavaScript interaction.
5. Click **About** in the navigation bar to visit the second page.

---

## ✏️ Step 3: Make a Small Change to the Code

Now it is time to customize your website!

1. Open the project folder in your favorite code editor (such as VS Code or Notepad).
2. Open **`index.html`**.
3. Locate line 28 with the main heading:
   ```html
   <h1>From Code to Live Website</h1>
   ```
4. Change it to something personal, for example:
   ```html
   <h1>Welcome to Alex's First Live Website!</h1>
   ```
5. Save the file (`Ctrl + S` on Windows or `Cmd + S` on Mac).
6. Go back to your browser and refresh the page (`F5` or `Ctrl + R` / `Cmd + R`). You should see your new heading appear immediately!

---

## 💾 Step 4: Save and Push Your Changes with Git

Now we will record this change in Git and upload it to GitHub.

Open your terminal inside the project directory and run these 4 commands:

### 1. Check what changed
```bash
git status
```
*Explanation:* Shows modified files in red. You will see that `index.html` has been changed.

### 2. Stage your changes
```bash
git add index.html
```
*(Tip: You can also run `git add .` to stage all modified files at once.)*  
*Explanation:* Puts your changes into the "staging area", preparing them to be saved.

### 3. Commit your changes (Save a snapshot)
```bash
git commit -m "Update home page heading with my name"
```
*Explanation:* Creates a permanent checkpoint with a short, descriptive message explaining what you changed.

### 4. Push your changes to GitHub
```bash
git push origin main
```
*Explanation:* Uploads your local commits to your online repository on GitHub. If you refresh your GitHub repository page in the browser, you will see your new commit!

---

## 🚀 Step 5: Deploy Your Website Live with Vercel

Now, let's publish your website so anyone with a link can see it.

1. Go to [vercel.com](https://vercel.com) and click **Sign Up** (or **Log In**).
2. Select **Continue with GitHub** to sign in using your GitHub account.
3. On the Vercel dashboard, click **Add New...** in the top right and select **Project**.
4. You will see a list of your GitHub repositories. Find your forked `git-deploy-playground` repository and click **Import**.
5. On the **Configure Project** screen:
   - **Project Name:** Keep the default or give it a custom name.
   - **Framework Preset:** Leave as `Other` (since this is pure static HTML/CSS/JS).
   - **Root Directory:** `./` (default).
   - Do NOT change Build & Output settings or Environment Variables (none are needed).
6. Click the blue **Deploy** button.
7. Wait 10 to 20 seconds. Confetti will appear! 🎉
8. Click the preview window or the **Visit** link to open your live website URL (e.g., `https://git-deploy-playground-xyz.vercel.app`).

---

## 🔄 Step 6: Verify Automatic Redeployment (Continuous Deployment)

The best part of modern web development is **Continuous Deployment**: every time you push code to GitHub, Vercel updates your live site automatically!

Let's test it:

1. Open **`style.css`** in your editor.
2. Find line 9:
   ```css
   --purple-accent: #6f42c1;
   ```
3. Change the color code to another color you like (e.g., `#2563eb` for blue or `#059669` for emerald green).
4. Save the file.
5. In your terminal, run:
   ```bash
   git add style.css
   git commit -m "Change accent color"
   git push origin main
   ```
6. Go to your Vercel project dashboard. You will see Vercel immediately detect your new commit and start a new deployment.
7. Once finished (a few seconds), refresh your live Vercel URL. Your new color will be live for anyone in the world to see!

---

## 🎓 Summary of What You Learned

- How to **Fork** and **Clone** open-source code from GitHub.
- How to write and preview **HTML, CSS, and JavaScript** locally.
- How to use the fundamental Git workflow: **`status` &rarr; `add` &rarr; `commit` &rarr; `push`**.
- How to connect GitHub to **Vercel** for instant, automated website hosting.
