import Link from 'next/link';
import {Button} from '@mantine/core';

const About = () => {
    return (
        <Button component={Link} href="/hello">
            Next link button
        </Button>
    );
}
export default About