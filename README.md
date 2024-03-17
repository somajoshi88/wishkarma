# Wishkarma
# Employee Management System </p>
This project is an Employee Management System designed to handle various operations related to employees, departments, and payouts. It includes functionalities such as adding employees, updating employee details, managing departments, uploading payout data, and generating reports based on employee payouts.

# Features
**Employee Management:** Add, update, and delete employee records.</p>
**Department Management:** Manage departments and assign employees to departments.</p>
**Payout Management:** Upload payout data for employees, calculate total payouts, and generate reports.</p>

# Technologies Used
**Node.js**: Backend runtime environment for server-side logic.</p>
**MongoDB:** NoSQL database for storing employee and department information.I have used MongoDB Atlas to quickly setup and simplifies database management, improves application scalability and availability, enhances security, and provides a cost-effective solution for hosting MongoDB databases in the cloud.</p>
**Mongoose:** MongoDB object modeling tool for Node.js.</p>
**Postman:** API development and testing tool for interacting with backend APIs.</p>
**Git:** Version control system for tracking changes to project files.</p>
**GitHub:** Hosting platform for storing Git repositories and collaborating with other developers.</p>

# Installation
Clone the repository to your local machine:</p>
```https://github.com/somajoshi88/wishkarma.git``` </p>
**Install dependencies:** </p>
```
    cd wishkarma
    npm install 
```

Before running the application, make sure to set up the following environment variables.
**NODE_ENV**: Specifies the environment mode, such as development, production, or testing.
**PORT**: Specifies the port number on which the server will run.
**MONGO_URI**: Specifies the connection string for MongoDB Atlas, which includes the username, password, host, and other parameters required to connect to your MongoDB database.:

```
NODE_ENV=development
PORT=2000
```

# MongoDB URI
```
MONGO_URI=mongodb+srv://<userbane>:<password>@cluster0.cpt3vkn.mongodb.net/?retryWrites=true&w=majority&appName=cluster0
```

## Scripts

To start the application in different environments, you can use the following npm scripts defined in the `package.json` file:
```
- `npm start`: This script starts the server in production mode. It sets the `NODE_ENV` environment variable to `production` and runs the `server` file using Node.js.
- `npm run dev`: This script starts the server in development mode using `nodemon`. It automatically restarts the server whenever you make changes to your code, making it convenient for development. 
```

To run these scripts, open a terminal or command prompt, navigate to your project directory, and execute the desired npm command.



# DB setup:
Postman collection can be used to setup DB </p>
**Create Department :** postman collection **Department.postman_collection.json** can be used to create 5 deparments
    Create Research and Development Department </p>
    ```{
        "name": "Research and Development",
        "duties": "Innovation, Product Development",
        "startDate": "2023-05-15"
    }``` </p>
    Create Marketing Department </p>
    ```{
        "name": "Marketing",
        "duties": "Advertising, Branding",
        "startDate": "2023-03-15"
    }``` </p>
    Create Finance Department </p>
    ```{
        "name": "Finance",
        "duties": "Budgeting, Financial Analysis",
        "startDate": "2023-04-15"
    }``` </p>
    Create Human Resources Department </p>
    ``` {
        "name": "Human Resources",
        "duties": "Recruitment, Employee Relations",
        "startDate": "2023-03-14"
    }``` </p>
    Create Transport Department</p>
    ``` {
        "name": "Transport",
        "duties": "Managing transport",
        "startDate": "2023-02-14"
    }``` </p>

**Create employee :** postman collection **Employee.postman_collection.json** can used to Create List of Employees</p>
```
[
    {
        "_id": "65f36f3b5b422bf3e6afc7b4",
        "name": "Human Resources",
    	"duties":"Managing employee relations, recruitment, training, benefits administration, HR policy development",
        "startDate": "2023-03-14T00:00:00.000Z",
        "deptHead": "65f6ecff78a4f53332cbf404"
    },
    {
        "_id": "65f6d9b29e2315dd6f301aff",
        "name": "Marketing",
        "duties": "Advertising, Branding",
        "startDate": "2023-03-15T00:00:00.000Z",
        "deptHead": "65f6ecff78a4f53332cbf409"
    },
    {
        "_id": "65f6d9f29e2315dd6f301b01",
        "name": "Finance",
        "duties": "Budgeting, Financial Analysis",
        "startDate": "2023-04-15T00:00:00.000Z",
        "deptHead": "65f6ecff78a4f53332cbf40e"
    },
    {
        "_id": "65f6dc629e2315dd6f301b09",
        "name": "Research and Development",
        "duties": "Innovation, Product Development",
        "startDate": "2023-05-15T00:00:00.000Z",
        "deptHead": "65f6ecff78a4f53332cbf412"
    },
    {
        "_id": "65f6de989e2315dd6f301b0c",
        "name": "Transport",
        "duties": "Managing transport",
        "startDate": "2023-02-14T00:00:00.000Z",
        "deptHead": "65f6ecff78a4f53332cbf417"
    }
]
``` 
</p>

**Update List of Deparments deptHead:**</p>
```
[
    {
        "_id": "65f36f3b5b422bf3e6afc7b4",
        "name": "Human Resources",
    	"duties":"Managing employee relations, recruitment, training, benefits administration, HR policy development",
        "startDate": "2023-03-14T00:00:00.000Z",
        "deptHead": "65f6ecff78a4f53332cbf404"
    },
    {
        "_id": "65f6d9b29e2315dd6f301aff",
        "name": "Marketing",
        "duties": "Advertising, Branding",
        "startDate": "2023-03-15T00:00:00.000Z",
        "deptHead": "65f6ecff78a4f53332cbf409"
    },
    {
        "_id": "65f6d9f29e2315dd6f301b01",
        "name": "Finance",
        "duties": "Budgeting, Financial Analysis",
        "startDate": "2023-04-15T00:00:00.000Z",
        "deptHead": "65f6ecff78a4f53332cbf40e"
    },
    {
        "_id": "65f6dc629e2315dd6f301b09",
        "name": "Research and Development",
        "duties": "Innovation, Product Development",
        "startDate": "2023-05-15T00:00:00.000Z",
        "deptHead": "65f6ecff78a4f53332cbf412"
    },
    {
        "_id": "65f6de989e2315dd6f301b0c",
        "name": "Transport",
        "duties": "Managing transport",
        "startDate": "2023-02-14T00:00:00.000Z",
        "deptHead": "65f6ecff78a4f53332cbf417"
    }
]
```
</p>

**Payout:** postman collection **Payout.postman_collection.json** can be used to
uplaod Payout by uploading **payouts.csv** using postman "Upload Payout" collection

**Future Enahncemnt** : following enhancment can be done in future

**User Authentication and Authorization:** Implement user authentication and authorization mechanisms to secure access to sensitive data and functionalities within your application. You can use libraries like Passport.js for authentication and define roles and permissions for different user types.

**Error Handling and Logging**: Enhance error handling by implementing centralized error logging and monitoring to track and debug issues effectively. You can use logging libraries like Winston or Morgan to log errors and events to a centralized location or external services like Loggly or Papertrail.

**Input Validation and Sanitization:** Improve input validation and sanitization to prevent security vulnerabilities such as SQL injection, XSS attacks, and CSRF attacks. Use libraries like Express Validator or JOI to validate and sanitize user inputs before processing them. 

**Caching:** Implement caching mechanisms to improve the performance and scalability of your application. You can cache frequently accessed data using in-memory caching solutions like Redis or external caching services like Memcached or Amazon ElastiCache.

**Performance Optimization:** Optimize the performance of your application by identifying and addressing performance bottlenecks, such as slow database queries, inefficient algorithms, or resource-intensive operations. Use profiling tools like New Relic or YourKit to identify performance issues and optimize critical paths.

**Load Balancing and Scaling:** Implement load balancing and horizontal scaling to distribute incoming traffic across multiple server instances and handle increased load efficiently. Use load balancers like NGINX or HAProxy to balance the traffic and auto-scaling solutions provided by cloud platforms to scale your application dynamically based on demand.

**Monitoring and Metrics:** Set up monitoring and metrics collection to gain insights into the health, performance, and usage of your application. Use monitoring tools like Prometheus or Datadog to collect metrics, set up alerts for critical events, and analyze performance trends over time.

**API Documentation:** Document your API endpoints using tools like Swagger or OpenAPI to provide clear and comprehensive documentation for developers and consumers of your API. This will improve the usability and adoption of your API and facilitate integration with other systems.

**Testing:** Implement automated testing practices, including unit tests, integration tests, and end-to-end tests, to ensure the reliability and stability of your application. Use testing frameworks like Jest, Mocha, or Cypress to write and run tests that cover critical functionalities and edge cases.

**Continuous Integration and Deployment (CI/CD):** Set up CI/CD pipelines to automate the build, testing, and deployment processes of your application. Use CI/CD tools like Jenkins, CircleCI, or GitHub Actions to automate repetitive tasks, streamline development workflows, and ensure consistent quality across releases.

**hardcoded database user name and password can be configured in env variable** :  To avoid hardcoding sensitive information like database passwords directly into our code or configuration files, we can use environment variables. below steps can be followed to achive the same: </P>
 

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Use Environment Variables:** Store your sensitive information such as database passwords in environment variables instead of hardcoding them in your codebase. This way, the sensitive information remains separate from your code and configuration files.</P>

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Load Environment Variables:** Modify your application code to load environment variables at runtime. Most programming languages and frameworks provide built-in support for loading environment variables. For example, in Node.js, you can use the process.env object to access environment variables.</P>

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Set Environment Variables:** Set the environment variables containing your sensitive information in your deployment environment. This can be done manually or using configuration management tools like Docker, Kubernetes secrets, or server configuration tools.</P>
   
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Docker file:**
   
   ```FROM node:latest

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
```
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Build your Docker image, navigate to the directory containing the Dockerfile and run:**</P>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``` docker build -t wishkarma_docker_image . ```</P>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **Run the container based on the built image, use:**</P>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```docker run -p 2000:2000 your-image-name```
