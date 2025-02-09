import RESIDENCES_CONTENT from "@/constants/residences";
import styles from "./styles.module.css";
import ProjectCard from "@/core/components/ProjectCard";
import ImageHeader from "@/core/components/ImageHeader";
import ImageFooter from "@/core/components/ImageFooter";

const Page = () => {
	return (
		<main>
			<ImageHeader
				image_url="/assets/story.jpg"
				heading="Projects"
			></ImageHeader>
			<div className={styles.card_container}>
				{RESIDENCES_CONTENT.length == "0" ? (
					<div>No Projects Found</div>
				) : (
					RESIDENCES_CONTENT.map((project) => {
						return (
							<ProjectCard project={project} key={project?.id} />
						);
					})
				)}
			</div>
			<ImageFooter image_url="/assets/story.jpg" />
		</main>
	);
};

export default Page;
