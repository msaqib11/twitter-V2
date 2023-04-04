Twitter-v2
Twitter-v2 is a Twitter clone built using Next.js, Tailwind CSS, and TypeScript. It allows users to post tweets, like and retweet posts, follow other users, and view their own and others' profiles.

Installation
To install and run the project locally, follow these steps:

Clone the repository to your local machine using the following command:

bash
Copy code
git clone https://github.com/msaqib11/twitter-v2.git
Install the project dependencies by running the following command in the project directory:

Copy code
npm install
Create a .env.local file in the project root directory and add the following environment variables:

makefile
Copy code
NEXT_PUBLIC_TWITTER_API_KEY=<your-twitter-api-key>
NEXT_PUBLIC_TWITTER_API_SECRET=<your-twitter-api-secret>
Note: You will need to create a Twitter developer account and create a new app to obtain the API key and secret.

Start the development server by running the following command in the project directory:

arduino
Copy code
npm run dev
The project should now be running at http://localhost:3000.

Dependencies
This project uses the following dependencies:

next
react
react-dom
tailwindcss
typescript
heroicons/react
react-twitter-embed
Contributing
If you find a bug or have a feature request, please open an issue on the project's GitHub repository. Pull requests are welcome!

License
This project is licensed under the MIT License. See the LICENSE file for more information.