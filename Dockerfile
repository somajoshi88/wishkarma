FROM node:latest

WORKDIR /app
#copy package to install dependencies
COPY package*.json ./

RUN npm install

# Copy all files from current directory to work directory in the container
COPY . .

# Replace username, password, host, port, and database with your MongoDB Atlas credentials
# and database details. This will set the MONGO_URI environment variable in the Docker container, 
# allowing our application to connect to MongoDB Atlas.
ENV MONGO_URI=mongodb+srv://<username>:<password>@cluster0.cpt3vkn.mongodb.net/?retryWrites=true&w=majority&appName=cluster0

EXPOSE 2000

CMD ["npm", "start"]
