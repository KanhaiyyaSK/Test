<br />
<div align="center" style="display: flex; justify-content: center;">
  <img
    src="https://github.com/KanhaiyyaSK/MyHealthMate/assets/97464146/af2c76c5-2204-4ae4-ac59-1379c826b155"
    alt="MyHealthMate"
    style="display: block; margin: 0 auto;"
  />
</div>
</div>


MyHealthMate is a personal medical tracker that lets users manage their well-being online by helping them record and monitor their health particulars. The vision behind this app is to empower everyone with full control over their medical data.

## Features
- View everything MedPal has to offer collectively in our dashboard<br/><br/>
- Register

- Login

- Profile

- Update Password


- Add To Cart

- Shipping Details and Payment




- Products and Filters <br/><br/>






## Tech Stack

- <img height="20" src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="React" title="React" /> React (Front-end)
- <img height="22" src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" alt="Node.js" title="Node.js" /><img height="22" src="https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png" alt="Express" title="Express" /> Express and Node.js (Back-end)
- <img height="22" src="https://user-images.githubusercontent.com/25181517/182884177-d48a8579-2cd0-447a-b9a6-ffc7cb02560e.png" alt="mongoDB" title="mongoDB" /> MongoDB (Database)
- <img height="22" src="https://user-images.githubusercontent.com/25181517/192109061-e138ca71-337c-4019-8d42-4792fdaa7128.png" alt="Postman" title="Postman" /> Postman (API Testing)
- <img height="22" src="https://user-images.githubusercontent.com/25181517/192108891-d86b6220-e232-423a-bf5f-90903e6887c3.png" alt="Visual Studio Code" title="Visual Studio Code" /> VS Code (Code editor)
- Vercel (Front-end hosting)
- Render (Back-end hosting)

## Getting Started

Follow these steps to set up the project on your local machine:

1. Clone the repository

```
git clone https://github.com/KanhaiyyaSK/AniMates
```



2. Install dependencies for both the frontend and backend

```
npm install
cd backend
npm install
```

3. Create a `.env` file in the backend directory and add the following variables:

```
PORT = 5000,

DB_URI= <mongoDB URL>

JWT_SECRET= <>
JWT_EXPIRE=<>
COOKIE_EXPIRE=<>


SMPT_SERVICE = <>
SMPT_MAIL = <>
SMPT_PASSWORD:<>


SMPT_HOST= <>
SMPT_PORT= <>


CLOUDINARY_NAME = <>
CLOUDINARY_API_KEY = <>
CLOUDINARY_API_SECRET = <>

# FROTNEND_URL = "http://localhost:3000"


STRIPE_API_KEY = <>

STRIPE_SECRET_KEY = <>
```



4. Start the frontend and backend servers in separate terminal windows

```
# In the frontend directory
npm start

# In the backend directory
npm run dev
```

Visit `http://localhost:3000` to view the application in your browser.



## Future Improvements

As we continue to develop and improve AniMates, here are some features and improvements we plan to add in the future:
- Store and analyze lab vitals in charts for easy insights 
- Push notifications for mobile and browser to remind users of appointments, medicine refills, and other important events.
- Port the application to a mobile app for more seamless integration with users' daily routines.
- Develop a business model that includes a Pro version with advanced features, as well as partnerships with healthcare providers and insurance companies.

We are always looking for feedback and suggestions from our users, so if you have any ideas or requests for future improvements, please don't hesitate to reach out to us!

## Deployment 🔗

The frontend is deployed on [Vercel], and the backend is deployed on [Render]. To deploy your own version, follow the instructions provided by the respective platforms.