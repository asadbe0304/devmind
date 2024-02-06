import { Box } from '@mui/system';
import { GetServerSideProps } from 'next';
import { Content } from 'src/components';
import { BlogType } from 'src/interfaces/blog.interfaces';
import Layout from './../../Layout/index';
import SEO from '../../Layout/seo/';
import { BlogService } from './../../services/blog.service';

const BlogPage = ({ blogs }: BLogPageProps) => {
	return (
		<SEO metaTitle='All blogs'>
			<Layout>
				<Box
					sx={{
						display: 'flex',
						gap: '20px',
						flexDirection: { xs: 'column', md: 'row' },
						padding: '20px',
						justifyContent: 'center',
					}}
				>
					<Content blogs={blogs} />
				</Box>
			</Layout>
		</SEO>
	);
};

export default BlogPage;

export const getServerSideProps: GetServerSideProps<BLogPageProps> = async () => {
	const blogs = await BlogService.getAllBlogs();

	return {
		props: { blogs },
	};
};

interface BLogPageProps {
	blogs: BlogType[];
}