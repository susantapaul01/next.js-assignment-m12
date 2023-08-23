import getSingleNewestPost from "@/app/lib/getSingleNewestPost";
import Image from "next/image";

export default async function SingleBlog({params}) {
    let id = params.id;
    // console.log(id);
    const singlePost = await getSingleNewestPost(id);
    // console.log(id);
    return (
        <section className="bg-orange-100 my-8 p-5">
            <div className='bg-orange-100 pl-5'>
                <h1 className='py-3 text-start'>Single Blog Item</h1>
            </div>
            <div>
                <p className="bg-orange-400 my-4 p-3">{singlePost.postDetails.title}</p>
                <Image
                    src={singlePost.postDetails.img}
                    width={500}
                    height={350}
                />
                <p className="bg-orange-400 my-4 p-3">{singlePost.postDetails.content}</p>
            </div>
        </section>
    )
}