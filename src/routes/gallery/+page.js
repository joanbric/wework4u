/** @type {import('./$types').PageLoad} */
export async function load() {
	const gallery = import.meta.glob('../../lib/company-projects/gallery/*.png');
	const iterableGallery = Object.entries(gallery);

	const allPictures = await Promise.all(
		iterableGallery.map(async ([path]) => {
			const namePicture = path.split('/').pop().split('.')[0]
            const picture = await import(`../../lib/company-projects/gallery/${namePicture}.png`)
            
            return picture
		})
	);

	return {allPictures};
}


// export async function load() {
// 	const gallery = import.meta.glob('../../lib/company-projects/**/*.jpg');
// 	const iterableGallery = Object.entries(gallery);

// 	const allPictures = await Promise.all(
// 		iterableGallery.map(async ([path]) => {
			
//             const picturePath = path.split('/').slice(-2, -1);
//             const namePicture = path.split('/').pop().split('.')[0]
//             const picture = await import(`../../lib/company-projects/${picturePath}/${namePicture}.jpg`)
            
//             return picture
// 		})
// 	);

// 	return {allPictures};
// }
