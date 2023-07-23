## Hello team! Here is your test task.


## Steps:

1. Create and inialize a new project: create a new folder -> open it in vs code editor -> open terminal from the folder root and run the command - npm init or npm init -y
2. Install locally or globally typescript 
npm install typescript --save-dev (or npm install typescript -g)
Check that typescript is successfully installed with the command-
tsc -v
3. Add tsconfig.json file with the next command
tsc --init
4. Initialize tsconfig.json file 
npx tsconfig.json
5. Create a new private remote repository in our GitHub's organization - GM-internship.
6. Initialize git repository locally (git init -> git remote add origin <remote repository URL>). Add README.md file and briefly describe your project. Also add .gitignore file and write here files/foulders which you wanna ignore (at least node_modules folder should be added).
7. Commit all changes in your project and push them to the remote repo (push master branch with 1 commit).
8. Create and switch to a new branch where you’ll work in the scope of this homework (git checkout -b <new-branch-name>)
9. Install an additional package - ts-node with the command -
npm install -g ts-node
You’ll need it for executing TypeScript file -
ts-node ts-file-name-or-path-to-your-ts-file.ts
https://www.educative.io/answers/how-to-execute-the-typescript-file-using-the-command-line 
10. Create a new typescript file and complete the next tasks:
- Create 3 variables with number, string, boolean type definitions and initialize them with correct data (try to set invalid ones and make sure that an appropriate error displays and then comment them).
- Create an Employee object and set a few required properties (id, firstName, lastName, email) and two optional (phone, hobby), describe the type of object and initialize it.
*id can accept numeric or string data types!!!
- Create an interface named Animal and describe a few required and optional properties at your choice, after that create 2 objects based on the Animal interface.
- Write the function arithmeticMeanOfTwoNumbers(firstNumber, secondNumber) and implement its logic. Don't forget to describe the data types of function parameters and the value it returns. Call the function with different arguments and output results to the console.
11. Commit and push completed HW to the remote repo and create a pull request into master/main branch. Please request a code review in maaaariana

## Good luck and have a nice day!


## Useful links:
- https://www.contentful.com/blog/what-is-typescript-and-why-should-you-use-it/ 
- https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html 


