import cSharpLogo from '../../images/c-sharp-logo.png';
import sqlLogo from '../../images/sql-logo.png';

export const featuredLanguages = [
    {
        name: 'C#',
        level: 90,
        description: 'My language of choice! Working with this language has shown me the great utility of C#, coupled with its refined syntax and ease of use.',
        icon: { name: 'C#', src: cSharpLogo, height: 45, width: 40 },
        subsections: [
            'During my time at SEH Computer Systems, I developed web applications using a MVC pattern supported by ASP.NET Core. The Blazor framework was used to build the majority of UIs, along with components provided by Telerik.',
            'I had the experience of using C# as a backend when working for SPS Commerce and SEH Computer Systems. I used Entity Framework to query data via LINQ queries, communicated with AWS products through the AWS CDK, and developed APIs to process data as desired.'
        ]
    },
    {
        name: 'SQL',
        level: 80,
        description: 'SQL has been a staple in many of the technology stacks I\'ve worked with. Architecting efficient query statements and modifying tables to store new data are common tasks I performed when interacting with relational databases, whether it be PostgreSQL, MySQL, or even Snowflake.',
        icon : { name: 'SQL', src: sqlLogo, height: 45, width: 80 },
        subsections: []
    }
];

export const otherLanguages = [
    {
        name: 'JavaScript & TypeScript',
        level: 90,
        description: 'My most proficient languages when it comes to anything user-facing. I\'ve used React during multiple software developer positions and projects to create web interfaces. In fact, this website was created from scratch using React! I\'ve also done some cloud functions in TypeScript, and worked with various other libraries like Redux and Selenium.'
    },
    {
        name: 'C++ & C',
        level: 70,
        description: 'I\'ve used these languages in almost all of my university programming courses, including designing algorithms for CS 341, coding projects in CS 246, and developing an operating system in CS 350.'
    },
    { 
        name: 'Python',
        level: 50,
        description: 'My go-to for a lot of side projects and competitions. Most recently used to develop some hackathon submissions (Hack the North, ClimaTech).'
    },
    { 
        name: 'Java', 
        level: 40,
        description: 'The first programming language I learned! It\'s been a while, but I\'m always open to revisiting it.'
    }
];
