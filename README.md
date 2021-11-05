# Express Back-end


## Available Scripts

In the project directory, you can run:

### `Docker build`

docker build -t my_app_express .

### `Docker run`

docker network create app

docker run -d --net=app --name redis redis

docker run -d -p 8000:8000 --name app my_app_express




