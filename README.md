# Blog Post App

This is a CRUD blog post application built with Django (backend) and React + Vite (frontend).

## Features

- View a list of blog posts
- Create a new blog post
- Update an existing blog post
- Delete a blog post

## Installation

### Backend (Django)

1. Navigate to the 'crud' folder containing the Django project.
2. Create virtual environment by running `python -m venv myenv`.
3. Activate virtual environment by running `.\myenv\Scripts\activate` for Windows and for Linux please run `source myenv/bin/activate`.
   [Note: in the requirement.txt file the aiohttp runs on Windows but if it is throwing any errors on Linux then it is recommended to remove it from requirements.txt and manually install it using command `python install aiohttp`...
5. Run `pip install -r requirement.txt` to install the dependencies.
6. Run `python manage.py migrate`. 
7. Run `python manage.py runserver` to start the backend server.

### Frontend (React + Vite)

1. Navigate to the 'client' folder containing the React project.
2. Run `npm install` to install the dependencies.
3. Run `npm run dev` to start the frontend development server.
