# Wind-Tails
<!-- <details>
<summary><h2>Project Overview</h2></summary> -->

We all hear that Tailwind CSS is a great way to rapidly build custom styles for your application, but never does anyone mention the hassle one has to go over to find the right classes for your envisioned style. Fret not! Presenting <b>Wind-Tails</b>, an Open Source application for Tailwind CSS Prebuilt Components. You don't need to go anywhere to search for your required tailwind classes. Find here, a visual representation of the effects of various classes, along with a playground which shows in real-time the effect of tweaking various parameters of the class. This allows you to pick a base style and tweak parts of it, as per your requirement! Currently supports the following elements,

- Buttons
<!-- 
</details> -->

<details>

<summary><h2>Installation Instructions</h2></summary>

### Install Dependencies
Firstly, Install all the required dependencies

```bash
npm i
# or
npm install
```

### Development Server

Then, run the development server,

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

### Accessing the Application
Open [http://localhost:3000](http://localhost:3000) on your browser to access the features of Wind-Tails.
      

</details>

<details>
<summary><h2>Usage Details</h2></summary>
     
Checkout the classes for the element you need. For example, if we needed classes for buttons, we would go to the buttons section, and there we can go over various prebuilt classes and their outputs. From there, copy the class which you find best suited for your purpose, or if you wish to tweak it a litte, go over to the playground, where you can paste in the class, and change parts of the class, to see its effect in real-time.


</details>

<details>
<summary><h2>Contribution Guidelines</h2></summary>

### Git

We prefer contributors to make use of Git rather than directly adding files via Github GUI. If the contributors don't have it installed, can [Click Here](https://git-scm.com/downloads) and download based on their Operating System configurations.

- Use the following commands for taking the Repository locally.
- Please ensure the directory is correct, before executing the commands.

```git
  git clone https://github.com/dcryptoniun/Wind-Tails.git
  cd ipropel-main

  git remote add origin https://github.com/dcryptoniun/Wind-Tails.git
  git branch -M feature-name
  OR
  git branch -M fix-name

  git add
  git commit -m "Commit Message as per Guidelines"

  git push origin feature-name
  OR
  git push origin fix-name
```

### Indentation

- We use 2 spaces, not tabs.

### Names

- Use `PascalCase` for type names
- Use `PascalCase` for enum values
- Use `camelCase` for function and method names
- Use `camelCase` for property names and local variables
- Use `whole words` in names when possible

### Types

- Do not export types or functions unless you need to share it across multiple components
- Do not introduce new types or values to the global namespace

### Comments

- Use JSDoc style comments for functions, interfaces, enums, and classes

### Strings

- Use "double quotes" for strings shown to the user that need to be externalized (localized)
- Use 'single quotes' otherwise
- All strings visible to the user need to be externalized

### Style

- Use arrow functions => over anonymous function expressions
- Only surround arrow function parameters when necessary. For example, (x) => x + x is wrong but the following are correct:

```js
x => x + x
(x, y) => x + y
<T>(x: T, y: T) => x === y
```

- Always surround loop and conditional bodies with curly braces
- Open curly braces always go on the same line as whatever necessitates them
- Parenthesized constructs should have no surrounding whitespace. A single space follows commas, colons, and semicolons in those constructs. For example:

```js
for (let i = 0, n = str.length; i < 10; i++) {
  if (x < 10) {
    foo();
  }
}

function f(x: number, y: string): void {}
```

<hr>
</details>

<details>
<summary><h2>Version Control</h2></summary>

### How to write commit messages?

- Every commit message should follow this template

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

where

- `type` can be any one of the following: **_feat, fix, chore, refactor, docs, style, test, perf, ci, build, revert_**
<details>
<summary><b>Commit Types</b></summary>
The commit type can include the following:

<br>

|  `Type`  |                                                               `Description`                                                                |
| :------: | :----------------------------------------------------------------------------------------------------------------------------------------: |
|   feat   |                                                a new feature is introduced with the changes                                                |
|   fix    |                                                           a bug fix has occurred                                                           |
|  chore   |           changes that do not relate to a fix or feature and don't modify src or test files (for example updating dependencies)            |
| refactor |                                        refactored code that neither fixes a bug nor adds a feature                                         |
|   docs   |                                   updates to documentation such as a the README or other markdown files                                    |
|  style   | changes that do not affect the meaning of the code, likely related to code formatting such as white-space, missing semi-colons, and so on. |
|   test   |                                                 including new or correcting previous tests                                                 |
|   perf   |                                                          performance improvements                                                          |
|    ci    |                                                       continuous integration related                                                       |
|  build   |                                       changes that affect the build system or external dependencies                                        |
|  revert  |                                                         reverts a previous commit                                                          |

<hr>
</details>

- `optional footer(s)` can be the issue ids of issues which are fixed by this commit (if any)

An example commit message:

```
fix: fix foo to enable bar

This fixes the broken behavior of the component by doing xyz.

BREAKING CHANGE
Before this fix foo wasn't enabled at all, behavior changes from <old> to <new>

Closes #123
```

For more details refer [How to write better git commit messages](https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/)

<hr>
<br>

### Things to do before pushing local changes

- Ensure all the changes in the commits follow the specified style guide

<br>

### Things to do after pushing local changes

- Once you push your local changes to your branch and if you feel that recent commits need to be merged, raise a PR.

<hr>
</details>

</details>

<details>
<summary><h2>License Information</h2></summary>
This project is under the MIT License. The MIT license gives express permission for users to reuse code for any purpose, even if code is part of proprietary software. As long as users include the original copy of the MIT license in their distribution, they can make changes or modifications to the code to suit their own needs.

</details>
