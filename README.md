# Discord Rich Presence Customizer 👀

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description

🎮 Discord Rich Presence Customizer is a TypeScript-based project that allows you to customize your Discord Rich Presence status. This guide will help you set up the project easily, even if you have no technical background.

## Prerequisites

Before starting, make sure you have the following installed on your system:

- Latest version of Node.js: [Download Node.js](https://nodejs.org/)

## Setup

1. **Discord Developer Portal 🖥️**
   - Go to the [Discord Developer Portal](https://discord.com/developers/applications) and log in to your Discord account.
   - Create a new application with a name of your choice, which will be displayed as your profile's activities.
   - Copy the **Client ID** from the **OAuth2** section inside the developer portal.

2. **Environment Variables ⚙️**
   - In the main project directory, create a new file called `.env` by referencing the provided `.example.env` file.
   - Replace the placeholder value for `CLIENT_ID` with the copied **Client ID**.

3. **Configuration 🛠️**
   - Open the `config.js` file located in the main project directory.
   - Edit the configuration options based on what you want to display on your Discord profile.

4. **Adding Images 🖼️**
   - Go back to the Discord Developer Portal.
   - In your application's settings, navigate to the **Rich Presence** tab and scroll down to the bottom.
   - Click on the **Add Image** button to upload the images you want to display on your Rich Presence.
   - Ensure you name the images properly, as the image name will be used as the `ImageKey` inside the config file.

5. **Starting the System ▶️**
   - For Developers:
     - Open your favorite package manager and install the project dependencies using either `npm`, `yarn`, or `pnpm`.
     - Run the command `npm run dev` or `yarn dev` or `pnpm dev` to start the system.

   - For Non-Technical Users:
     - Navigate to the `start` folder in the project directory.
     - Choose the folder corresponding to your operating system (Windows, Mac, Linux).
     - Inside the chosen folder, click on the `setup.bat` file to set up the project.
     - Then, click on the `run.bat` file to start the system.

6. **Enable Discord Setting ⚙️**
   - In your Discord settings, make sure to enable the option "Display current activities as a status message".

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
