import Box from '@mui/material/Box';
import { styled } from '@mui/system';

// Styled Component: box container for a section
const Section = styled(Box)(({
    background,
    disableTopPadding,
    disableBottomPadding,
    disableHorizontalPadding,
    theme 
}) => ({
    backgroundColor: background === 'primary' ? theme.palette.background.primary
        : background === 'secondary' ? theme.palette.background.secondary
        : background === 'tertiary' ? theme.palette.background.tertiary
        : theme.palette.background.default,
    paddingLeft: theme.sectionSpacing.horizontal,
    paddingRight: theme.sectionSpacing.horizontal,
    paddingTop: disableTopPadding
        ? theme.sectionSpacing.default
        : theme.sectionSpacing.vertical,
    paddingBottom: disableBottomPadding
        ? theme.sectionSpacing.default
        : theme.sectionSpacing.vertical,
    paddingLeft: disableHorizontalPadding
        ? theme.sectionSpacing.default
        : theme.sectionSpacing.horizontal,
    paddingRight: disableHorizontalPadding
        ? theme.sectionSpacing.default
        : theme.sectionSpacing.horizontal
}));

export default Section;
