# DMARC Data Viewer - Angular Project

## Description
This is an Angular-based application that fetches DMARC data from external tools like MxToolbox, displays it in a user-friendly interface with modern tables, and provides options to export the data as a CSV file. The app is designed to handle API requests, display responses, and offer smooth navigation across different components.

## Features
- Fetch DMARC data from MxToolbox via the `/checkdmarc` API.
- Display fetched data in a modern table layout.
- Export the DMARC data to a CSV file for easy access.
- Handle errors and loading states with alerts and spinners.
- Dynamic routing to view specific domain data.

## Prerequisites
To run this project, you will need:

- Node.js and npm installed on your system.
- Angular CLI installed globally:  
  ```bash
  npm install -g @angular/cli

## Setup Instructions
### 1. Clone the Repository

    ``` bash
        git clone https://github.com/yourusername/dmarc-data-viewer.git
        cd dmarc-data-viewer
    ```

### 2. Install Dependencies: Run the following command in the project directory to install all necessary npm packages:

    ``` bash
        npm install
    ```

### 3. Running the Application: You can run the application locally using the following command:

    ``` bash
        ng serve
    ```
    The app will be available at http://localhost:4200/ .

### 4. API Setup: 
The application interacts with the /checkdmarc API at http://localhost:9060/checkdmarc. Make sure that this API is running and accessible.


### Future Enhancements
    * Add more detailed DMARC analysis tools.
    * Improve UI with custom themes and dynamic chart visualizations for DMARC data.
    * Integrate additional APIs for DNS checks.

### License
    This project is licensed under the MIT License.
    ``` bash
        This `README.md` covers key parts of the project, including setup, components, services, routing, and CSS. You can further customize it with additional sections like contributing, issues, etc., depending on the needs of your project.
    ```
