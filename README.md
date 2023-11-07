<a id="readme-top" name="readme-top"></a>

<!-- PROJECT LOGO -->
<img src="https://i.imgur.com/7wlnLSi.png" align="right" />

# Crwn Clothing

> A cutting-edge Ecommerce platform meticulously crafted using React, seamlessly integrated with the power of Stripe for secure and efficient payment processing.

<p align="right">
    <a href="https://lighthearted-fairy-6e68f0.netlify.app">View Demo</a>
    ·
    <a href="https://example.com">Report Bug</a>
    ·
    <a href="https://example.com">Request Feature</a>
</p>
<p align="right">
  <a href="#getting-started"><strong>Explore the docs »</strong></a>
</p>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#preview">Preview</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Home Page][product-screenshot]](https://github.com/igorcossta/crwn-clothing)

Crwn Clothing is a dynamic Ecommerce platform that marries the power of React with Stripe for seamless, secure payment transactions. Here's why Crwn Clothing is your ultimate companion:

Here's why:

- Streamlined Shopping: Crwn Clothing makes online shopping a breeze, allowing you to focus on what matters most.
- Enhanced Customer Engagement: React's dynamic user interfaces enable you to create immersive shopping experiences. Interactive product displays and responsive design are just a few of the features that will captivate your customers.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

The Yummy application is meticulously crafted with an array of cutting-edge technologies to ensure a seamless and
delightful user experience. Here's a closer look at the technologies powering Yummy:

- [React] - The bedrock of our application, empowering it with unparalleled performance and seamless user experiences.
- [Stripe] - Trust in the gold standard of payment processing, where the security of your customers' financial information is our top priority.
- [Firebase] - Your gateway to secure and efficient user authentication, safeguarding user data with cutting-edge technology.
- [Redux] - The backbone of our state management, ensuring your application's data remains organized, efficient, and reliable.
- [VSCode] - Our development environment of choice, delivering the ideal platform for streamlined and productive coding experiences.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

Follow the instructions to RUN `Crwn Clothing` on your machine:

### Prerequisites

To run the application, you'll need the following essential technologies and configurations:

* Create an environment (ENV) file to store configuration settings, then proceed to create a Firebase application. Once that's done, navigate to the `env` file to configure its properties:
  ```yaml
  REACT_APP_APIKEY=<key>
  REACT_APP_AUTHDOMAIN=<key>
  REACT_APP_PROJECTID=<key>
  REACT_APP_STORAGEBUCKET=<key>
  REACT_APP_MESSAGINGSENDERID=<key>
  REACT_APP_APPID=<key>
  REACT_APP_MEASUREMENTID=<key>
  ```

* Register for a Stripe account and generate an API Key, then proceed to the `env` file for integration:
  ```yaml
  REACT_APP_STRIPE_PUB_KEY=<key>
  ```

### Installation

You can now download and set up the project on your machine by following these simple steps:

1. Use either of the following commands to clone the Yummy repository to your local machine:
   ```sh
   git clone git@github.com:igorcossta/crwn-clothing.git
   git clone https://github.com/igorcossta/crwn-clothing.git
   ```

2. Open the project in your favorite IDE.

3. Download the dependencies with the command:
   ```sh
   npm install
   ```

3. Run the application and go to `localhost:3000`
   ```sh
   npm start
   ```

With these straightforward steps, you'll have the application up and running.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- PREVIEW -->

## Preview

[![Shop Page][shop-page]](https://github.com/igorcossta/reddit-clone)
[![Category Page][category-page]](https://github.com/igorcossta/reddit-clone)
[![Login Page][login-page]](https://github.com/igorcossta/reddit-clone)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

It appears that I currently have some free time and no pressing tasks to address.

See the [open issues](https://github.com/igorcossta/reddit-clone/issues) for a full list of proposed features (and known
issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<br>

<!-- MARKDOWN LINKS & IMAGES -->

[product-screenshot]: https://user-images.githubusercontent.com/65612587/157327203-6c2a3e15-bf93-47d1-a2dc-0fa851278181.png
[shop-page]: https://user-images.githubusercontent.com/65612587/157327230-c1a62306-9c39-4f4f-be17-3615288934ee.png
[category-page]: https://user-images.githubusercontent.com/65612587/157327435-bc4c749d-8989-4a7a-8748-cb0b4d90444c.png
[login-page]: https://user-images.githubusercontent.com/65612587/157327396-05fb1e1b-e390-4bd6-960e-0f4dfc704a4e.png
