# Wishkarma
# Employee Management System </p>
This project is an Employee Management System designed to handle various operations related to employees, departments, and payouts. It includes functionalities such as adding employees, updating employee details, managing departments, uploading payout data, and generating reports based on employee payouts.

# Features
Employee Management: Add, update, and delete employee records.
Department Management: Manage departments and assign employees to departments.
Payout Management: Upload payout data for employees, calculate total payouts, and generate reports.

# Technologies Used
**Node.js**: Backend runtime environment for server-side logic.</p>
**MongoDB:** NoSQL database for storing employee and department information.</p>
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

Before running the application, make sure to set up the following environment variables
NODE_ENV: Specifies the environment mode, such as development, production, or testing.
PORT: Specifies the port number on which the server will run.
MONGO_URI: Specifies the connection string for MongoDB Atlas, which includes the username, password, host, and other parameters required to connect to your MongoDB database.:

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
