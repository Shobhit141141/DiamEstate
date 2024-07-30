# <img src='https://github.com/user-attachments/assets/843b6cbc-d18b-4e4b-ac3d-dfaabdc25977' width="50" />  DiamEstate : Real Estate tokenization dApp
### Fragment the Estate 🏨, Unite the Opportunity 💰!

![ss](https://github.com/user-attachments/assets/b14f1f6d-321e-4e3e-af5f-d16505410ca4)


## Introduction
Welcome to the DiamEstate! It is real estate tokenization platform built on top of Diamante Blockchain, Our goal is to build a platform that allows for the tokenization of real estate properties, enabling fractional ownership. This innovative approach makes real estate investment more accessible and opens up new opportunities for a wider range of investors.

## Overview
This platform has a user-friendly interface where properties can be listed and tokens representing fractional ownership can be issued. It includes robust systems for managing property information and verifying ownership, ensuring all transactions are secure and transparent. By integrating payments, the platform facilitates seamless handling of transactions and distributions. This platform directly ties physical real estate to digital tokens or assets, bridging the gap between traditional real estate and modern financial and blockchain technology. This project aims to revolutionize the real estate market by leveraging blockchain technology to enhance security, transparency, and accessibility.

## The Problems DiamEstate solve :
- Significant capital required to invest in real estate.
- Lack of Liquidity in the real estate sector.
- Limited opportunities for average investors to participate in the real estate market.
- Wealth creation and investment diversification are restricted to those who have huge capital and resources.
- Complex legal processes that are time-consuming and costly.
- The real estate market is typically controlled by a few centralized entities, restricting broader participation and stifling innovation.
- Real estate transactions often suffer from a lack of transparency, leading to mistrust and potential fraud in the market.
- Investors are frequently worried about the security of their investments, fearing loss or fraud due to insufficient security measures.
  
## App Working Flow with Screenshots

### Authentication and Authorization
- Users start by signing up on the platform, providing essential information to create an account.
- Secure authentication and authorization is ensured using JWT for a seamless and safe user experience.
- Account data, such as user ID, is linked to the corresponding public address on the Diamante blockchain using manage data operations, ensuring seamless connectivity between web2 and web3 credentials.
![signup](https://github.com/user-attachments/assets/330edbb5-e571-47f2-b0ec-abffe60a6f70)

- Users can also connect their Diam wallet to the platform for authentication purpose.
- This integration ensures secure and transparent handling of transactions.
![wallet](https://github.com/user-attachments/assets/30bf28cc-aeaa-4c4c-80f4-d7aa0c0f3821)

### Account balance and fund
- Account balance is fetched from Diamante chain for the logged in account using their public address.
- Users can see and copy their public address from there.
- There is a fund button provided to fund the account using testnet faucets so that account gets activated on Diamante chain.
![image](https://github.com/user-attachments/assets/591b8987-e765-461d-bb6c-d3af3c00d6e3)


### Marketplace of listed properties
- The marketplace showcases various listed properties available for investment.
- Users can browse through detailed listings, filter by criteria, and select properties of interest.
![home](https://github.com/user-attachments/assets/8ad41c9a-92f0-4376-a6f5-1e1426b41c71)


### Property details
- Detailed information about each property is provided, including location, valuation, ownership history, current investsors, and token or asset details.
- Users can view images, read descriptions, and assess investment opportunities.
![detail](https://github.com/user-attachments/assets/94e2e89c-8f22-4859-b6c9-3a261a892c9f)


### Investment and Payements
- Users can invest in properties by purchasing tokens representing fractional ownership.
- Investing in the property will transfer the property minted tokens (or assets) from the distribution address of owner to the investor public address.
- Usera can also buy 100% property by directly paying DIAM Coins to owner. 
- The investment process is straightforward, ensuring a good user experience.
![invest](https://github.com/user-attachments/assets/1c8ad0e7-7217-4886-9186-c0f1011d8c72)


### Transaction Ledger
- A comprehensive transaction ledger is fetched from Diamante chain to show on our platform, allowing users to track their investments and transactions.
- Detailed records of each transaction enhance transparency and provide users with full control over their investment activities.
![transactions](https://github.com/user-attachments/assets/787df62c-5390-4b70-8a91-f62a116886c0)


### List your own property
- Property owners can list their properties on the platform for tokenization.
- For each new listed property, tokens (resprsenting fractional share of property) will be issued from public address to the distribution address of the owner by creating trustline between them, from there it can be further transfered.
- User can provide the total market suuply or limit of token along with its name based on which per token price is calculated.
- The listing process includes providing property details, images, and setting token parameters, ensuring properties are accurately represented.
![list](https://github.com/user-attachments/assets/87f9e3aa-ed52-48cb-8813-9c2318f0ce0a)


### Account Dashboard - Investments, Listings and Transactions
- Users have a personalized account dashboard where they can view and manage their investments, listings, and transactions.
- The dashboard provides a clear overview of the user's activities on the platform, enhancing user experience and engagement.
![profile](https://github.com/user-attachments/assets/183c63d6-1ae0-4a07-96c1-be64f1c2cb2a)


## Technology Stack
![React.js](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Diamante Net Blockchain](https://img.shields.io/badge/Diamante%20Net%20Blockchain-123456?style=for-the-badge&logo=blockchain&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

## System Design
https://app.eraser.io/workspace/BooPdazG4T9LzGsgvzfW?origin=share
![Capture](https://github.com/user-attachments/assets/95dddc01-d85f-4046-a939-8451ecdab905)

## Demonstration Video

https://youtu.be/clzc8jV0aBA?si=cZRDZUjJZvBtwbmt
[![Video Preview](https://img.youtube.com/vi/clzc8jV0aBA/0.jpg)](https://youtu.be/clzc8jV0aBA)


## Pitch Deck
https://www.canva.com/design/DAGLAxYGMj4/RRxgb4WDgwHXZSGRyx-p7Q/edit?utm_content=DAGLAxYGMj4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton


