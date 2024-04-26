## Build Instruction

### For developer (Recommended)

Run `npm run start` in the project root folder.
The frontend will be on `http://localhost:1444` and server will be on `http://localhost:1443`

### For user

- Firstly, you need to install Docker
    - For Windows, you can install Docker Desktop: [here](https://docs.docker.com/desktop/install/windows-install/)
    - If you are using Linux, you should install Docker Engine, for working consistency in our workflow.: [here](https://docs.docker.com/engine/install/)

- After installed Docker, you can run `docker compose up` in the project root folder, the app will be on `http://YOUR_LOCAL_IP:1080`. (Login to your router network, usually 192.168.0.1 or 192.168.1.1 to obtain your local IP address, or use some app like Angry IP Scanner,...)