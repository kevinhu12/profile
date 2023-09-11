import iotumLogo from '../../images/iotum-logo.png';
import sehLogo from '../../images/seh-logo.png';
import spotworkLogo from '../../images/spotwork-logo.png';
import spsCommerceLogo from '../../images/sps-commerce-logo.png';

export const jobs = [
    {
        company: 'SPS Commerce',
        logo: { alt: 'SPS Commerce', src: spsCommerceLogo, width: '2rem', height: '2rem' },
        dates: 'May 2023 - Aug 2023',
        title: 'Software Engineer',
        description: 'I was most recently a software engineer on the Data Pipeline team for SPS Commerce, where I implemented new features while maintaining AWS step functions and S3 buckets.'
    },
    {
        company: 'SEH Computer Systems',
        logo: { alt: 'SEH Computer Systems', src: sehLogo, width: '2rem', height: '2rem' },
        dates: 'Sep 2022 - Dec 2022',
        title: 'Software Developer',
        description: 'I developed hierarchical class structures to store financial data, built RESTful APIs to support the abstraction of database actions, and performed code releases.'
    },
    {
        company: 'Spotwork',
        logo: { alt: 'Spotwork', src: spotworkLogo, width: '2rem', height: '2rem' },
        dates: 'Jan 2022 - Apr 2022',
        title: 'Full-stack Developer',
        description: 'I began my first formal software development work here, adding features to Spotwork\'s web platform and developing cloud functions to manage back-end actions.'
    },
    {
        company: 'iotum Corporation',
        logo: { alt: 'iotum Corporation', src: iotumLogo, width: '2rem', height: '2rem' },
        dates: 'May 2021 - Aug 2021',
        title: 'QA & Technical Analyst',
        description: 'I started my career writing automated tests and performing QA testing for iotum.'
    },
]

export const sizes = {
    avatar: '14rem'
};
