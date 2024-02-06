import { Box } from '@mui/material';
import { GetServerSideProps } from 'next';
import { Content, Sidebar } from 'src/components';
import { BlogType } from 'src/interfaces/blog.interfaces';
import { BlogService } from 'src/services/blog.service';
import Layout from "./../../Layout/index"


const CategoryDetailedPage = ({ blogs, categories }: DetailedCategoriesPageProps) => {
  console.log(blogs);
  
	return (
		<Layout>
			<Box sx={{ display: 'flex', gap: '20px', flexDirection: { xs: 'column', md: 'row' }, padding: '20px' }}>
				<Content blogs={blogs} />
			</Box>
		</Layout>
	);
};

export default CategoryDetailedPage;

export const getServerSideProps: GetServerSideProps<DetailedCategoriesPageProps> = async ({ query }) => {
	const blogs = await BlogService.getDetaieldCateogriesBlog(query.slug as string);
	const categories = await BlogService.getCategories();

	return {
		props: {
			blogs,
			categories,
		},
	};
};

interface DetailedCategoriesPageProps {
	blogs: BlogType[];
	categories: BlogType[];
}