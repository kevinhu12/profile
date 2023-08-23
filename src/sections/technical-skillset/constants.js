import blazorLogo from '../../images/blazor-logo.png';
import cSharpLogo from '../../images/c-sharp-logo.png';
import dotnetCoreLogo from '../../images/dotnet-core-logo.png';
import entityFrameworkLogo from '../../images/entity-framework-logo.png';
import jsTsLogo from '../../images/js-ts-logo.png';
import materialUiLogo from '../../images/material-ui-logo.png';
import nodeLogo from '../../images/node-logo.png';
import reactLogo from '../../images/react-logo.png';
import reduxLogo from '../../images/redux-logo.png';
import seleniumLogo from '../../images/selenium-logo.png';
import telerikLogo from '../../images/telerik-logo.png';

export const languages = [
    {
        name: 'C#',
        description: 'My language of choice! Working with this language during my time at SPS Commerce and SEH Computer Systems has shown me the power of C#, coupled with its refined syntax.',
        icon: {
            name: 'C#',
            src: cSharpLogo,
            height: 45,
            width: 40
        },
        frameworks: [
            {
                name: 'ASP.NET Core',
                description: 'desc for asp.net core',
                src: dotnetCoreLogo,
                height: 45,
                width: 40
            },
            {
                name: 'Entity Framework',
                description: 'desc for entity framework',
                src: entityFrameworkLogo,
                height: 45,
                width: 40
            },
            {
                name: 'Blazor',
                description: 'desc for blazor',
                src: blazorLogo,
                height: 45,
                width: 40
            },
            {
                name: 'Telerik',
                description: 'desc for telerik',
                src: telerikLogo,
                height: 45,
                width: 40
            },
        ]
    },
    {
        name: 'JavaScript & TypeScript',
        description: 'Two languages that I find myself using whenever I am building a small project or application. After programming with a combination of both at Spotwork, I find its ease of use appealing.',
        icon: {
            name: 'JavaScript & TypeScript',
            src: jsTsLogo,
            height: 45,
            width: 40
        },
        frameworks: [
            {
                name: 'React.js',
                description: 'desc for react',
                src: reactLogo,
                height: 45,
                width: 40
            },
            {
                name: 'Node.js',
                description: 'desc for node',
                src: nodeLogo,
                height: 45,
                width: 40
            },
            {
                name: 'Redux',
                description: 'desc for redux',
                src: reduxLogo,
                height: 45,
                width: 40
            },
            {
                name: 'Material UI',
                description: 'desc for mui',
                src: materialUiLogo,
                height: 45,
                width: 40
            },
            {
                name: 'Selenium',
                description: 'desc for selenium',
                src: seleniumLogo,
                height: 45,
                width: 40
            }
        ]
    }
];

export const additionalLanguages = [
    'C++',
    'C',
    'Python',
    'Java',
    'Web Languages (HTML, CSS) with Bootstrap'
];

export const databases = {
    name: 'Databases',
    examples: [
        {
            title: 'Relational Databases',
            fields: [
                'MySQL',
                'PostgreSQL',
                'Microsoft SQL Server'
            ]
        }
        // 'NoSQL Databases: Firebase, MongoDB, CosmosDB'
    ]
};

export const tools = {
    name: 'Version Control Tools',
    examples: [
        'Tickets and Pipelines: Jira, Azure and Azure DevOps',
        'Scripting: Linux, Bash, PowerShell',
        'Version Control: Git, Github',
        'API Testing: Postman'
    ]
};

export const descriptions = {
    languages: 'Throughout my university courses and previous work experiences, I have been introduced to—and familiarized myself with—a wide variety of programming languages. Here are some of my favourite ones, as well as the frameworks and libraries that I have used alongside them.',
    additionalLanguages: 'Some other languages and frameworks that I have experience in are:',
    tools: 'Some databases and general coding tools that I have used.'
};
