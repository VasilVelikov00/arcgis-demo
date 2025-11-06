# ArcGis Demo

This is a demo repository that showcases a simple FastAPI server that serves
a GeoJSON response with points and a React client that shows a map of
Bulgaria rendered with ArcGis, containing these points.

## Server

Navigate to the server directory:

```shell
cd server
```

Activate the python virtual environment:

```shell
source .venv/bin/activate
```

Install the dependencies:

```shell
pip install
```

Start the FastAPI server in development mode:

```shell
fastapi dev main.py
```

This starts the server on the default 8000 port.

## Client

In a separate shell, navigate to the client directory:

```shell
cd client
```

Install dependencies:

```shell
bun install
```

**NOTE**
> You'll need [bun](https://bun.com/docs/installation) installed on your system

Copy the `.env.example` file into a new `.env.local` file:

```shell
cp .env.example .env.local
```

If you changed the port the FastAPI server is running on, make sure to
reflect that in the `.env.local` file.

Start the client in development mode:

```shell
bun run dev
```

By default, the client runs on `http://localhost:5173`.

Navigate to the client, and you should see the map rendered with the points
from the server response.