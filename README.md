[![Node.js CI](https://github.com/surveyjs/surveyjs-react-client/actions/workflows/build-node.js.yml/badge.svg)](https://github.com/surveyjs/surveyjs-react-client/actions/workflows/build-node.js.yml)

# SurveyJS React Application

This project is a client-side React application that uses [SurveyJS](https://surveyjs.io/) components. The application displays a list of surveys with the following buttons that perform actions on the surveys:

- **Run** - Uses the [SurveyJS Form Library](https://surveyjs.io/form-library/documentation/overview) component to run the survey.
- **Edit** - Uses the [Survey Creator](https://surveyjs.io/survey-creator/documentation/overview) component to configure the survey.
- **Results** - Uses the [SurveyJS Dashboard](https://surveyjs.io/dashboard/documentation/overview) component to display survey results as a table.
- **Remove** - Deletes the survey. 

![My Surveys App](https://user-images.githubusercontent.com/18551316/183420903-7fbcc043-5833-46fe-9910-5aa451045119.png)

You can integrate this project with a backend of your choice to create a full-cycle survey management service as shown in the following repos:

- [surveyjs-aspnet-mvc](https://github.com/surveyjs/surveyjs-aspnet-mvc)
- [surveyjs-nodejs](https://github.com/surveyjs/surveyjs-nodejs)
- [surveyjs-php](https://github.com/surveyjs/surveyjs-php)

## Run the Application

```bash
git clone https://github.com/surveyjs/surveyjs-react-client.git
cd surveyjs-react-client
npm i
npm start
```
