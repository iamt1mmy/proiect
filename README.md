Curs2 - 18.Octombie.2024

## How to work with Docker and Yarn and Vite

### Create a new application

- step 1: open Docker application
- step 2: open the terminal (default window terminal)
- step 3: go to the project foder
  - `cd path/to/folder`
- step 4: create the project docker stucture
  - create `.docker/Dockerfile`  
    ```
    FROM node:20-alpine3.18

    RUN corepack enable yarn
    RUN yarn config set --home enableTelemetry 0
    ```
  - create `compose.yaml`
    ```
    services:
        app:
            build: .docker
            stdin_open: true
            tty: true
            container_name: app.curs1
            environment:
                NODE_ENV: development
                CHOKIDAR_USEPOLLING: true
                CHOKIDAR_INTERVAL: 100
            ports:
                - "5173:5173"
            expose:
                - "5173"
            volumes:
                - .:/app
                # exclude
                - /app/.git/
            working_dir: /app
            user: 1000:1000
    ```
- step 5: rename `container_name` from `compose.yaml` as you want
- step 6: start the container
  - `docker compose up -d`
- step 7: start the docker terminal 
  - `docker compose exec app sh`
  - `app` is the `app` form `composer.yaml` service
  - `corepack install -g yarn@4.5.1`
  - `yarn -v`
  - `yarn config set --home enableTelemetry 0`
  - `yarn set version 4.5.1`
- step 8: to get out of the container terminal write `exit` in terminal
- step 9: to close and remove the container
  - `docker compose down`
- step 10: if I want to install something container using `.Dockerfile` I need to run:
  - `docker compose down`
  - `docker compose build`
- step 11: in docker terminal (see step 7) install a new vite vanilla project
  - `yarn create vite`
  - he will ask for the project name and other things like: 
    - ✔ Project name: … *.*
    - ✔ Select a framework: › *Vanilla*
    - ✔ Select a variant: › *JavaScript*
<!-- - step 12: `vite` will create a new prject folder, go in that folder: 
  - `cd curs1` -->
- step 13: run the install command to install the project packages
  - `yarn install` or simple `yarn`
- step 14: change the `package.json` file to use `host` option
  - `"dev": "vite --host"` instead of `"dev": "vite"`
- step 15: run the script that you have in `package.json` file
  - `yarn dev` 

### How to add a new library package

You can add a new library by using the folowing command:
- `yarn add bootstrap`
- `yarn add tailwindcss postcss autoprefixer`
- `yarn dlx tailwindcss init -p`
  - style:
  ```
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

### How to remove a library package

You can remove a new library by using the folowing command:
- `yarn remove bootstrap`
- `yarn remove tailwindcss`